import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import AllQuotes from "@/components/projects/quotes/AllQuotes";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

const pageStyles = "bg-sky-900 bg-hexagons-background text-sky-200";

export default function Page_Quotes() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<Header />
			<main className={`${globalWrapperFixedWidth} !w-full bg-sky-100 max-w-none`}>
				<H1 
				  text="Quotes" 
				  other_classes="text-sky-900 mt-12" 
				/>
				<AllQuotes />
			</main>
			<Footer />
		</div>
	);
}