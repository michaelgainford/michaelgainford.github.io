import fs from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "variables", "DevResources.jsx");
const source = fs.readFileSync(filePath, "utf8");

const nameMatches = [...source.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
const slugMatches = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const urlMatches = [...source.matchAll(/url:\s*"([^"]+)"/g)].map((m) => m[1]);

const errors = [];

if (nameMatches.length !== slugMatches.length || slugMatches.length !== urlMatches.length) {
  errors.push(
    `Unable to validate complete records. Parsed counts => names: ${nameMatches.length}, slugs: ${slugMatches.length}, urls: ${urlMatches.length}.`
  );
}

const findDuplicates = (values) =>
  Object.entries(values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {})).filter(([, count]) => count > 1);

const duplicateSlugs = findDuplicates(slugMatches);
const duplicateUrls = findDuplicates(urlMatches);

if (duplicateSlugs.length > 0) {
  errors.push(`Duplicate slugs found: ${duplicateSlugs.map(([slug, count]) => `${slug} (${count})`).join(", ")}`);
}

if (duplicateUrls.length > 0) {
  errors.push(`Duplicate urls found: ${duplicateUrls.map(([url, count]) => `${url} (${count})`).join(", ")}`);
}

const invalidSlugs = slugMatches.filter((slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug));
if (invalidSlugs.length > 0) {
  errors.push(`Invalid slug format: ${invalidSlugs.join(", ")}`);
}

if (errors.length > 0) {
  console.error("devResources validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`devResources validation passed (${slugMatches.length} resources checked).`);
