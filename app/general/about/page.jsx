import { 
	globalPageStyles, 
	globalWrapperFixedWidth, 
	brandPageBackground, 
	brandTextColour, 
	brandSharedHeadingStyles 
} from "@/variables/Styles";

import Header from "@/components/header/_Header";
import CardForAboutMe from "@/components/page_specific/general/about/CardForAboutMe";
import CardForTools from "@/components/page_specific/general/about/CardForTools";
import CardForMySites from "@/components/page_specific/general/about/CardForMySites";
import CardForRandomJoke from "@/components/page_specific/general/about/CardForRandomJoke";
import Card_IconsSkills from "@/components/icons/Icons_Skills";
import Card_IconsSocials from "@/components/icons/Icons_Socials";
import Footer from "@/components/footer/_Footer";

export const metadata = {
	title: "About",
	description: "Michael is a Frontend Developer with over 15 years experience in a wide range of frontend technologies. He is passionate about creating beautiful and functional websites that are easy to use and accessible to all users. He regularly keeps up to date with the latest web technologies and best practices to ensure that he is always delivering the best possible solutions to his clients. He is always looking for new opportunities to work on exciting projects and expand his skillset."
};

export default function Page_About() {
	return (
		<div className={`${globalPageStyles} ${brandPageBackground} ${brandTextColour}`}>
			<Header />
			<main className={`${globalWrapperFixedWidth}`}>
				<div className="flex w-full justify-center text-center max-w-[1800px]">
					<div className="grid grid-cols-12 gap-8 xl:gap-y-24 3xl:gap-24 max-lg:mt-8">
						<CardForAboutMe />
						<CardForTools />
						<CardForMySites />
						<Card_IconsSkills 
						  heading="Site Built Using" 
						  heading_styles={brandSharedHeadingStyles} 
						/>
						<Card_IconsSocials 
						  heading="Connect" 
						  heading_styles={brandSharedHeadingStyles}
						/>
						<CardForRandomJoke />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}