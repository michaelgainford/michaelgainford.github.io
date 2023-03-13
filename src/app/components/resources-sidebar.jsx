import Image from "next/image";
import Link from "next/link";

const SideBarLinks = [
  {
    id: 1,
    name: "Resources",
    url: "/",
    icon: "/spanner.svg",
  },
  {
    id: 2,
    name: "Password Generator",
    url: "/password-generator",
    icon: "/spanner.svg",
  },
  {
    id: 3,
    name: "Another Link",
    url: "/another-link",
    icon: "/spanner.svg",
  },
  {
    id: 4,
    name: "This Link",
    url: "/this-link",
    icon: "/spanner.svg",
  },
  {
    name: "That Link",
    url: "/that-link",
    icon: "/spanner.svg",
  }
];

export default function Sidebar() {
  return (
    <div className="lg:fixed lg:top-0 lg:h-screen lg:w-[calc(100%/12)]  col-start-1 col-span-1 hover:col-span-2 py-4 lg:py-0 bg-slate-900 transition duration-300 ">
      <ul className="grid grid-cols-5 lg:grid-cols-1 lg:h-screen w-full text-slate-300">
        {SideBarLinks.map((link) => (
          <li key={link.id} className="flex flex-col justify-center items-center gap-y-4 px-4 lg:px-0">
            <Link
              href={link.url}
              className="hover:bg-slate-800 hover:text-white h-full w-full flex flex-col justify-center items-center"
            >
              <Image
                src="/spanner.svg"
                alt="Vercel Logo"
                className="logo h-6 lg:h-8 w-6 lg:w-8 fill-red-500"
                width={48}
                height={48}
                priority
              />
              <p className="hidden lg:inline-block  px-4 text-[10px] text-slate-500 uppercase text-center">
                {link.name}
              </p>
            </Link>
          </li>
          ))}
      </ul>
    </div>
  );
}
