import Image from "next/image";
import EvertonData from "@/data/data_for__everton";
const EvertonPlayerData = EvertonData.Players;
EvertonPlayerData.sort((a, b) => a.number - b.number);

export default function Component_PlayersGrid() {
	return (
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
	)
}