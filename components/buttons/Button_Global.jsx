import Link from "next/link";

export default function Component_ButtonGlobal({
	href,
	label,
	title,
	ariaLabel,
	background_colour,
	border_colour,
	hover_background_colour,
	text_colour,
	hover_text_colour,
}) {
	return (
		<Link
			aria-label={ariaLabel}
			className={`px-8 py-3 mx-auto text-xs tracking-widest transition duration-300 border rounded-sm ${background_colour} ${border_colour} ${hover_background_colour} ${text_colour} ${hover_text_colour} sm:py-4 lg:uppercase xl:text-sm 3xl:py-5 3xl:text-base`}
			href={href}
			title={title}
		>
			{label}
		</Link>
	);
}