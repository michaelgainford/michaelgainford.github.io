import Link from 'next/link';

export default function STANDARD_BUTTON({ href, label, title, ariaLabel }) {
  return (
    <Link 
      aria-label={ariaLabel} 
      className={`px-8 py-3 sm:py-4 mx-auto text-[10px] tracking-widest uppercase transition border rounded main-btn bg-slate-800 border-slate-700 hover:bg-slate-700 xl:text-sm`}
      href={href} 
      title={title} 
    >
      {label}
    </Link>
  )
}