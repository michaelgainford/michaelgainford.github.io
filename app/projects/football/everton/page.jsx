import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/Footer";
import { globalPageStyles, mainStyles } from "@/data/Variables";
import EvertonData from "@/data/data_for__everton";
const EvertonPlayerData = EvertonData.Players;
const ClubOverview = EvertonData.ClubOverview;

const team_headings_and_info = [
	{
		label: "Founded",
		value: ClubOverview.founded,
	},
	{
		label: "Stadium",
		value: ClubOverview.stadium,
	},
	{
		label: "Manager",
		value: ClubOverview.manager,
	},
	{
		label: "League",
		value: ClubOverview.league,
	}
]

EvertonPlayerData.sort((a, b) => a.number - b.number);

export default function PAGE_EVERTON() {
  return (
    <div className={`${globalPageStyles} bg-linear-to-r from-blue-900 to-blue-700 text-white`}>
      <Header />
      <main className={`${mainStyles}`}>
        <H1 text={`Everton`} />
        <PageIntro text={ClubOverview.page_intro} />
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
            <div className={`grid justify-between grid-cols-1 players gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4`}>
              {EvertonPlayerData.map((player) => (
                <div key={player.slug} className={`flex flex-row space-y-2 border border-blue-700 rounded-lg player bg-blue-700/50 group sm:flex-col max-sm:gap-4`}>
                  <div className={`relative space-y-2 player-image-and-number sm:mb-2 max-sm:w-[40%]`}>
                    <div className={`player-image rounded-l-lg relative aspect-square overflow-hidden sm:aspect-3/2 sm:rounded-b-none`}>
                      <Image src={`/everton/${player.slug}.webp`} alt={player.name} width={450} height={300} className={`max-w-full! object-center aspect-square group-hover:scale-110 duration-500 object-cover w-full sm:aspect-3/2 sm:rounded-l-none sm:rounded-t-lg! lg:rounded-b-none!`} />
                    </div>
                    <div className={`player-number absolute top-0 left-1 text-xs p-2 aspect-square! flex justify-center items-center bg-black/60 md:top-2 md:left-2 md:text-2xl lg:text-xl`}>
                      {player.number}
                    </div>
                  </div>
                  <div className={`flex flex-col pt-2 pb-6 space-y-2 text-left player-details sm:text-center max-sm:w-[60%] max-sm:justify-center`}>
                    <div className={`relative tracking-wide uppercase player-name`}>
						{player.name}
					</div>
                    <div className={`player-details-row`}>
                      	<div className={`relative player-position`}>
							{player.position}
						</div>
						<div className={`relative player-country`}>
							{player.country}
						</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}