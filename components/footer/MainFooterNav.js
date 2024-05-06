import Link from "next/link";
import DataForNavigation from "../data/DataForNavigation";
import FooterSectionHeader from "/components/footer/FooterSectionHeader";
import FooterNavListHeader from "/components/footer/FooterNavListHeader";

// filter navigation based on footerNav being true
const footerNavLinks1 = DataForNavigation.filter((link) => link.footerNav_1 === true);
const footerNavLinks2 = DataForNavigation.filter((link) => link.footerNav_2 === true);

const linkClasses = "flex py-2";

export default function MainFooterNav() {
  return (
    <div className="col-span-1 footer-information lg:col-span-2 lg:pr-8">
      <FooterSectionHeader text="Information" />
      <div className="grid grid-cols-1 gap-16 footer-navs sm:grid-cols-2 lg:flex-row footer-nav lg:grid lg:grid-cols-2 max-sm:mb-4">
        <details className="w-full sm:hidden">
          <summary className="flex w-full">
            <FooterNavListHeader text="Projects" />
          </summary>
          <ul className="text-xs text-left md:text-sm lg:text-left">
            {footerNavLinks1.map((item, index) => (
              <li key={index} className={``}>
                <Link className={`${linkClasses}`} href
                ={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <div className="rounded lg:pr-8 footer-nav-group border-slate-700 max-sm:hidden">
          <FooterNavListHeader text="Projects" />
          <ul className="text-xs text-left md:text-sm lg:text-left">
            {footerNavLinks1.map((item, index) => (
              <li key={index}>
                <Link className={`${linkClasses} hover:ml-4 duration-500`} href
                ={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <details className="w-full sm:hidden">
          <summary className="flex w-full">
            <FooterNavListHeader text="Boring Stuff" />
          </summary>
          <ul className="text-xs text-left md:text-sm lg:text-left">
            {footerNavLinks2.map((item, index) => (
              <li key={index}>
                <Link className={`${linkClasses}`} href={item.href
                }>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <div className="rounded lg:pr-8 footer-nav-group border-slate-700 max-sm:hidden">
          <FooterNavListHeader text="Boring Stuff" />
          <ul className="text-xs text-left md:text-sm lg:text-left">
            {footerNavLinks2.map((item, index) => (
              <li key={index}>
                <Link className={`${linkClasses} hover:ml-4 duration-500`} href={item.href
                }>
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
