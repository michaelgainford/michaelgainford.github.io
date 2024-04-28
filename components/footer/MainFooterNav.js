import Link from "next/link";
import FooterSectionHeader from "/components/footer/FooterSectionHeader";
import FooterNavListHeader from "/components/footer/FooterNavListHeader";


const linkClasses = "flex py-2";

const footerNavItemsOne = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Dev Resources",
    href: "/dev-resources"
  },
  {
    title: "Euro 2024",
    href: "/football/euro-2024"
  },
  {
    title: "Movies Database",
    href: "/movies-database"
  },
  {
    title: "Jokes",
    href: "/jokes"
  }
];

const footerNavItemsTwo = [
  {
    title: "Contact",
    href: "/"
  },
  {
    title: "Contact",
    href: "/"
  },
  {
    title: "Link",
    href: "/"
  },
  {
    title: "Sitemap",
    href: "/"
  }
];


export default function MainFooterNav() {
  return (
    <div className="col-span-1 footer-information lg:col-span-2 lg:pr-8">
      <FooterSectionHeader text="Information" />
      <div className="footer-navs grid grid-cols-2 gap-16 lg:flex-row footer-nav lg:grid lg:grid-cols-2 max-sm:mb-4">
        <div className="rounded lg:pr-8 footer-nav-group border-slate-700">
          <FooterNavListHeader text="Fun Stuff" />
          <ul className="text-xs text-left md:text-sm lg:text-left">
            {footerNavItemsOne.map((item, index) => (
              <li key={index}>
                <Link className={`${linkClasses}`} href
                ={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded lg:pr-8 footer-nav-group border-slate-700">
          <FooterNavListHeader text="Boring Stuff" />
          <ul className="text-xs text-left md:text-sm lg:text-left">
            {footerNavItemsTwo.map((item, index) => (
              <li key={index}>
                <Link className={`${linkClasses}`} href={item.href
                }>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
