export default function Component_H2SectionHeader({ text }) {
	return (
		<h2 className="py-2 mb-2 text-xs font-normal leading-relaxed tracking-wider text-center text-slate-400 max-sm:uppercase sm:text-left md:text-lg lg:text-lg lg:font-medium lg:py-4 lg:mb-3 xl:text-xl 2xl:mb-6 3xl:text-2xl before:flex before:mr-1 before:content-[''] before:h-2 before:w-2 before:items-center before:flex-col before:my-auto">
			{text}
		</h2>
	)
}