import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import PageIntro from "@/components/site_elements/Page_Intro";
import DataForCountries from "@/components/data/Data_For_Countries";

import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

const pageStyles = "bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] text-sky-900";
const pageIntroText = "Our planet has over 170 countries, over land, which covers approximately 29% of the Earth's surface. Each country has its own unique culture, history, and geography. Explore the countries of the world and learn more about the people and places that make up our diverse planet.";
const detailsStyles = "border-2 border-sky-900/80 rounded-lg py-0 bg-transparent group !overflow-x-auto open:pb-4 [&_svg]:open:-rotate-180 [&>summary]:open:border-b-2 [&>summary]:open:border-sky-900/80 w-full xl:mx-auto";
const summaryStyles = "flex justify-between p-4 gap-4 cursor-pointer";
const summaryHeaderStyles = "text-sm lg:text-[14.8px] uppercase truncate overflow-hidden ";
const summaryHeaderSvgStyles = "rotate-0 transform text-slate-700 transition-all duration-300";

export default function PAGE_THE_WORLD() {
	return (
		<div className={`${globalPageStyles} ${pageStyles} text-slate-300`}>
			<Header />
			<main className={`${mainStyles}`}>
				<H1 text={`Countries of the World`} />
				{/*<Image src="/world-map.webp" alt="World Map" width={800} height={450} className="border-[2rem] border-sky-900/50 mb-8" />*/}
				<div className={`flex flex-col items-center w-full lg:gap-8 xl:gap-12 2xl:gap-16`}>
					<div className={`flex flex-col justify-center w-full gap-8 max-w-[80vw]`}>
						<h3 className={`mt-8 mb-4 text-2xl text-center hidden`}>The Planets</h3>
						<PageIntro text={pageIntroText} text_colour="text-sky-900" />
						
						{/* Countries */}
						<div className={`grid flex-wrap grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 items-start motion motion-preset-slide-up motion-delay-700`}>
							{DataForCountries.map((country, index) => (
								<details
									key={index}
									className={`${detailsStyles}`}
								>
									<summary className={summaryStyles}>
										<span className="flex gap-3 overflow-hidden text-ellipsis">
											<span>
												<Image src={`/country-flags/${country.country_code}.svg`} alt={`${country.country_name} flag`} width={30} height={30} />
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
						
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
