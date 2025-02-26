import Link from "next/link"
import DataForMainNavJSON from "@/data/data_for__sitemap.json";
const DataForMainNav = DataForMainNavJSON.Pages;
const mainNavLinks = DataForMainNav.filter((link) => link.mainNav === true)

export default function Component_MainNav() {
	return (
		<nav className="flex items-center justify-start nav logo max-lg:hidden">
			<ul className="flex max-sm:justify-center items-center w-full gap-2 pt-6 sm:pt-0 max-md:overflow-auto text-[10px] md:text-xs tracking-wider uppercase lg:py-8 lg:justify-center lg:gap-7 no-scrollbar @container-inline">
				{mainNavLinks.map((link, index) => (
				<li key={index}>
					<Link className={`inline-block px-4 py-3 transition border-b rounded-t-lg sm:border-b-2 hover:text-slate-300 md:px-1 lg:px-4 lg:py-5 ${link.border_colour} ${link.hover} min-w-max duration-300`} href={link.href}>
					{link.label}
					</Link>
				</li>
				))}
			</ul>
		</nav>
	)
}