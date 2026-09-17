# Changelog

## 0.2.0 — 2026-09-18

### Added

- Three-layer validation architecture.
- CodeReviewProvider abstraction.
- Alibaba OpenCodeReview integration adapter.
- Review finding/report JSON schemas.
- Executable deterministic validation runner.
- Review → Fix → Re-review workflow documentation.
- Real Task Board validation project.
- End-to-end verification record.
- Chinese documentation for the new architecture and interview material.

### Design decision

OpenCodeReview is integrated as a mature external validation provider rather than reimplemented inside the Toolkit.
