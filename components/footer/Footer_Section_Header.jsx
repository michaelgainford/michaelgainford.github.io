export default function FOOTER_SECTION_HEADER ({ text }) {
	return (
		<h3 className={`mb-2 text-base tracking-wider text-left font-normal lg:font-bold underline-offset-8 max-sm:hidden max-sm:underline lg:text-lg lg:mb-16`}>
			{text}
		</h3>
	)
}