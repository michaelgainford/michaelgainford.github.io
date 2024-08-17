import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

const evertonSquad = [
  {
    name: "Jordan Pickford",
    position: "Goalkeeper",
    number: 1,
    country: "England",
    slug: "jordan-pickford",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Joao Virginia",
    position: "Goalkeeper",
    number: 12,
    country: "Portugal",
    slug: "joao-virginia",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Andy Lonergan",
    position: "Goalkeeper",
    number: 31,
    country: "Ireland",
    slug: "andy-lonergan",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Billy Crellin",
    position: "Goalkeeper",
    number: 43,
    country: "England",
    slug: "billy-crellin",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Seamus Coleman",
    position: "Defender",
    number: 23,
    country: "Ireland",
    slug: "seamus-coleman",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Michael Keane",
    position: "Defender",
    number: 5,
    country: "England",
    slug: "michael-keane",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Ben Godfrey",
    position: "Defender",
    number: 22,
    country: "England",
    slug: "ben-godfrey",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Nathan Patterson",
    position: "Defender",
    number: 2,
    country: "Scotland",
    slug: "nathan-patterson",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "James Tarkowski",
    position: "Defender",
    number: 6,
    country: "England",
    slug: "james-tarkowski",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Ashley Young",
    position: "Defender",
    number: 18,
    country: "England",
    slug: "ashley-young",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Vitalii Mykolenko",
    position: "Defender",
    number: 3,
    country: "Ukraine",
    slug: "vitalii-mykolenko",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Jarrad Branthwaite",
    position: "Defender",
    number: 32,
    country: "England",
    slug: "jarrad-branthwaite",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Abdoulaye Doucouré",
    position: "Midfielder",
    number: 16,
    country: "France",
    slug: "abdoulaye-doucoure",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Amadou Onana",
    position: "Midfielder",
    number: 8,
    country: "Belgium",
    slug: "amadou-onana",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Dele Alli",
    position: "Midfielder",
    number: 20,
    country: "England",
    slug: "dele-alli",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Andre Gomes",
    position: "Midfielder",
    number: 21,
    country: "Portugal",
    slug: "andre-gomes",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Idrissa Gueye",
    position: "Midfielder",
    number: 27,
    country: "Senegal",
    slug: "idrissa-gueye",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "James Garner",
    position: "Midfielder",
    number: 37,
    country: "England",
    slug: "james-garner",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Lewis Warrington",
    position: "Midfielder",
    number: 51,
    country: "England",
    slug: "lewis-warrington",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Tyler Onyango",
    position: "Midfielder",
    number: 62,
    country: "England",
    slug: "tyler-onyango",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Dwight McNeil",
    position: "Midfielder",
    number: 7,
    country: "England",
    slug: "dwight-mcneil",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Arnaut Danjuma",
    position: "Forward",
    number: 10,
    country: "Netherlands",
    slug: "arnaut-danjuma",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Jack Harrison",
    position: "Forward",
    number: 11,
    country: "England",
    slug: "jack-harrison",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Beto",
    position: "Forward",
    number: 14,
    country: "Portugal",
    slug: "beto",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Youssef Chermiti",
    position: "Forward",
    number: 28,
    country: "Portugal",
    slug: "youssef-chermiti",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Lewis Dobbin",
    position: "Forward",
    number: 61,
    country: "England",
    slug: "lewis-dobbin",
    image: "/everton/jordan-pickford.jpg",
  },
  {
    name: "Dominic Calvert-Lewin",
    position: "Forward",
    number: 9,
    country: "England",
    slug: "dominic-calvert-lewin",
    image: "/everton/jordan-pickford.jpg",
  },
];

evertonSquad.sort((a, b) => a.number - b.number);

export default function Home() {
  return (
    <div className={`${globalPageStyles} bg-blue-900 bg-rain-background`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text="Everton" />
        <div className="grid w-full gap-4 first-line:gap-4 countries-grid-container">   
          <div className="details">
            <h2 className="mb-2 text-lg font-medium uppercase lg:text-2xl 2xl:mb-6">Club Information</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-4 lg:gap-12 *:flex *:flex-col">
              <li>
                <span className="title">Founded:</span>
                <span className="detail lg:text-2xl">1878</span>
              </li>
              <li>
                <span className="title">Stadium:</span>
                <span className="detail lg:text-2xl">Goodison Park</span>
              </li>
              <li>
                <span className="title">Manager:</span>
                <span className="detail lg:text-2xl">Sean Dyche</span>
              </li>
              <li>
                <span className="title">League:</span>
                <span className="detail lg:text-2xl">Premier League</span>
              </li>
            </ul>
          </div> 
          <div className="mt-8 playing-squad">
            <h2 className="mb-2 text-lg font-medium uppercase">Playing Squad</h2>
            <div className="grid justify-between grid-cols-1 players gap-x-4 gap-y-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {evertonSquad.map((player) => (
                
                <div key={player.slug} className="space-y-2 border border-blue-700 rounded-lg player basis-48 lg:basis-64 xl:basis-80 bg-blue-700/80 group">
                  <div className="relative mb-2 space-y-2 player-image-and-number">
                    <div className="player-image border-t-lg relative aspect-[3/2] overflow-hidden">
                      <Image src={`/everton/${player.slug}.webp`} alt={player.name} width={450} height={300} className="!rounded-t-lg !max-w-full object-center aspect-[3/2] absolute group-hover:scale-110 duration-500" />
                    </div>
                    <div className="player-number absolute top-2 left-2 text-2xl py-1 px-2 !aspect-square flex justify-center items-center bg-black/60">{player.number}</div>
                  </div>
                  <div className="pt-2 pb-6 space-y-2 text-center player-details">
                    <div className="relative tracking-wide uppercase player-name">{player.name}</div>
                    <div className="player-details-row">
                      <div className="relative player-position">{player.position}</div>
                      <div className="relative player-country">{player.country}</div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>

        </div>
      </main>
      <MainFooter />
    </div>
  );
}