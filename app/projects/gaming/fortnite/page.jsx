import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import DataForFortnite from "@/components/data/Data_For_Fornite";
import IconFortnite from "@/components/icons/IconFortniteName";

{/* Variables */}
const chapter1Data = DataForFortnite.filter(chapter => chapter.chapter === 1);
const chapter2Data = DataForFortnite.filter(chapter => chapter.chapter === 2);
const chapter3Data = DataForFortnite.filter(chapter => chapter.chapter === 3);
const chapter4Data = DataForFortnite.filter(chapter => chapter.chapter === 4);
const chapter5Data = DataForFortnite.filter(chapter => chapter.chapter === 5);

// put the above 5 in an array
// const allChapterData = [chapter1Data, chapter2Data, chapter3Data, chapter4Data, chapter5Data];

const chapter1StartDate = "24/10/2017";
const chapter1EndDate = "13/10/2019";
const chapter2StartDate = "15/10/2020";
const chapter2EndDate = "05/12/2021";
const chapter3StartDate = "05/12/2021";
const chapter3EndDate = "04/12/2022";
const chapter4StartDate = "04/12/2022";
const chapter4EndDate = "03/12/2023";
const chapter5StartDate = "03/12/2023";
const chapter5EndDate = "02/12/2024";

{/* Styles - Page */}
const pageTextColour = `text-slate-900`;
const subSectionHeadingStyles = `mb-8 text-slate-100 uppercase text-sm tracking-widest underline decoration-4 underline-offset-8 lg:mb-8 lg:text-lg lg:mt-6`;
{/* Styles - Snap */}
const snapContainerStyles = `snap-x snap-mandatory overflow-x-auto overflow-y-auto no-scrollbar w-full flex gap-4 md:gap-8`;
const snapSlideStyles = `flex flex-col border-2 justify-start object-cover aspect-3/2 relative transition group/season duration-300 min-w-[80dvw] sm:min-w-[70dvw] md:!aspect-[1000/563] lg:hover:opacity-100 xl:min-w-[800px] snap-always snap-center`;
const snapSlideImageStyles = `relative inset-0 z-0 w-full h-full object-fit`;
const snapSlideImageOverlayStyles = `absolute bottom-0 w-full bg-black/80 z-10 w-full xl:h-[120px] mt-auto duration-300 bg-black bg-opacity-0 lg:bg-opacity-60 group-hover/season:bg-opacity-0 lg:hidden`;


{/* Content */}
const pageIntroText = `Fortnite is a free-to-play Battle Royale game that has taken the world by storm. It is available on all platforms and has a huge following. The game is known for its unique building mechanics and fun gameplay. Fortnite has a unique art style and is constantly updated with new content. The game has a competitive scene with tournaments and events. Fortnite is a cultural phenomenon and has become a huge part of popular culture.`;

