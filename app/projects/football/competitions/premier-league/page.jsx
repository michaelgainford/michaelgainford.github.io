import Image from "next/image";
import { Fragment } from "react";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";
const seasonPositions = Array.from({ length: 33 }, (_, i) => `season${i + 1}Pos`);
const seasonPositionsP = Array.from({ length: 33 }, (_, i) => `season${i + 1}P`);
// import the data
import DataForPremTeamsBySeason from "@/components/data/Data_For_PremTeamsBySeason";


// create an array to store the premier league seasons
const Years = [
  '92/93',
  '93/94', 
  '94/95', 
  '95/96', 
  '96/97', 
  '97/98', 
  '98/99', 
  '99/00', 
  '00/01', 
  '01/02', 
  '02/03', 
  '03/04', 
  '04/05', 
  '05/06', 
  '06/07', 
  '07/08', 
  '08/09', 
  '09/10', 
  '10/11', 
  '11/12', 
  '12/13', 
  '13/14', 
  '14/15', 
  '15/16', 
  '16/17', 
  '17/18', 
  '18/19', 
  '19/20', 
  '20/21', 
  '21/22', 
  '22/23', 
  '23/24', 
  '24/25'
];


// sort by teamName
const sortedPremierLeagueSeasonData = [...DataForPremTeamsBySeason].sort((a, b) => {
  if (a.teamName > b.teamName) {
    return 1;
  } else if (a.teamName < b.teamName) {
    return -1;
  } else {
    return 0;
  }
});


export default function PREMIER_LEAGUE () {
  return (
    <div className={`bg-dots-background bg-blue-800 ${globalPageStyles}`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text={`Premier League`} />
        <div className={`w-full overflow-x-auto border rounded-lg by-season border-slate-900`}>
          <table className={`max-w-full overflow-x-auto overflow-y-scroll text-sm text-center hover:cursor-pointer max-h-[700px] z-2`}>
            <thead className={`font-light uppercase bg-slate-800`}>
              <tr>
                <th className={`left-0 py-3 pl-2 text-left z-2 first-of-type:z-10 first-of-type:sticky first-of-type:top-0`}>Team</th>
                {Years.map((season, index) => (
                  <th key={index} className={`relative z-0 px-1`}>{season}</th>
                ))}
              </tr>
            </thead>
            <tbody className={`bg-slate-800/50`}>
              {sortedPremierLeagueSeasonData.map((team, index) => (
                <tr key={index}>
                  <td className={`sticky left-0 pl-2 text-left bg-slate-800 z-3 min-w-[150px] py-3`}>
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
                      const totalPoints = (wins * 3) + draws;
                      return (
                        <td 
                          key={i} 
                          className={`cursor-pointer px-1 ${season[pos] === -1 ? 'text-slate-400 cursor-default' : season[pos] === 1 ? 'bg-yellow-500 text-slate-800' : ''}`} 
                          {...(season[pos] !== -1 && {
                            title: `Played: ${totalGames}, W: ${wins}, D: ${draws}, L: ${losses}, F: ${goalsFor}, A: ${goalsAgainst}, GD: ${goalDifference}, Pts: ${totalPoints}`
                          })}
                        >
                          {season[pos] === -1 ? '-' : season[pos]}
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
      </main>
      <MainFooter />
    </div>
  );
}