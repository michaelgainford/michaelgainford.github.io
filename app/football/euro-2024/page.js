import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
const mainStyles = "mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center";

const euro2024Teams = [
  {
    name: "Albania",
    flag: "/country-flags/al.svg",
    group: "B",
    groupSeeding: 4,
  },
  {
    name: "Austria",
    flag: "/country-flags/at.svg",
    group: "D",
    groupSeeding: 4,
  },
  {
    name: "Belgium",
    flag: "/country-flags/be.svg",
    group: "E",
    groupSeeding: 3,
  },
  {
    name: "Croatia",
    flag: "/country-flags/hr.svg",
    group: "B",
    groupSeeding: 2,
  },
  {
    name: "Czech Republic",
    flag: "/country-flags/cz.svg",
    group: "F",
    groupSeeding: 2,
  },
  {
    name: "Denmark",
    flag: "/country-flags/dk.svg",
    group: "C",
    groupSeeding: 2,
  },
  {
    name: "England",
    flag: "/country-flags/en.svg",
    group: "C",
    groupSeeding: 4,
  },
  {
    name: "France",
    flag: "/country-flags/fr.svg",
    group: "D",
    groupSeeding: 2,
  },
  {
    name: "Georgia",
    flag: "/country-flags/ge.svg",
    group: "F",
    groupSeeding: 3,
  },
  {
    name: "Germany",
    flag: "/country-flags/de.svg",
    group: "A",
    groupSeeding: 1,
  },
  {
    name: "Hungary",
    flag: "/country-flags/hu.svg",
    group: "A",
    groupSeeding: 3,
  },
  {
    name: "Italy",
    flag: "/country-flags/it.svg",
    group: "B",
    groupSeeding: 3,
  },
  {
    name: "Netherlands",
    flag: "/country-flags/nl.svg",
    group: "D",
    groupSeeding: 1,
  },
  {
    name: "Poland",
    flag: "/country-flags/pl.svg",
    group: "D",
    groupSeeding: 3,
  },
  {
    name: "Portugal",
    flag: "/country-flags/pt.svg",
    group: "F",
    groupSeeding: 1,
  },
  {
    name: "Romania",
    flag: "/country-flags/ro.svg",
    group: "E",
    groupSeeding: 4,
  },
  {
    name: "Scotland",
    flag: "/country-flags/sc.svg",
    group: "A",
    groupSeeding: 2,
  },
  {
    name: "Serbia",
    flag: "/country-flags/rs.svg",
    group: "C",
    groupSeeding: 3,
  },
  {
    name: "Slovakia",
    flag: "/country-flags/sk.svg",
    group: "E",
    groupSeeding: 2,
  },
  {
    name: "Slovenia",
    flag: "/country-flags/si.svg",
    group: "C",
    groupSeeding: 1,
  },
  {
    name: "Spain",
    flag: "/country-flags/es.svg",
    group: "B",
    groupSeeding: 1,
  },
  {
    name: "Switzerland",
    flag: "/country-flags/ch.svg",
    group: "A",
    groupSeeding: 4,
  },
  {
    name: "Turkey",
    flag: "/country-flags/tr.svg",
    group: "F",
    groupSeeding: 4,
  },
  {
    name: "Ukraine",
    flag: "/country-flags/ua.svg",
    group: "E",
    groupSeeding: 1,
  }
];
// Sort by group and then group seeding
euro2024Teams.sort((a, b) => {
  if (a.group > b.group) {
    return 1;
  } else if (a.group < b.group) {
    return -1;
  } else {
    return a.groupSeeding - b.groupSeeding;
  }
}
);

const groups = [...new Set(euro2024Teams.map((team) => team.group))];
groups.sort();

export default function Home() {
  return (
    <div className="bg-blue-900">

      <MainHeader />

      <main className={mainStyles}>

        <H1 text="Euro 2024" />

        <div className="grid hidden grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 first-line:gap-4 countries-grid-container">
          {euro2024Teams.map((team, index) => (
            <div key={index} className="flex flex-col items-center w-full pb-4 duration-300 ease-in-out border border-blue-900 rounded-md cursor-pointer movie-card text-light_colour border-secondary group hover:bg-secondary">
              <Image className="text-sm duration-1000 group-hover:ease-in-out group-hover:scale-100 group-hover:rounded-t-md" src={team.flag} loading="lazy" alt={team.name} width={32} height={32} />
              <p className="pt-2 lg:pt
              -4 lg:px-2 group-hover:pt-2 ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 w-[200px] text-center text-xs lg:text-md min-h-[60px] max-w-full">{team.name}</p>
            </div>
          ))}

        </div>

        <div className="grid w-full grid-cols-2 gap-8 groups sm:grid-cols-3 lg:grid-cols-6 2xl:gap-16">
          {groups.map((group, index) => (
            <div key={index} className="flex flex-col w-full px-4 py-6 text-blue-900 border border-blue-600 rounded-lg group bg-white/90">
              <h2 className="mb-4 text-sm font-bold tracking-wider text-left uppercase sm:text-center lg:text-left">Group {group}</h2>
              <div className="flex flex-col justify-center gap-4 group-teams">
                {euro2024Teams.filter((team) => team.group === group).map((team, index) => (
                  <div key={index} className="flex items-center gap-4 team sm:flex-col lg:flex-row">
                    <Image src={team.flag} alt={team.name} width={32} height={32} />
                    <p className="text-xs">{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        <MainFooter />

      </main>
    </div>
  );
}