//import Image from "next/image";
import MainNav from "@/components/MainNav";
import MainLogo from "@/components/MainLogo";
import MainIntro from "@/components/MainIntro";
import MainResources from "@/components/MainResources";
import MainFooter from "@/components/MainFooter";
// import hand.svg from the public folder
//import hand from "../public/hand.svg";
import MainProjects from "@/components/MainProjects";
import MainHeader from "@/components/MainHeader";
import Image from "next/image";

const euro2024Teams = [
  {
    name: "Albania",
    flag: "/country-flags/al.svg",
    group: "A",
    groupPosition: 4,
  },
  {
    name: "Austria",
    flag: "/country-flags/at.svg",
    group: "C",
    groupPosition: 3,
  },
  {
    name: "Belgium",
    flag: "/country-flags/be.svg",
    group: "B",
    groupPosition: 1,
  },
  {
    name: "Croatia",
    flag: "/country-flags/hr.svg",
    group: "D",
    groupPosition: 2,
  },
  {
    name: "Czech Republic",
    flag: "/country-flags/cz.svg",
    group: "D",
    groupPosition: 3,
  },
  {
    name: "Denmark",
    flag: "/country-flags/dk.svg",
    group: "B",
    groupPosition: 2,
  },
  {
    name: "England",
    flag: "/country-flags/en.svg",
    group: "D",
    groupPosition: 1,
  },
  {
    name: "France",
    flag: "/country-flags/fr.svg",
    group: "F",
    groupPosition: 1,
  },
  {
    name: "Georgia",
    flag: "/country-flags/ge.svg",
    group: "C",
    groupPosition: 2,
  },
  {
    name: "Germany",
    flag: "/country-flags/de.svg",
    group: "F",
    groupPosition: 2,
  },
  {
    name: "Hungary",
    flag: "/country-flags/hu.svg",
    group: "F",
    groupPosition: 4,
  },
  {
    name: "Italy",
    flag: "/country-flags/it.svg",
    group: "A",
    groupPosition: 1,
  },
  {
    name: "Netherlands",
    flag: "/country-flags/nl.svg",
    group: "C",
    groupPosition: 1,
  },
  {
    name: "Poland",
    flag: "/country-flags/pl.svg",
    group: "E",
    groupPosition: 2,
  },
  {
    name: "Portugal",
    flag: "/country-flags/pt.svg",
    group: "D",
    groupPosition: 4,
  },
  {
    name: "Romania",
    flag: "/country-flags/ro.svg",
    group: "C",
    groupPosition: 4,
  },
  {
    name: "Scotland",
    flag: "/country-flags/sc.svg",
    group: "D",
    groupPosition: 4,
  },
  {
    name: "Serbia",
    flag: "/country-flags/rs.svg",
    group: "E",
    groupPosition: 4,
  },
  {
    name: "Slovakia",
    flag: "/country-flags/sk.svg",
    group: "E",
    groupPosition: 3,
  },
  {
    name: "Slovenia",
    flag: "/country-flags/si.svg",
    group: "F",
    groupPosition: 3,
  },
  {
    name: "Spain",
    flag: "/country-flags/es.svg",
    group: "E",
    groupPosition: 1,
  },
  {
    name: "Switzerland",
    flag: "/country-flags/ch.svg",
    group: "A",
    groupPosition: 3,
  },
  {
    name: "Turkey",
    flag: "/country-flags/tr.svg",
    group: "A",
    groupPosition: 2,
  },
  {
    name: "Ukraine",
    flag: "/country-flags/ua.svg",
    group: "E",
    groupPosition: 4,
  }
];

export default function Home() {
  return (
    <div className="bg-blue-900">

      <MainHeader />

      <main className="mx-auto w-[90%] md:w-[92%] lg:w-[95%]] flex flex-col items-center justify-between min-h-screen gap-y-12 >*:bg-slate-200 mt-16">

        <h1 className="mb-4 text-sm tracking-wide text-left font-extralight lg:text-2xl lg:mb-6 text-slate-400">Euro 2024</h1>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4 first-line:gap-4 countries-grid-container">
          {euro2024Teams.map((team, index) => (
            <div key={index} className="flex flex-col items-center pb-4 duration-300 ease-in-out border border-blue-900 rounded-md cursor-pointer movie-card text-light_colour border-secondary group hover:bg-secondary">
              <Image className="text-sm duration-1000 group-hover:ease-in-out group-hover:scale-100 group-hover:rounded-t-md" src={team.flag} loading="lazy" alt={team.name} width={32} height={32} />
              <p className="pt-2 lg:pt
              -4 lg:px-2 group-hover:pt-2 ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 w-[200px] text-center text-xs lg:text-md min-h-[60px] max-w-full">{team.name}</p>
            </div>
          ))}

        </div>

        <MainFooter />

      </main>
    </div>
  );
}