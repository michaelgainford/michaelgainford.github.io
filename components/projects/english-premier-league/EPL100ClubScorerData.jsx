"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Prem100ClubDataJSON from "@/data/data_for__englishpremierleague.json";

const topScorersData = Prem100ClubDataJSON.Top_Scorers;

const calculateDaysAgo = (date) => {
	const today = new Date();
	const lastGoalDate = new Date(date);
	const timeDifference = today - lastGoalDate;
	return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};

const getGoalRate = (goals, apps) => {
	if (!apps) {
		return 0;
	}

	return goals / apps;
};

export default function Component_EPL100ClubScorerData() {
	const [statusFilter, setStatusFilter] = useState("all");
	const [sortBy, setSortBy] = useState("goals");
	const [searchTerm, setSearchTerm] = useState("");

	const filteredAndSortedScorers = useMemo(() => {
		const filteredScorers = topScorersData.filter((player) => {
			const matchesSearch = player.playerName
				.toLowerCase()
				.includes(searchTerm.toLowerCase().trim());

			if (statusFilter === "active") {
				return player.playerCurrent && matchesSearch;
			}

			if (statusFilter === "retired") {
				return !player.playerCurrent && matchesSearch;
			}

			return matchesSearch;
		});

		return [...filteredScorers].sort((leftPlayer, rightPlayer) => {
			if (sortBy === "apps") {
				return rightPlayer.playerApps - leftPlayer.playerApps;
			}

			if (sortBy === "ratio") {
				return (
					getGoalRate(rightPlayer.playerGoals, rightPlayer.playerApps) -
					getGoalRate(leftPlayer.playerGoals, leftPlayer.playerApps)
				);
			}

			if (sortBy === "name") {
				return leftPlayer.playerName.localeCompare(rightPlayer.playerName);
			}

			return rightPlayer.playerGoals - leftPlayer.playerGoals;
		});
	}, [searchTerm, sortBy, statusFilter]);

	return (
		<div className="flex w-full flex-col gap-5 lg:gap-7">
			<div className="flex w-full flex-col gap-4 rounded-2xl border border-epl-300/25 bg-white p-4 sm:p-5">
				<div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<p className="text-[10px] uppercase tracking-[0.28em] text-epl-500/70">
							Browse Players
						</p>
						<p className="mt-2 text-sm text-epl-500/80 sm:text-base">
							Use filters to focus on active players, retired legends, or compare output by apps and goal rate.
						</p>
					</div>
					<p className="text-sm font-medium text-epl-500/80">
						Showing {filteredAndSortedScorers.length} players
					</p>
				</div>

				<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
					<label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.24em] text-slate-500">
						Search
						<input
							className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm tracking-wide text-slate-700 outline-none transition duration-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
							type="text"
							placeholder="Player name"
							value={searchTerm}
							onChange={(event) => setSearchTerm(event.target.value)}
						/>
					</label>

					<label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.24em] text-slate-500">
						Status
						<select
							className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm tracking-wide text-slate-700 outline-none transition duration-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
							value={statusFilter}
							onChange={(event) => setStatusFilter(event.target.value)}
						>
							<option value="all">All</option>
							<option value="active">Active</option>
							<option value="retired">Retired</option>
						</select>
					</label>

					<label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.24em] text-slate-500">
						Sort By
						<select
							className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm tracking-wide text-slate-700 outline-none transition duration-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
							value={sortBy}
							onChange={(event) => setSortBy(event.target.value)}
						>
							<option value="goals">Goals</option>
							<option value="apps">Appearances</option>
							<option value="ratio">Goals Per Game</option>
							<option value="name">Name (A-Z)</option>
						</select>
					</label>
				</div>
			</div>

			<div className="grid w-full grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{filteredAndSortedScorers.map((topScorer, index) => {
					const playerImage = `/football/premier-league/players/${topScorer.playerSlug}.webp`;
					const goalsPerGame = getGoalRate(topScorer.playerGoals, topScorer.playerApps).toFixed(2);
					const daysSinceLastGoal = calculateDaysAgo(topScorer.playerLastGoalDate);

					return (
						<div
							className="group flex h-full flex-col justify-start rounded-xl border border-epl-300/25 bg-white p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-epl/50 hover:shadow-lg lg:p-5"
							key={topScorer.playerId}
						>
							<div className="grid grid-rows-[2.25rem_3.5rem_14rem] gap-3 sm:grid-rows-[2.25rem_3.5rem_13rem] lg:grid-rows-[2.25rem_3.5rem_11rem] xl:grid-rows-[2.25rem_3.5rem_10.5rem] 2xl:grid-rows-[2.25rem_3.5rem_12rem]">
								<div className="flex items-start justify-between gap-3">
									<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-slate-100 text-xs font-bold text-slate-700">
										{index + 1}
									</span>
									<span
										className={`rounded-md px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${topScorer.playerCurrent ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}
									>
										{topScorer.playerCurrent ? "Active" : "Retired"}
									</span>
								</div>

								<h3 className="line-clamp-2 text-lg leading-tight font-bold uppercase tracking-wide text-epl sm:text-xl">
									{topScorer.playerName}
								</h3>

								<div className="relative h-full overflow-hidden rounded-lg border border-epl-200/60 bg-slate-50">
									<Image
										className="object-cover transition duration-500 group-hover:scale-[1.02]"
										src={playerImage}
										alt={topScorer.playerName}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
									/>
								</div>
							</div>

							<div className="mt-4 grid grid-cols-3 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-center">
								<div>
									<p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Goals</p>
									<p className="mt-1 text-xl font-bold text-epl">{topScorer.playerGoals}</p>
								</div>
								<div>
									<p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Apps</p>
									<p className="mt-1 text-xl font-bold text-epl">{topScorer.playerApps}</p>
								</div>
								<div>
									<p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">G/App</p>
									<p className="mt-1 text-xl font-bold text-epl">{goalsPerGame}</p>
								</div>
							</div>

							<details className="mt-4 rounded-lg border border-slate-200 bg-slate-50/60 p-3 group/details">
								<summary className="flex cursor-pointer list-none items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-600">
									<span>Clubs And Last Goal</span>
									<span className="text-slate-500 transition-transform duration-300 group-open/details:rotate-180">⌄</span>
								</summary>
								<div className="mt-3 flex flex-wrap content-start gap-2">
									{topScorer.playerClubs.map((playerClub, clubIndex) => {
										const clubSlug = playerClub.replace(/ *\([^)]*\) */g, "").replace(/\s+/g, "-").toLowerCase();
										return (
											<Link
												className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 transition duration-300 hover:border-slate-500 hover:bg-slate-100"
												key={clubIndex}
												href={`/projects/football/competitions/english-premier-league/all-clubs/${clubSlug}`}
											>
												{playerClub}
											</Link>
										);
									})}
								</div>

								<div className="mt-4 border-t border-slate-200 pt-3 text-xs leading-relaxed text-slate-700">
									<p>
										Last goal: {topScorer.playerLastGoalFor} vs {topScorer.playerLastGoalOpponent} on {new Date(topScorer.playerLastGoalDate).toLocaleDateString("en-GB")}
									</p>
									<p className="mt-1 text-slate-500">
										{daysSinceLastGoal === 0
											? "Scored today"
											: `${daysSinceLastGoal.toLocaleString()} ${daysSinceLastGoal === 1 ? "day" : "days"} ago`}
									</p>
								</div>
							</details>
						</div>
					);
				})}
			</div>
		</div>
	);
}
