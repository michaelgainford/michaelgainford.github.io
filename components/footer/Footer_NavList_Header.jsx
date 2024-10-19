const sharedClasses = `pb-4 mb-0 text-xs tracking-widest text-left uppercase sm:border-b sm:border-slate-700 max-sm:w-full lg:mb-4 lg:text-left`;

export default function FOOTER_NAVLIST_HEADER({ text }) {
	return (
		<>
		<h3 className={`${sharedClasses} sm:hidden`}>
			{text}
		</h3>
    	<h4 className={`${sharedClasses} max-sm:hidden`}>
			{text}
		</h4>
		</>
	)
}