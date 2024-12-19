import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';

export default function COMPONENT_CARD_FOR_LEAGUE_RULES () {
	return(
		<div className={`${magEPL_CardStyles} col-span-1`}>
			<h2 className={magEPL_H2Styles}>Rules</h2>
			<ul className="text-sm flex flex-col gap-1">
				<li className="pt-4">13 minute matches</li>
				<li>Excellent Condition</li>
				<li>5 Subs</li>
				<li>No extra time/penalties</li>
			</ul>						
		</div>	
	)
}