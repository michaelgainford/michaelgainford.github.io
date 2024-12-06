import Link from "next/link";
import { mainStyles } from "@/data/Variables";

export default function NavForPremierLeagueHub () {
    return (
		<div className={`${mainStyles} text-xs! py-4`}>
            <Link
                href="/projects/football/competitions/english-premier-league/" 
                className="border-b border-transparent hover:border-current"
            >
                <span className="text-epl before:content-['<_'] before:text-epl before:pr-[4px] flex items-center before:mb-[1px]">
                    Back to PL Hub
                </span>
            </Link>
        </div>
    );
};