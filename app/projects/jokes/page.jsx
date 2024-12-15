import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Page_Intro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/Footer";
import DataForJokesJSON from "@/data/data_for__jokes";
const Jokes = DataForJokesJSON.Jokes;
Jokes.sort(() => Math.random() - 0.5);

export default function PAGE_JOKES() {
	return (
		<div className={`${globalPageStyles} bg-rose-950 bg-brick-wall-background text-white`}>
			
			<Header />

			<main className={`${mainStyles}`}>
				<H1 text="Jokes" />
				<Page_Intro 
					text="A collection of one-liner jokes. I bet (at least) one will make you laugh."
					other_classes={`text-balance text-center`}
				/>
				<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-16 xl:grid-cols-3 motion motion-preset-slide-up motion-delay-1000">
					{Jokes.map((joke, index) => (
					<div key={index} className="border border-rose-700 bg-rose-900 p-4 rounded-lg min-h-[200px] space-y-4 text-center flex items-center flex-col justify-center">
						<p className="text-xl font-light uppercase">{joke.setup}</p>
						<p className="text-lg">{joke.punchline}</p>
					</div>
					))}
				</div>
			</main>

			<Footer />
		</div>
	)
}
