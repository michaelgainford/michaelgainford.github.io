# Architecture

## Overview

This is a Next.js site organized by route-first app structure and shared components.

## Directory Map

- app/: Route segments and page-level files.
- components/: Reusable UI and page-specific component groups.
- data/: Structured JSON content sources.
- public/: Static assets served directly.
- variables/: Shared constants and data mapping modules.

## Routing Conventions

- Route files live under app/ using Next.js App Router conventions.
- page.jsx files represent routes.
- layout.jsx and not-found.jsx are app-level wrappers and fallback UI.

## Data Flow

1. JSON content in data/ is loaded by pages or components.
2. Shared constants in variables/ centralize labels, paths, or project metadata.
3. Components in components/ render UI from structured content.

## Asset Strategy

- Keep images and icons in public/ organized by feature area.
- Use descriptive folder names that match route or domain areas.

## Notes

Record major architecture decisions in DECISIONS.md.
