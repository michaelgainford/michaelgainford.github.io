import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
const mainStyles = "mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center";

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
    <div className="bg-blue-800">
      <MainHeader />
      <main className={mainStyles}>
        <H1 text="Everton" />
        <div className="grid gap-4 w-full first-line:gap-4 countries-grid-container">
       
          <div className="details">
            <h2 className="text-lg font-medium uppercase mb-2">Club Information</h2>
            <ul className="flex justify-between">
              <li>Founded: 1878</li>
              <li>Stadium: Goodison Park</li>
              <li>Manager: Sean Dyche</li>
              <li>League: Premier League</li>
            </ul>
          </div> 
          <div className="playing-squad mt-8">
            <h2 className="text-lg font-medium uppercase mb-2">Playing Squad</h2>
            <div className="players gap-x-4 gap-y-8 justify-between grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {evertonSquad.map((player) => (
                
                <div key={player.slug} className="player border border-blue-700 rounded-lg basis-48 lg:basis-64 xl:basis-80 space-y-2 bg-blue-700/80">
                  <div className="player-image-and-number relative mb-2 space-y-2">
                    <div className="player-image border-t-lg relative aspect-[3/2]">
                      <Image src={`/everton/${player.slug}.webp`} alt={player.name} width={450} height={300} className="!border-t-lg !max-w-full object-center aspect-[3/2] absolute" />
                    </div>
                    <div className="player-number absolute top-2 left-2 text-2xl py-1 px-2 !aspect-square flex justify-center items-center bg-black/60">{player.number}</div>
                  </div>
                  <div className="player-details space-y-2 text-center pt-2 pb-6">
                    <div className="player-name relative uppercase tracking-wide">{player.name}</div>
                    <div className="player-position relative">{player.position}</div>
                    <div className="player-country relative">{player.country}</div>
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