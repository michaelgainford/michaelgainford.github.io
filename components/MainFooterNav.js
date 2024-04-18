import Link from "next/link";

const footerNavItemsOne = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Dev Resources",
    href: "/dev-resources-"
  },
  {
    title: "Euro 2024",
    href: "/euro-2024"
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
    title: "Link",
    href: "/"
  },
  {
    title: "Link",
    href: "/"
  },
  {
    title: "Link",
    href: "/"
  },
  {
    title: "Link",
    href: "/"
  },
  {
    title: "Link",
    href: "/"
  },
  {
    title: "Link",
    href: "/"
  }
];


export default function MainFooterNav() {
  return (
    <div className="footer-information col-span-1 lg:col-span-2 lg:pr-8">
      <h3 className="mb-8 lg:mb-16 max-lg:text-center text-lg tracking-wider font-extralight max-w-fit">
        Information
      </h3>
      <div className="gap-16 lg:flex-row footer-nav grid grid-cols-2 lg:grid lg:grid-cols-2">
        <div className="rounded lg:pr-8 footer-nav-group border-slate-700">
          <h4 className="pb-4 mb-4 text-xs tracking-widest lg:text-left text-center uppercase border-b  border-slate-700 font-extralight">
            Fun Stuff
          </h4>
          <ul className="lg:w-[200px] text-center lg:text-left text-sm">
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
          <h4 className="pb-4 mb-4 text-xs tracking-widest text-center uppercase border-b lg:text-left border-slate-700 font-extralight">
            Boring Stuff
          </h4>
          <ul className="lg:w-[200px] text-center lg:text-left text-sm">
            {footerNavItemsTwo.map((item, index) => (
              <li key={index}>
                <Link className="flex
                py-2" href={item.href
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
