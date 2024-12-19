import { magEPL_CardStyles, magEPL_H2Styles } from '@/variables/Styles';

export default function COMPONENT_CARD_FOR_CURRENT_TEAMS () {
	return (
		<div className={`${magEPL_CardStyles}`}>
			<h2 className={`${magEPL_H2Styles}`}>Current Teams</h2>
			<div className="w-full flex flex-col gap-8 justify-center p-4">
				<div className="text-white bg-red-800 team mx-auto lg:opacity-50 lg:hover:opacity-100 lg:transition-all lg:duration-300 w-full rounded-md">
					<span className={`text-2xl lg:text-lg py-4 flex justify-center`}>Alfie</span>
				</div>
				<div className="text-black bg-blue-800 team mx-auto lg:opacity-50 lg:hover:opacity-100 lg:transition-all lg:duration-300 w-full rounded-md">
					<span className={`text-2xl lg:text-lg py-4 flex justify-center`}>Garcon</span>
				</div>
				<div className="text-white bg-black team mx-auto lg:opacity-50 lg:hover:opacity-100 lg:transition-all lg:duration-300 w-full rounded-md">
					<span className={`text-2xl lg:text-lg py-4 flex justify-center`}>Michael</span>
				</div>
			</div>
		</div>
	)
}