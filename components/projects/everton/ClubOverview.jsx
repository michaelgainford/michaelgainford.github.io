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

const clubStats = [
	{ label: "League Titles", value: 9 },
	{ label: "FA Cups", value: 5 },
	{ label: "Top Division Seasons", value: 117 },
	{ label: "Founded", value: ClubOverview.founded },
];

const achievements = [
	"9 League Championship titles",
	"5 FA Cup victories",
	"One of the oldest professional football clubs",
	"117+ consecutive seasons in top division",
	"Historic Goodison Park stadium",
];

export default function Component_ClubOverview() {
	return (
		<div className={`space-y-8 mt-8 pt-8 border-t border-blue-400/20`}>
			<div className={`details`}>
				<h2 className={`mb-6 text-lg font-medium uppercase lg:text-2xl`}>Club Information</h2>
				<ul className={`grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 *:flex *:flex-col`}>
					{team_headings_and_info.map((team_heading_and_info) => (
					<li key={team_heading_and_info.label}>
						<span className={`text-xxs uppercase tracking-[0.16em] text-blue-300/80`}>{team_heading_and_info.label}</span>
						<span className={`mt-2 text-lg font-semibold text-blue-100 lg:text-2xl`}>{team_heading_and_info.value}</span>
					</li>
					))}
				</ul>
			</div>

			<div className={`stats`}>
				<h2 className={`mb-6 text-lg font-medium uppercase lg:text-2xl`}>Club Statistics</h2>
				<div className={`grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6`}>
					{clubStats.map((stat) => (
						<div key={stat.label} className={`rounded-lg border border-blue-400/20 bg-blue-950/60 p-4 text-center`}>
							<p className={`text-xxs uppercase tracking-[0.16em] text-blue-300/80`}>{stat.label}</p>
							<p className={`mt-2 text-2xl font-bold text-cyan-300`}>{stat.value}</p>
						</div>
					))}
				</div>
			</div>

			<div className={`achievements`}>
				<h2 className={`mb-6 text-lg font-medium uppercase lg:text-2xl`}>Key Achievements</h2>
				<ul className={`space-y-3`}>
					{achievements.map((achievement, index) => (
						<li key={index} className={`flex items-start gap-3 rounded-lg border border-blue-400/15 bg-blue-950/40 p-4`}>
							<span className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 text-xxs font-bold`}>✓</span>
							<span className={`text-blue-100/90`}>{achievement}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}