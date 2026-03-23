"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import DataForPremTeamsImport from "@/data/data_for__englishpremierleague";
const DataForPremTeams = DataForPremTeamsImport.Clubs;
import { premierLeagueYears, seasonPositions } from "@/variables/ProjectPremierLeague";

{/* Sort by team name */}
const sortedPremierLeagueSeasonData = [...DataForPremTeams].sort((a, b) => {
	if (a.teamName > b.teamName) {
		return 1;
	}
	else if (a.teamName < b.teamName) {
		return -1;
	}
	else {
		return 0;
	}
});

export default function Component_EPLSeasonBySeasonTable() {
	const tableContainerRef = useRef(null);
	const tableRef = useRef(null);
	const [hasOverflow, setHasOverflow] = useState(false);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);

	const updateScrollState = () => {
		const container = tableContainerRef.current;
		if (!container) return;

		const overflow = container.scrollWidth > container.clientWidth;
		setHasOverflow(overflow);
		setCanScrollLeft(container.scrollLeft > 0);
		setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 1);
	};

	useEffect(() => {
		const animationFrame = window.requestAnimationFrame(updateScrollState);
		const resizeObserver = new ResizeObserver(() => updateScrollState());

		if (tableContainerRef.current) {
			resizeObserver.observe(tableContainerRef.current);
		}

		if (tableRef.current) {
			resizeObserver.observe(tableRef.current);
		}

		window.addEventListener("resize", updateScrollState);
		return () => {
			window.cancelAnimationFrame(animationFrame);
			resizeObserver.disconnect();
			window.removeEventListener("resize", updateScrollState);
		};
	}, []);

	const scrollTableHorizontally = (direction) => {
		const container = tableContainerRef.current;
		if (!container) return;

		container.scrollBy({
			left: direction === "left" ? -320 : 320,
			behavior: "smooth",
		});

		setTimeout(updateScrollState, 250);
	};

	return (
		<div className="relative by-season mb-8 ml-[5%] w-[95%] md:ml-[4%] md:w-[96%]">
			{hasOverflow && (
				<div className="sticky top-2 z-[70] mb-3 flex justify-end gap-2 pr-2">
					<button
						type="button"
						onClick={() => scrollTableHorizontally("left")}
						disabled={!canScrollLeft}
						className={`flex h-9 w-9 items-center justify-center rounded-full border border-epl bg-white/95 text-xl leading-none text-epl shadow-md transition-all ${
							canScrollLeft ? "hover:bg-epl hover:text-white" : "opacity-40 cursor-not-allowed"
						}`}
						aria-label="Scroll table left"
					>
						&#x2039;
					</button>
					<button
						type="button"
						onClick={() => scrollTableHorizontally("right")}
						disabled={!canScrollRight}
						className={`flex h-9 w-9 items-center justify-center rounded-full border border-epl bg-white/95 text-xl leading-none text-epl shadow-md transition-all ${
							canScrollRight ? "hover:bg-epl hover:text-white" : "opacity-40 cursor-not-allowed"
						}`}
						aria-label="Scroll table right"
					>
						&#x203A;
					</button>
				</div>
			)}
			<div
				ref={tableContainerRef}
				onScroll={updateScrollState}
				className="w-full overflow-x-auto"
			>
			<table ref={tableRef} className="w-max min-w-full text-xs lg:text-sm text-center hover:cursor-pointer z-2 lg:rounded-lg border-separate border-spacing-0">
				<thead className="font-light uppercase bg-epl/90 text-white [&>tr_th]:font-light">
					<tr>
						<th className="sticky left-0 top-0 z-50 bg-epl py-3 pl-1 lg:pl-2 text-left">
							Team
						</th>
						{premierLeagueYears.map((season, index) => (
						<th key={index} className="sticky top-0 z-40 bg-epl px-1">
							{season}
						</th>
						))}
					</tr>
				</thead>
				<tbody className="bg-epl/20">
					{sortedPremierLeagueSeasonData.map((team, index) => (
					<tr key={index} className="border-b border-epl/20">
						<td className="sticky left-0 pl-1 lg:pl-2 text-left bg-gray-100 z-30 max-w-36! lg:max-w-[150px] xl:max-w-[200px] py-1 md:py-2 lg:py-3 truncate">
								{team.teamName}
						</td>
						{team.premierLeagueSeasonsSplit.map((season, index) => (
						<Fragment key={index}>
							{seasonPositions.map((_, i) => {
								const seasonData = season[`season${i + 1}`];
								const position = seasonData?.Pos ?? -1;
								const wins = seasonData?.W ?? 0;
								const draws = seasonData?.D ?? 0;
								const losses = seasonData?.L ?? 0;
								const goalsFor = seasonData?.F ?? 0;
								const goalsAgainst = seasonData?.A ?? 0;
								const goalDifference = goalsFor - goalsAgainst;
								const totalGames = wins + draws + losses;
								const totalPoints = wins * 3 + draws;
								return (
									<td
										key={i}
										className={`cursor-pointer px-1 ${
										position === -1
												? `text-epl/20 cursor-default`
												: position === 1
												? `bg-amber-500 text-slate-800`
												: ``
										}`}
										{...(position !== -1 && {
										title: `Played: ${totalGames}, W: ${wins}, D: ${draws}, L: ${losses}, F: ${goalsFor}, A: ${goalsAgainst}, GD: ${goalDifference}, Pts: ${totalPoints}`,
										})}
									>
										{position === -1 ? "-" : position}
									</td>
								);
							})}
						</Fragment>
						))}
					</tr>
					))}
				</tbody>
			</table>
			</div>
		</div>
	)
}