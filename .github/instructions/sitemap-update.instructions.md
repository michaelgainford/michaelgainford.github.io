---
description: "Use when creating or modifying any page file under app/. Reminds the agent to update the lastmod date in public/sitemap.xml and the lastUpdated date in data/data_for__sitemap.json for the changed route."
name: "Sitemap Date Update"
applyTo: "app/**"
---
# Sitemap Date Update

Whenever a page file under `app/` is created or modified, update the sitemap dates for that route.

## Sitemap Files

There are two files to keep in sync:

1. `public/sitemap.xml` — update the `<lastmod>` value for the matching `<loc>`.
   - Format: `YYYY-MM-DDTHH:MM:SS+00:00`
   - Example: `2026-05-09T00:00:00+00:00`
2. `data/data_for__sitemap.json` — update the `lastUpdated` value for the matching entry.
   - Format: `YYYY-MM-DD`
   - Example: `2026-05-09`

## How to Match Routes

Map the changed file path to the live URL:

| File path | Route URL |
| --- | --- |
| `app/page.jsx` | `https://michaelgainford.dev/` |
| `app/projects/page.jsx` | `https://michaelgainford.dev/projects` |
| `app/projects/space/page.jsx` | `https://michaelgainford.dev/projects/space` |

Use the same pattern for any nested route.

## Steps

1. Identify the route(s) affected by the file change.
2. Update `<lastmod>` in `public/sitemap.xml` for each affected `<loc>`.
3. Update `lastUpdated` in `data/data_for__sitemap.json` for each matching entry.
4. Use today's date for both values.

## Notes

- If a new page is added and has no sitemap entry yet, add one to both files.
- If the changed file affects a parent route (e.g. shared layout or data), update the parent route entry too.
- Do not update entries for routes you did not change.
