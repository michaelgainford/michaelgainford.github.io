import Header from "@/components/header/Header";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import HeroPremierLeague from "@/components/hero/Hero_PremierLeague";
import Footer from "@/components/footer/Footer";
import H1 from "@/components/typography/H1_Span";
import H2_EPL from "@/components/typography/H2_ForPremierLeague";
import SeasonBySeasonData from "@/components/projects/english-premier-league/SeasonBySeasonDataTable";  
import { globalMainElementStyles, globalPageStyles } from "@/data/Variables";

export const metadata = {
  title: `Premier League Seasons`,
  description: `The English Premier League has been played over 30 seasons since its inception in 1992. Each season consists of 20 teams who play 38 matches each (19 home and 19 away). The team that finishes with the most points at the end of the season is crowned the Premier League champions. The bottom three teams are relegated to the EFL Championship. The Premier League season typically runs from August to May, with matches played on weekends and midweek.`,
};

export default function PAGE_PREMIER_LEAGUE_SEASONS() {
  return (
    <div
      className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}
    >
      <Header />

      <main className={`w-full text-epl`}>
        <HeroPremierLeague />

        <div className={`${globalMainElementStyles} text-xs! py-4`}>
          <NavForPremierLeagueHub />
        </div>

        <div className={`${globalMainElementStyles}`}>
          <H1
            text={`Seasons`}
            font_sizes={`text-base lg:text-[24px]!`}
            other_classes={`uppercase`}
          />
        </div>

        {/* Teams by Season | Start */}
        <div className={`${globalMainElementStyles}`}>
          <div
            className={`flex flex-col w-full items-center justify-center max-md:mt-4 lg:mb-4`}
          >
            <H2_EPL text={`Season by season league records`} />
          </div>
        </div>

        <SeasonBySeasonData />

        {/* Teams by Season | End */}
      </main>
      <Footer customTextColour={`text-epl`} />
    </div>
  );
}
