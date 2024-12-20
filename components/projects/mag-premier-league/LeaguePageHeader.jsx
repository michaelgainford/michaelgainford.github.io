import IconMagPremierLeague from "@/components/icons/IconMagPremierLeague";
import H1 from "@/components/typography/H1Span";

export default function COMPONENT_LEAGUE_PAGE_HEADER() {
	return (
		<div className="max-lg:mt-4 border-b border-slate-900 w-full pb-8 lg:pb-12">
			<div className="flex flex-col items-center gap-2">
				<IconMagPremierLeague 
					classes="mx-auto size-24 md:size-32 lg:size-48"
				/>
				<H1 
					font_sizes="" 
					text="The MAG Premier League" 
					other_classes="text-balance! font-bold! text-balance uppercase font-bold! text-slate-300  mb-0! pb-0! pt-0! leading-5 lg:leading-[1.1em]!"
				/>
			</div>
		</div>
	)
}