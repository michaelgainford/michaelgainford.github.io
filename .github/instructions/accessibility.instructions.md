---
description: "Use when writing or editing JSX or HTML. Enforces accessibility standards including semantic HTML, ARIA, heading hierarchy, keyboard navigation, and alt text."
name: "Accessibility Standards"
applyTo: "**/*.{jsx,js}"
---
# Accessibility Standards

## Semantic HTML

- Use semantic elements: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`, `<aside>`.
- Do not use `<div>` or `<span>` for elements that have a semantic equivalent.
- Buttons that trigger actions: use `<button>`. Links that navigate: use `<a>`.

## Headings

- Every page must have exactly one `<h1>`.
- Headings must follow a logical descending order — do not skip levels (e.g. h1 → h3).
- Do not use headings purely for visual styling — use typography utilities instead.

## Images

- Every `<img>` and Next.js `<Image>` must have an `alt` attribute.
- Decorative images: `alt=""`.
- Informative images: alt text must describe the content meaningfully.

## Interactive Elements

- All interactive elements must be keyboard accessible (focusable and operable with Enter/Space).
- Visible focus indicators must not be suppressed without a custom replacement.
- Do not use `onClick` on non-interactive elements without also adding `role` and `onKeyDown`.

## ARIA

- Prefer native semantic HTML over ARIA — only add ARIA when HTML alone is insufficient.
- Do not add `aria-label` to elements that already have visible, descriptive text.
- Every `<form>` input must have an associated `<label>` (via `for`/`id` or wrapping).

## Colour and Contrast

- Do not rely on colour alone to convey meaning.
- Check that text contrast meets WCAG AA minimums.

## Motion

- Wrap animations in `@media (prefers-reduced-motion: reduce)` or use Tailwind's `motion-safe:` / `motion-reduce:` variants.
