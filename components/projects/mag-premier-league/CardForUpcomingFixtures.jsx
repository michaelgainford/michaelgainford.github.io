import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';
import { magEPLUpcomingMatches } from '@/variables/Data';

export default function COMPONENT_CARD_FOR_PAST_WINNERS () {
	return(
		<div className={magEPL_CardStyles}>
			<h2 className={magEPL_H2Styles}>
				Upcoming Fixtures
			</h2>
			<ul className="divide-y divide-slate-800 opacity-70 hover:opacity-100 transition-all duration-300">
				{magEPLUpcomingMatches.map((fixture, index) => (
				<li key={index} className="flex items-center justify-center py-4 flex-col h-1/3">
					<span className="text-base tracking-wide uppercase flex gap-2 items-center font-bold">
						<span className="text-right w-full">{fixture.homeTeam}</span> 
						<span className="text-center text-xs w-fit"> v </span>
						<span className="text-left w-full">{fixture.awayTeam}</span>
					</span>
					<span className="text-sm">{fixture.date} @ {fixture.time}</span>
				</li>
				))}
			</ul>
		</div>	
	)
}