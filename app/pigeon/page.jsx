import Link from "next/link";
import {
	brandPageBackground,
	brandTextColour,
	globalPageStyles,
	globalWrapperFixedWidth,
} from "@/variables/Styles";
import { wipItems } from "@/variables/Data";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function PAGE_HOME() {
	return (
		<div className={`${brandPageBackground} ${brandTextColour} ${globalPageStyles}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<div className="flex w-full mt-8 gap-12 max-lg:flex-col lg:gap-24 xl:gap-32 2xl:gap-48">
					<div className="flex flex-col gap-16 content xl:flex-row xl:gap-20 2xl:gap-24">
						<div className="min-w-[300px]">
							<h1 className="mb-8 font-bold underline lg:mb-12 2xl:mb-16 text-lg: xl:text-4xl underline-offset-8">
								Admin
							</h1>
							<Link href="/pigeon/site-maintenance-tracker" className="flex px-8 py-4 text-center transition-all duration-300 border-transparent rounded-lg border-3 bg-slate-500/20 hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 mb-8">
								Site Maintenance Tracker
							</Link>
							<Link href="/general/site-style-guide" className="flex px-8 py-4 text-center transition-all duration-300 border-transparent rounded-lg border-3 bg-slate-500/20 hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900">
								Site Style Guide
							</Link>
						</div>
						<div className="col-span-3">
							<h2 className="mb-8 text-lg font-bold underline lg:mb-12 2xl:mb-16 xl:text-4xl underline-offset-8">
								Coming Soon
							</h2>
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
								{wipItems.map((item, index) => (
								<div key={index} className="flex flex-col items-center justify-center gap-4 p-8 border card aspect-[3/2]]! lg:aspect-square! border-slate-500/20 bg-slate-500/20 rounded-lg">
									<h2 className="text-xl uppercase">{item.title}</h2>
									<p className="text-center">{item.content}</p>
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