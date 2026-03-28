"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import CountriesJSON from "@/data/data_for__countries.json";

const countries = CountriesJSON.Countries.map((country) => ({
	...country,
	country_continent: country.country_continent || "Unknown",
}));

const numberFormatter = new Intl.NumberFormat("en-GB");

const sortOptions = {
	"name-asc": (a, b) => a.country_name.localeCompare(b.country_name),
	"population-desc": (a, b) => b.country_population - a.country_population,
	"area-desc": (a, b) => b.country_land_area_km2 - a.country_land_area_km2,
};

const continents = [
	"All",
	...new Set(countries.map((country) => country.country_continent).sort((a, b) => a.localeCompare(b))),
];

export default function Component_CountriesGrid() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedContinent, setSelectedContinent] = useState("All");
	const [sortBy, setSortBy] = useState("name-asc");
	const [viewMode, setViewMode] = useState("comfortable");
	const [selectedCountries, setSelectedCountries] = useState([]);

	const selectedCountryObjects = useMemo(
		() => countries.filter((country) => selectedCountries.includes(country.country_code)),
		[selectedCountries]
	);

	const filteredCountries = useMemo(() => {
		const query = searchTerm.trim().toLowerCase();

		return countries
			.filter((country) => {
				const matchesQuery =
					query.length === 0 ||
					country.country_name.toLowerCase().includes(query) ||
					country.country_capital.toLowerCase().includes(query) ||
					country.country_currency.toLowerCase().includes(query);

				const matchesContinent =
					selectedContinent === "All" || country.country_continent === selectedContinent;

				return matchesQuery && matchesContinent;
			})
			.sort(sortOptions[sortBy]);
	}, [searchTerm, selectedContinent, sortBy]);

	const visiblePopulation = useMemo(
		() => filteredCountries.reduce((acc, country) => acc + country.country_population, 0),
		[filteredCountries]
	);

	const continentCounts = useMemo(
		() =>
			continents
				.filter((continent) => continent !== "All")
				.map((continent) => ({
					continent,
					count: countries.filter((country) => country.country_continent === continent).length,
				}))
				.sort((a, b) => b.count - a.count),
		[]
	);

	const gridClasses =
		viewMode === "compact"
			? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
			: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

	const handleToggleCompare = (countryCode) => {
		setSelectedCountries((previous) => {
			if (previous.includes(countryCode)) {
				return previous.filter((code) => code !== countryCode);
			}

			if (previous.length >= 3) {
				return previous;
			}

			return [...previous, countryCode];
		});
	};

	return (
		<div className="w-full max-w-[1800px] space-y-6 lg:space-y-8">
			<div className="sticky top-2 z-20 space-y-4 rounded-xl border border-white/20 bg-slate-950/85 p-4 shadow-xl backdrop-blur-md lg:p-6">
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
					<label className="flex flex-col gap-1">
						<span className="text-xxs uppercase tracking-[0.16em] text-sky-200/90">Search</span>
						<input
							type="text"
							value={searchTerm}
							onChange={(event) => setSearchTerm(event.target.value)}
							placeholder="Country, capital, currency"
							className="rounded-md border border-sky-200/25 bg-black/70 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-sky-300"
						/>
					</label>
					<label className="flex flex-col gap-1">
						<span className="text-xxs uppercase tracking-[0.16em] text-sky-200/90">Continent</span>
						<select
							value={selectedContinent}
							onChange={(event) => setSelectedContinent(event.target.value)}
							className="rounded-md border border-sky-200/25 bg-black/70 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-sky-300"
						>
							{continents.map((continent) => (
								<option key={continent} value={continent}>
									{continent}
								</option>
							))}
						</select>
					</label>
					<label className="flex flex-col gap-1">
						<span className="text-xxs uppercase tracking-[0.16em] text-sky-200/90">Sort</span>
						<select
							value={sortBy}
							onChange={(event) => setSortBy(event.target.value)}
							className="rounded-md border border-sky-200/25 bg-black/70 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-sky-300"
						>
							<option value="name-asc">Name (A-Z)</option>
							<option value="population-desc">Population (High-Low)</option>
							<option value="area-desc">Land Area (High-Low)</option>
						</select>
					</label>
					<div className="flex flex-col gap-1">
						<span className="text-xxs uppercase tracking-[0.16em] text-sky-200/90">View</span>
						<div className="grid grid-cols-2 gap-2">
							<button
								type="button"
								onClick={() => setViewMode("comfortable")}
								className={`rounded-md border px-3 py-2 text-xs uppercase tracking-wide transition-all ${
									viewMode === "comfortable"
										? "border-sky-300 bg-sky-600/25 text-sky-100"
										: "border-sky-200/25 bg-black/70 text-slate-200"
								}`}
							>
								Comfort
							</button>
							<button
								type="button"
								onClick={() => setViewMode("compact")}
								className={`rounded-md border px-3 py-2 text-xs uppercase tracking-wide transition-all ${
									viewMode === "compact"
										? "border-sky-300 bg-sky-600/25 text-sky-100"
										: "border-sky-200/25 bg-black/70 text-slate-200"
								}`}
							>
								Compact
							</button>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap items-center gap-2 pt-1">
					{continentCounts.map((item) => (
						<button
							key={item.continent}
							type="button"
							onClick={() => setSelectedContinent(item.continent)}
							className={`rounded-full border px-3 py-1 text-xxs uppercase tracking-wide transition-all ${
								selectedContinent === item.continent
									? "border-emerald-300 bg-emerald-500/25 text-emerald-100"
									: "border-slate-300/25 bg-black/60 text-slate-300"
							}`}
						>
							{item.continent} ({item.count})
						</button>
					))}
				</div>

				<div className="grid grid-cols-2 gap-2 pt-1 md:grid-cols-4">
					<div className="rounded-md border border-sky-200/20 bg-black/60 p-2">
						<p className="text-xxs uppercase tracking-wider text-sky-200/80">Visible Countries</p>
						<p className="mt-1 text-sm font-semibold text-slate-100">{numberFormatter.format(filteredCountries.length)}</p>
					</div>
					<div className="rounded-md border border-sky-200/20 bg-black/60 p-2">
						<p className="text-xxs uppercase tracking-wider text-sky-200/80">Visible Population</p>
						<p className="mt-1 text-sm font-semibold text-slate-100">{numberFormatter.format(visiblePopulation)}</p>
					</div>
					<div className="rounded-md border border-sky-200/20 bg-black/60 p-2">
						<p className="text-xxs uppercase tracking-wider text-sky-200/80">Continents</p>
						<p className="mt-1 text-sm font-semibold text-slate-100">{numberFormatter.format(continents.length - 1)}</p>
					</div>
					<div className="rounded-md border border-sky-200/20 bg-black/60 p-2">
						<p className="text-xxs uppercase tracking-wider text-sky-200/80">Mode</p>
						<p className="mt-1 text-sm font-semibold text-slate-100">{viewMode}</p>
					</div>
				</div>

				<div className="rounded-md border border-amber-200/25 bg-amber-500/10 p-3">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<p className="text-xxs uppercase tracking-[0.16em] text-amber-100/90">
							Compare Mode: {selectedCountries.length}/3 selected
						</p>
						<button
							type="button"
							onClick={() => setSelectedCountries([])}
							className="rounded-md border border-amber-200/30 bg-black/40 px-2 py-1 text-xxs uppercase tracking-wide text-amber-100 transition-all hover:bg-black/70"
						>
							Clear Selection
						</button>
					</div>
					<p className="mt-2 text-xs text-amber-100/85">
						Select up to 3 countries using the compare button on each card.
					</p>
				</div>
			</div>

			{selectedCountryObjects.length > 0 && (
				<section className="rounded-xl border border-amber-200/30 bg-slate-950/85 p-4 shadow-xl lg:sticky lg:top-28 lg:z-10 lg:p-6">
					<h3 className="mb-4 text-sm uppercase tracking-[0.16em] text-amber-100">
						Country Compare
					</h3>
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
						{selectedCountryObjects.map((country) => (
							<div key={`compare-${country.country_code}`} className="rounded-lg border border-slate-200/20 bg-black/60 p-3">
								<div className="mb-3 flex items-center gap-2">
									<Image
										className="rounded-sm border border-slate-300/30"
										src={`/country-flags/${country.country_code}.svg`}
										alt={`${country.country_name} flag`}
										width={28}
										height={20}
									/>
									<p className="truncate text-sm font-semibold uppercase tracking-wide text-slate-100">
										{country.country_name}
									</p>
								</div>
								<div className="space-y-1 text-xs text-slate-200/90">
									<p><strong className="text-slate-100">Capital:</strong> {country.country_capital}</p>
									<p><strong className="text-slate-100">Continent:</strong> {country.country_continent}</p>
									<p><strong className="text-slate-100">Population:</strong> {numberFormatter.format(country.country_population)}</p>
									<p><strong className="text-slate-100">Land Area:</strong> {numberFormatter.format(country.country_land_area_km2)} km2</p>
									<p><strong className="text-slate-100">Currency:</strong> {country.country_currency}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			<div className={`grid items-start gap-4 lg:gap-6 ${gridClasses}`}>
				{filteredCountries.map((country, index) => (
					<article
						key={`${country.country_code}-${country.country_name}`}
						className="group rounded-xl border border-slate-200/25 bg-slate-950/85 p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/40"
					>
						<div className="mb-4 flex items-start justify-between gap-3">
							<div className="flex min-w-0 items-center gap-3">
								<Image
									className="rounded-sm border border-slate-300/30"
									src={`/country-flags/${country.country_code}.svg`}
									alt={`${country.country_name} flag`}
									width={32}
									height={24}
									loading={index > 60 ? "lazy" : "eager"}
								/>
								<div className="min-w-0">
									<h3 className="truncate text-sm font-semibold uppercase tracking-wide text-slate-100 lg:text-[15px]">
										{country.country_name}
									</h3>
									<p className="truncate text-xxs uppercase tracking-[0.14em] text-sky-200/85">
										{country.country_continent}
									</p>
								</div>
							</div>
							<div className="flex flex-col items-end gap-2">
								<span className="rounded-full border border-slate-300/25 bg-black/60 px-2 py-1 text-xxs uppercase tracking-wide text-slate-300">
									{country.country_code}
								</span>
								<button
									type="button"
									onClick={() => handleToggleCompare(country.country_code)}
									disabled={
										selectedCountries.length >= 3 && !selectedCountries.includes(country.country_code)
									}
									className={`rounded-md border px-2 py-1 text-xxs uppercase tracking-wide transition-all ${
										selectedCountries.includes(country.country_code)
											? "border-amber-300 bg-amber-500/30 text-amber-100"
											: "border-slate-300/25 bg-black/60 text-slate-300 hover:border-sky-300/50"
									} disabled:cursor-not-allowed disabled:opacity-40`}
								>
									{selectedCountries.includes(country.country_code) ? "Selected" : "Compare"}
								</button>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-2 text-left">
							<div className="rounded-md border border-slate-300/20 bg-black/60 p-2">
								<p className="text-xxs uppercase tracking-wider text-slate-400">Capital</p>
								<p className="mt-1 truncate text-xs font-medium text-slate-100">{country.country_capital}</p>
							</div>
							<div className="rounded-md border border-slate-300/20 bg-black/60 p-2">
								<p className="text-xxs uppercase tracking-wider text-slate-400">Currency</p>
								<p className="mt-1 truncate text-xs font-medium text-slate-100">{country.country_currency}</p>
							</div>
							<div className="rounded-md border border-slate-300/20 bg-black/60 p-2">
								<p className="text-xxs uppercase tracking-wider text-slate-400">Population</p>
								<p className="mt-1 text-xs font-medium text-slate-100">{numberFormatter.format(country.country_population)}</p>
							</div>
							<div className="rounded-md border border-slate-300/20 bg-black/60 p-2">
								<p className="text-xxs uppercase tracking-wider text-slate-400">Land Area</p>
								<p className="mt-1 text-xs font-medium text-slate-100">{numberFormatter.format(country.country_land_area_km2)} km2</p>
							</div>
						</div>
					</article>
				))}
			</div>

			{filteredCountries.length === 0 && (
				<div className="rounded-xl border border-rose-300/30 bg-rose-500/10 p-6 text-center text-sm text-rose-100">
					No countries match your current filters. Try broadening your search.
				</div>
			)}
		</div>
	);
}