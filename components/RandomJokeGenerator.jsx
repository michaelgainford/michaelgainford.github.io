import DataForJokes from "@/data/Data_For_Jokes";

export default function RANDOM_JOKES_GENERATOR () {
    const randomJoke = DataForJokes[Math.floor(Math.random() * DataForJokes.length)];
    return (
        <div className="p-4 rounded-lg xs:min-h-[200px] space-y-4 text-center flex items-center flex-col justify-center">
            <p className="text-xl font-light uppercase">{randomJoke.setup}</p>
            <p className="text-lg">{randomJoke.punchline}</p>
        </div>
    )
}