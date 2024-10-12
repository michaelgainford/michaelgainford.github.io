import Link from 'next/link';

export default function BUTTON_GLOBAL({ href, label, title, ariaLabel }) {
	return (
		<Link 
			aria-label={ariaLabel} 
			className={`px-8 py-3 mx-auto text-xs tracking-widest lg:uppercase transition duration-300 border rounded main-btn bg-slate-800 border-slate-700 sm:py-4 xl:text-sm hover:bg-amber-500 hover:text-slate-900`}
			href={href} 
			title={title} 
		>
			{label}
		</Link>
	)
}