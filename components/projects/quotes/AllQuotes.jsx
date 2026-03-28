"use client";

import { useMemo, useState } from "react";
import DataForQuotesJSON from "@/data/data_for__quotes.json";

const quotes = DataForQuotesJSON.Quotes;

export default function Component_AllQuotes() {
	const [searchTerm, setSearchTerm] = useState("");
	const [featuredIndex, setFeaturedIndex] = useState(0);
	const [copiedId, setCopiedId] = useState(null);

	const filteredQuotes = useMemo(() => {
		const query = searchTerm.trim().toLowerCase();
		
		return quotes.filter((quote) => {
			if (query.length === 0) {
				return true;
			}
			
			return (
				quote.quote.toLowerCase().includes(query) ||
				quote.quotee.toLowerCase().includes(query)
			);
		});
	}, [searchTerm]);

	const authorStats = useMemo(() => {
		const stats = {};
		quotes.forEach((q) => {
			stats[q.quotee] = (stats[q.quotee] || 0) + 1;
		});
		return Object.entries(stats)
			.map(([author, count]) => ({ author, count }))
			.sort((a, b) => b.count - a.count);
	}, []);

	const featuredQuote = filteredQuotes[featuredIndex % Math.max(filteredQuotes.length, 1)] || quotes[0];

	const handleCopyQuote = (quoteText, author, id) => {
		const fullQuote = `"${quoteText}" — ${author}`;
		navigator.clipboard.writeText(fullQuote);
		setCopiedId(id);
		setTimeout(() => setCopiedId(null), 2000);
	};

	const handleNextFeatured = () => {
		setFeaturedIndex((currentIndex) => currentIndex + 1);
	};

	return (
		<div className="w-full max-w-[1500px] space-y-8 lg:space-y-10">
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
				<div className="rounded-2xl border border-sky-300/20 bg-linear-to-br from-sky-950/90 to-black/90 p-5 shadow-xl shadow-black/30 lg:p-8">
					<div className="mb-3 flex flex-wrap items-center justify-between gap-3">
						<span className="rounded-full border border-sky-300/40 bg-black/40 px-3 py-1 text-xxs uppercase tracking-[0.2em] text-sky-200">
							Featured Quote
						</span>
						<button
							type="button"
							onClick={handleNextFeatured}
							className="rounded-full border border-sky-300/30 bg-black/40 px-4 py-2 text-xxs uppercase tracking-[0.16em] text-sky-100 transition-all hover:border-cyan-300/50 hover:text-cyan-200"
						>
							Next One
						</button>
					</div>
					<q className="block text-lg font-light uppercase leading-relaxed text-sky-50 lg:text-2xl before:content-[open-quote] before:text-3xl before:mr-3 before:leading-none before:font-serif before:text-sky-300 after:content-[close-quote] after:text-3xl after:ml-3 after:leading-none after:font-serif after:text-sky-300">
						{featuredQuote.quote}
					</q>
					<p className="mt-5 text-right text-sm text-sky-300 lg:text-base">
						— {featuredQuote.quotee}
					</p>
					<button
						type="button"
						onClick={() => handleCopyQuote(featuredQuote.quote, featuredQuote.quotee, featuredQuote.id)}
						className={`mt-5 w-full rounded-md px-4 py-2 text-xxs uppercase tracking-[0.16em] transition-all ${
							copiedId === featuredQuote.id
								? "border border-green-400/50 bg-green-500/15 text-green-200"
								: "border border-sky-300/25 bg-black/40 text-sky-100/70 hover:border-cyan-300/40 hover:text-cyan-200"
						}`}
					>
						{copiedId === featuredQuote.id ? "Copied!" : "Copy Quote"}
					</button>
				</div>

				<div className="rounded-2xl border border-sky-300/20 bg-black/55 p-5 shadow-xl shadow-black/30 lg:p-6">
					<p className="text-xxs uppercase tracking-[0.18em] text-sky-200/80">Quote Search</p>
					<input
						type="text"
						value={searchTerm}
						onChange={(event) => {
							setSearchTerm(event.target.value);
							setFeaturedIndex(0);
						}}
						placeholder="Search quotes or authors"
						className="mt-4 w-full rounded-md border border-sky-300/25 bg-black/60 px-3 py-2 text-sm text-sky-50 outline-none transition-all focus:border-cyan-300"
					/>
					<div className="mt-5 space-y-2">
						<p className="text-xxs uppercase tracking-[0.18em] text-sky-200/80">Top Authors</p>
						<div className="max-h-[200px] space-y-1 overflow-y-auto">
							{authorStats.slice(0, 8).map((stat) => (
								<div key={stat.author} className="rounded-md border border-sky-300/15 bg-black/40 px-3 py-2 text-xs text-sky-200/80">
									<div className="flex justify-between">
										<span>{stat.author === "Unknown" ? "Unknown" : stat.author}</span>
										<span className="text-sky-300">{stat.count}</span>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="mt-5 grid grid-cols-2 gap-2 text-center">
						<div className="rounded-md border border-sky-300/20 bg-black/50 p-3">
							<p className="text-xxs uppercase tracking-[0.16em] text-sky-200/70">Visible</p>
							<p className="mt-1 text-lg font-semibold text-sky-50">{filteredQuotes.length}</p>
						</div>
						<div className="rounded-md border border-sky-300/20 bg-black/50 p-3">
							<p className="text-xxs uppercase tracking-[0.16em] text-sky-200/70">Total</p>
							<p className="mt-1 text-lg font-semibold text-sky-50">{quotes.length}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 lg:gap-8">
				{filteredQuotes.map((quote) => (
					<article
						key={quote.id}
						className="group break-inside-avoid rounded-xl border border-sky-300/20 bg-black/45 p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 lg:p-6"
					>
						<q className="block text-sm font-light leading-relaxed text-sky-50 before:content-[open-quote] before:text-lg before:mr-2 before:leading-none before:font-serif before:text-sky-300 after:content-[close-quote] after:text-lg after:ml-2 after:leading-none after:font-serif after:text-sky-300 lg:text-base">
							{quote.quote}
						</q>
						<p className="mt-4 border-t border-sky-300/10 pt-3 text-right text-xs text-sky-300 lg:text-sm">
							— {quote.quotee}
						</p>
						<button
							type="button"
							onClick={() => handleCopyQuote(quote.quote, quote.quotee, quote.id)}
							className={`mt-3 w-full rounded-md px-3 py-2 text-xxs uppercase tracking-[0.16em] transition-all ${
								copiedId === quote.id
									? "border border-green-400/50 bg-green-500/15 text-green-200"
									: "border border-sky-300/25 bg-black/40 text-sky-100/60 hover:border-cyan-300/40 hover:text-cyan-200"
							}`}
						>
							{copiedId === quote.id ? "Copied!" : "Copy"}
						</button>
					</article>
				))}
			</div>

			{filteredQuotes.length === 0 && (
				<div className="rounded-xl border border-sky-300/30 bg-sky-500/10 p-6 text-center text-sm text-sky-100">
					No quotes match that search. Try something different.
				</div>
			)}
		</div>
	);
}