{/* Next imports */}
import Image from "next/image";
{/* Local imports */}
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1_Span";
import Footer from "@/components/footer/Footer";
{/* Data & Styles */}
import { globalPageStyles, globalMainElementStyles } from "@/variables/Data";

import Euro2024TeamDataJSON from "@/data/data_for__euro2024";
const Euro2024Teams = Euro2024TeamDataJSON.Euro2024Teams;

// Sort by group and then group seeding
Euro2024Teams.sort((a, b) => {
	if (a.group > b.group) {
		return 1;
	} else if (a.group < b.group) {
		return -1;
	} else {
		return a.groupSeeding - b.groupSeeding;
	}
}
);

const groups = [...new Set(Euro2024Teams.map((team) => team.group))];
groups.sort();

export default function Page_Euro2024() {
  return (
    <div className={`${globalPageStyles} bg-dots-background bg-blue-800 text-slate-200`}>
		<Header />
		<main className={`${globalMainElementStyles}`}>
			<H1 text={`Euro 2024`} />
			<div className={`hidden grid-cols-3 gap-4 first-line:gap-4 countries-grid-container md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 `}>
				{Euro2024Teams.map((team, index) => (
				<div key={index} className={`flex flex-col items-center w-full pb-4 duration-300 ease-in-out border border-blue-900 rounded-md cursor-pointer movie-card text-light_colour border-secondary group hover:bg-secondary`}>
					<Image className={`text-sm duration-1000 group-hover:ease-in-out group-hover:scale-100 group-hover:rounded-t-md`} src={team.flag} loading={`lazy`} alt={team.name} width={32} height={32} />
					<p className={`pt-2 lg:pt-4 lg:px-2 group-hover:pt-2 ease-in-out duration-300 w-[200px] text-center text-xs lg:text-md min-h-[60px] max-w-full xl:opacity-50 xl:group-hover:opacity-100`}>
					{team.name}
					</p>
				</div>
				))}
			</div>
			<div className={`grid w-full grid-cols-2 gap-8 groups sm:grid-cols-3 lg:grid-cols-6 2xl:gap-16`}>
				{groups.map((group, index) => (
				<div key={index} className={`flex flex-col w-full px-4 py-6 text-blue-900 border border-blue-600 rounded-lg group bg-white/90`}>
					<h2 className={`mb-4 text-sm font-bold tracking-wider text-left uppercase sm:text-center lg:text-left`}>Group {group}</h2>
					<div className={`flex flex-col justify-center gap-4 group-teams`}>
					{Euro2024Teams.filter((team) => team.group === group).map((team, index) => (
						<div key={index} className={`flex items-center gap-4 team sm:flex-col lg:flex-row`}>
						<Image src={team.flag} alt={team.name} width={32} height={32} />
						<p className={`text-xs`}>{team.name}</p>
						</div>
					))}
					</div>
				</div>
				))}
			</div>
		</main>
		<Footer />
    </div>
  );
}