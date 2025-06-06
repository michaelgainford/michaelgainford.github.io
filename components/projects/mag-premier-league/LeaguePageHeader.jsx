import IconMagPremierLeague from "@/components/icons/IconMagPremierLeague";
import H1 from "@/components/typography/H1_Span";
import Link from "next/link";

export default function Component_LeaguePageHeader() {
	return (
		<div className="max-lg:mt-16 md:border-none w-full pb-8 lg:pb-12">
			<Link href="/projects/gaming/the-mag-premier-league" className="flex flex-col items-center gap-2">
				<IconMagPremierLeague 
					classes="mx-auto size-24 md:size-32 lg:size-48"
					fillOne="#2BC9BC"
					fillTwo="#1EA095"
				/>
				<H1 
					font_sizes="" 
					text="The MAG Premier League" 
					other_classes="text-balance! font-bold! text-balance uppercase font-bold! text-slate-300  mb-0! pb-0! pt-0! leading-5 lg:leading-[1.1em]!"
				/>
			</Link>
		</div>
	)
}