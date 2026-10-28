import { premierLeagueYears } from "@/variables/ProjectPremierLeague";

const WIDTH = 900;
const HEIGHT = 340;
const MARGIN = { top: 20, right: 20, bottom: 60, left: 40 };
const PLOT_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;

export default function ClubFinishesChart({ seasons, clubName }) {
	const finishes = premierLeagueYears.map((year, index) => {
		const position = seasons?.[`season${index + 1}`]?.Pos;
		return { year, position: typeof position === "number" && position > 0 ? position : null };
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

	return (
		<figure className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
			<figcaption className="text-xs font-semibold uppercase tracking-wide text-slate-500">
				League finish by season
			</figcaption>
			<div className="mt-3 overflow-x-auto">
				<svg
					viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
					role="img"
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
					{finishes.map((finish, index) =>
						finish.position === null ? null : (
							<circle
								key={finish.year}
								cx={xFor(index)}
								cy={yFor(finish.position)}
								r="4"
								className={finish.position === 1 ? "fill-amber-400 stroke-epl-500" : "fill-epl-500"}
							>
								<title>{`${finish.year}: ${finish.position}`}</title>
							</circle>
						)
					)}
				</svg>
			</div>
		</figure>
	);
}
