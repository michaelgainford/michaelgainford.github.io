import { useRouter } from "next/router";
import Image from "next/image";
import Data from "@/components/data/Data_For_PremierLeagueTeams";
import Header from "@/components/header/Header";
import HeroPremierLeague from "@/components/hero/Hero_PremierLeague";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import Footer from "@/components/footer/Footer";
import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";

const ClubFiltered = () => {
    const router = useRouter();
    const clubId = router.query.clubLogoSlug;
    const DataRun1 = Data.filter((club) => club.clubLogoSlug == clubId).map(
    (club) => ({
      key: club.clubLogoSlug,
      name: club.teamName,
      img: club.teamLogo,
      current: club.teamPremCurrent,
      nickname: club.teamName,
      stadium_name: club.teamStadium,
      stadium_capacity: club.teamStadiumCapacity,
      established: club.teamEstablished,
      manager: club.teamManager,
    })
  );
}

const logoPath = "/football/premier-league/club_logos/club-logos/";

export default function PREMIER_LEAGUE_FILTERED_CLUB() {
  return (
    <div
    className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}
  >
    <Header />

    <main className={`w-full text-epl`}>
      <HeroPremierLeague />

      <div className={`${mainStyles} !text-xs py-4`}>
        <NavForPremierLeagueHub />
      </div>

      <div className={`${mainStyles}`}><div className="flex flex-col items-center w-full pt-8 club lg:pt-0">
      {DataRun1.map((FilteredClub) => (
        <div
          className="flex flex-col items-center justify-center w-full text-center lg:px-12 text-light"
          key={FilteredClub.key}
        >
          <div className="w-full pb-16 border-b basic_info border-slate-300">
            <h1 className="w-full mb-16 text-4xl font-bold uppercase text-brand-main lg:mb-8">
              {FilteredClub.name}
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex items-center justify-center club_logo">
              <Image
                alt={FilteredClub.name}
                height="200"
                width="200"
                src={logoPath + FilteredClub.img}
                className="mb-16 lg:mr-16 sm:mb-0"
                priority
              />
              </div>

              <div className="grid w-full grid-cols-2 text-sm text-left primary_info lg:pl-16 lg:text-base gap-y-4 lg:border-l lg:border-slate-300">
                <p className="flex flex-col font-bold">
                  Nickname:
                  <span className="text-lg font-normal">
                    {FilteredClub.nickname}
                  </span>
                </p>
                <p className="flex flex-col font-bold">
                  Est:
                  <span className="text-lg font-normal">
                    {FilteredClub.established}
                  </span>
                </p>
                {/* <p className="font-bold">Current? <span className="font-normal">{FilteredClub.current ? "Yes" : "No"}</span></p> */}
                <p className="flex flex-col font-bold">
                  Stadium:
                  <span className="text-lg font-normal">
                    {FilteredClub.stadium_name}
                  </span>
                  {/* <span className="text-xs text-slate-400">
                    ({FilteredClub.stadium_capacity})
                  </span> */}
                </p>
                <p className="flex flex-col font-bold">
                  Manager:
                  <span className="text-lg font-normal">
                    {FilteredClub.manager}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full py-16 border-b secondary_info border-slate-300">
            <h3 className="mb-6 text-xl font-bold text-center uppercase lg:mb-16 lg:text-2xl">
              Premier League Record
            </h3>
            <div className="wrap grid grid-cols-2 text-left text-sm gap-y-4 leading-6 mb-6 sm:\text-center">
              <p className="flex flex-col text-xl">
                Number of seasons<span className="text-sm">31</span>
              </p>
              <p className="flex flex-col">
                PL Champions<span>0</span>
              </p>
              <p className="flex flex-col">
                Highest Finish<span>4th</span>
              </p>
              <p className="flex flex-col">
                Lowest Finish<span>4th</span>
              </p>
              <p className="flex flex-col">
                Biggest Win<span>7-1 vs Southampton</span>
                <span>dd/mm/yyyy</span>
              </p>
              <p className="flex flex-col">
                Biggest Defeat<span> 0-7 vs Arsenal</span>
                <span>dd/mm/2004</span>
              </p>
            </div>
            <p className="p-4 mt-16 text-sm font-normal leading-6 text-left text-white bg-blue-700 rounded-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ea
              architecto veritatis animi. Ipsum asperiores repellendus, nisi
              optio saepe, omnis cum harum, veniam reiciendis aspernatur ipsa
              minima vel at mollitia! A velit voluptatum similique alias, odit
              commodi quaerat aliquid quis deleniti quam, recusandae natus
              voluptas possimus. Officiis explicabo minus, debitis, velit cumque
              nihil ratione, possimus atque repellendus hic delectus
              dignissimos? Illo harum nemo quaerat iure ad minima, a placeat
              odit vitae aperiam illum animi deleniti beatae, esse quas eaque
              facilis debitis itaque tempore, corrupti repellendus sequi. Alias
              neque fugit ipsam!
            </p>
          </div>
        </div>
      ))}
    </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}


