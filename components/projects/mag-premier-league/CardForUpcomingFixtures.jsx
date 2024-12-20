import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';
import { magEPLUpcomingMatches } from '@/variables/Data';

export default function COMPONENT_CARD_FOR_PAST_WINNERS () {
	return(
		<div className={magEPL_CardStyles}>
			<h2 className={magEPL_H2Styles}>
				Upcoming Fixtures
			</h2>
			<ul className="divide-y divide-slate-800">
				{magEPLUpcomingMatches.map((fixture, index) => (
				<li key={index} className="flex items-center justify-center py-4 flex-col h-1/3">
					<span className="text-lg uppercase">{fixture.homeTeam} v {fixture.awayTeam}</span>
					<span className="text-sm">{fixture.date}</span>
				</li>
				))}
			</ul>
		</div>	
	)
}