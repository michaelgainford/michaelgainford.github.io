import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import DataForSpace from "@/data/to_replace_with_json/Data_For_Space";
import PageIntro from "@/components/site_elements/Page_Intro";

import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";

const pageStyles = "bg-black bg-topo-background text-sky-100";
const DataForPlanets = DataForSpace.filter((planet) => planet.star_or_planet === "planet");
const pageIntroText = "Our Solar System is a vast and fascinating place. It is made up of eight planets, each with its own unique characteristics and features. From the scorching heat of Mercury to the icy cold of Neptune, each planet has its own story to tell. Explore the wonders of our Solar System and learn more about the planets that call it home.";

export default function PAGE_SPACE() {
	return (
		<div className={`${globalPageStyles} ${pageStyles} text-slate-300`}>
			<Header />
			<main className={`${mainStyles}`}>
				<H1 text={`Our Solar System`} />
				<div className={`flex flex-col items-center w-full lg:gap-8 xl:gap-12 2xl:gap-16`}>
					<div className={`flex flex-col justify-center w-full gap-8 max-w-[80vw]`}>
						<h3 className={`mt-8 mb-4 text-2xl text-center hidden`}>The Planets</h3>
						<PageIntro text={pageIntroText} text_colour="text-slate-100" />
						
						<div className={`grid flex-wrap grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8 xl:gap-12 motion motion-preset-slide-up motion-delay-[700ms]`}>
						{DataForPlanets.map((planet, index) => (
							<div key={index} className={`w-full border rounded-lg bg-black border-slate-900 flex flex-col items-center px-4 py-8 space-y-2 text-center min-w-[200px] gap-4 max-sm:w-full [&>h2]:text-base [&>h2]:tracking-wider [&>h2]:text-center [&>h2]:font-bold lg:[&_>h2]:text-lg`}>
								<h2>{planet.name}</h2>
								<div className={`w-full grid grid-cols-1 gap-6 pb-2 md:gap-8 lg:gap-12 [&_>_.stat-description]:text-[10px]`}>

									{/* Image | Start */}
									<div className={`image`}>
										<Image 
										  src={`/space/planets/${planet.slug}.webp`}
										  alt={planet.name}
										  height={400}
										  width={400}
										  className={`mx-auto`}
										/>
									</div>
									{/* Image | End */}

									{/* Stats | Start */}
									<div className={`grid grid-cols-2 gap-x-4 gap-y-8 [&>div]:flex [&>div]:flex-col [&>div]:tracking-wider [&>div]:text-center [&_span]:text-[10px] [&_span]:text-center [&_span]:lowercase pt-8 [&_p]:text-sm [&_p]:font-bold lg:[&_p]:text-lg`}>
										<div>
											<p>{planet.distanceFromSunInMiles.toLocaleString()}</p>
											<span>miles from the Sun</span>
										</div>
										<div>
											<p>{planet.rotationPeriodInHours}</p>
											<span>hours to rotate</span>
										</div>
										<div>
											<p>{planet.size}</p>
											<span>Earths (in size)</span>
										</div>
										<div>
											<p>{planet.moons}</p>
											<span >moons</span>
										</div>
									</div>
									{/* Stats | End */}

								</div>
							</div>
						))}
						</div>
						
					</div>
					<div className={`w-full max-lg:mt-16 solar-system`}>
						<h3 className={`mt-8 text-base mb-4 lg:text-2xl text-center`}>The Solar System</h3>
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
				</div>
			</main>
			<Footer />
		</div>
	);
}
