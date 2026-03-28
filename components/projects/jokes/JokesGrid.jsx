"use client";

import { useMemo, useState } from "react";
import DataForJokesJSON from "@/data/data_for__jokes";

const jokes = DataForJokesJSON.Jokes;

const shuffleJokes = (items) => {
	const clonedItems = [...items];

	for (let index = clonedItems.length - 1; index > 0; index -= 1) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[clonedItems[index], clonedItems[randomIndex]] = [clonedItems[randomIndex], clonedItems[index]];
	}

	return clonedItems;
};

export default function Component_JokesGrid() {
	const [searchTerm, setSearchTerm] = useState("");
	const [jokeOrder, setJokeOrder] = useState(() => shuffleJokes(jokes));
	const [featuredIndex, setFeaturedIndex] = useState(0);
	const [copiedIndex, setCopiedIndex] = useState(null);

	const handleCopyJoke = (setup, punchline, index) => {
		const jokeText = `${setup}\n\n${punchline}`;
		navigator.clipboard.writeText(jokeText);
		setCopiedIndex(index);
		setTimeout(() => setCopiedIndex(null), 2000);
	};

	const filteredJokes = useMemo(() => {
		const query = searchTerm.trim().toLowerCase();

		return jokeOrder.filter((joke) => {
			if (query.length === 0) {
				return true;
			}

			return (
				joke.setup.toLowerCase().includes(query) ||
				joke.punchline.toLowerCase().includes(query)
			);
		});
	}, [jokeOrder, searchTerm]);

	const featuredJoke = filteredJokes[featuredIndex % Math.max(filteredJokes.length, 1)] ?? jokeOrder[0];

	const handleShuffle = () => {
		const shuffledJokes = shuffleJokes(jokes);
		setJokeOrder(shuffledJokes);
		setFeaturedIndex(0);
	};

	const handleNextFeatured = () => {
		setFeaturedIndex((currentIndex) => currentIndex + 1);
	};

	return (
		<div className="w-full max-w-[1500px] space-y-8 lg:space-y-10">
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
				<div className="rounded-2xl border border-amber-300/20 bg-linear-to-br from-rose-950/90 to-black/90 p-5 shadow-xl shadow-black/30 lg:p-8">
					<div className="mb-3 flex flex-wrap items-center justify-between gap-3">
						<span className="rounded-full border border-amber-300/40 bg-black/40 px-3 py-1 text-xxs uppercase tracking-[0.2em] text-amber-200">
							Featured Joke
						</span>
						<button
							type="button"
							onClick={handleNextFeatured}
							className="rounded-full border border-rose-300/30 bg-black/40 px-4 py-2 text-xxs uppercase tracking-[0.16em] text-rose-100 transition-all hover:border-amber-300/50 hover:text-amber-200"
						>
							Next One
						</button>
					</div>
					<p className="text-lg font-light uppercase leading-relaxed text-rose-50 lg:text-2xl">
						{featuredJoke.setup}
					</p>
					<p className="mt-5 text-base text-amber-100 lg:text-xl">
						{featuredJoke.punchline}
					</p>
				</div>

				<div className="rounded-2xl border border-rose-300/20 bg-black/55 p-5 shadow-xl shadow-black/30 lg:p-6">
					<p className="text-xxs uppercase tracking-[0.18em] text-rose-200/80">Joke Controls</p>
					<div className="mt-4 space-y-3">
						<input
							type="text"
							value={searchTerm}
							onChange={(event) => {
								setSearchTerm(event.target.value);
								setFeaturedIndex(0);
							}}
							placeholder="Search jokes"
							className="w-full rounded-md border border-rose-300/25 bg-black/60 px-3 py-2 text-sm text-rose-50 outline-none transition-all focus:border-amber-300"
						/>
						<button
							type="button"
							onClick={handleShuffle}
							className="w-full rounded-md border border-amber-300/30 bg-amber-500/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-amber-200 transition-all hover:bg-amber-500/20"
						>
							Shuffle Order
						</button>
					</div>
					<div className="mt-5 grid grid-cols-2 gap-2 text-center">
						<div className="rounded-md border border-rose-300/20 bg-black/50 p-3">
							<p className="text-xxs uppercase tracking-[0.16em] text-rose-200/70">Visible</p>
							<p className="mt-1 text-lg font-semibold text-rose-50">{filteredJokes.length}</p>
						</div>
						<div className="rounded-md border border-rose-300/20 bg-black/50 p-3">
							<p className="text-xxs uppercase tracking-[0.16em] text-rose-200/70">Total</p>
							<p className="mt-1 text-lg font-semibold text-rose-50">{jokes.length}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
				{filteredJokes.map((joke, index) => (
					<article
						key={`${joke.setup}-${index}`}
						className="group flex min-h-[220px] flex-col justify-between rounded-xl border border-rose-300/20 bg-black/45 p-5 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/35"
					>
						<div>
							<p className="mb-4 text-xxs uppercase tracking-[0.18em] text-amber-200/75">One-Liner #{index + 1}</p>
							<p className="text-lg font-light uppercase leading-relaxed text-rose-50">{joke.setup}</p>
						</div>
						<div className="mt-5 space-y-3 border-t border-rose-300/10 pt-4">
							<p className="text-base text-amber-100">{joke.punchline}</p>
							<button
								type="button"
								onClick={() => handleCopyJoke(joke.setup, joke.punchline, index)}
								className={`w-full rounded-md px-3 py-2 text-xxs uppercase tracking-[0.16em] transition-all ${
									copiedIndex === index
										? "border border-green-400/50 bg-green-500/15 text-green-200"
										: "border border-rose-300/25 bg-black/40 text-rose-100/70 hover:border-amber-300/40 hover:text-amber-200"
								}`}
							>
								{copiedIndex === index ? "Copied!" : "Copy Joke"}
							</button>
						</div>
					</article>
				))}
			</div>

			{filteredJokes.length === 0 && (
				<div className="rounded-xl border border-rose-300/30 bg-rose-500/10 p-6 text-center text-sm text-rose-100">
					No jokes match that search. Try something less specific.
				</div>
			)}
		</div>
	);
}