import { globalPageStyles, mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import TableOfSitePages from "@/components/TableOfSitePages";

export const metadata = {
	title: `Site Maintenance Tracker`,
	description: `A list of all the pages on this website, along with the last time they were updated.`
};

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const sharedHeadingStyles = `pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit`;

export default function PAGE_ABOUT() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>

				<div className="flex flex-col w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 max-w-[1800px]">

					<H1 text={`Site Maintenance Tracker`} font_sizes={``} other_classes={`${sharedHeadingStyles} max-lg:-mt-4 text-balance !font-light border-none max-md:text-xl xl:mb-0`} />

					<TableOfSitePages />
				</div>

			</main>

			<Footer />

		</div>
	);
}