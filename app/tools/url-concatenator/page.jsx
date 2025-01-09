"use client";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import URLConcatenator from "@/components/my_tools/URLConcatenator";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";

const pageStyles = "bg-slate-900 text-slate-400 bg-brand-background bg-repeat";
const pageIntroText = "A simple tool to take a starting string, a concatenation character, and an ending string to create a URL.";

export default function TOOL_URL_CONCATENATOR() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<Header />
			<main className={`${mainStyles}`}>
				<H1 text={`URL Concatenator`} />
				<PageIntro 
				  text={pageIntroText}
				  classes_text_colour="font-current"
				  classes_text_alignment="text-center! text-balance!"
				  classes_font_sizes="text-xs/5 md:text-sm/6 lg:text-base/6 !xl:text-base/6"
				  classes_font_styling="font-medium tracking-wider"
				  classes_width="max-[80dvw] lg:max-w-[800px]!"
				  classes_margin="!md:-mt-4 mb-12"
				  classes_other=""
				/>

				<div className="flex w-full justify-center text-center">
					<div className="w-full rounded-lg url-maker [&_label]:uppercase [&_label]:text-amber-500/70 [&_label]:text-xxs [&_label]:tracking-wider [&_label]:font-medium [&_label]:text-left">
						<URLConcatenator />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}