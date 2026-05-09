---
description: "Use when writing or editing JavaScript or JSX files. Enforces coding standards for this Next.js project including naming, structure, imports, and component patterns."
name: "Coding Standards"
applyTo: "**/*.{js,jsx,mjs}"
---
# Coding Standards

## Naming

- React components: PascalCase (`MyComponent`).
- Variables, functions, and props: camelCase.
- Files matching a component: PascalCase (`MyComponent.jsx`).
- Non-component files: camelCase or kebab-case.
- Constants: UPPER_SNAKE_CASE only when truly constant and used across multiple places.

## Component Rules

- One component per file.
- Keep component files focused — extract sub-components when a file grows complex.
- Prefer function declarations for top-level components.
- Avoid deeply nested JSX — extract named components or variables.

## Imports

- Remove unused imports before finishing.
- Group imports: React/Next first, then third-party, then local components, then data/variables.
- Use path aliases from `jsconfig.json` where configured.

## Logic and State

- Keep business logic out of JSX return blocks — derive values before the return.
- Avoid magic numbers and hardcoded strings — reference data files or constants.
- Do not duplicate data already present in `data/` or `variables/`.

## Style

- Use Tailwind utility classes; avoid inline `style` attributes unless unavoidable.
- Do not mix Tailwind and raw CSS for the same element.
- Keep class strings readable — break long class lists across lines if needed.

## General

- Do not leave `console.log` statements in committed code.
- Do not commit commented-out code blocks.
- Every new page in `app/` must have a `metadata` export or inherit from `layout.jsx`.
