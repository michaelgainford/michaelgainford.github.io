import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

const jokes = [
	{
		setup: "What do you call a fish wearing a crown?",
		punchline: "A kingfish",
	},
	{
		setup: "Will glass coffins be a success?",
		punchline: "Remains to be seen",
	},
	{
		setup: "When life gives you melons...",
		punchline: "you might be dyslexic.",
	},
	{
		setup: "I hate Russian dolls...",
		punchline: "they're so full of themselves",
	},
	{
		setup: "Geology rocks...",
		punchline: "but geography is where it's at",
	},
	{
		setup: "My wife told me to stop impersonating a flamingo...",
		punchline: "I had to put my foot down",
	},
	{
		setup: "So what if I don't know what 'Armageddon' means?",
		punchline: "It's not the end of the world",
	},
	{
		setup: "The future, the present, and the past walk into a bar...",
		punchline: "Things got a little tense.",
	},
	{
		setup: "I have a few jokes about unemployed people...",
		punchline: "but none of them work",
	},
	{
		setup: "You’ll never be as lazy...",
		punchline: "as whoever named the fireplace",
	},
	{
		setup: "I used to think I was indecisive...",
		punchline: "but now I'm not too sure",
	},
	{
		setup: "I can’t believe I got fired from the calendar factory...",
		punchline: "all I did was take a day off",
	},
	{
		setup: "I've just written a song about tortillas...",
		punchline: "actually, it’s more of a rap",
	}
];

export default function PAGE_JOKES() {
	return (
		<div className={`${globalPageStyles} bg-rose-950 bg-brick-wall-background text-white`}>
			<Header />
			<main className={`${mainStyles}`}>
				<H1 text="Jokes" />
				<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-16 xl:grid-cols-3">
					{jokes.map((joke, index) => (
					<div key={index} className="border border-rose-700 bg-rose-900 p-4 rounded-lg min-h-[200px] space-y-4 text-center flex items-center flex-col justify-center">
						<p className="text-2xl">{joke.setup}</p>
						<p className="text-lg">{joke.punchline}</p>
					</div>
					))}
				</div>
			</main>
			<Footer />
		</div>
	)
}
