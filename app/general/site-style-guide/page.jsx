import { 
	globalPageStyles, 
	brandPageBackground, 
	globalWrapperFixedWidth, 
	brandTextColour, 
	sharedHeadingStyles 
} from "@/variables/Styles";

import Header from "@/components/header/_Header";
import H1_Span from "@/components/typography/H1_Span";
import StyleGuideInfo from "@/components/site_elements/StyleGuideInfo";
import Footer from "@/components/footer/_Footer";

export default function Page_SiteStyleGuide() {
	return (
		<div className={`${globalPageStyles} ${brandPageBackground} ${brandTextColour}`}>
			<Header />
			<main className={`${globalWrapperFixedWidth}`}>
				<div className="flex w-full justify-center text-center max-w-[1800px]">
					<div className="flex flex-col w-full gap-8 xl:gap-y-16 3xl:gap-24 max-lg:mt-8 @container">
						<H1_Span text="Site Style Guide" className={`${sharedHeadingStyles} group-hover/about:border-amber-500/80`} />
						<StyleGuideInfo />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}