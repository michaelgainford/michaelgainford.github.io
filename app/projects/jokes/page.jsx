import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import Page_Intro from "@/components/site_elements/Page_Intro";
import JokesGrid from "@/components/projects/jokes/JokesGrid";
import Footer from "@/components/footer/_Footer";

export default function Page_Jokes() {
	return (
		<div className={`${globalPageStyles} bg-rose-950 bg-brick-wall-background text-white`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<H1 text="Jokes" />
				<Page_Intro 
					text="A collection of one-liner jokes. I bet (at least) one will make you laugh."
					other_classes={`text-balance text-center`}
				/>
				<JokesGrid />
			</main>
			<Footer />
		</div>
	)
}
