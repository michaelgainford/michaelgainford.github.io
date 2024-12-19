import Button from '@/components/buttons/Button';
import { magEPLCurrentSeason as currentSeason } from '@/variables/Data';
import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';

export default function COMPONENT_CARD_FOR_CURRENT_SEASON () {
	return(
		<div className={`${magEPL_CardStyles} mg-test border-none col-span-1`}>
			<h2 className={`${magEPL_H2Styles}`}>Current Season</h2>
			<div className="flex flex-col items-center justify-center h-full">
				<div className="contents space-y-4">
					<p className="text-[160px] font-bold leading-none">{currentSeason}</p>
					<Button label="View Season Info" border="border-magpl" href={`/projects/gaming/the-mag-premier-league/seasons/season-${currentSeason}`} />
				</div>
			</div>
		</div>		
	)
}