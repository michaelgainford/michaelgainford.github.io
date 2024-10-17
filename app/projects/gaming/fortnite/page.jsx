import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import DataForFortnite from "@/components/data/Data_For_Fornite";

export default function PAGE_FORTNITE() {
  return (
    <div className={`${globalPageStyles} !bg-topo-background`}>
      	<Header />
      	<main className={`${mainStyles}`}>
			<H1 text={`Fortnite`} />
			<div className={`grid w-full grid-cols-1 gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols hidden`}>
				{DataForFortnite.map((season, index) => (
				<div
					key={index}
					className={`bg-green-900 p-4 flex flex-col justify-end aspect-[1000/563] relative transition group/season duration-300 lg:aspect-[5/3] lg:hover:opacity-100 lg:py-8`}
				>
					<div className={`relative z-20 space-y-2 text-slate-400 group-hover/season:hidden group-hover/season:opacity-100 group/content`}>
						<p className={`text-base font-medium lg:text-2xl`}>Chapter {season.chapter} Season {season.season}</p>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>{season.theme}</p>
						<p className={`text-[10px]`}>({season.startDate} to {season.endDate})</p>
					</div>
					<Image
						src={season.mobileImage}
						alt={season.name}
						width={200}
						height={133}
						className={`absolute inset-0 z-0 w-full h-full md:hidden`}
					/>
					<Image
						src={season.desktopImage}
						alt={season.name}
						width={400}
						height={200}
						className={`absolute inset-0 z-0 w-full h-full max-md:hidden`}
					/>
					<div className={`absolute inset-0 z-10 w-full h-full duration-300 bg-black bg-opacity-60 group-hover/season:bg-opacity-0`}></div>
				</div>
				))}
			</div>

			<h2 className={`text-sm md:text-base lg:text-lg xl:text-xl mb-4 text-left w-full`}>Seasons</h2>
			<div className={`snap-x snap-mandatory overflow-x-auto scrollbar-hide w-full flex gap-4 md:gap-8`}>
				{DataForFortnite.map((season, index) => (
				<div
					key={index}
					className={`flex flex-col justify-start !aspect-[1000/563] relative transition group/season duration-300 min-w-[80dvw] sm:min-w-[70dvw] lg:hover:opacity-100 xl:min-w-[800px] pb-8`}
				>
					<div className={`mb-4 image md:mb-6 lg:mb-8`}>
					<Image
						src={season.mobileImage}
						alt={season.name}
						width={200}
						height={133}
						className={` inset-0 z-0 w-full h-full md:hidden object-fit`}
					/>
					<Image
						src={season.desktopImage}
						alt={season.name}
						width={400}
						height={200}
						className={` inset-0 z-0 w-full h-full max-md:hidden object-fit`}
					/>
					<div className={`absolute inset-0 z-10 w-full h-full duration-300 bg-black bg-opacity-60 group-hover/season:bg-opacity-0`}></div>
					</div>

					<div className={`relative z-20 space-y-2 text-slate-200 invisible group-hover/season:visible group-hover/season:opacity-100 group/content`}>
						<p className={`uppercase text-base font-medium lg:text-2xl`}>Chapter {season.chapter} Season {season.season}</p>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>{season.theme}</p>
						<p className={`text-[10px]`}>({season.startDate} to {season.endDate})</p>
					</div>
				</div>
				))}
			</div>
      	</main>
      	<Footer />
    </div>
  );
}
