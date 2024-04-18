import Link from "next/link"

// Create a variable to store navigational links
const navLinks = [
  { href: "/", label: "Home", border: "border-slate-700", hover: "hover:bg-slate-900"},
  { href: "/dev-resources", label: "Dev Resources", border: "border-teal-700", hover: "hover:bg-teal-900" },
  { href: "/euro-2024", label: "Euro 2024", border: "border-blue-700", hover: "hover:bg-blue-900"},
  { href: "/movies-database", label: "Movies DB", border: "border-violet-700", hover: "hover:bg-violet-900"},
  { href: "/jokes", label: "Jokes", border: "border-rose-700", hover: "hover:bg-rose-900"},
]

// Setup a components called MainNav 
export default function MainNav() {
  return (
    <nav className="flex justify-start nav logo">
      <ul className="flex gap-2 pt-8 pb-4 max-md:overflow-auto text-[12px] tracking-wider uppercase lg:py-8 lg:justify-center lg:gap-7 no-scrollbar">
        {navLinks.map((link, index) => (
          <li key={index} className="">
            <Link className={`inline-block px-4 py-3 transition border-2 rounded-lg hover:text-slate-300 lg:px-12 lg:py-5 ${link.border} ${link.hover} min-w-max`} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}