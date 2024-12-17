import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import AllQuotes from "@/components/projects/quotes/AllQuotes";
import Footer from "@/components/footer/Footer";

const pageStyles = "bg-sky-900 bg-hexagons-background text-sky-200";

export default function PAGE_QUOTES() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<Header />
			<main className={`${mainStyles} !w-full bg-sky-100 max-w-none`}>
			<H1 text="Quotes" other_classes="text-sky-900 mt-12" />
			<AllQuotes />
			</main>
			<Footer />
		</div>
	);
}