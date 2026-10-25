// Updates sitemap dates for routes whose files under app/ have changed (staged, unstaged or untracked).
// Usage: npm run sitemap:update [-- --dry-run]
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://michaelgainford.dev";
const XML_PATH = "public/sitemap.xml";
const JSON_PATH = "data/data_for__sitemap.json";
const dryRun = process.argv.includes("--dry-run");

const now = new Date();
const date = now.toISOString().slice(0, 10);
const lastmod = `${date}T00:00:00+00:00`;

const changed = execSync("git status --porcelain --untracked-files=all", { encoding: "utf8" })
	.split("\n")
	.filter(Boolean)
	.map((line) => line.slice(3).replace(/^.* -> /, "").replace(/^"|"$/g, ""))
	.filter((file) => file.startsWith("app/") && /\.(jsx?|tsx?|mdx?)$/.test(file));

// Route groups "(x)" are dropped. Dynamic segments "[x]" resolve to their parent route,
// and every sitemap entry beneath that parent is refreshed too.
const toRoute = (file) => {
	const segments = file.replace(/^app\//, "").split("/").slice(0, -1)
		.filter((segment) => !/^\(.*\)$/.test(segment));
	const dynamicIndex = segments.findIndex((segment) => segment.startsWith("["));
	const kept = dynamicIndex === -1 ? segments : segments.slice(0, dynamicIndex);
	return "/" + kept.join("/");
};

let xml = readFileSync(XML_PATH, "utf8");
let json = readFileSync(JSON_PATH, "utf8");
const xml_and_json_paths = () => new Set([
	...[...xml.matchAll(/<loc>[^<]*?michaelgainford\.dev([^<]*)<\/loc>/g)].map((m) => m[1]),
	...[...json.matchAll(/"href":\s*"([^"]*)"/g)].map((m) => m[1]),
]);
const routes = [...new Set(changed.map(toRoute))];
const dynamicParents = [...new Set(
	changed.filter((file) => file.includes("/[")).map(toRoute)
)];
for (const parent of dynamicParents) {
	const prefix = `${parent}/`;
	const childPaths = [...xml_and_json_paths()].filter((path) => path.startsWith(prefix));
	for (const path of childPaths) if (!routes.includes(path)) routes.push(path);
}
const updated = [];
const missing = [];

for (const route of routes) {
	const loc = route === "/" ? `${SITE}/` : `${SITE}${route}`;
	const xmlPattern = new RegExp(`(<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>\\s*<lastmod>)[^<]*(</lastmod>)`);
	const jsonPattern = new RegExp(`("href":\\s*"${route.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")}",[\\s\\S]*?"lastUpdated":\\s*")[^"]*(")`);
	const inXml = xmlPattern.test(xml);
	const inJson = jsonPattern.test(json);
	if (!inXml && !inJson) {
		missing.push(route);
		continue;
	}
	if (inXml) xml = xml.replace(xmlPattern, `$1${lastmod}$2`);
	if (inJson) json = json.replace(jsonPattern, `$1${date}$2`);
	updated.push(route);
}

if (!dryRun) {
	writeFileSync(XML_PATH, xml);
	writeFileSync(JSON_PATH, json);
}

console.log(`${dryRun ? "[dry run] " : ""}Updated: ${updated.join(", ") || "none"}`);
if (missing.length > 0) console.log(`No sitemap entry (add manually if it's a public page): ${missing.join(", ")}`);
