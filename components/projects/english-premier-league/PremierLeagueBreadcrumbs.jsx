import Link from "next/link";
import { premierLeagueHubUrl } from "@/variables/ProjectPremierLeague";


// trail: intermediate crumbs after the hub, e.g. [{ label, href }]; current: label of the current page
export default function PremierLeagueBreadcrumbs({ trail = [], current }) {
	const crumbs = [{ label: "Premier League", href: premierLeagueHubUrl }, ...trail];

	return (
		<nav aria-label="Breadcrumb" className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 lg:px-8">
			<ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-wider">
				{crumbs.map((crumb) => (
					<li key={crumb.href} className="flex items-center gap-2">
						<Link href={crumb.href} className="underline-offset-2 hover:underline focus-visible:underline">
							{crumb.label}
						</Link>
						<span aria-hidden="true">/</span>
					</li>
				))}
				<li aria-current="page" className="font-bold">{current}</li>
			</ol>
		</nav>
	);
}

