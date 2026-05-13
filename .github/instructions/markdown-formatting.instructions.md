---
description: "Use when creating or updating Markdown docs. Enforces markdownlint-safe formatting for headings, lists, spacing, links, and trailing spaces."
name: "Markdown Formatting Rules"
applyTo: "**/*.md"
---
# Markdown Formatting Rules

- Always keep one blank line around headings.
- Always keep one blank line around lists.
- Do not leave trailing spaces.
- Use Markdown links for URLs instead of bare URLs.
- Prefer concise lines and wrap long paragraphs where practical.
- After editing Markdown files, run `npx markdownlint-cli2 *.md` from the repo root and fix any reported issues.
