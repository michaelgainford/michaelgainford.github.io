import { brandPageBackground, brandTextColour, globalPageStyles, mainStyles } from "@/data/Variables";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const wipItems = [
	{
		title: "Wishlist",
		content: "Making a wishlist.",
		href: "/wip/wishlist"
	},
	{
		title: "Something made up",
		content: "Not a real thing, just trying to look cool with two things :).",
		href: "/"
	}
];

export default function PAGE_HOME() {
	return (
		<div className={`${brandPageBackground} ${brandTextColour} ${globalPageStyles}`}>
			<Header />
			<main className={mainStyles}>
				<div className={`flex w-full mt-8 gap-12 max-lg:flex-col lg:gap-24 xl:gap-32 2xl:gap-48`}>
					<div className="content">
					<div className="col-span-1">
						<h1 className="mb-8 text-4xl font-bold underline underline-offset-8">Admin</h1>
						<Link href="/pigeon/site-maintenance-tracker" className="px-8 py-4 rounded-lg bg-slate-500/20">
						Site Maintenance Tracker
						</Link>
					</div>
					<div className="col-span-3">
						<h2 className="mb-8 text-4xl font-bold underline underline-offset-8">Work In Progress</h2>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
						{wipItems.map((item, index) => (
							<div key={index} className="flex flex-col items-center justify-center gap-4 p-4 border card !aspect-square border-slate-500/20 bg-slate-500/20 rounded-lg">
								<h2 className="text-xl">{item.title}</h2>
								<p>{item.content}</p>
							</div>
						))}
						</div>
					</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}