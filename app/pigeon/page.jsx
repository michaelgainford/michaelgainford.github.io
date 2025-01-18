import {
	brandPageBackground,
	brandTextColour,
	globalPageStyles,
	globalWrapperFixedWidth,
} from "@/variables/Styles";
import Header from "@/components/header/_Header";
import PigeonNav from "@/components/site_elements/PigeonNav";
import PigeonWip from "@/components/site_elements/PigeonWip";
import Footer from "@/components/footer/_Footer";

export default function Page_Pigeon() {
	return (
		<div className={`${brandPageBackground} ${brandTextColour} ${globalPageStyles}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<div className="flex flex-col w-full mt-8 gap-12 max-lg:flex-col lg:gap-24 xl:gap-32 2xl:gap-48">
					<PigeonNav />
					<PigeonWip />
				</div>
			</main>
			<Footer />
		</div>
	);
}