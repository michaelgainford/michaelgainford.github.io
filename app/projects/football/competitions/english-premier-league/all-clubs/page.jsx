import Image from "next/image";
import Link from "next/link";
import HeroPremierLeague from "@/components/hero/Hero_PremierLeague";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import ClubsData from "@/components/data/Data_For_PremierLeagueTeams";
const sortedByName = [...ClubsData].sort((a,b) => a.teamName > b.teamName ? 1 : -1);

import H1 from "@/components/typography/H1Span";

import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";

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
                              key={Club.teamName}
                              href={club}
                              className={
                                Club.currentPrem
                                ? "club-card current-prem"
                                : "bg-gray-100 club-card former-prem"
                              }
                            >
                                <Image
                                src={clubLogosDir}
                                alt={Club.teamName}
                                height={80}
                                width={80}
                                className={Club.currentPrem ? "grayscale-0" : "grayscale hover:grayscale-0"}
                                />
                                <p className={`text-sm ${Club.currentPrem ? "text-brand-main font-bold" : "text-gray-400"}`}>
                                    {Club.teamName}
                                </p>
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
