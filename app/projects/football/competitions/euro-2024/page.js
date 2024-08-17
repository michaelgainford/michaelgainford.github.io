import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";

import Euro2024Teams from "@/components/data/DataForEuro2024";

// Sort by group and then group seeding
Euro2024Teams.sort((a, b) => {
  if (a.group > b.group) {
    return 1;
  } else if (a.group < b.group) {
    return -1;
  } else {
    return a.groupSeeding - b.groupSeeding;
  }
}
);

const groups = [...new Set(Euro2024Teams.map((team) => team.group))];
groups.sort();

export default function Home() {
  return (
    <div className={`bg-dots-background bg-blue-800 ${globalPageStyles}`}>

      <MainHeader />

      <main className={`${mainStyles}`}>

        <H1 text="Euro 2024" />

        <div className="hidden grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 first-line:gap-4 countries-grid-container">
          {Euro2024Teams.map((team, index) => (
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
                {Euro2024Teams.filter((team) => team.group === group).map((team, index) => (
                  <div key={index} className="flex items-center gap-4 team sm:flex-col lg:flex-row">
                    <Image src={team.flag} alt={team.name} width={32} height={32} />
                    <p className="text-xs">{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>


      </main>
        <MainFooter />
    </div>
  );
}