#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

function value(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
}

const repo = path.resolve(value("--repo") || ".");
const backgroundFile = value("--background-file");
const output = value("--output");

const cliArgs = [
  "review",
  "--repo", repo,
  "--format", "json",
  "--audience", "agent"
];

if (backgroundFile) {
  cliArgs.push("--background-file", path.resolve(backgroundFile));
}

const started = Date.now();
const result = spawnSync("ocr", cliArgs, {
  encoding: "utf8",
  cwd: repo,
  maxBuffer: 20 * 1024 * 1024
});

const raw = result.stdout || "";
let report;

if (result.error?.code === "ENOENT") {
  report = {
    status: "unavailable",
    provider: "opencode-review",
    findings: [],
    summary: "ocr executable is not installed.",
    verification: ["Install and configure OpenCodeReview before running AI review."],
    raw_output: null,
    exit_code: null,
    duration_ms: Date.now() - started
  };
} else if (result.status !== 0) {
  report = {
    status: "failed",
    provider: "opencode-review",
    findings: [],
    summary: "OpenCodeReview exited with a non-zero status.",
    verification: [result.stderr?.trim() || "No stderr output."],
    raw_output: raw || result.stderr || null,
    exit_code: result.status,
    duration_ms: Date.now() - started
  };
} else {
  try {
    const parsed = JSON.parse(raw);
    const comments = Array.isArray(parsed.comments) ? parsed.comments : [];
    const findings = comments.map((comment, index) => ({
      severity: normalizeSeverity(comment.severity),
      file: comment.path || comment.file || "unknown",
      line: Number.isInteger(comment.line) ? comment.line : null,
      category: normalizeCategory(comment.category),
      problem: comment.content || comment.problem || "Provider finding without problem text.",
      evidence: comment.evidence || comment.content || "Provider did not expose separate evidence.",
      suggestion: comment.suggestion || "Inspect the provider comment and determine the smallest safe remediation.",
      provider: "opencode-review",
      provider_id: comment.id || String(index + 1)
    }));

    report = {
      status: findings.length ? "findings" : "passed",
      provider: "opencode-review",
      findings,
      summary: parsed.summary
        ? JSON.stringify(parsed.summary)
        : `OpenCodeReview returned ${findings.length} finding(s).`,
      verification: [
        "Provider completed successfully.",
        "Raw provider JSON was parsed by the Toolkit adapter."
      ],
      raw_output: raw,
      exit_code: result.status,
      duration_ms: Date.now() - started
    };
  } catch {
    report = {
      status: "invalid_output",
      provider: "opencode-review",
      findings: [],
      summary: "OpenCodeReview returned output that could not be parsed as JSON.",
      verification: ["Preserve raw output and inspect the installed OCR version/output contract."],
      raw_output: raw || result.stderr || null,
      exit_code: result.status,
      duration_ms: Date.now() - started
    };
  }
}

const serialized = JSON.stringify(report, null, 2);
if (output) {
  fs.mkdirSync(path.dirname(path.resolve(output)), { recursive: true });
  fs.writeFileSync(path.resolve(output), serialized + "\n");
}
console.log(serialized);

function normalizeSeverity(value) {
  return ["critical", "high", "medium", "low", "info"].includes(value) ? value : "medium";
}

function normalizeCategory(value) {
  return ["correctness", "security", "performance", "maintainability", "testing", "architecture"].includes(value)
    ? value
    : "other";
}
