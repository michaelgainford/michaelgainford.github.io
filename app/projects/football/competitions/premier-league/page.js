import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";
import EnglishPremierLeagueBySeasons from "@/components/data/DataForPremTeamsBySeason";

// sort by teamName
EnglishPremierLeagueBySeasons.sort((a, b) => {
  if (a.teamName > b.teamName) {
    return 1;
  } else if (a.teamName < b.teamName) {
    return -1;
  } else {
    return 0;
  }
});

const teams = [...new Set(EnglishPremierLeagueBySeasons.map((team) => team.teamName))];
teams.sort();

export default function Home() {
  return (
    <div className={`bg-dots-background bg-blue-800 ${globalPageStyles}`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text="Premier League" />
        <div className="w-full overflow-x-auto border rounded-lg by-season border-slate-900">
          <table className="max-w-full overflow-x-auto text-sm text-center hover:cursor-pointer">
            <thead className="font-light uppercase bg-slate-800">
              <tr>
                <th className="sticky top-0 left-0 py-3 pl-1 text-left z-2">Team</th>
                <th className="px-1">92/93</th>
                <th className="px-1">93/94</th>
                <th className="px-1">94/95</th>
                <th className="px-1">95/96</th>
                <th className="px-1">96/97</th>
                <th className="px-1">97/98</th>
                <th className="px-1">98/99</th>
                <th className="px-1">99/00</th>
                <th className="px-1">00/01</th>
                <th className="px-1">01/02</th>
                <th className="px-1">02/03</th>
                <th className="px-1">03/04</th>
                <th className="px-1">04/05</th>
                <th className="px-1">05/06</th>
                <th className="px-1">06/07</th>
                <th className="px-1">07/08</th>
                <th className="px-1">08/09</th>
                <th className="px-1">09/10</th>
                <th className="px-1">10/11</th>
                <th className="px-1">11/12</th>
                <th className="px-1">12/13</th>
                <th className="px-1">13/14</th>
                <th className="px-1">14/15</th>
                <th className="px-1">15/16</th>
                <th className="px-1">16/17</th>
                <th className="px-1">17/18</th>
                <th className="px-1">18/19</th>
                <th className="px-1">19/20</th>
                <th className="px-1">20/21</th>
                <th className="px-1">21/22</th>
                <th className="px-1">22/23</th>
                <th className="px-1">23/24</th>
                <th className="px-1">24/25</th>
              </tr>
            </thead>
            <tbody className="bg-slate-800/50">
              {EnglishPremierLeagueBySeasons.map((team, index) => (
                <tr key={index} data-key={index} className="border-b border-slate-800 hover:bg-slate-900 hover:text-yellow-500">
                  <td className="sticky left-0 text-left z-2 min-w-[200px] pl-1 py-1">{team.teamName}</td>
                  <td className="border-l border-slate-900" title={team.season1Details}>{team.season1Pos === -1 ? <span className="text-red-500">-</span> : team.season1Pos}</td>
                  <td className="border-l border-slate-900">{team.season2Pos === -1 ? <span className="text-red-500">-</span> : team.season2Pos}</td>
                  <td className="border-l border-slate-900">{team.season3Pos === -1 ? <span className="text-red-500">-</span> : team.season3Pos}</td>
                  <td className="border-l border-slate-900">{team.season4Pos === -1 ? <span className="text-red-500">-</span> : team.season4Pos}</td>
                  <td className="border-l border-slate-900">{team.season5Pos === -1 ? <span className="text-red-500">-</span> : team.season5Pos}</td>
                  <td className="border-l border-slate-900">{team.season6Pos === -1 ? <span className="text-red-500">-</span> : team.season6Pos}</td>
                  <td className="border-l border-slate-900">{team.season7Pos === -1 ? <span className="text-red-500">-</span> : team.season7Pos}</td>
                  <td className="border-l border-slate-900">{team.season8Pos === -1 ? <span className="text-red-500">-</span> : team.season8Pos}</td>
                  <td className="border-l border-slate-900">{team.season9Pos === -1 ? <span className="text-red-500">-</span> : team.season9Pos}</td>
                  <td className="border-l border-slate-900">{team.season10Pos === -1 ? <span className="text-red-500">-</span> : team.season10Pos}</td>
                  <td className="border-l border-slate-900">{team.season11Pos === -1 ? <span className="text-red-500">-</span> : team.season11Pos}</td>
                  <td className="border-l border-slate-900">{team.season12Pos === -1 ? <span className="text-red-500">-</span> : team.season12Pos}</td>
                  <td className="border-l border-slate-900">{team.season13Pos === -1 ? <span className="text-red-500">-</span> : team.season13Pos}</td>
                  <td className="border-l border-slate-900">{team.season14Pos === -1 ? <span className="text-red-500">-</span> : team.season14Pos}</td>
                  <td className="border-l border-slate-900">{team.season15Pos === -1 ? <span className="text-red-500">-</span> : team.season15Pos}</td>
                  <td className="border-l border-slate-900">{team.season16Pos === -1 ? <span className="text-red-500">-</span> : team.season16Pos}</td>
                  <td className="border-l border-slate-900">{team.season17Pos === -1 ? <span className="text-red-500">-</span> : team.season17Pos}</td>
                  <td className="border-l border-slate-900">{team.season18Pos === -1 ? <span className="text-red-500">-</span> : team.season18Pos}</td>
                  <td className="border-l border-slate-900">{team.season19Pos === -1 ? <span className="text-red-500">-</span> : team.season19Pos}</td>
                  <td className="border-l border-slate-900">{team.season20Pos === -1 ? <span className="text-red-500">-</span> : team.season20Pos}</td>
                  <td className="border-l border-slate-900">{team.season21Pos === -1 ? <span className="text-red-500">-</span> : team.season21Pos}</td>
                  <td className="border-l border-slate-900">{team.season22Pos === -1 ? <span className="text-red-500">-</span> : team.season22Pos}</td>
                  <td className="border-l border-slate-900">{team.season23Pos === -1 ? <span className="text-red-500">-</span> : team.season23Pos}</td>
                  <td className="border-l border-slate-900">{team.season24Pos === -1 ? <span className="text-red-500">-</span> : team.season24Pos}</td>
                  <td className="border-l border-slate-900">{team.season25Pos === -1 ? <span className="text-red-500">-</span> : team.season25Pos}</td>
                  <td className="border-l border-slate-900">{team.season26Pos === -1 ? <span className="text-red-500">-</span> : team.season26Pos}</td>
                  <td className="border-l border-slate-900">{team.season27Pos === -1 ? <span className="text-red-500">-</span> : team.season27Pos}</td>
                  <td className="border-l border-slate-900">{team.season28Pos === -1 ? <span className="text-red-500">-</span> : team.season28Pos}</td>
                  <td className="border-l border-slate-900">{team.season29Pos === -1 ? <span className="text-red-500">-</span> : team.season29Pos}</td>
                  <td className="border-l border-slate-900">{team.season30Pos === -1 ? <span className="text-red-500">-</span> : team.season30Pos}</td>
                  <td className="border-l border-slate-900">{team.season31Pos === -1 ? <span className="text-red-500">-</span> : team.season31Pos}</td>
                  <td className="border-l border-slate-900">{team.season32Pos === -1 ? <span className="text-red-500">-</span> : team.season32Pos}</td>
                  <td className="border-l border-slate-900">{team.season33Pos === -1 ? <span className="text-red-500">-</span> : team.season33Pos}</td>
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