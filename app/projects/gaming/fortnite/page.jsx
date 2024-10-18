import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import DataForFortnite from "@/components/data/Data_For_Fornite";

{/* Variables */}
const chapter1Data = DataForFortnite.filter(chapter => chapter.chapter === 1);
const chapter2Data = DataForFortnite.filter(chapter => chapter.chapter === 2);
const chapter3Data = DataForFortnite.filter(chapter => chapter.chapter === 3);
const chapter4Data = DataForFortnite.filter(chapter => chapter.chapter === 4);
const chapter5Data = DataForFortnite.filter(chapter => chapter.chapter === 5);

// put the above 5 in an array
const allChapterData = [chapter1Data, chapter2Data, chapter3Data, chapter4Data, chapter5Data];

{/* Styles */}
const subSectionHeadingStyles = `mb-4 text-blue-400 uppercase text-sm tracking-widest border-b border-current lg:text-lg mt-8`;
const snapContainerStyles = `snap-x snap-mandatory overflow-x-auto overflow-y-auto no-scrollbar w-full flex gap-4 mb-8 md:gap-8 lg:mb-16 xl:mb-24`;
const snapSlideStyles = `flex flex-col justify-start !aspect-[1000/563] relative transition group/season duration-300 min-w-[80dvw] sm:min-w-[70dvw] lg:hover:opacity-100 xl:min-w-[800px] pb-8`;
const snapSlideImageStyles = `relative inset-0 z-0 w-full h-full object-fit`;
const snapSlideImageOverlayStyles = `absolute inset-0 z-10 w-full h-full duration-300 bg-black bg-opacity-60 group-hover/season:bg-opacity-0`;
//const snapSlideSeasonDetails = `mg-test space-y-2 text-slate-200 lg:invisible group-hover/season:visible group-hover/season:opacity-100 group/content`;

export default function PAGE_FORTNITE() {
  return (
    <div className={`${globalPageStyles} !bg-topo-background`}>
      	<Header />
      	<main className={`${mainStyles}`}>
			<H1 text={`Fortnite`} />
			<h2 className={subSectionHeadingStyles}>Lore</h2>
			<p className={`mx-auto mb-8 text-xs/5 md:text-sm/6 tracking-wider lg:max-w-[80%] xl:mb-16 xl:text-lg`}>Fortnite is a free-to-play Battle Royale game that has taken the world by storm. It is available on all platforms and has a huge following. The game is known for its unique building mechanics and fun gameplay. Fortnite has a unique art style and is constantly updated with new content. The game has a competitive scene with tournaments and events. Fortnite is a cultural phenomenon and has become a huge part of popular culture.</p>

			<h2 className={subSectionHeadingStyles}>Chapters</h2>
			{/* Chapter 1 */}
			<div className={`flex flex-col justify-center max-md:mt-8 md:hidden w-full`}>
				<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
					<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 1</h3>
					<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
					<p className={`text-[10px]`}>(October 15, 2019 to February 20, 2020)</p>
				</div>
			</div>
			<div className={snapContainerStyles}>
				<div className={`min-w-[200px] flex flex-col justify-center max-md:hidden`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4`}>
						<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 1</h3>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
						<p className={`text-[10px]`}>(October 15, 2019 to February 20, 2020)</p>
					</div>
				</div>
				{chapter1Data.map((season, index) => (
				<div
					key={index}
					className={snapSlideStyles}
				>
					<Image
						src={season.mobileImage}
						alt={season.name}
						width={200}
						height={133}
						className={snapSlideImageStyles}
					/>
					<div className={snapSlideImageOverlayStyles}></div>
				</div>
				))}
			</div>

			{/* Chapter 2 */}
			<div className={`flex flex-col justify-center max-md:mt-8 md:hidden w-full`}>
				<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
					<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 2</h3>
					<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
					<p className={`text-[10px]`}>(February 20, 2020 to June 17, 2020)</p>
				</div>
			</div>
			<div className={snapContainerStyles}>
				<div className={`min-w-[200px] flex flex-col justify-center max-md:hidden`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4`}>
						<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 2</h3>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
						<p className={`text-[10px]`}>(February 20, 2020 to June 17, 2020)</p>
					</div>
				</div>
				{chapter2Data.map((season, index) => (
				<div
					key={index}
					className={snapSlideStyles}
				>
					<Image
						src={season.mobileImage}
						alt={season.name}
						width={200}
						height={133}
						className={snapSlideImageStyles}
					/>
					<div className={snapSlideImageOverlayStyles}></div>
				</div>
				))}
			</div>

			{/* Chapter 3 */}
			<div className={`flex flex-col justify-center max-md:mt-8 md:hidden w-full`}>
				<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
					<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 3</h3>
					<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
					<p className={`text-[10px]`}>(June 17, 2020 to August 27, 2020)</p>
				</div>
			</div>
			<div className={snapContainerStyles}>
				<div className={`min-w-[200px] flex flex-col justify-center max-md:hidden`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4`}>
						<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 3</h3>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
						<p className={`text-[10px]`}>(June 17, 2020 to August 27, 2020)</p>
					</div>
				</div>
				{chapter3Data.map((season, index) => (
				<div
					key={index}
					className={snapSlideStyles}
				>
					<Image
						src={season.mobileImage}
						alt={season.name}
						width={200}
						height={133}
						className={snapSlideImageStyles}
					/>
					<div className={snapSlideImageOverlayStyles}></div>
				</div>
				))}
			</div>

			{/* Chapter 4 */}
			<div className={`flex flex-col justify-center max-md:mt-8 md:hidden w-full`}>
				<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
					<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 4</h3>
					<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
					<p className={`text-[10px]`}>(August 27, 2020 to December 1, 2020)</p>
				</div>
			</div>
			<div className={snapContainerStyles}>
				<div className={`min-w-[200px] flex flex-col justify-center max-md:hidden`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4`}>
						<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 4</h3>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
						<p className={`text-[10px]`}>(August 27, 2020 to December 1, 2020)</p>
					</div>
				</div>
				{chapter4Data.map((season, index) => (
				<div
					key={index}
					className={snapSlideStyles}
				>
					<Image
						src={season.mobileImage}
						alt={season.name}
						width={200}
						height={133}
						className={snapSlideImageStyles}
					/>
					<div className={snapSlideImageOverlayStyles}></div>
				</div>
				))}
			</div>

			{/* Chapter 5 */}
			<div className={`flex flex-col justify-center max-md:mt-8 md:hidden w-full`}>
				<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
					<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 5</h3>
					<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
					<p className={`text-[10px]`}>(December 1, 2020 to March 16, 2021)</p>
				</div>
			</div>
			<div className={snapContainerStyles}>
				<div className={`min-w-[200px] flex flex-col justify-center max-md:hidden`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4`}>
						<h3 className={`uppercase text-base font-medium lg:text-2xl`}>Chapter 5</h3>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>The Island</p>
						<p className={`text-[10px]`}>(December 1, 2020 to March 16, 2021)</p>
					</div>
				</div>
				{chapter5Data.map((season, index) => (
				<div
					key={index}
					className={snapSlideStyles}
				>
					<Image
						src={season.mobileImage}
						alt={season.name}
						width={200}
						height={133}
						className={snapSlideImageStyles}
					/>
					<div className={snapSlideImageOverlayStyles}></div>
				</div>
				))}
			</div>
      	</main>
      	<Footer />
    </div>
  );
}
