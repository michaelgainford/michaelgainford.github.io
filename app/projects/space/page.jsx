import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import DataForSpace from "@/components/data/Data_For_Space";
const pageStyles = "bg-black bg-topo-background text-sky-100";
const DataForPlanets = DataForSpace.filter((planet) => planet.star_or_planet === "planet");

export default function PAGE_SPACE() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<MainHeader />
			<main className={`${mainStyles}`}>
				<H1 text={`Space`} />
				<div className={`lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-16`}>
				<div className={`w-full max-lg:mt-16 solar-system lg:col-span-1 lg:w-full lg:order-2`}>
					<h3 className={`mt-8 mb-4 text-2xl text-center`}>The Solar System</h3>
					<ol>
					{DataForSpace.map((planet, index) => (
						<li
						key={index}
						className={planet.name.toLowerCase()}
						data-order={planet.order}
						data-handle={planet.name.toLowerCase()}
						></li>
					))}
					</ol>
				</div>
				<div className={`flex flex-wrap justify-center w-full gap-8 max-w-[80vw] lg:col-span-1 lg:order-1`}>
					<h3 className={`mt-8 mb-4 text-2xl text-center`}>The Planets</h3>
					<ul className={`grid flex-wrap grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8 xl:gap-12`}>
					{DataForPlanets.map((planet, index) => (
						<li
						key={index}
						className={`w-full p-4 space-y-2 text-center border rounded-lg border-slate-600 bg-slate-800 min-w-[200px] max-sm:w-full flex flex-col items-center`}
						>
						<h2 className={`mb-4 text-xl tracking-wider text-center uppercase`}>
							{planet.name}
						</h2>
						<span className={`grid grid-cols-2 gap-4`}>
							<span className={`flex flex-col tracking-wider text-center`}>
								<span className="">
									{planet.distanceFromSunInMiles.toLocaleString()}
								</span>
								<span className={`text-[10px]`}>miles from the Sun</span>
							</span>
							<span className={`flex flex-col tracking-wider text-center`}>
								<span>{planet.rotationPeriodInHours}</span>
								<span className={`text-[10px]`}>hours to rotate</span>
							</span>
							<span className={`flex flex-col tracking-wider text-center`}>
								<span>{planet.size}</span>
								<span className={`text-[10px]`}>Earths</span>
							</span>
							<span className={`flex flex-col tracking-wider text-center text-[12px]`}>
								<span>{planet.moons}</span>
								<span className={`text-[10px]`}>moons</span>
							</span>
						</span>
						</li>
					))}
					</ul>
				</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
