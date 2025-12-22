import { sharedHeadingStyles } from "@/variables/Data";
import Link from "next/link";
import RandomJokeGenerator from "@/components/RandomJokeGenerator";

export default function Component_CardRandomJoke() {
	return (
		<div
			data-card="joke"
			className="col-span-12 px-6 py-12 text-xs text-left transition-all duration-500 border lg:px-12 md:col-span-5 border-slate-500/10 hover:border-amber-500 hover:bg-slate-500/10 group-hover/joke:border-slate-500/10 group/gift self-start"
		>
			<h2
				className={`${sharedHeadingStyles} group-hover/gift:border-amber-500/80`}
			>
				Something for you
			</h2>
			<div className="flex flex-col gap-8 p-8 mt-8 text-center border rounded-sm joke border-slate-200/20 bg-amber-500/5! hover:border-amber-500! group/joke mb-4">
				<div className="flex flex-col items-center justify-center p-4 space-y-4 text-center rounded-lg">
					<RandomJokeGenerator />
				</div>
			</div>
			<p className="mt-4 text-center text-xs/6 text-balance">
				If you liked that random joke then you may like to see more on my{" "}
				<Link
					href="/projects/jokes"
					className="underline transition-all duration-500 underline-offset-2 hover:text-amber-500"
				>
					Jokes page
				</Link>
				. Thank you for visiting, I hope you found something that you liked.
			</p>
		</div>
	);
}
