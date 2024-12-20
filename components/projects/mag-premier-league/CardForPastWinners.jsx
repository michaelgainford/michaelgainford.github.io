import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';

export default function COMPONENT_CARD_FOR_PAST_WINNERS () {
	return(
		<div className={`${magEPL_CardStyles} rounded-t-none col-span-1 rounded-none!`}>
			<h2 className={`${magEPL_H2Styles} rounded-none!`}>Current Champion</h2>

			<div className="p-8">
				<ul>
					<li>Season 1: Alfie</li>
				</ul>
			</div>
		</div>		
	)
}