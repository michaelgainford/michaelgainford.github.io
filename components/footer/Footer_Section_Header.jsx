export default function FOOTER_SECTION_HEADER ({ text }) {
	return (
		<h3 
		  className={`
		    mb-2 text-base tracking-wider text-left font-normal underline-offset-8 
			max-sm:hidden max-sm:underline 
			sm:mb-6
			lg:text-lg lg:mb-16 lg:font-bold
		  `}
		>	
			{text}
		</h3>
	)
}