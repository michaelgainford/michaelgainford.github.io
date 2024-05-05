import Link from "next/link";
import FooterSectionHeader from "/components/footer/FooterSectionHeader";
import FooterNavListHeader from "/components/footer/FooterNavListHeader";
import { navigation } from "../data/Variables";

// filter navigation based on footerNav being true
const footerNavLinks1 = navigation.filter((link) => link.footerNav_1 === true);
const footerNavLinks2 = navigation.filter((link) => link.footerNav_2 === true);

const linkClasses = "flex py-2";



export default function MainFooterNav() {
  return (
    <div className="col-span-1 footer-information lg:col-span-2 lg:pr-8">
      <FooterSectionHeader text="Information" />
      <div className="footer-navs grid grid-cols-1 sm:grid-cols-2 gap-16 lg:flex-row footer-nav lg:grid lg:grid-cols-2 max-sm:mb-4">
        <details className="sm:hidden w-full">
          <summary className="flex w-full">
            <FooterNavListHeader text="Projects" />
            </summary>
          <ul className="text-xs text-left md:text-sm lg:text-left">
            {footerNavLinks1.map((item, index) => (
              <li key={index}>
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
                <Link className={`${linkClasses}`} href
                ={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <details className="sm:hidden w-full">
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
                <Link className={`${linkClasses}`} href={item.href
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
