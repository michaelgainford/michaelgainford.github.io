import Header from "@/components/header/Header";
import HomeIntro from "@/components/page_home/Home_Intro";
import HomeResources from "@/components/page_home/Home_Resources";
import HomeProjects from "@/components/page_home/Home_Projects";
import Footer from "@/components/footer/Footer";
import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";

const pageBackground = `bg-slate-900 bg-brand-background bg-repeat`;
const pageTextColour = `text-slate-400`;

export default function PAGE_HOME() {
	return (
		<div className={`${pageBackground} ${pageTextColour} ${globalPageStyles}`}>
			<Header />
			<main className={mainStyles}>
				{/* <HomeIntro /> */}
				<div className={`flex w-full mt-8 gap-12 max-lg:flex-col lg:gap-24 xl:gap-32 2xl:gap-48`}>
					<HomeProjects />
					<HomeResources />
				</div>
			</main>
			<Footer />
		</div>
	);
}