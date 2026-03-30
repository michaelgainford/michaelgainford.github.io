"use client";

import { useState } from "react";
import Image from "next/image";
import WorldCup2026TeamDataJSON from "@/data/data_for__worldcup2026.json";

const allTeams = [...WorldCup2026TeamDataJSON.WorldCup2026Teams].sort((a, b) => {
	if (a.group > b.group) return 1;
	if (a.group < b.group) return -1;
	return a.groupSeeding - b.groupSeeding;
});

const groups = [...new Set(allTeams.map((t) => t.group))].sort();

const isTbd = (name) => name.startsWith("TBD Qualifier");

const pts = (t) => t.won * 3 + t.drew;
const gd = (t) => t.goalsFor - t.goalsAgainst;

function sortedGroup(teams) {
	return [...teams].sort((a, b) => {
		const pdiff = pts(b) - pts(a);
		if (pdiff !== 0) return pdiff;
		const gddiff = gd(b) - gd(a);
		if (gddiff !== 0) return gddiff;
		return b.goalsFor - a.goalsFor;
	});
}

const COLS = ["P", "W", "D", "L", "F", "A", "Pts"];

export default function Component_WorldCup2026TournamentInfo() {
	const [groupsSectionCollapsed, setGroupsSectionCollapsed] = useState(false);

	return (
		<section className="mb-10 w-full">
			<button
				onClick={() => setGroupsSectionCollapsed((prev) => !prev)}
				className="mb-4 flex w-full items-center justify-between rounded-xl border border-sky-200/25 bg-slate-100/10 px-4 py-3 text-left text-slate-100 transition-colors hover:bg-slate-100/15"
				aria-expanded={!groupsSectionCollapsed}
			>
				<h2 className="text-sm font-bold uppercase tracking-[0.18em]">Groups</h2>
				<span className={`text-slate-200 transition-transform duration-200 ${groupsSectionCollapsed ? "" : "rotate-180"}`}>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
				</span>
			</button>

			{!groupsSectionCollapsed && (
				<div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
					{groups.map((group) => {
						const groupTeams = sortedGroup(allTeams.filter((t) => t.group === group));
						return (
							<div key={group} className="flex w-full self-start flex-col overflow-hidden rounded-lg border border-sky-900/20 bg-slate-50/95 text-blue-950 shadow-lg shadow-blue-950/10">
								<h3 className="px-4 py-3 text-sm font-bold tracking-wider uppercase">Group {group}</h3>

								<div className="px-3 pb-4 pt-1">
										{/* Column headers */}
										<div className="grid items-center gap-x-1 pb-1 mb-1 border-b border-slate-200" style={{ gridTemplateColumns: "1fr repeat(7, 1.5rem)" }}>
											<span className="text-xxs font-bold uppercase tracking-wider text-slate-400">Team</span>
											{COLS.map((c) => (
												<span key={c} className={`text-center text-xxs font-bold uppercase tracking-wider ${c === "Pts" ? "text-sky-600" : "text-slate-400"}`}>{c}</span>
											))}
										</div>
										{/* Team rows */}
										{groupTeams.map((team, idx) => (
											<div
												key={team.name}
												className={`grid items-center gap-x-1 py-1 rounded-sm ${idx < 2 ? "bg-sky-50/60" : ""}`}
												style={{ gridTemplateColumns: "1fr repeat(7, 1.5rem)" }}
											>
												<span className="flex items-center gap-1.5 min-w-0">
													<Image src={team.flag} alt={team.name} width={18} height={18} className="shrink-0" />
													<span className={`truncate text-xxs ${isTbd(team.name) ? "italic text-slate-500" : "font-semibold text-blue-950"}`}>
														{isTbd(team.name) ? "TBD" : team.name}
													</span>
												</span>
												<span className="text-center text-xxs text-slate-600">{team.played}</span>
												<span className="text-center text-xxs text-slate-600">{team.won}</span>
												<span className="text-center text-xxs text-slate-600">{team.drew}</span>
												<span className="text-center text-xxs text-slate-600">{team.lost}</span>
												<span className="text-center text-xxs text-slate-600">{team.goalsFor}</span>
												<span className="text-center text-xxs text-slate-600">{team.goalsAgainst}</span>
												<span className="text-center text-xxs font-bold text-sky-700">{pts(team)}</span>
											</div>
										))}
										<p className="mt-2 text-xxs text-slate-400 italic">Top 2 qualify ↑</p>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
}
