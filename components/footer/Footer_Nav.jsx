import Link from "next/link";
import DataForNavigation from "../data/Data_For_Navigation";
import FooterSectionHeader from "/components/footer/Footer_Section_Header";
import FooterNavListHeader from "/components/footer/Footer_NavList_Header";

const footerNavLinks1 = DataForNavigation.filter((link) => link.footerNav_1 === true);
const footerNavLinks2 = DataForNavigation.filter((link) => link.footerNav_2 === true);

const linkClasses = `flex py-2`;
const detailsStyles = `rounded-lg p-4 bg-slate-900/50 group !overflow-x-auto [&_svg]:open:-rotate-180 w-full transition-all duration-300 sm:hidden md:max-w-[800px] lg:px-4`;
const summaryStyles = `flex justify-between md:py-4 cursor-pointer`;
const summaryHeaderSvgStyles = `rotate-0 transform text-slate-200 transition-all duration-300 size-4 stroke-1 cursor-pointer group-hover:text-amber-500/80 lg:mt-1 lg:size-6`;

export default function FOOTER_NAV() {
	return (
		<div className={`col-span-1 footer-information lg:col-span-2 lg:pr-8`}>
			<FooterSectionHeader text={`Information`} />
			<div className={`grid grid-cols-1 pt-4 footer-navs footer-nav sm:gap-16 sm:grid-cols-2 max-sm:mb-4 lg:grid lg:grid-cols-2 lg:flex-row`}>
				<details className={`${detailsStyles}`}>
					<summary className={`${summaryStyles} flex w-full cursor-pointer`}>
						<FooterNavListHeader text={`Projects`} />
							<span>
								<svg className={summaryHeaderSvgStyles} fill={`none`} height={`20`} width={`20`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2`} viewBox={`0 0 24 24`}>
									<polyline points={`6 9 12 15 18 9`}></polyline>
								</svg>
							</span>
					</summary>
					<ul className={`text-xs text-left md:text-sm lg:text-left`}>
						{footerNavLinks1.map((item, index) => (
						<li key={index}>
							<Link className={`${linkClasses}`} href={item.href}>
								{item.label}
							</Link>
						</li>
						))}
					</ul>
				</details>
				<div className={`footer-nav-group border-slate-700 rounded max-sm:hidden lg:pr-8`}>
					<FooterNavListHeader text={`Projects`} />
					<ul className={`pt-4 text-xs text-left md:text-sm lg:text-left`}>
						{footerNavLinks1.map((item, index) => (
						<li key={index}>
							<Link className={`${linkClasses} hover:ml-4 duration-500`} href={item.href}>
								{item.label}
							</Link>
						</li>
						))}
					</ul>
				</div>
				<details className={`${detailsStyles}`}>
					<summary className={`flex w-full`}>
						<FooterNavListHeader text={`Boring Stuff`} />
						<span>
							<svg 
								className={summaryHeaderSvgStyles} 
								fill={`none`} 
								height={`20`} 
								width={`20`} 
								stroke={`currentColor`} 
								strokeLinecap={`round`} 
								strokeLinejoin={`round`} 
								strokeWidth={`2`} 
								viewBox={`0 0 24 24`}>
								<polyline points={`6 9 12 15 18 9`}></polyline>
							</svg>
						</span>
					</summary>
					<ul className={`text-xs text-left md:text-sm lg:text-left`}>
						{footerNavLinks2.map((item, index) => (
						<li key={index}>
							<Link className={`${linkClasses}`} href={item.href}>
								{item.label}
							</Link>
						</li>
						))}
					</ul>
				</details>
				<div className={`footer-nav-group rounded border-slate-700 max-sm:hidden lg:pr-8`}>
					<FooterNavListHeader text={`Boring Stuff`} />
					<ul className={`pt-4 text-xs text-left md:text-sm lg:text-left`}>
						{footerNavLinks2.map((item, index) => (
						<li key={index}>
							<Link className={`${linkClasses} hover:ml-4 duration-500`} href={item.href}>
								{item.label}
							</Link>
						</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}