import Link from 'next/link';

export default function BUTTON_GLOBAL({ href, label, title, ariaLabel, background_colour, border_colour, hover_background_colour, text_colour, hover_text_colour }) {
	return (
		<Link 
			aria-label={ariaLabel} 
			className={`px-8 py-3 mx-auto text-xs tracking-widest transition duration-300 border rounded ${background_colour} ${border_colour} ${hover_background_colour} ${text_colour} ${hover_text_colour} sm:py-4 lg:uppercase xl:text-sm`}
			href={href} 
			title={title} 
		>
			{label}
		</Link>
	)
}