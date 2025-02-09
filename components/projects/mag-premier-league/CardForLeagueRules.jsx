import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';

const magPLConfig = {
	leagueRules: [
		"3 teams",
		"Each team players each other 8 times at home and 8 times away from home",
		"A red card for 2 yellows card = 1 match ban",
		"A straight red card = 3 match ban",
		"Prize money: £20"
	],
	gameSettings: [
		"13 minute matches",
		"Excellent Condition",
		"5 Subs",
		"No extra time/penalties"
	]
}

export default function Component_MAGPLCardForLeagueRules() {
	return(
		<div className={magEPL_CardStyles}>
			<h2 className={magEPL_H2Styles}>Rules</h2>
			<div className="lists-group flex flex-col justify-center h-full w-full py-4">
				<ul className="text-sm px-4 lg:px-8 text-left space-y-2 gap-x-8 [&>li:not(:first-child)]:text-xs [&>li:not(:first-child)]:list-disc [&>li:not(:first-child)]:ml-4 opacity-70 group-hover:opacity-100 transition-all duration-300">
					<li className="border-b-2 border-slate-900 font-bold w-full col-span-2">League Rules</li>
					{magPLConfig.leagueRules.map((rule, index) => (
						<li key={index}>{rule}</li>
					))}
				</ul>
				<ul className="text-sm py-8 px-4 lg:px-8 text-left space-y-2 gap-x-8 [&>li:not(:first-child)]:text-xs [&>li:not(:first-child)]:list-disc [&>li:not(:first-child)]:ml-4 opacity-70 group-hover:opacity-100 transition-all duration-300">
				<li className="border-b-2 border-slate-900 font-bold w-full col-span-2">Game Settings</li>
					{magPLConfig.gameSettings.map((setting, index) => (
						<li key={index}>{setting}</li>
					))}
				</ul>
			</div>						
		</div>	
	)
}