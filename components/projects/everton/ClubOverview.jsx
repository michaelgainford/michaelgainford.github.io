import EvertonData from "@/data/data_for__everton";
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

export default function Component_ClubOverview() {
	return (
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
	)
}