import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import DataForFortnite from "@/components/data/Data_For_Fornite";

export default function PAGE_FORTNITE() {
  return (
    <div className={`${globalPageStyles} !bg-topo-background`}>
      	<MainHeader />
      	<main className={`${mainStyles}`}>
			<H1 text={`Fortnite`} />
			<div className={`grid w-full grid-cols-1 gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols`}>
				{DataForFortnite.map((season, index) => (
				<div
					key={index}
					className={`bg-green-900 p-4 flex flex-col justify-end aspect-[1000/563] relative transition group/season duration-300 lg:aspect-[5/3] lg:hover:opacity-100 lg:py-8`}
				>
					<div className={`relative z-20 space-y-2 text-slate-400 group-hover/season:hidden group-hover/season:opacity-100 group/content`}>
						<p className={`text-base font-medium lg:text-2xl`}>Chapter {season.chapter} Season {season.season}</p>
						<p className={`text-xs uppercase tracking-widest font-bold lg:text-sm`}>{season.theme}</p>
						<p className={`text-[10px]`}>({season.startDate} to {season.endDate})</p>
					</div>
					<Image
						src={season.mobileImage}
						alt={season.name}
						width={200}
						height={133}
						className={`absolute inset-0 z-0 w-full h-full md:hidden`}
					/>
					<Image
						src={season.desktopImage}
						alt={season.name}
						width={400}
						height={200}
						className={`absolute inset-0 z-0 w-full h-full max-md:hidden`}
					/>
					<div className={`absolute inset-0 z-10 w-full h-full duration-300 bg-black bg-opacity-60 group-hover/season:bg-opacity-0`}></div>
				</div>
				))}
			</div>
      	</main>
      	<Footer />
    </div>
  );
}
