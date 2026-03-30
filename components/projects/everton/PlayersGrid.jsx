"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import EvertonData from "@/data/data_for__everton";

const players = EvertonData.Players;

const positionCategories = [
	"All",
	"Goalkeeper",
	"Defender",
	"Midfielder",
	"Forward",
];

export default function Component_PlayersGrid() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedPosition, setSelectedPosition] = useState("All");
	const [featuredIndex, setFeaturedIndex] = useState(0);

	const filteredPlayers = useMemo(() => {
		let result = [...players].sort((a, b) => a.number - b.number);

		if (selectedPosition !== "All") {
			result = result.filter((p) => p.position === selectedPosition);
		}

		if (searchTerm.trim()) {
			const query = searchTerm.toLowerCase();
			result = result.filter(
				(p) =>
					p.name.toLowerCase().includes(query) ||
					p.position.toLowerCase().includes(query) ||
					p.country.toLowerCase().includes(query)
			);
		}

		return result;
	}, [searchTerm, selectedPosition]);

	const positionCounts = useMemo(() => {
		return positionCategories.reduce((acc, pos) => {
			if (pos === "All") {
				acc[pos] = players.length;
			} else {
				acc[pos] = players.filter((p) => p.position === pos).length;
			}
			return acc;
		}, {});
	}, []);

	const featuredPlayer = filteredPlayers[featuredIndex % Math.max(filteredPlayers.length, 1)] || players[0];

	const handleNextFeatured = () => {
		setFeaturedIndex((current) => current + 1);
	};

	return (
		<div className={`mt-8 space-y-8 playing-squad`}>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
				<div className="rounded-2xl border border-blue-400/20 bg-linear-to-br from-blue-950/90 to-black/90 p-5 shadow-xl shadow-black/30 lg:p-8">
					<div className="mb-4 flex items-center justify-between">
						<span className="rounded-full border border-blue-400/40 bg-black/40 px-3 py-1 text-xxs uppercase tracking-[0.2em] text-blue-200">
							Featured Player
						</span>
						<button
							type="button"
							onClick={handleNextFeatured}
							className="rounded-full border border-blue-400/30 bg-black/40 px-4 py-2 text-xxs uppercase tracking-[0.16em] text-blue-100 transition-all hover:border-cyan-400/50 hover:text-cyan-200"
						>
							Next
						</button>
					</div>
					<div className="relative mb-5 aspect-square overflow-hidden rounded-lg">
						<Image
							src={`/everton/${featuredPlayer.slug}.webp`}
							alt={featuredPlayer.name}
							width={400}
							height={400}
							className="h-full w-full object-cover"
						/>
						<div className="absolute top-3 left-3 rounded-lg bg-black/70 px-4 py-2">
							<span className="text-2xl font-bold text-cyan-300">#{featuredPlayer.number}</span>
						</div>
					</div>
					<h3 className="text-2xl font-semibold text-blue-50 lg:text-3xl">{featuredPlayer.name}</h3>
					<div className="mt-3 space-y-2 text-blue-200/80">
						<p className="text-sm"><span className="text-xxs uppercase tracking-[0.12em]">Position:</span> {featuredPlayer.position}</p>
						<p className="text-sm"><span className="text-xxs uppercase tracking-[0.12em]">Country:</span> {featuredPlayer.country}</p>
					</div>
				</div>

				<div className="rounded-2xl border border-blue-400/20 bg-black/55 p-5 shadow-xl shadow-black/30 lg:p-6">
					<p className="text-xxs uppercase tracking-[0.18em] text-blue-200/80">Player Search</p>
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
							setFeaturedIndex(0);
						}}
						placeholder="Search players"
						className="mt-4 w-full rounded-md border border-blue-400/25 bg-black/60 px-3 py-2 text-sm text-blue-50 outline-none transition-all focus:border-cyan-400"
					/>

					<div className="mt-5 space-y-2">
						<p className="text-xxs uppercase tracking-[0.18em] text-blue-200/80">Filter by Position</p>
						<div className="space-y-1">
							{positionCategories.map((pos) => (
								<button
									key={pos}
									type="button"
									onClick={() => {
										setSelectedPosition(pos);
										setFeaturedIndex(0);
									}}
									className={`w-full rounded-md px-3 py-2 text-xs uppercase tracking-[0.14em] transition-all ${
										selectedPosition === pos
											? "border border-cyan-400/50 bg-cyan-400/15 text-cyan-200"
											: "border border-blue-400/25 bg-black/40 text-blue-200/70 hover:border-blue-400/40 hover:text-blue-100"
									}`}
								>
									{pos} <span className="ml-2 text-blue-300">({positionCounts[pos]})</span>
								</button>
							))}
						</div>
					</div>

					<div className="mt-5 grid grid-cols-2 gap-2 text-center">
						<div className="rounded-md border border-blue-400/20 bg-black/50 p-3">
							<p className="text-xxs uppercase tracking-[0.16em] text-blue-200/70">Visible</p>
							<p className="mt-1 text-lg font-semibold text-blue-50">{filteredPlayers.length}</p>
						</div>
						<div className="rounded-md border border-blue-400/20 bg-black/50 p-3">
							<p className="text-xxs uppercase tracking-[0.16em] text-blue-200/70">Total</p>
							<p className="mt-1 text-lg font-semibold text-blue-50">{players.length}</p>
						</div>
					</div>
				</div>
			</div>

			<div className={`grid grid-cols-1 players gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4`}>
				{filteredPlayers.map((player) => (
					<div key={player.slug} className={`group flex flex-col overflow-hidden rounded-xl border border-blue-400/20 bg-black/45 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/35`}>
						<div className="relative aspect-square overflow-hidden">
							<Image
								src={`/everton/${player.slug}.webp`}
								alt={player.name}
								width={300}
								height={300}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute top-2 left-2 rounded-lg bg-black/70 px-3 py-1">
								<span className="text-lg font-bold text-cyan-300">#{player.number}</span>
							</div>
						</div>
						<div className="flex flex-col p-4 text-center">
							<h3 className="font-semibold text-blue-100">{player.name}</h3>
							<p className="mt-2 text-xs text-blue-300/80">{player.position}</p>
							<p className="text-xs text-blue-400/70">{player.country}</p>
						</div>
					</div>
				))}
			</div>

			{filteredPlayers.length === 0 && (
				<div className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-6 text-center text-sm text-blue-100">
					No players match those filters. Try a different search or position.
				</div>
			)}
		</div>
	);
}