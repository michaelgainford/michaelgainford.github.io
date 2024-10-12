import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import IconMagPremierLeague from "@/components/icons/IconMagPremierLeague";
import DataForMAGPremierLeague from "@/components/data/Data_For_MAGPremierLeague";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
const teams = [{name: 'Alfie'}, {name: 'Garcon'}, {name: 'Michael'}];
//import { MAGPremierLeagueTeams } from "@/components/data/Data_For_MAGPremierLeague";

export default function PAGE_THE_MAG_PREMIER_LEAGUE () {
  return (
    <div className={`${globalPageStyles} bg-gradient-to-r from-[#030117] from-10% via-[#2B2659] via-50% to-[#030117] to-90%`}>
      	<Header />
      	<main className={`${mainStyles} gap-12`}>
			<div class={`page-header`}>
			<H1 text={`The MAG Premier League`} />
				<div className={`flex flex-col sm:-mt-4`}>
					<IconMagPremierLeague classes={`size-12 lg:size-48 mx-auto`} fill={`#2BC9BC`} />
				</div>
			</div>

			<div>
				<h2 className={`text-center mb-6`}>Teams</h2>
				<div className="grid w-full grid-cols-3 gap-8">
					<div className="border rounded-full team border-slate-900 min-w-[60px] lg:min-w-[160px] text-center aspect-square flex justify-center items-center bg-red-800 text-white">
						<p className={`text-2xl lg:text-[48px]`}>A</p>
					</div>
					<div className="border rounded-full team border-slate-900 min-w-[60px] lg:min-w-[160px] text-center aspect-square flex justify-center items-center bg-blue-800 text-black">
						<p className={`text-2xl lg:text-[48px]`}>G</p>
					</div>
					<div className="border rounded-full team border-slate-900 min-w-[60px] lg:min-w-[160px] text-center aspect-square flex justify-center items-center bg-black text-white">
						<p className={`text-2xl lg:text-[48px]`}>M</p>
					</div>
				</div>
			</div>

			<div className={`my-8`}>
				<h2 className={`text-center`}>League Table</h2>
				<div className={`flex mt-4`}>
					<table className={`lg:min-w-[1000px] text-center`}>
						<thead className={``}>
							<tr className={`grid grid-cols-10 py-3`}>
								<th>POS</th>
								<th className={`text-left`}>Team</th>
								<th>P</th>
								<th>W</th>
								<th>D</th>
								<th>L</th>
								<th>F</th>
								<th>A</th>
								<th>GD</th>
								<th>PTS</th>
							</tr>
						</thead>


					<tbody>
						{/*
						Echo out the teams from the const tems in the league table. One row per team. For each team, output the following columns: Place, Team Name (Alfie, Garcon & Michael), Played, Won, Drawn, Lost, Goals For, Goals Against, Goal Difference, Points. Place the team with the most points at the top of the table. Points are worked out as follows: 3 points for a win, 1 point for a draw, 0 points for a loss.
						*/}

						{teams.map((team, index) => (
							<tr key={index} className={`grid grid-cols-10 py-3`}>
								<td>{index + 1}</td>
								<td className={`text-left`}>{team.name}</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>

			<div className={`!w-full px-8`}>
				<h2 className={`mb-6 text-center`}>Fixtures</h2>
				<div className={`grid grid-cols-1 gap-6`}>
					{DataForMAGPremierLeague?.map((fixture, index) => (
						<div key={index} className={`bg-slate-900/50 hover:bg-slate-900/80 rounded-xl p-4 ${fixture.played ? '' : "opacity-50"}`}>
							<div className={`grid grid-cols-1`}>
								<div className={`grid grid-cols-[1fr_30px_30px_30px_1fr] py-4 items-center`}>
									<p class={`text-right text-xl`}>{fixture.homeTeam}</p>
									<span className={`text-center`}>{fixture.played ? '' : fixture.homeScore}</span>
									<span className={`text-center`}>vs</span>
									<span className={`text-center`}>{fixture.played ? '' : fixture.awayScore}</span>
									<p className={`text-left text-xl`}>{fixture.awayTeam}</p>
								</div>
								<div className={`text-center grid grid-cols-[auto_30px_30px_30px_auto] pb-4`}>
									<span className={`text-right`}>{fixture.date}</span>
									<span className={`px-1`}>@</span>
									<span className={`text-left`}>{fixture.time}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

      	</main>
      	<Footer />
    </div>
  );
}
