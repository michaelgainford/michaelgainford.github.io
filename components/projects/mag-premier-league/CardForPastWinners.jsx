import Link from 'next/link';
import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';
import IconMagPremierLeague from '@/components/icons/IconMagPremierLeague';

export default function COMPONENT_CARD_FOR_PAST_WINNERS () {
	return(
		<div className={magEPL_CardStyles}>
			<h2 className={magEPL_H2Styles}>Past Winners</h2>

			<div className="p-8 space-y-4 h-full w-full flex flex-col justify-center">
				<IconMagPremierLeague 
					fillOne="#EAB305" 
					classes="mx-auto size-24 lg:size-40" 
				/>
				<div className="team mx-auto lg:opacity-80 lg:hover:opacity-100 lg:transition-all lg:duration-300 rounded-md w-full">
					<table className="border border-magpl/30 w-full! [&_th]:p-1 [&_td]:p-1">
						<thead className='bg-magpl/20 group-hover:bg-magpl group-hover:text-slate-900 transition-all duration-500'>
							<tr>
								<th>Season</th>
								<th>Winner</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-magpl/30">
								<td className="w-1/2"><Link href="/projects/gaming/the-mag-premier-league/seasons/season-1" className="block hover:bg-slate-950 transition-all duration-500">1</Link></td>
								<td className="w-1/2">Alfie</td>
							</tr>
							<tr>
								<td className="w-1/2"><Link href="/projects/gaming/the-mag-premier-league/seasons/season-2" className="block hover:bg-slate-950 transition-all duration-500">2</Link></td>
								<td className="w-1/2">???</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>		
	)
}