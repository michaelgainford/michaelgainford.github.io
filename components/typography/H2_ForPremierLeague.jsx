export default function Component_H2ForPremierLeague({ text }) {
	return (
		<h2
			className={`mb-4 mt-2 px-2 border-l-4 border-amber-500 w-auto md:w-full text-xs font-bold text-center leading-none uppercase md:text-left md:text-sm lg:text-lg`}
		>
			{text}
		</h2>
	);
}
