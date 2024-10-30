"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
import Data from "@/components/data/Data_For_PremierLeagueTeams";
import Header from "@/components/header/Header";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Button from "@/components/buttons/Button_Global";
import Footer from "@/components/footer/Footer";
import { mainStyles, globalPageStyles, premierLeagueHubBlockImageRoot } from "@/components/data/Variables";

const blockImagePlaceholderStyles = "w-full mb-8 image-holder aspect-video mt-4 rounded-t-xl";
const pageIntroText = "This is Everton FC";

export default function PAGE_FOR_INDIVIDUAL_CLUB () {
/*   const router = useRouter();
  //const clubLogoSlug = "aston-villa";
  const clubLogoSlug = router.query.clubId;
  const clubData = Data.filter((club) => club.clubLogoSlug == clubLogoSlug).map(
    (club) => ({
      key: club.clubLogoSlug,
      teamName: club.teamName,
    })
  ); */
  //const clubName = clubData.teamName;
	return (
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
				<PremierLeagueHero />
        {/* <h1>Test: {clubLogoSlug}</h1> */}
        {/* {clubData.map((club) => (
          <div data-slug={club.clubLogoSlug} key={club.clubLogoSlug} className={`${mainStyles} ${blockImagePlaceholderStyles}`}>
            <Image
              src={`/football/premier-league/club-logos/${club.clubLogoSlug}.svg`}
              alt={club.teamName}
              width={400}
              height={225}
              className="object-cover rounded-t-xl"
            />
            <p>{club.teamName}</p>
          </div>
        ))} */}
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}