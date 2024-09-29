import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import evertonSquad from "@/components/data/Data_For_Everton";

const team_headings_and_info = [
  {
    label: "Founded",
    value: "1878",
  },
  {
    label: "Stadium",
    value: "Goodison Park",
  },
  {
    label: "Manager",
    value: "Sean Dyche",
  },
  {
    label: "League",
    value: "Premier League",
  }
]

evertonSquad.sort((a, b) => a.number - b.number);

export default function EVERTON() {
  return (
    <div className={`${globalPageStyles} bg-blue-900 bg-rain-background`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text={`Everton`} />
        <div className={`mt-8 grid w-full gap-4 first-line:gap-4 countries-grid-container`}>   
          <div className={`details border-b border-blue-500/50 pb-8`}>
            <h2 className={`mb-2 text-lg font-medium uppercase lg:text-2xl 2xl:mb-6`}>Club Information</h2>
            <ul className={`grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 *:flex *:flex-col`}>
              {team_headings_and_info.map((team_heading_and_info) => (
                <li key={team_heading_and_info.label}>
                  <span className={`title text-xs`}>{team_heading_and_info.label}:</span>
                  <span className={`detail lg:text-2xl`}>{team_heading_and_info.value}</span>
                </li>
              ))}
            </ul>
          </div> 
          <div className={`mt-8 playing-squad`}>
            <h2 className={`mb-2 text-lg font-medium uppercase lg:text-2xl`}>Playing Squad</h2>
            <div className={`grid justify-between grid-cols-1 players gap-x-4 gap-y-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
              {evertonSquad.map((player) => (
                <div key={player.slug} className={`flex flex-row space-y-2 border border-blue-700 rounded-lg player bg-blue-700/80 group sm:flex-col max-sm:gap-4`}>
                  <div className={`relative sm:mb-2 space-y-2 player-image-and-number max-sm:w-[40%]`}>
                    <div className={`player-image rounded-l-lg sm:rounded-b-none relative aspect-square sm:aspect-[3/2] overflow-hidden`}>
                      <Image src={`/everton/${player.slug}.webp`} alt={player.name} width={450} height={300} className={`sm:rounded-l-none sm:!rounded-t-lg !max-w-full lg:!rounded-b-none object-center aspect-square sm:aspect-[3/2] group-hover:scale-110 duration-500 object-cover w-full`} />
                    </div>
                    <div className={`player-number absolute top-1 left-1 md:top-2 md:left-2 text-xl md:text-2xl p-1 py-2 px-4 !aspect-square flex justify-center items-center bg-black/60`}>{player.number}</div>
                  </div>
                  <div className={`pt-2 pb-6 space-y-2 text-left sm:text-center player-details max-sm:w-[60%] flex flex-col max-sm: justify-center`}>
                    <div className={`relative tracking-wide uppercase player-name`}>{player.name}</div>
                    <div className={`player-details-row`}>
                      <div className={`relative player-position`}>{player.position}</div>
                      <div className={`relative player-country`}>{player.country}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}