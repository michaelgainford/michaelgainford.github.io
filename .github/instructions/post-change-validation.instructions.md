---
description: "Always run post-change validation after code or documentation edits. Checks terminal commands and IDE Problems, then fixes any introduced errors/warnings before finishing."
name: "Post-Change Validation"
applyTo: "**"
---
# Post-Change Validation

Run this checklist after making changes.

## Required checks

1. Run IDE diagnostics for changed files (Problems panel equivalent) and address errors introduced by the change.
2. Run relevant terminal checks based on what changed:
   - General code changes: `npm run lint` and `npm run build`
   - Markdown changes: `npm run lint:md`
3. If checks fail, fix issues and re-run checks until passing, or report the blocker clearly.

## Completion rule

Do not finish a task while introduced errors remain in terminal output or IDE diagnostics.
