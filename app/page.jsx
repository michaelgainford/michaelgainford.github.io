import { 
	brandPageBackground, 
	brandTextColour, 
	globalPageStyles, 
	globalWrapperFixedWidth 
} from "@/variables/Styles";
import Header from "@/components/header/_Header";
import HomeResources from "@/components/page_specific/home/Home_Resources";
import HomeProjects from "@/components/page_specific/home/Home_Projects";
import Footer from "@/components/footer/_Footer";

export default function Page_Home() {
	return (
		<div className={`${brandPageBackground} ${globalPageStyles} ${brandTextColour}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<div className="flex w-full mt-8 gap-12 max-lg:flex-col lg:gap-24 xl:gap-32 2xl:gap-48">
					<HomeProjects />
					<HomeResources />
				</div>
			</main>
			<Footer />
		</div>
	);
}