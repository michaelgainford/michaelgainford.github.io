import DataForJokesJSON from "@/data/data_for__jokes";
const Jokes = DataForJokesJSON.Jokes;
Jokes.sort(() => Math.random() - 0.5);

export default function Component_JokesGrid() {
	return (
		<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-16 xl:grid-cols-3">
			{Jokes.map((joke, index) => (
			<div key={index} className="border border-rose-700 bg-rose-900 p-4 rounded-lg min-h-[200px] space-y-4 text-center flex items-center flex-col justify-center">
				<p className="text-xl font-light uppercase">{joke.setup}</p>
				<p className="text-lg">{joke.punchline}</p>
			</div>
			))}
		</div>		
	)
}