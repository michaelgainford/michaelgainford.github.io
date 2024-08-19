import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import evertonSquad from "@/components/data/DataForEverton";

evertonSquad.sort((a, b) => a.number - b.number);

export default function Home() {
  return (
    <div className={`${globalPageStyles} bg-blue-900 bg-rain-background`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text="Everton" />
        <div className="grid w-full gap-4 first-line:gap-4 countries-grid-container">   
          <div className="details">
            <h2 className="mb-2 text-lg font-medium uppercase lg:text-2xl 2xl:mb-6">Club Information</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-4 lg:gap-12 *:flex *:flex-col">
              <li>
                <span className="title">Founded:</span>
                <span className="detail lg:text-2xl">1878</span>
              </li>
              <li>
                <span className="title">Stadium:</span>
                <span className="detail lg:text-2xl">Goodison Park</span>
              </li>
              <li>
                <span className="title">Manager:</span>
                <span className="detail lg:text-2xl">Sean Dyche</span>
              </li>
              <li>
                <span className="title">League:</span>
                <span className="detail lg:text-2xl">Premier League</span>
              </li>
            </ul>
          </div> 
          <div className="mt-8 playing-squad">
            <h2 className="mb-2 text-lg font-medium uppercase">Playing Squad</h2>
            <div className="grid justify-between grid-cols-1 players gap-x-4 gap-y-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {evertonSquad.map((player) => (
                
                <div key={player.slug} className="space-y-2 border border-blue-700 rounded-lg player basis-48 lg:basis-64 xl:basis-80 bg-blue-700/80 group">
                  <div className="relative mb-2 space-y-2 player-image-and-number">
                    <div className="player-image border-t-lg relative aspect-[3/2] overflow-hidden">
                      <Image src={`/everton/${player.slug}.webp`} alt={player.name} width={450} height={300} className="!rounded-t-lg !max-w-full object-center aspect-[3/2] absolute group-hover:scale-110 duration-500" />
                    </div>
                    <div className="player-number absolute top-2 left-2 text-2xl py-1 px-2 !aspect-square flex justify-center items-center bg-black/60">{player.number}</div>
                  </div>
                  <div className="pt-2 pb-6 space-y-2 text-center player-details">
                    <div className="relative tracking-wide uppercase player-name">{player.name}</div>
                    <div className="player-details-row">
                      <div className="relative player-position">{player.position}</div>
                      <div className="relative player-country">{player.country}</div>
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