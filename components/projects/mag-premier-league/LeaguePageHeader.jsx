import IconMagPremierLeague from "@/components/icons/IconMagPremierLeague";
import H1 from "@/components/typography/H1Span";

export default function COMPONENT_LEAGUE_PAGE_HEADER() {
	return (
		<div className="max-lg:mt-4">
			<div className={`flex flex-col items-center gap-2 lg:gap-4`}>
				<IconMagPremierLeague classes={`mx-auto size-24 md:size-32 lg:size-48`} />
				<H1 text={`The MAG Premier League`} font_sizes={``} other_classes={`text-balance! font-bold! text-balance uppercase font-bold! text-slate-300 max-w-[20ch] mb-0! pb-0! pt-0!`} />
			</div>
		</div>
	)
}