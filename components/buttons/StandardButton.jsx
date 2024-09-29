import Link from 'next/link';

export default function StandardButton({ href, label, title, ariaLabel, className }) {
  return (
    <Link href={href} aria-label={ariaLabel} title={title} className={`px-8 py-3 sm:py-4 mx-auto text-[10px] tracking-wider uppercase transition border rounded lg:text-sm main-btn bg-slate-800 border-slate-700 hover:bg-slate-700`}>
      {label}
    </Link>
  )
}