export default function PAGE_FORTNITE() {
  return (
    <div className={`${globalPageStyles} bg-gradient-to-br from-fn-dark-blue from-30% to-fn-light-blue ${pageTextColour}`}>
      	<Header />
      	<main className={`${mainStyles}`}>
			<IconFortnite classes={`w-64 h-auto mt-4 mb-12 lg:mb-12 lg:w-96 xl:w-[420px] xl:mb-20 2xl:w-[500px]`} fill={`fill-slate-900`} />
			<span className={`hidden`}><H1 text={`Fortnite`} /></span>
			<h2 className={`${subSectionHeadingStyles} mt-8`}>Lore</h2>
			<p 
			  className={`mx-auto mb-8 text-slate-900 font-medium text-xs/5 md:text-sm/6 tracking-wider lg:max-w-[80%] xl:mb-16 xl:text-lg`}>
				{pageIntroText}
			</p>
			<div className={`w-full flex flex-col items-center`}>
				<h2 className={`${subSectionHeadingStyles} mt-8`}>Chapters</h2>
				{/* Chapter 1 */}

				{/* Mobile Chapter Overview | Start */}
				<div className={`flex flex-col w-full justify-center mb-4 pr-4 max-md:mt-4 md:hidden  md:mb-6 lg:mb-8 `}>
					<h3 className={`uppercase text-sm/4 font-bold`}>Chapter 1</h3>
					<p className={`text-[10px]`}>({`${chapter1StartDate} to ${chapter1EndDate}`})</p>
				</div>
				{/* Mobile Chapter Overview | End */}

				<div className={`w-full mb-8 flex lg:mb-32`}>
					{/* Desktop | Start */}
					<div className={`min-w-[150px] max-w-[150px] flex flex-col justify-center max-md:hidden text-center`}>
						<div className={`mb-4 pr-4 flex flex-col gap-4 md:mb-6 lg:mb-8`}>
							<h3 className={`flex flex-col text-xs uppercase tracking-widest font-bold lg:text-sm`}>
								<span>Chapter</span>
								<span className={`text-4xl`}>1</span>
							</h3>
							<p className={`text-[10px]`}>({`${chapter1StartDate} to ${chapter1EndDate}`})</p>
						</div>
					</div>
					{/* Desktop | End */}
					{/* Snap Container | Start */}
					<div className={snapContainerStyles}>
						{chapter1Data.map((season, index) => (
						<div
						  key={index}
						  className={`${snapSlideStyles} relative`}
						>
							<Image
							  src={season.mobileImage}
							  alt={season.name}
							  width={600}
							  height={338}
							  className={snapSlideImageStyles}
							/>
							<div className={`${snapSlideImageOverlayStyles} text-slate-300 text-xxs py-2 text-center`}>C{season.chapter}, S{season.season}: { season.startDate } to { season.endDate } ({season.theme})</div>
						</div>
						))}
					</div>
					{/* Snap Container | End */}
				</div>
				{/* Chapter 1 */}

				{/* Mobile | Start */}
				<div className={`flex flex-col justify-center max-md:mt-4 md:hidden w-full`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
						<h3 className={`uppercase text-sm/4 font-bold`}>Chapter 2</h3>
						<p className={`text-[10px]`}>({`${chapter2StartDate} to ${chapter2EndDate}`})</p>
					</div>
				</div>
				{/* Mobile | End */}

				<div className={`w-full mb-8 flex lg:mb-32`}>
					{/* Desktop | Start */}
					<div className={`min-w-[150px] max-w-[150px] flex flex-col justify-center max-md:hidden text-center`}>
						<div className={`mb-4 pr-4 flex flex-col gap-4 md:mb-6 lg:mb-8`}>
							<h3 className={`flex flex-col text-xs uppercase tracking-widest font-bold lg:text-sm`}>
								<span>Chapter</span>
								<span className={`text-4xl`}>2</span>
							</h3>
							<p className={`text-[10px]`}>({`${chapter2StartDate} to ${chapter2EndDate}`})</p>
						</div>
					</div>
					{/* Desktop | End */}
					{/* Snap Container | Start */}
					<div className={snapContainerStyles}>
						{chapter2Data.map((season, index) => (
						<div
						  key={index}
						  className={snapSlideStyles}
						>
							<Image
							  src={season.mobileImage}
							  alt={season.name}
							  width={600}
							  height={338}
							  className={snapSlideImageStyles}
							/>
							<div className={`${snapSlideImageOverlayStyles} text-slate-300 text-xxs py-2 text-center`}>C{season.chapter}, S{season.season}: { season.startDate } to { season.endDate } ({season.theme})</div>
						</div>
						))}
					</div>
					{/* Snap Container | End */}
				</div>


				{/* Chapter 1 */}

				{/* Mobile | Start */}
				<div className={`flex flex-col justify-center max-md:mt-4 md:hidden w-full`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
						<h3 className={`uppercase text-sm/4 font-bold`}>Chapter 3</h3>
						<p className={`text-[10px]`}>({`${chapter3StartDate} to ${chapter3EndDate}`})</p>
					</div>
				</div>
				{/* Mobile | End */}

				<div className={`w-full mb-8 flex lg:mb-32`}>
					{/* Desktop | Start */}
					<div className={`min-w-[150px] max-w-[150px] flex flex-col justify-center max-md:hidden text-center`}>
						<div className={`mb-4 pr-4 flex flex-col gap-4 md:mb-6 lg:mb-8`}>
							<h3 className={`flex flex-col text-xs uppercase tracking-widest font-bold lg:text-sm`}>
								<span>Chapter</span>
								<span className={`text-4xl`}>3</span>
							</h3>
							<p className={`text-[10px]`}>({`${chapter3StartDate} to ${chapter3EndDate}`})</p>
						</div>
					</div>
					{/* Desktop | End */}
					{/* Snap Container | Start */}
					<div className={snapContainerStyles}>
						{chapter3Data.map((season, index) => (
						<div
						  key={index}
						  className={snapSlideStyles}
						>
							<Image
							  src={season.mobileImage}
							  alt={season.name}
							  width={600}
							  height={338}
							  className={snapSlideImageStyles}
							/>
							<div className={`${snapSlideImageOverlayStyles} text-slate-300 text-xxs py-2 text-center`}>C{season.chapter}, S{season.season}: { season.startDate } to { season.endDate } ({season.theme})</div>
						</div>
						))}
					</div>
					{/* Snap Container | End */}
				</div>


				{/* Chapter 1 */}

				{/* Mobile | Start */}
				<div className={`flex flex-col justify-center max-md:mt-4 md:hidden w-full`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
						<h3 className={`uppercase text-sm/4 font-bold`}>Chapter 4</h3>
						<p className={`text-[10px]`}>({`${chapter4StartDate} to ${chapter4EndDate}`})</p>
					</div>
				</div>
				{/* Mobile | End */}

				<div className={`w-full mb-8 flex lg:mb-32`}>
					{/* Desktop | Start */}
					<div className={`min-w-[150px] max-w-[150px] flex flex-col justify-center max-md:hidden text-center`}>
						<div className={`mb-4 pr-4 flex flex-col gap-4 md:mb-6 lg:mb-8`}>
							<h3 className={`flex flex-col text-xs uppercase tracking-widest font-bold lg:text-sm`}>
								<span>Chapter</span>
								<span className={`text-4xl`}>4</span>
							</h3>
							<p className={`text-[10px]`}>({`${chapter4StartDate} to ${chapter4EndDate}`})</p>
						</div>
					</div>
					{/* Desktop | End */}
					{/* Snap Container | Start */}
					<div className={snapContainerStyles}>
						{chapter4Data.map((season, index) => (
						<div
						  key={index}
						  className={snapSlideStyles}
						>
							<Image
							  src={season.mobileImage}
							  alt={season.name}
							  width={600}
							  height={338}
							  className={snapSlideImageStyles}
							/>
							<div className={`${snapSlideImageOverlayStyles} text-slate-300 text-xxs py-2 text-center`}>C{season.chapter}, S{season.season}: { season.startDate } to { season.endDate } ({season.theme})</div>
						</div>
						))}
					</div>
					{/* Snap Container | End */}
				</div>


				{/* Chapter 1 */}

				{/* Mobile | Start */}
				<div className={`flex flex-col justify-center max-md:mt-4 md:hidden w-full`}>
					<div className={`mb-4 md:mb-6 lg:mb-8 pr-4 w-full`}>
						<h3 className={`uppercase text-sm/4 font-bold`}>Chapter 5</h3>
						<p className={`text-[10px]`}>({`${chapter5StartDate} to ${chapter5EndDate}`})</p>
					</div>
				</div>
				{/* Mobile | End */}

				<div className={`w-full mb-8 flex`}>
					{/* Desktop | Start */}
					<div className={`min-w-[150px] max-w-[150px] flex flex-col justify-center max-md:hidden text-center`}>
						<div className={`mb-4 pr-4 flex flex-col gap-4 md:mb-6 lg:mb-8`}>
							<h3 className={`flex flex-col text-xs uppercase tracking-widest font-bold lg:text-sm`}>
								<span>Chapter</span>
								<span className={`text-4xl`}>5</span>
							</h3>
							<p className={`text-[10px]`}>({`${chapter5StartDate} to ${chapter5EndDate}`})</p>
						</div>
					</div>
					{/* Desktop | End */}
					{/* Snap Container | Start */}
					<div className={snapContainerStyles}>
						{chapter5Data.map((season, index) => (
						<div
						  key={index}
						  className={snapSlideStyles}
						>
							<Image
							  src={season.mobileImage}
							  alt={season.name}
							  width={600}
							  height={338}
							  className={snapSlideImageStyles}
							/>
							<div className={`${snapSlideImageOverlayStyles} text-slate-300 text-xxs py-2 text-center`}>C{season.chapter}, S{season.season}: { season.startDate } to { season.endDate } ({season.theme})</div>
						</div>
						))}
					</div>
					{/* Snap Container | End */}
				</div>
			</div>
      	</main>
      	<Footer />
    </div>
  );
}
