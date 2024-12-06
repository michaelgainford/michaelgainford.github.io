import { Fragment } from "react";
import ClubsData from "@/data/to_replace_with_json/Data_For_PremierLeagueTeams";
const sortedByName = [...ClubsData].sort((a, b) =>
  a.teamName > b.teamName ? 1 : -1
);
import DataForPremTeams from "@/data/to_replace_with_json/Data_For_PremierLeagueTeams";
import {
  premierLeagueYears,
  seasonPositions,
} from "@/data/Variables";
import Header from "@/components/header/Header";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import HeroPremierLeague from "@/components/hero/Hero_PremierLeague";
import Footer from "@/components/footer/Footer";

import H1 from "@/components/typography/H1Span";
import H2_EPL from "@/components/typography/H2_For_PremierLeague";

import { mainStyles } from "@/data/Variables";
import { globalPageStyles } from "@/data/Variables";

export const metadata = {
  title: `Premier League Seasons`,
  description: `The English Premier League has been played over 30 seasons since its inception in 1992. Each season consists of 20 teams who play 38 matches each (19 home and 19 away). The team that finishes with the most points at the end of the season is crowned the Premier League champions. The bottom three teams are relegated to the EFL Championship. The Premier League season typically runs from August to May, with matches played on weekends and midweek.`,
};

// sort by teamName
const sortedPremierLeagueSeasonData = [...DataForPremTeams].sort((a, b) => {
  if (a.teamName > b.teamName) {
    return 1;
  } else if (a.teamName < b.teamName) {
    return -1;
  } else {
    return 0;
  }
});

export default function PAGE_PREMIER_LEAGUE_SEASONS() {
  return (
    <div
      className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}
    >
      <Header />

      <main className={`w-full text-epl`}>
        <HeroPremierLeague />

        <div className={`${mainStyles} text-xs! py-4`}>
          <NavForPremierLeagueHub />
        </div>

        <div className={`${mainStyles}`}>
          <H1
            text={`Seasons`}
            font_sizes={`text-base lg:text-[24px]!`}
            other_classes={`uppercase`}
          />
        </div>

        {/* Teams by Season | Start */}
        <div className={`${mainStyles}`}>
          <div
            className={`flex flex-col w-full items-center justify-center max-md:mt-4 lg:mb-4`}
          >
            <H2_EPL text={`Season by season league records`} />
          </div>
        </div>

        <div
          className={`flex w-full overflow-x-auto by-season mb-8 lg:w-[92%] lg:items-center lg:flex-col mx-auto `}
        >
          <table
            className={`max-w-full overflow-x-auto overflow-y-scroll text-xs lg:text-sm text-center hover:cursor-pointer z-2 lg:rounded-lg block max-h-[500px] lg:max-h-full [&>tr_td]:sticky z-2`}
          >
            <thead
              className={`font-light uppercase bg-epl/90 text-white top-0 z-3! [&>tr_th]:font-light`}
            >
              <tr className={`sticky top-0 left-0 z-50`}>
                <th
                  className={`first:bg-epl py-3 pl-1 lg:pl-2 text-left left-0 z-50 sticky top-0`}
                >
                  Team
                </th>
                {premierLeagueYears.map((season, index) => (
                  <th key={index} className={`relative px-1 z-49 bg-epl`}>
                    {season}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`bg-epl/20`}>
              {sortedPremierLeagueSeasonData.map((team, index) => (
                <tr key={index} className={`border-b border-epl/20`}>
                  <td
                    className={`sticky left-0 pl-1 lg:pl-2 text-left bg-gray-100 z-2 max-w-[144px]! lg:max-w-[150px] xl:max-w-[200px] py-1 md:py-2 lg:py-3 truncate`}
                  >
                    {team.teamName}
                  </td>
                  {team.premierLeagueSeasons.map((season, index) => (
                    <Fragment key={index}>
                      {seasonPositions.map((pos, i) => {
                        const wins = season[`season${i + 1}W`];
                        const draws = season[`season${i + 1}D`];
                        const losses = season[`season${i + 1}L`];
                        const goalsFor = season[`season${i + 1}F`];
                        const goalsAgainst = season[`season${i + 1}A`];
                        const goalDifference = goalsFor - goalsAgainst;
                        const totalGames = wins + draws + losses;
                        const totalPoints = wins * 3 + draws;
                        return (
                          <td
                            key={i}
                            className={`cursor-pointer px-1 ${
                              season[pos] === -1
                                ? `text-epl/20 cursor-default`
                                : season[pos] === 1
                                ? `bg-amber-500 text-slate-800`
                                : ``
                            }`}
                            {...(season[pos] !== -1 && {
                              title: `Played: ${totalGames}, W: ${wins}, D: ${draws}, L: ${losses}, F: ${goalsFor}, A: ${goalsAgainst}, GD: ${goalDifference}, Pts: ${totalPoints}`,
                            })}
                          >
                            {season[pos] === -1 ? "-" : season[pos]}
                          </td>
                        );
                      })}
                    </Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Teams by Season | End */}
      </main>
      <Footer customTextColour={`text-epl`} />
    </div>
  );
}
