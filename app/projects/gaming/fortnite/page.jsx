import { globalPageStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import IconFortnite from "@/components/icons/IconFortniteName";
import FortniteChapters from "@/components/projects/gaming/FortniteChapters";

{/* Styles - Page */}
const pageTextColour = "text-slate-900";
{/* Styles - Headings */}
const subSectionHeadingStyles = "border-2 p-4 mb-8 text-slate-900 uppercase text-sm/4 tracking-widest lg:mb-8 lg:mt-6 lg:font-bold";

{/* Content */}
const pageIntroText = "Fortnite is a free-to-play Battle Royale game that has taken the world by storm. It is available on all platforms and has a huge following. The game is known for its unique building mechanics and fun gameplay. Fortnite has a unique art style and is constantly updated with new content. The game has a competitive scene with tournaments and events. Fortnite is a cultural phenomenon and has become a huge part of popular culture.";

export default function PAGE_FORTNITE() {
  return (
    <div className={`${globalPageStyles} bg-topo-fn-background bg-fn-light-blue from-fn-dark-blue from-30% to-fn-light-blue ${pageTextColour}`}>
      	<Header />
      	<main className="w-full flex flex-col items-center">
			<IconFortnite classes="w-64 h-auto mt-8 mb-12 lg:w-96 xl:w-[420px] xl:mb-20 2xl:w-[500px] mx-auto" fill="fill-slate-900" />
			<span className="sr-only"><H1 text="Fortnite" /></span>
			<h2 className={`${subSectionHeadingStyles} mt-8 text-center text-[16px]`}>Lore</h2>
			<p className="mx-auto mb-12 text-slate-900 font-medium text-[13px] md:text-sm/6 tracking-wider lg:max-w-[80%] xl:mb-16 xl:text-lg max-w-[92%]">
				{pageIntroText}
			</p>
			<FortniteChapters />
      	</main>
      	<Footer />
    </div>
  );
}
