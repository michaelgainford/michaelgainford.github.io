export default function FOOTER_NAVLIST_HEADER({ text }) {
	return (
		<>
		<h3 className={`pb-4 mb-0 text-xs tracking-widest font-extralight text-left uppercase sm:border-b sm:border-slate-700 max-sm:w-full lg:mb-4 lg:text-left sm:hidden`}>
			{text}
		</h3>
    	<h4 className={`pb-4 mb-0 text-xs tracking-widest font-extralight text-left uppercase sm:border-b sm:border-slate-700 max-sm:w-full lg:mb-4 lg:text-left max-sm:hidden`}>
			{text}
		</h4>
		</>
	)
}