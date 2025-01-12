import {
	brandPageBackground,
	brandTextColour,
	globalPageStyles,
	globalWrapperFixedWidth,
} from "@/variables/Styles";
import Header from "@/components/header/Header";
import PigeonNav from "@/components/site_elements/PigeonNav";
import PigeonWip from "@/components/site_elements/PigeonWip";
import Footer from "@/components/footer/Footer";



export default function PAGE_PIGEON() {
	return (
		<div className={`${brandPageBackground} ${brandTextColour} ${globalPageStyles}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<div className="flex w-full mt-8 gap-12 max-lg:flex-col lg:gap-24 xl:gap-32 2xl:gap-48">
					<div className="flex flex-col gap-16 content xl:flex-row xl:gap-20 2xl:gap-24">
						<PigeonNav />
						<PigeonWip />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}