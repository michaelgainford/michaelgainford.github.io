import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/_Footer";
import Image from "next/image";
import WorldCup2026TournamentInfo from "@/components/projects/world-cup-2026/TournamentInfo";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

const pageIntroText = "A World Cup 2026 hub with hosts confirmed and remaining places represented as qualifiers-to-be-determined. This keeps structure in place now and makes it easy to swap in official teams as qualification completes.";

const keyStats = [
	{ label: "Teams", value: "48" },
	{ label: "Groups", value: "12" },
	{ label: "Qualified", value: "3" },
	{ label: "TBD Slots", value: "45" },
];

const hostNations = [
	{ name: "Canada", flag: "/country-flags/ca.svg" },
	{ name: "Mexico", flag: "/country-flags/mx.svg" },
	{ name: "United States", flag: "/country-flags/us.svg" },
];

export const metadata = {
	title: "World Cup 2026",
	description: "World Cup 2026 tournament page with teams grouped for project planning.",
};

export default function Page_WorldCup2026() {
	return (
		<div className={`${globalPageStyles} bg-linear-to-b from-sky-900 via-blue-900 to-slate-950 text-slate-100 [&>header]:text-white [&>footer]:text-slate-100`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<H1 text="World Cup 2026" />
				<section className="mb-8 rounded-2xl border border-white/15 bg-gradient-to-r from-cyan-400/20 via-sky-400/15 to-indigo-500/15 p-6 lg:p-8 shadow-2xl shadow-sky-950/30">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
						<div className="lg:col-span-2">
							<h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-100">Tournament Hub</h2>
							<p className="mt-3 max-w-3xl text-sm/6 text-slate-100/90 lg:text-base/7">World Cup 2026 expands to 48 teams across 12 groups. This page currently shows confirmed hosts plus qualifier placeholders so your content model is ready before the final draw.</p>
						</div>
						<div className="flex flex-wrap gap-2 lg:justify-end">
							{hostNations.map((host) => (
								<span key={host.name} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs tracking-wide">
									<Image src={host.flag} alt={host.name} width={16} height={16} />
									{host.name}
								</span>
							))}
						</div>
					</div>
					<div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
						{keyStats.map((stat) => (
							<div key={stat.label} className="rounded-xl border border-white/20 bg-slate-950/35 px-4 py-3 text-center">
								<p className="text-xl font-bold leading-none text-white lg:text-2xl">{stat.value}</p>
								<p className="mt-2 text-xxs uppercase tracking-wider text-slate-300">{stat.label}</p>
							</div>
						))}
					</div>
				</section>
				<PageIntro
					text={pageIntroText}
					classes_text_colour="text-slate-100"
					classes_text_alignment="text-center"
					classes_font_sizes="text-xs/5 lg:text-sm/6"
					classes_font_styling="font-medium tracking-wider"
					classes_width="max-w-[900px]"
					classes_margin="mb-12"
				/>
				<WorldCup2026TournamentInfo />
			</main>
			<Footer />
		</div>
	);
}
