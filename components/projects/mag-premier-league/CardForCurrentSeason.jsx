import Button from '@/components/buttons/Button';
import { magPLCurrentSeason as currentSeason } from '@/variables/Data';
import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';

export default function COMPONENT_CARD_FOR_CURRENT_SEASON () {
	return(
		<div className={magEPL_CardStyles}>
			<h2 className={`${magEPL_H2Styles} group-hover:bg-magpl group-hover:text-slate-900 transition-all duration-500`}>Current Season</h2>
			<div className="flex flex-col items-center justify-center h-full p-8">
				<div className="contents space-y-4">
					<p className="text-[160px] font-bold leading-none text-white/70 group-hover:text-white">{currentSeason}</p>
					<Button 
						ariaLabel={`View Season ${currentSeason} Info`}
						background_colour="bg-transparent"
						border_colour="border-magpl/20 group-hover:border-magpl-500"
						hover_background_colour="hover:bg-magpl-500"
						hover_text_colour="hover:text-slate-900"
						label={`View Season ${currentSeason}`}
						href={`/projects/gaming/the-mag-premier-league/seasons/season-${currentSeason}`} 
						text_colour="text-white"
						title={`View Season ${currentSeason} Info`}
					/>
				</div>
			</div>
		</div>		
	)
}