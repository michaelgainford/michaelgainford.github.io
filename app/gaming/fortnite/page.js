import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
const mainStyles = "mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center";

const fortniteSeasons = [
  {
    name: "C1 S1",
    chapter: 1,
    season: 1,
    startDate: "2017-10-25",
    endDate: "2017-12-13",
    theme: "No Theme",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S2",
    chapter: 1,
    season: 2,
    startDate: "2017-12-14",
    endDate: "2018-02-20",
    theme: "Medieval",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S3",
    chapter: 1,
    season: 3,
    startDate: "2018-02-21",
    endDate: "2018-04-30",
    theme: "Space",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S4",
    chapter: 1,
    season: 4,
    startDate: "2018-05-01",
    endDate: "2018-07-11",
    theme: "Meteors",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S5",
    chapter: 1,
    season: 5,
    startDate: "2018-07-12",
    endDate: "2018-09-26",
    theme: "Worlds Collide",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S6",
    chapter: 1,
    season: 6,
    startDate: "2018-09-27",
    endDate: "2018-12-05",
    theme: "Darkness Rises",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S7",
    chapter: 1,
    season: 7,
    startDate: "2018-12-06",
    endDate: "2019-02-27",
    theme: "Better Watch Out",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S8",
    chapter: 1,
    season: 8,
    startDate: "2019-02-28",
    endDate: "2019-05-08",
    theme: "X Marks The Spot",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S9",
    chapter: 1,
    season: 9,
    startDate: "2019-05-09",
    endDate: "2019-07-31",
    theme: "The Future Is Yours",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C1 S10",
    chapter: 1,
    season: 10,
    startDate: "2019-08-01",
    endDate: "2019-10-13",
    theme: "Worlds Apart",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C2 S1",
    chapter: 2,
    season: 1,
    startDate: "2019-10-14",
    endDate: "2019-02-20",
    theme: "No Theme",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C2 S2",
    chapter: 2,
    season: 2,
    startDate: "2019-02-20",
    endDate: "2020-06-17",
    theme: "Spies",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C2 S3",
    chapter: 2,
    season: 3,
    startDate: "2020-06-17",
    endDate: "2020-08-27",
    theme: "Dive In",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C2 S4",
    chapter: 2,
    season: 4,
    startDate: "2020-08-27",
    endDate: "2020-12-01",
    theme: "Superheroes",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C2 S5",
    chapter: 2,
    season: 5,
    startDate: "2020-12-01",
    endDate: "2021-03-16",
    theme: "The Hunt Is On",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C2 S6",
    chapter: 2,
    season: 6,
    startDate: "2021-03-16",
    endDate: "2021-06-08",
    theme: "Primal",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C2 S7",
    chapter: 2,
    season: 7,
    startDate: "2021-06-08",
    endDate: "2021-09-12",
    theme: "Aliens",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C2 S8",
    chapter: 2,
    season: 8,
    startDate: "2021-09-12",
    endDate: "2021-12-05",
    theme: "Cubed",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C3 S1",
    chapter: 3,
    season: 1,
    startDate: "2021-12-05",
    endDate: "2022-03-19",
    theme: "Flipped",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C3 S2",
    chapter: 3,
    season: 2,
    startDate: "2022-03-19",
    endDate: "2022-06-11",
    theme: "War",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C3 S3",
    chapter: 3,
    season: 3,
    startDate: "2022-06-11",
    endDate: "2022-09-03",
    theme: "Party",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C3 S4",
    chapter: 3,
    season: 4,
    startDate: "2022-09-03",
    endDate: "2022-12-03",
    theme: "Chrome",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C4 S1",
    chapter: 4,
    season: 1,
    startDate: "2022-12-03",
    endDate: "2023-03-18",
    theme: "A New Beginning",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C4 S2",
    chapter: 4,
    season: 2,
    startDate: "2023-03-18",
    endDate: "2023-06-10",
    theme: "Japanese",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C4 S3",
    chapter: 4,
    season: 3,
    startDate: "2023-06-10",
    endDate: "2023-09-02",
    theme: "Wild",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C4 S4",
    chapter: 4,
    season: 4,
    startDate: "2023-09-02",
    endDate: "2023-12-02",
    theme: "Heist",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C5 S1",
    chapter: 5,
    season: 1,
    startDate: "2023-12-02",
    endDate: "2024-03-16",
    theme: "Underground",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  },
  {
    name: "C5 S2",
    chapter: 5,
    season: 2,
    startDate: "2024-03-16",
    endDate: "2024-05-24",
    theme: "Greek Gods",
    mobileImage: "/gaming/fortnite/fortnite-mobile-banner.png",
    desktopImage: "/gaming/fortnite/fortnite-desktop-banner.png",
  }


]

export default function Home() {
  return (
    <div className="bg-black">

      <MainHeader />

      <main className={mainStyles}>

        <H1 text="Fortnite" />

        <div className="grid w-full grid-cols-1 gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {fortniteSeasons.map((season, index) => (
            <div key={index} className="bg-green-900 p-4 lg:py-8 flex flex-col justify-end aspect-square sm:aspect-[4/3] lg:aspect-[5/3] relative lg:opacity-50 lg:hover:opacity-100 transition">
              <div className="relative z-20 space-y-2 text-slate-400 group">
                <p className="text-2xl font-medium">Chapter {season.chapter} Season {season.season}</p>
                <p className="italic">({season.startDate} - {season.endDate})</p>
                <p>{season.theme}</p>
              </div>
              <Image src={season.mobileImage} alt={season.name} width={200} height={200} className="absolute inset-0 z-0 w-full h-full md:hidden" />
              <Image src={season.desktopImage} alt={season.name} width={400} height={200} className="absolute inset-0 z-0 w-full h-full max-md:hidden" />
              <div className="absolute inset-0 z-10 w-full h-full bg-black bg-opacity-60"></div>
            </div>
          ))}

        </div>


      </main>
      <MainFooter />
    </div>
  );
}