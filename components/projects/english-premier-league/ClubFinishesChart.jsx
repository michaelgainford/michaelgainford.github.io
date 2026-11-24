"use client";

import { useState } from "react";

const WIDTH = 900;
const HEIGHT = 340;
const MARGIN = { top: 20, right: 20, bottom: 60, left: 40 };
const PLOT_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;

function formatPosition(position) {
	const lastTwo = position % 100;
	const suffix = lastTwo >= 11 && lastTwo <= 13
		? "th"
		: ({ 1: "st", 2: "nd", 3: "rd" }[position % 10] || "th");
	return `${position}${suffix}`;
}

function getPointDetails(finish) {
	const label = `${finish.year}: ${formatPosition(finish.position)}`;
	const { W: won, D: drawn, L: lost, F: goalsFor, A: goalsAgainst } = finish.stats;
	const isNumber = (value) => typeof value === "number" && Number.isFinite(value);
	const recordAvailable = [won, drawn, lost].every(isNumber);
	const goalsAvailable = [goalsFor, goalsAgainst].every(isNumber);
	const value = (number) => isNumber(number) ? number : "N/A";
	const stats = [
		`Played: ${recordAvailable ? won + drawn + lost : "N/A"}`,
		`Won: ${value(won)}`,
		`Drawn: ${value(drawn)}`,
		`Lost: ${value(lost)}`,
		`Goals for: ${value(goalsFor)}`,
		`Goals against: ${value(goalsAgainst)}`,
		`Goal difference: ${goalsAvailable ? goalsFor - goalsAgainst : "N/A"}`,
		`Points from results: ${recordAvailable ? won * 3 + drawn : "N/A"}`
	];
	return { label, stats };
}

export default function ClubFinishesChart({ seasons, clubName, premierLeagueYears }) {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [focusedIndex, setFocusedIndex] = useState(null);
	const finishes = premierLeagueYears.map((year, index) => {
		const stats = seasons?.[`season${index + 1}`];
		const position = stats?.Pos;
		return { year, stats, position: typeof position === "number" && position > 0 ? position : null };
	});
	const played = finishes.filter((finish) => finish.position !== null);
	if (played.length === 0) return null;

	const maxPosition = Math.max(20, ...played.map((finish) => finish.position));
	const xFor = (index) => MARGIN.left + (finishes.length > 1 ? (index / (finishes.length - 1)) * PLOT_WIDTH : PLOT_WIDTH / 2);
	const yFor = (position) => MARGIN.top + ((position - 1) / (maxPosition - 1)) * PLOT_HEIGHT;

	// Split into runs so seasons outside the league create a gap instead of a joined line
	const runs = [];
	finishes.forEach((finish, index) => {
		if (finish.position === null) {
			runs.push(null);
			return;
		}
		if (runs.length === 0 || runs[runs.length - 1] === null) runs.push([]);
		runs[runs.length - 1].push({ x: xFor(index), y: yFor(finish.position) });
	});
	const lineRuns = runs.filter((run) => run && run.length > 1);

	const yTicks = [1, 5, 10, 15, 20].filter((tick) => tick <= maxPosition);
	if (!yTicks.includes(maxPosition)) yTicks.push(maxPosition);

	const activeIndex = hoveredIndex ?? focusedIndex;
	const activeFinish = activeIndex === null ? null : finishes[activeIndex];
	const tooltip = activeFinish?.position != null ? {
		x: Math.max(0, Math.min(WIDTH - 250, xFor(activeIndex) - 125)),
		y: yFor(activeFinish.position) < 134 ? yFor(activeFinish.position) + 10 : yFor(activeFinish.position) - 134,
		...getPointDetails(activeFinish)
	} : null;

	return (
		<figure className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
			<figcaption className="text-xs font-semibold uppercase tracking-wide text-slate-500">
				League finish by season
			</figcaption>
			<div className="mt-3 overflow-x-auto">
				<svg
					viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
					role="group"
					aria-label={`Line graph of ${clubName}'s Premier League finishes by season, with 1st at the top`}
					className="h-auto w-full min-w-160"
				>
					{yTicks.map((tick) => (
						<g key={tick}>
							<line x1={MARGIN.left} x2={WIDTH - MARGIN.right} y1={yFor(tick)} y2={yFor(tick)} className="stroke-slate-200" strokeWidth="1" />
							<text x={MARGIN.left - 8} y={yFor(tick)} textAnchor="end" dominantBaseline="middle" className="fill-slate-500 text-xxs-plus">
								{tick}
							</text>
						</g>
					))}
					{finishes.map((finish, index) => (
						<text
							key={finish.year}
							x={xFor(index)}
							y={HEIGHT - MARGIN.bottom + 14}
							textAnchor="end"
							transform={`rotate(-60 ${xFor(index)} ${HEIGHT - MARGIN.bottom + 14})`}
							className="fill-slate-500 text-xxs"
						>
							{finish.year}
						</text>
					))}
					{lineRuns.map((run, index) => (
						<polyline
							key={index}
							points={run.map((point) => `${point.x},${point.y}`).join(" ")}
							fill="none"
							className="stroke-epl-500"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
					))}
					{finishes.map((finish, index) => {
						if (finish.position === null) return null;

						const x = xFor(index);
						const y = yFor(finish.position);
						const { label, stats } = getPointDetails(finish);

						return (
							<g
								key={finish.year}
								tabIndex={0}
								role="img"
								aria-label={`${label}. ${stats.join(", ")}`}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
								onFocus={() => setFocusedIndex(index)}
								onBlur={() => setFocusedIndex(null)}
							>
								<circle cx={x} cy={y} r="10" fill="transparent" />
								<circle
									cx={x}
									cy={y}
									r="4"
									className={finish.position === 1 ? "fill-amber-400 stroke-epl-500" : "fill-epl-500"}
								/>
							</g>
						);
					})}
					{tooltip && (
						<g className="pointer-events-none" aria-hidden="true">
							<rect x={tooltip.x} y={tooltip.y} width="250" height="124" rx="4" className="fill-slate-900" />
							<text x={tooltip.x + 125} y={tooltip.y + 15} textAnchor="middle" dominantBaseline="middle" className="fill-white text-xs">
								{tooltip.label}
							</text>
							{tooltip.stats.slice(0, 7).map((stat, statIndex) => (
								<text key={stat} x={tooltip.x + 10 + (statIndex % 2) * 120} y={tooltip.y + 36 + Math.floor(statIndex / 2) * 18} className="fill-slate-100 text-xxs-plus">
									{stat}
								</text>
							))}
							<text x={tooltip.x + 10} y={tooltip.y + 108} className="fill-slate-100 text-xxs-plus">
								{tooltip.stats[7]}
							</text>
						</g>
					)}
				</svg>
			</div>
		</figure>
	);
}
