#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const project = path.resolve(process.argv[2] || ".");
const pkgPath = path.join(project, "package.json");

function run(command, args) {
  console.log(`\n$ ${command} ${args.join(" ")}`);
  const result = spawnSync(command, args, {
    cwd: project,
    stdio: "inherit",
    shell: process.platform === "win32"
  });
  return result.status ?? 1;
}

if (!fs.existsSync(pkgPath)) {
  console.error(`No package.json found in ${project}`);
  process.exit(2);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const checks = [
  ["typecheck", "npm", ["run", "typecheck"]],
  ["test", "npm", ["test"]],
  ["build", "npm", ["run", "build"]]
];

const results = [];
for (const [name, command, args] of checks) {
  if (!pkg.scripts?.[name]) {
    console.log(`Skipping missing script: ${name}`);
    continue;
  }
  const code = run(command, args);
  results.push({ check: name, passed: code === 0, exit_code: code });
}

const ocr = spawnSync(process.platform === "win32" ? "where" : "which", ["ocr"], {
  encoding: "utf8",
  shell: process.platform === "win32"
});

if ((ocr.status ?? 1) === 0) {
  console.log("\nOpenCodeReview detected. Run the provider adapter separately to avoid hiding provider-specific failures.");
  results.push({ check: "opencode-review", passed: null, status: "available" });
} else {
  console.log("\nOpenCodeReview not installed; provider status: unavailable.");
  results.push({ check: "opencode-review", passed: null, status: "unavailable" });
}

console.log("\nValidation summary:");
console.log(JSON.stringify(results, null, 2));

const failed = results.some(r => r.passed === false);
process.exit(failed ? 1 : 0);
