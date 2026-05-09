# Deployment

## Build and Run

1. Install dependencies:

   npm install

2. Build the project:

   npm run build

3. Start production server locally:

   npm run start

## Pre-Deploy Checklist

- [ ] Build succeeds.
- [ ] No critical lint or runtime issues.
- [ ] Key routes verified.
- [ ] Sitemap reflects current route set.

## Rollback Notes

- Revert to previous stable commit and redeploy.
- Confirm route and asset recovery after rollback.

## Troubleshooting

- If build fails, check recent route/data changes first.
- If assets fail, verify public/ paths and case sensitivity.
- If route fails, verify app/ segment structure and page files.
