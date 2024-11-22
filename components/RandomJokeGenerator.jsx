import DataForJokes from "@/data/Data_For_Jokes";

export default function RANDOM_JOKES_GENERATOR () {
    const randomJoke = DataForJokes[Math.floor(Math.random() * DataForJokes.length)];
    return (
        <div className="flex flex-col items-center justify-center p-4 space-y-4 text-center rounded-lg">
            <p className="text-xl font-light uppercase">{randomJoke.setup}</p>
            <p className="text-lg">{randomJoke.punchline}</p>
        </div>
    )
}