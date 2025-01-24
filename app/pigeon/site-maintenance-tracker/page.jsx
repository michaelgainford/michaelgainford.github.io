import { 
	globalPageStyles, 
	brandPageBackground, 
	globalWrapperFixedWidth, 
	brandTextColour, 
	brandHeadingStyles 
} from "@/variables/Styles";
import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import TableOfSitePages from "@/components/TableOfSitePages";
import Footer from "@/components/footer/_Footer";

export const metadata = {
	title: "Site Maintenance Tracker",
	description: "A list of all the pages on this website, along with the last time they were updated."
};

export default function Page_SiteMaintenanceTracker() {
	return (
		<div className={`${globalPageStyles} ${brandPageBackground} ${brandTextColour}`}>
			<Header />
			<main className={`${globalWrapperFixedWidth}`}>
				<div className={`flex flex-col w-full justify-center text-center max-w-[1800px]`}>
					<H1 
					  text={`Site Maintenance Tracker`} 
					  font_sizes={``} 
					  other_classes={`${brandHeadingStyles} max-lg:-mt-4 text-balance !text-sm lg:!text-xl 2xl:!text-3xl xl:!mb-0 border-none text-center flex justify-center`} 
					/>
					<TableOfSitePages />
				</div>
			</main>
			<Footer />
		</div>
	);
}