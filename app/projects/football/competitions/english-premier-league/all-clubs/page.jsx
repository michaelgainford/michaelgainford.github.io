import Image from "next/image";
import Link from "next/link";
import HeroPremierLeague from "@/components/hero/Hero_PremierLeague";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import ClubsData from "@/data/Data_For_PremierLeagueTeams";
const sortedByName = [...ClubsData].sort((a,b) => a.teamName > b.teamName ? 1 : -1);
export const metadata = {
    title: "Premier League Clubs",
    description: "All the clubs that have played in the English Premier League since its inception in 1992.",
}

import H1 from "@/components/typography/H1Span";

import { mainStyles } from "@/data/Variables";
import { globalPageStyles } from "@/data/Variables";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function PAGE_PREMIER_LEAGUE () {
	return (
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
                <HeroPremierLeague />
				<div className={`${mainStyles} !text-xs py-4`}>
                    <NavForPremierLeagueHub />
                </div>
				<div className={`${mainStyles}`}>
					<H1 
                      text="All Clubs" 
                      font_sizes="text-base lg:!text-[24px]" 
                      other_classes="uppercase" 
                    />
				</div>
				<div className="min-h-[300px] grid grid-cols-1 gap-4 lg:gap-8 xl:gap-12 [&>div]:border [&>div]:p-8 [&>div]lg:p-12 [&_h2]:uppercase [&_h2]:font-bold">
					
                    <div className="grid grid-cols-2 lg:grid-cols-5 [&>a]:p-6 [&>a]:m-4 [&>a]:border [&>a]:border-slate-200 [&>a]:flex [&>a]:flex-col [&>a]:items-center [&>a]:rounded-lg [&>a]:flex-col] [&>a]:gap-4 [&>a}:text-center] [&_p]:text-center">
                    {Object.values(sortedByName).map((Club) => {
                        const clubsDir = "/football/premier-league/club-logos";
                        let club = "/projects/football/competitions/english-premier-league/all-clubs/" + Club.clubLogoSlug;
                        let clubLogosDir = clubsDir + '/' + Club.clubLogoSlug + ".svg";
                        return (
                            <Link
                              key={Club.clubLogoSlug}
                              href={``}
                              //href={club} 
                              data-slug={Club.clubLogoSlug}
                              className={`${Club.currentPrem}? "club-card current-prem relative cursor-default"
                                : "bg-gray-100 club-card former-prem cursor-default"`}
                              title={Club.teamName}
                            >
                                <Image
                                src={clubLogosDir}
                                alt={Club.teamName}
                                width={80}
                                height={80}
                                className={Club.currentPrem ? "grayscale-0 !h-[80px] 2xl:!h-[120px] !max-h-unset !w-auto max-w-auto" : "grayscale hover:grayscale-0 !h-[80px] 2xl:!h-[120px] !max-h-unset !w-auto max-w-auto"}
                                />
                                <p className={`text-sm ${Club.currentPrem ? "text-brand-main font-bold" : "text-gray-400"}`}>
                                    {Club.teamName}
                                </p>
                                <span className={`absolute top-0 right-0 p-1 ${Club.currentPrem ? `bg-emerald-200/30` : `bg-transparent`} text-[10px] font-bold tracking-wide`}>
                                    {Club.currentPrem ? `Current` : `Former`}
                                </span>
                            </Link>
                        );
                        })}
                    </div>
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}
