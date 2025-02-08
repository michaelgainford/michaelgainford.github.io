import DataForJokesJSON from "@/data/data_for__jokes.json";
const Jokes = DataForJokesJSON.Jokes;
const randomJoke = Jokes[Math.floor(Math.random() * Jokes.length)];

export default function Component_RandomJokeGenerator () {
	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 text-center rounded-lg">
			<p className="text-xl font-light uppercase">{randomJoke.setup}</p>
			<p className="text-lg">{randomJoke.punchline}</p>
		</div>
	)
}