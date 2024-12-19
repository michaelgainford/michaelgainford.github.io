import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';

export default function COMPONENT_CARD_FOR_PAST_SEASONS () {
	return(
		<div className={`${magEPL_CardStyles} col-span-1 rounded-none!`}>
			<h2 className={`${magEPL_H2Styles}`}>Past Seasons</h2>
		</div>
	)
}