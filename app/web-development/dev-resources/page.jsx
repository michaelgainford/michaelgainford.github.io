import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import DevResourcesGrid from "@/components/dev_resources/DevResourcesGrid";
import Footer from "@/components/footer/_Footer";
import { 
    globalPageStyles, 
    globalWrapperFixedWidth 
} from "@/variables/Styles";

export const metadata = {
	title: "Dev Resources",
	description: "A collection of some of my favourite web development resources that I use in my standard workflow, for experimenting with new technologies and tools I would like to highlight and share with my fellow Developers.",
};

const customStyles = "bg-graph-paper-background bg-teal-900/90 text-slate-300";
const pageIntroText = "This is a collection of some of my favourite web development resources that I use either in my standard workflow, or for experimenting with new technologies. The list is not exhaustive, but it is a good starting point for anyone looking to expand their toolkit.";

export default function Page_DevResources() {
    return (
        <div className={`${globalPageStyles} ${customStyles}`}>
            <Header />
            <main className={globalWrapperFixedWidth}>
                <H1 text="Dev Resources" />
				<PageIntro 
					text={pageIntroText} 
					text_colour="font-current" 
					font_sizes="text-xs/5 md:text-sm/6 lg:text-base/7`"
					other_classes="max-w-[800px]! text-balance! text-center! !md:-mt-4 !xl:text-base/6" 
                />
				<DevResourcesGrid />
            </main>
        <Footer />
    </div>
  );
}