import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import DataForFortnite from "@/components/data/Data_For_Fornite";

{/* Variables */}
const season1Data = DataForFortnite.filter(season => season.chapter === 1);
const season2Data = DataForFortnite.filter(season => season.chapter === 2);
const season3Data = DataForFortnite.filter(season => season.chapter === 3);
const season4Data = DataForFortnite.filter(season => season.chapter === 4);
const season5Data = DataForFortnite.filter(season => season.chapter === 5);

{/* Styles */}
const snapContainerStyles = `snap-x snap-mandatory overflow-x-auto overflow-y-auto no-scrollbar w-full flex gap-4 mb-8 md:gap-8`;
const snapSlideStyles = `flex flex-col justify-start !aspect-[1000/563] relative transition group/season duration-300 min-w-[80dvw] sm:min-w-[70dvw] lg:hover:opacity-100 xl:min-w-[800px] pb-8`;
const snapSlideImageStyles = `absolute inset-0 z-0 w-full h-full object-fit`;
const snapSlideImageOverlayStyles = `absolute inset-0 z-10 w-full h-full duration-300 bg-black bg-opacity-60 group-hover/season:bg-opacity-0`;
//const snapSlideSeasonDetails = `mg-test space-y-2 text-slate-200 lg:invisible group-hover/season:visible group-hover/season:opacity-100 group/content`;

export default function PAGE_FORTNITE() {
  return (
    <div className={`${globalPageStyles} !bg-topo-background`}>
      	<Header />
      	<main className={`${mainStyles}`}>
			<H1 text={`Fortnite`} />

			{/* Commented out
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
			*/}


			{/* Chapter 1 */}
			<h2 className={snapContainerStyles}>Chapters</h2>
			<h3>Chapter 1</h3>
			<div className={snapContainerStyles}>
				{season1Data.map((season, index) => (
				<div 
				  key={index}
				  className={snapSlideStyles}
				>
					<div className={`mb-4 md:mb-6 lg:mb-8`}>
						<Image
						  src={season.mobileImage}
						  alt={season.name}
						  width={200}
						  height={133}
						  className={`${snapSlideImageStyles} md:hidden`}
						/>
						<Image 
						  src={season.desktopImage}
						  alt={season.name}
						  width={400}
						  height={200}
						  className={`${snapSlideImageStyles} max-md:hidden`}
						/>
						<div className={snapSlideImageOverlayStyles}></div>
					</div>
					<div className={``}>
						<p className={`uppercase text-base font-medium lg:text-2xl`}>Chapter {season.chapter} Season {season.season}</p>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>{season.theme}</p>
						<p className={`text-[10px]`}>({season.startDate} to {season.endDate})</p>
					</div>
				</div>
				))}
			</div>

			<h3>Season 2</h3>
			<div className={snapContainerStyles}>
				{season2Data.map((season, index) => (
				<div
					key={index}
					className={snapSlideStyles}
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
				</div>
				))}	
			</div>

			<h3>Season 3</h3>
			<div className={snapContainerStyles}>
				{season3Data.map((season, index) => (
				<div
					key={index}
					className={snapSlideStyles}
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
				</div>
				))}	
			</div>

			<h3>Season 4</h3>
			<div className={snapContainerStyles}>
			{season4Data.map((season, index) => (
			<div
				key={index}
				className={snapSlideStyles}
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
			</div>
			))}	
			</div>

			<h3>Season 5</h3>
			<div className={snapContainerStyles}>
				{season5Data.map((season, index) => (
				<div
					key={index}
					className={snapSlideStyles}
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
				</div>
				))}	
			</div>
      	</main>
      	<Footer />
    </div>
  );
}
