import Link from "next/link";

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
      <h3 className="mb-6 text-lg tracking-wider text-left max-sm:hidden h2 font-extralight lg:mb-16 max-sm:underline underline-offset-8">
        Information
      </h3>
      <div className="grid grid-cols-2 gap-16 lg:flex-row footer-nav lg:grid lg:grid-cols-2">
        <div className="rounded lg:pr-8 footer-nav-group border-slate-700">
          <h4 className="pb-4 mb-4 text-xs tracking-widest text-left uppercase border-b lg:text-left border-slate-700 font-extralight">
            Fun Stuff
          </h4>
          <ul className="text-xs text-left md:text-sm lg:text-left">
            {footerNavItemsOne.map((item, index) => (
              <li key={index}>
                <Link className="flex py-2" href
                ={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded lg:pr-8 footer-nav-group border-slate-700">
          <h4 className="pb-4 mb-4 text-xs tracking-widest text-left uppercase border-b lg:text-left border-slate-700 font-extralight">
            Boring Stuff
          </h4>
          <ul className="text-sm text-center lg:text-left">
            {footerNavItemsTwo.map((item, index) => (
              <li key={index}>
                <Link className="flex py-2" href={item.href
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
