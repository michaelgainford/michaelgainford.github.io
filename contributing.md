# Contributing

Thanks for contributing to this project.

## Local Setup

1. Install dependencies:

   npm install

2. Start the dev server:

   npm run dev

3. Open the app:

   [http://localhost:3000](http://localhost:3000)

## Branching

- Base branch: master
- Feature branch pattern: type/short-description
  - Example: feat/add-space-page
  - Example: fix/header-nav-overlap

## Commit Messages

Use short, descriptive messages:

- feat: add world cup data card
- fix: correct route link for tools
- docs: update content guide

## Pull Request Checklist

- [ ] Changes are scoped and focused.
- [ ] No unrelated files were modified.
- [ ] Routes work in local dev.
- [ ] Mobile and desktop layouts were checked.
- [ ] Accessibility basics were checked.
- [ ] Documentation was updated when needed.

## Adding a New Page or Project

1. Create or update route under app/.
2. Add required data under data/ if needed.
3. Add reusable UI in components/ if needed.
4. Add static assets under public/ if needed.
5. Update docs and README when structure changes.
