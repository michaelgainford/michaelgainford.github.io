import Link from "next/link";

export default function NavForPremierLeagueHub () {
    return (
        <Link
            href={`/projects/football/competitions/english-premier-league`} 
        >
            <span className={`text-epl before:content-['<'] before:text-epl before:mr-[4px] flex items-center before:mb-[1px]`}>
                Back to PL Hub
            </span>
        </Link>
    );
};