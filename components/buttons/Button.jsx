import Link from "next/link";

export default function Component_Button({
	href,
	label,
	title,
	ariaLabel,
	background_colour,
	border_colour,
	hover_background_colour,
	text_colour,
	hover_text_colour,
	after
}) {
	return (
		<Link
			aria-label={ariaLabel}
			className={`px-8 py-3 mx-auto text-xs tracking-widest transition duration-300 border rounded-sm flex ${background_colour} ${border_colour} ${hover_background_colour} ${text_colour} ${hover_text_colour} hover:-translate-y-1 sm:py-4 lg:uppercase xl:text-sm 3xl:py-5 3xl:text-base leading-none flex items-center gap-1`}
			href={href}
			title={title}
		>
			<span>{label}</span>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-6">
  			<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
			</svg>
		</Link>
	);
}