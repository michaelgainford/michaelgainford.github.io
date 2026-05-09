# Content Guide

## Purpose

Define how content is added and maintained for pages and project sections.

## Data Files

- Content data lives in data/.
- Prefer naming format: data_for__topic.json.
- Keep naming lowercase and hyphenated when needed.

## Content Standards

- Use clear, concise text.
- Keep fields consistent within each content domain.
- Avoid duplicate entries and stale links.
- Keep image references valid and optimized.

## Update Workflow

1. Edit or add JSON in data/.
2. Verify pages that consume the data render correctly.
3. Check layout on desktop and mobile.
4. Update CHANGELOG.md for visible content updates.

## Validation Checklist

- [ ] JSON syntax is valid.
- [ ] Required fields are present.
- [ ] URLs and asset paths resolve.
- [ ] No placeholder text remains.
