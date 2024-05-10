import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

import DataForFortnite from "@/components/data/DataForFortnite";

export default function Home() {
  return (
    <div className={`${globalPageStyles} !bg-topo-background`}>

      <MainHeader />

      <main className={`${mainStyles}`}>

        <H1 text="Fortnite" />

        <div className="grid w-full grid-cols-1 gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols">
          {DataForFortnite.map((season, index) => (
            <div key={index} className="bg-green-900 p-4 lg:py-8 flex flex-col justify-end aspect-square sm:aspect-[4/3] lg:aspect-[5/3] relative lg:hover:opacity-100 transition group/season duration-300">
              <div className="relative z-20 space-y-2 text-slate-400 group-hover/season:hidden group-hover/season:opacity-100 group/content">
                <p className="text-2xl font-medium">Chapter {season.chapter} Season {season.season}</p>
                <p className="hidden italic">({season.startDate} - {season.endDate})</p>
                <p>{season.theme}</p>
              </div>
              <Image src={season.mobileImage} alt={season.name} width={200} height={200} className="absolute inset-0 z-0 w-full h-full md:hidden" />
              <Image src={season.desktopImage} alt={season.name} width={400} height={200} className="absolute inset-0 z-0 w-full h-full max-md:hidden" />
              <div className="absolute inset-0 z-10 w-full h-full duration-300 bg-black bg-opacity-60 group-hover/season:bg-opacity-0"></div>
            </div>
          ))}

        </div>


      </main>
      <MainFooter />
    </div>
  );
}