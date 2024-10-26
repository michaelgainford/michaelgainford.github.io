import Link from 'next/link';
import Image from 'next/image';
import { premierLeagueHubUrl, premierLeagueLogoSvgPath } from '@/components/data/Variables';

export default function HERO_PREMIER_LEAGUE () {
    return (
        <div className="py-4 pb-8 mx-auto -mt-6 text-white lg:p-8 bg-epl-500 lg:pb-16 lg:mb-16 lg:-mt-16">
            <div className="flex justify-center h-auto mx-auto my-8 w-36 lg:w-48">
                <Link href={premierLeagueHubUrl}>
                    <Image
                      src={premierLeagueLogoSvgPath}
                      alt="English Premier League Logo"
                      width={200}
                      height={200}
                    />
                </Link>
            </div>
        </div>
    );
}