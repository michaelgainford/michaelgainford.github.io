import Image from 'next/image';
import CountriesJSON from "@/data/data_for__countries.json";
const Countries = CountriesJSON.Countries;
const sortedCountries = Countries.sort((a, b) => a.country_name.localeCompare(b.country_name));
const detailsStyles = "border-2 border-sky-900/80 rounded-lg py-0 bg-[#00C9FF] group overflow-x-auto! open:pb-4 open:[&_svg]:-rotate-180 open:[&>summary]:border-b-2 open:[&>summary]:border-sky-900/80 w-full xl:mx-auto";
const summaryStyles = "flex justify-between p-4 gap-4 cursor-pointer";
const summaryHeaderStyles = "text-sm lg:text-[14.8px] uppercase truncate overflow-hidden ";
const summaryHeaderSvgStyles = "rotate-0 transform text-slate-700 transition-all duration-300";

export default function Component_CountriesGrid() {
	return (
		<div className="grid flex-wrap grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 items-start">
			{sortedCountries.map((country, index) => (
				<details
					key={index}
					className={`${detailsStyles}`}
				>
					<summary className={summaryStyles}>
						<span className="flex gap-3 overflow-hidden text-ellipsis">
							<span>
								<Image 
									className="border border-sky-900/80" 
									src={`/country-flags/${country.country_code}.svg`} 
									alt={`${country.country_name} flag`} 
									width={30} 
									height={30} 
									loading={index > 50 ? "lazy" : "eager"}
								/>
							</span>
							<span className={summaryHeaderStyles}>
								<span>{country.country_name}</span>
							</span>
						</span>
						<svg className={summaryHeaderSvgStyles} fill={`none`} height={`20`} width={`20`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2`} viewBox={`0 0 24 24`}>
							<polyline points={`6 9 12 15 18 9`}></polyline>
						</svg>
					</summary>
					<div className="px-4 details-content">
						<p className={`text-left text-sm mt-4`}>
							<strong>Capital:</strong> {country.country_capital}
						</p>
						<p className={`text-left text-sm`}>
							<strong>Continent/Region:</strong> {country.country_continent}
						</p>
						<p className={`text-left text-sm`}>
							<strong>Population:</strong> {country.country_population}
						</p>
						<p className={`text-left text-sm`}>
							<strong>Land Area:</strong> {country.country_land_area_km2} km²
						</p>
						<p className={`text-left text-sm`}>
							<strong>Currency:</strong> {country.country_currency}
						</p>
					</div>
				</details>
			))}
		</div>
	)
}