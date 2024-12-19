import Image from "next/image";
import ForniteData from "@/data/data_for__fortnite.json";
const Chapters = ForniteData.Chapters;

{/* Styles - Headings */}
const subSectionHeadingStyles = "border-2 px-4 py-3 mb-8 text-slate-900 uppercase tracking-widest lg:mb-8 lg:mt-6 lg:font-bold mt-8 text-[16px]!";

{/* Styles - Snap */}
const snapContainerStyles = "snap-x snap-mandatory overflow-x-auto overflow-y-auto no-scrollbar w-full flex gap-4 md:gap-8";
const snapSlideStyles = "flex flex-col border-2 justify-start object-cover aspect-3/2 relative transition group/season duration-300 min-w-[80dvw] sm:min-w-[70dvw] md:aspect-1000/563! lg:hover:opacity-100 xl:min-w-[640px] max-w-[600px] snap-always snap-start cursor-pointer overflow-hidden";
const snapSlideImageStyles = "relative inset-0 z-0 w-full h-full object-fit z-1 max-w-[80dvw]";
const snapSlideImageOverlayStyles = "absolute translate-y-32 bottom-0 w-full bg-black/80 z-10 w-full xl:h-[120px] mt-auto duration-300 bg-black bg-opacity-0 lg:bg-opacity-60 hidden group-hover/season:block transition w-full flex! items-center justify-center group-hover/season:bottom-0 transform group-hover/season:translate-y-0 z-0 text-slate-300 text-xxs lg:text-sm py-2 text-center group-hover/season:opacity-100 flex-col";

export default function COMPONENT_FORTNITE_CHAPTERS_DATA () {
	return (
		<div className="w-full flex flex-col items-center">
			<h2 className={subSectionHeadingStyles}>Chapters</h2>
			{Chapters.map((chapter, index) => (
				<div key={index} className="w-full mb-8 gap-4 flex flex-col md:flex-row lg:mb-32 pl-[4%]">
					<div className="min-w-[150px] max-w-[150px] flex flex-col justify-center text-center md:mr-4">
						<div className=" flex flex-col items-start md:items-center md:gap-4">
							<h3 className="uppercase text-sm/4 flex flex-row md:flex-col md:tracking-widest font-bold max-md:gap-1">
								<span>Chapter</span>
								<span className="text-sm/4 md:text-4xl">{ chapter.chapter }</span>
							</h3>
							<div className="text-[10px]">({new Date(chapter.seasons[0].start_date).toLocaleDateString('en-GB')} to {new Date(chapter.seasons[chapter.seasons.length - 1].end_date).toLocaleDateString('en-GB')})</div>
						</div>
					</div>
					<div className={snapContainerStyles}>
						{chapter.seasons.map((season, index) => (
							<div key={index} className={snapSlideStyles}>
								<Image
									src={season.mobile_image}
									alt={season.name}
									width={600}
									height={338}
									className={snapSlideImageStyles}
								/>
								<div className={snapSlideImageOverlayStyles}>
									<div className="uppercase chapter-and-season lg:text-base">
										Chapter {season.chapter}, Season {season.season}
									</div>
									<div className="run-dates">
										{new Date(season.start_date).toLocaleDateString('en-GB')} to {new Date(season.end_date).toLocaleDateString('en-GB')}
									</div>
									<div className="theme">({season.theme})</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}