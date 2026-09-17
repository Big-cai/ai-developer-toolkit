# Interview Guide

## Q: What changed from your v0.1 to v0.2?

> v0.1 mainly proved that I could define Prompt, Skill, Agent and Workflow artifacts. In v0.2 I moved from documentation to execution and validation. I introduced a three-layer validation architecture: deterministic checks, AI code review, and human gates. For AI review I deliberately integrated Alibaba OpenCodeReview as a mature external provider instead of rebuilding a review engine. My Toolkit owns the orchestration, provider abstraction, result normalization and feedback loop.

## Q: Why didn't you write your own code review engine?

> Because that would be duplicating mature infrastructure. I wanted to demonstrate engineering judgment: know what to build and what to integrate. OpenCodeReview is the specialized review engine; my system treats it as a replaceable CodeReviewProvider. If the provider changes later, the workflow contract does not need to change.

## Q: What exactly did you build?

> I built the layer around the review engine. The workflow prepares requirement and repository context, runs deterministic checks, invokes the provider, converts its output into my own ReviewReport schema, validates findings, routes fixes, and re-runs the checks and review. Provider failure is explicitly represented as unavailable or failed instead of being treated as a pass.

## Q: How do you prove the Toolkit works?

> I created a small real project under `validation-projects/task-board` and ran the Toolkit workflow against it. The project has deterministic typecheck, tests and build checks, plus an OpenCodeReview integration path. The verification record documents the requirement, implementation, validation commands, provider state and remaining limitations.

## Q: What is the difference between a Skill and a Prompt?

> A Prompt is an instruction. A Skill is a reusable capability contract with trigger, input, context policy, rules, workflow, output, validation and failure handling.

## Q: When do you create an Agent?

> I create an agent boundary when the task has a distinct objective, context or validation requirement. I don't split every function into an agent because unnecessary orchestration adds latency and failure modes.

## Q: How do you handle AI failure?

> I classify the failure before changing the prompt. If context was missing I improve context; if rules were violated I strengthen constraints; if the task was ambiguous I change the command; if output was malformed I strengthen the result schema; if the output looked correct but failed in reality I strengthen validation.

## 60-second pitch

> AI Developer Toolkit is my engineering system for reliable AI-assisted development. I model the process as Context, Constraint, Command, Result, Validation and Feedback. I package repeatable capabilities as Skills, use bounded Agents, orchestrate them through workflows, and put deterministic, AI and human validation boundaries around the result. In v0.2 I proved the approach on a real project and integrated Alibaba OpenCodeReview as a replaceable validation provider instead of reinventing a mature review engine. The result is not just a collection of prompts; it is an executable workflow with traceable validation and a feedback loop.
