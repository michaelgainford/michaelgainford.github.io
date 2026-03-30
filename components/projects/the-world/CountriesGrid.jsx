"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CountriesJSON from "@/data/data_for__countries.json";

const VIEW_MODE_STORAGE_KEY = "countries-grid-view-mode";
const viewModes = ["comfortable", "compact"];

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

	useEffect(() => {
		const storedViewMode = window.localStorage.getItem(VIEW_MODE_STORAGE_KEY);

		if (storedViewMode && viewModes.includes(storedViewMode)) {
			setViewMode(storedViewMode);
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem(VIEW_MODE_STORAGE_KEY, viewMode);
	}, [viewMode]);

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

	const isCompactView = viewMode === "compact";

	const gridClasses =
		isCompactView
			? "grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
			: "grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6";

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
			<div className="sticky top-2 z-20 space-y-4 rounded-xl border border-slate-200/12 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/30 backdrop-blur-md lg:p-6">
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
					<label className="flex flex-col gap-1">
						<span className="text-xxs uppercase tracking-[0.16em] text-slate-400">Search</span>
						<input
							type="text"
							value={searchTerm}
							onChange={(event) => setSearchTerm(event.target.value)}
							placeholder="Country, capital, currency"
							className="rounded-md border border-slate-300/18 bg-slate-950/85 px-3 py-2 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-cyan-300/50"
						/>
					</label>
					<label className="flex flex-col gap-1">
						<span className="text-xxs uppercase tracking-[0.16em] text-slate-400">Continent</span>
						<select
							value={selectedContinent}
							onChange={(event) => setSelectedContinent(event.target.value)}
							className="rounded-md border border-slate-300/18 bg-slate-950/85 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/50"
						>
							{continents.map((continent) => (
								<option key={continent} value={continent}>
									{continent}
								</option>
							))}
						</select>
					</label>
					<label className="flex flex-col gap-1">
						<span className="text-xxs uppercase tracking-[0.16em] text-slate-400">Sort</span>
						<select
							value={sortBy}
							onChange={(event) => setSortBy(event.target.value)}
							className="rounded-md border border-slate-300/18 bg-slate-950/85 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/50"
						>
							<option value="name-asc">Name (A-Z)</option>
							<option value="population-desc">Population (High-Low)</option>
							<option value="area-desc">Land Area (High-Low)</option>
						</select>
					</label>
					<div className="flex flex-col gap-1">
						<span className="text-xxs uppercase tracking-[0.16em] text-slate-400">View</span>
						<div className="grid grid-cols-2 gap-2">
							<button
								type="button"
								onClick={() => setViewMode("comfortable")}
								className={`rounded-md border px-3 py-2 text-xs uppercase tracking-wide transition-all ${
									viewMode === "comfortable"
										? "border-cyan-300/55 bg-cyan-400/15 text-cyan-50"
										: "border-slate-300/18 bg-slate-950/85 text-slate-300 hover:border-slate-300/30"
								}`}
							>
								Comfort
							</button>
							<button
								type="button"
								onClick={() => setViewMode("compact")}
								className={`rounded-md border px-3 py-2 text-xs uppercase tracking-wide transition-all ${
									viewMode === "compact"
										? "border-cyan-300/55 bg-cyan-400/15 text-cyan-50"
										: "border-slate-300/18 bg-slate-950/85 text-slate-300 hover:border-slate-300/30"
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
									? "border-cyan-300/45 bg-cyan-400/14 text-cyan-50"
									: "border-slate-300/18 bg-slate-950/70 text-slate-300 hover:border-slate-300/30"
							}`}
						>
							{item.continent} ({item.count})
						</button>
					))}
				</div>

				<div className="grid grid-cols-2 gap-2 pt-1 md:grid-cols-4">
					<div className="rounded-md border border-slate-300/16 bg-slate-950/68 p-2">
						<p className="text-xxs uppercase tracking-wider text-slate-400">Visible Countries</p>
						<p className="mt-1 text-sm font-semibold text-slate-100">{numberFormatter.format(filteredCountries.length)}</p>
					</div>
					<div className="rounded-md border border-slate-300/16 bg-slate-950/68 p-2">
						<p className="text-xxs uppercase tracking-wider text-slate-400">Visible Population</p>
						<p className="mt-1 text-sm font-semibold text-slate-100">{numberFormatter.format(visiblePopulation)}</p>
					</div>
					<div className="rounded-md border border-slate-300/16 bg-slate-950/68 p-2">
						<p className="text-xxs uppercase tracking-wider text-slate-400">Continents</p>
						<p className="mt-1 text-sm font-semibold text-slate-100">{numberFormatter.format(continents.length - 1)}</p>
					</div>
					<div className="rounded-md border border-slate-300/16 bg-slate-950/68 p-2">
						<p className="text-xxs uppercase tracking-wider text-slate-400">Mode</p>
						<p className="mt-1 text-sm font-semibold text-slate-100">{viewMode}</p>
					</div>
				</div>

				<div className="rounded-md border border-cyan-300/16 bg-cyan-400/8 p-3">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<p className="text-xxs uppercase tracking-[0.16em] text-cyan-50/90">
							Compare Mode: {selectedCountries.length}/3 selected
						</p>
						<button
							type="button"
							onClick={() => setSelectedCountries([])}
							className="rounded-md border border-slate-300/20 bg-slate-950/70 px-2 py-1 text-xxs uppercase tracking-wide text-slate-200 transition-all hover:border-cyan-300/35"
						>
							Clear Selection
						</button>
					</div>
					<p className="mt-2 text-xs text-slate-300/90">
						Select up to 3 countries using the compare button on each card.
					</p>
				</div>
			</div>

			{selectedCountryObjects.length > 0 && (
				<section className="rounded-xl border border-cyan-300/16 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/30 lg:sticky lg:top-28 lg:z-10 lg:p-6">
					<h3 className="mb-4 text-sm uppercase tracking-[0.16em] text-cyan-50/90">
						Country Compare
					</h3>
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
						{selectedCountryObjects.map((country) => (
							<div key={`compare-${country.country_code}`} className="rounded-lg border border-slate-300/16 bg-slate-950/68 p-3">
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

			<div className={`grid items-start ${gridClasses}`}>
				{filteredCountries.map((country, index) => (
					<article
						key={`${country.country_code}-${country.country_name}`}
						className={`group border border-slate-300/16 bg-slate-950/78 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/28 ${
							isCompactView ? "rounded-lg p-3" : "rounded-xl p-4"
						}`}
					>
						<div className={`flex items-start justify-between ${isCompactView ? "mb-3 gap-2" : "mb-4 gap-3"}`}>
							<div className={`flex min-w-0 items-center ${isCompactView ? "gap-2" : "gap-3"}`}>
								<Image
									className="rounded-sm border border-slate-300/30"
									src={`/country-flags/${country.country_code}.svg`}
									alt={`${country.country_name} flag`}
									width={isCompactView ? 24 : 32}
									height={isCompactView ? 18 : 24}
									loading={index > 60 ? "lazy" : "eager"}
								/>
								<div className="min-w-0">
									<h3 className={`truncate font-semibold uppercase tracking-wide text-slate-100 ${
										isCompactView ? "text-xs lg:text-sm" : "text-sm lg:text-[15px]"
									}`}>
										{country.country_name}
									</h3>
									<p className={`truncate uppercase tracking-[0.14em] text-cyan-50/75 ${
										isCompactView ? "text-[10px]" : "text-xxs"
									}`}>
										{country.country_continent}
									</p>
								</div>
							</div>
							<div className={`flex flex-col items-end ${isCompactView ? "gap-1.5" : "gap-2"}`}>
								<span className={`rounded-full border border-slate-300/18 bg-slate-950/72 uppercase tracking-wide text-slate-300 ${
									isCompactView ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-xxs"
								}`}>
									{country.country_code}
								</span>
								<button
									type="button"
									onClick={() => handleToggleCompare(country.country_code)}
									disabled={
										selectedCountries.length >= 3 && !selectedCountries.includes(country.country_code)
									}
									className={`rounded-md border uppercase tracking-wide transition-all ${
										isCompactView ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-xxs"
									} ${
										selectedCountries.includes(country.country_code)
											? "border-cyan-300/45 bg-cyan-400/14 text-cyan-50"
											: "border-slate-300/18 bg-slate-950/72 text-slate-300 hover:border-cyan-300/30"
									} disabled:cursor-not-allowed disabled:opacity-40`}
								>
									{selectedCountries.includes(country.country_code)
										? isCompactView
											? "On"
											: "Selected"
										: isCompactView
											? "Add"
											: "Compare"}
								</button>
							</div>
						</div>

						{isCompactView ? (
							<div className="space-y-1.5 text-[11px] text-slate-200/90">
								<p className="truncate">
									<span className="mr-1 uppercase tracking-wider text-slate-500">Capital</span>
									{country.country_capital}
								</p>
								<p className="truncate">
									<span className="mr-1 uppercase tracking-wider text-slate-500">Currency</span>
									{country.country_currency}
								</p>
								<p>
									<span className="mr-1 uppercase tracking-wider text-slate-500">Population</span>
									{numberFormatter.format(country.country_population)}
								</p>
								<p>
									<span className="mr-1 uppercase tracking-wider text-slate-500">Area</span>
									{numberFormatter.format(country.country_land_area_km2)} km2
								</p>
							</div>
						) : (
							<div className="grid grid-cols-2 gap-2 text-left">
								<div className="rounded-md border border-slate-300/16 bg-slate-950/68 p-2">
									<p className="text-xxs uppercase tracking-wider text-slate-500">Capital</p>
									<p className="mt-1 truncate text-xs font-medium text-slate-100">{country.country_capital}</p>
								</div>
								<div className="rounded-md border border-slate-300/16 bg-slate-950/68 p-2">
									<p className="text-xxs uppercase tracking-wider text-slate-500">Currency</p>
									<p className="mt-1 truncate text-xs font-medium text-slate-100">{country.country_currency}</p>
								</div>
								<div className="rounded-md border border-slate-300/16 bg-slate-950/68 p-2">
									<p className="text-xxs uppercase tracking-wider text-slate-500">Population</p>
									<p className="mt-1 text-xs font-medium text-slate-100">{numberFormatter.format(country.country_population)}</p>
								</div>
								<div className="rounded-md border border-slate-300/16 bg-slate-950/68 p-2">
									<p className="text-xxs uppercase tracking-wider text-slate-500">Land Area</p>
									<p className="mt-1 text-xs font-medium text-slate-100">{numberFormatter.format(country.country_land_area_km2)} km2</p>
								</div>
							</div>
						)}
					</article>
				))}
			</div>

			{filteredCountries.length === 0 && (
				<div className="rounded-xl border border-cyan-300/16 bg-cyan-400/8 p-6 text-center text-sm text-slate-100">
					No countries match your current filters. Try broadening your search.
				</div>
			)}
		</div>
	);
}