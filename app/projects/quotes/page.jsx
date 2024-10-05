import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import DataForQuotes from "@/components/data/Data_For_Quotes";
const pageStyles = "bg-sky-900 bg-hexagons-background text-sky-300";

export default function PAGE_QUOTES() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<MainHeader />
			<main className={`${mainStyles}`}>
			<H1 text={`Quotes`} />
			<div className={`flex flex-wrap justify-center w-full gap-8`}>
				{DataForQuotes.map((quote, index) => (
				<div key={index} className={`w-1/5 p-4 space-y-4 text-center border rounded-lg border-sky-700 bg-sky-700 min-w-[200px] flex items-center max-sm:w-full lg:p-8`}>
					<q className={`text-sm tracking-wider text-center`}>
						{quote.quote}
					</q>
				</div>
				))}
			</div>
			</main>
			<Footer />
		</div>
	);
}