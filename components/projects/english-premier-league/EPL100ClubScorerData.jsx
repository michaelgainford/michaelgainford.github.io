"use client";

import Link from "next/link";
import Image from "next/image";
import Prem100ClubDataJSON from "@/data/data_for__englishpremierleague.json";
const TopScorersDataJSON = Prem100ClubDataJSON.Top_Scorers;
const sortedByGoals = [...TopScorersDataJSON].sort((a, b) =>
	b.playerGoals - a.playerGoals
);

const calculateDaysAgo = (date) => {
	const today = new Date();
	const lastGoalDate = new Date(date);
	const timeDifference = today - lastGoalDate;
	const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	return daysDifference;
};

export default function COMPONENT_100_CLUB_SCORER_DATA() {
    return (
            <div className="grid w-full grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Object.values(sortedByGoals).map((TopScorer, index) => {
                //let clubsDir = "/clubs/";
                let playerImageDir = "/football/premier-league/players/";
                let playerImageExt = ".webp";
                let playerImage = playerImageDir + TopScorer.playerSlug + playerImageExt;
                return (
                    <div className="relative flex flex-col gap-4 px-4 py-8 border rounded-lg lg:py-12 hover:bg-epl hover:text-slate-200 transition-all duration-500 group" key={TopScorer.playerId}>
                        <h3 className="font-bold uppercase">{TopScorer.playerName}</h3>
                        <Image
                            className="w-full my-4 border-8 border-slate-100 group-hover:border-slate-800"
                            src={playerImage}
                            alt={TopScorer.playerName}
                            width={300}
                            height={150}
                        />
                        <p className="font-bold">{TopScorer.playerGoals} goals</p>
                        <p className="flex flex-wrap justify-center gap-1 mb-4 gap-x-4">
                        {Object.values(TopScorer.playerClubs).map((playerClub, index) => {
                            //let clubPageLink = clubsDir;
                            return (
                            <Link
                                className="py-1 text-xs border px-1 rounded-lg border-slate-200"
                                key={index}
                                href="/projects/football/competitions/english-premier-league/the-100-club"
                            >
                                {playerClub}
                            </Link>
                            );
                        })}
                        </p>
                        <div className="absolute flex items-center justify-center p-1 text-xs leading-none border rounded-lg size-6 top-1 left-1 aspect-square order">
                            {index + 1}
                        </div>
                        <div className={`absolute top-1 right-1 p-1 text-xs player-status rounded-lg lowercase ${TopScorer.playerCurrent ? "bg-emerald-300" : "bg-rose-100"}`}>
                            {TopScorer.playerCurrent ? "Active" : "Retired"}
                        </div>
                        <div className={`absolute bottom-1 left-[4%] text-[10px] mx-auto w-[92%]`}>
                        <p className="px-4 mx-auto italic text-slate-400 text-balance">
                            Last scored in the Premier League for {TopScorer.playerLastGoalFor} on {new Date(TopScorer.playerLastGoalDate).toLocaleDateString('en-GB')} (
                            {calculateDaysAgo(TopScorer.playerLastGoalDate) === 0
                            ? 'today'
                            : `${calculateDaysAgo(TopScorer.playerLastGoalDate)} ${calculateDaysAgo(TopScorer.playerLastGoalDate) === 1 ? 'day ago' : 'days ago'}`}
                            ) vs {TopScorer.playerLastGoalOpponent}.
                        </p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}