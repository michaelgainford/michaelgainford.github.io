import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

const MoviesList = [
  {
    id: 1,
    title: "Ace Ventura: Pet Detective",
    slug: "ace-ventura-pet-detective",
    image:  "/movies-images/ace-ventura-pet-detective.webp",
    imdb_url: "https://www.imdb.com/title/tt0109040/",
    description:
      "A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins.",
    year: 1994,
    genre: "Comedy",
    duration: 86,
  },
  {
    id: 2,
    title: "Ace Ventura: When Nature Calls",
    image:  "/movies-images/ace-ventura-when-nature-calls.webp",
    imdb_url: "https://www.imdb.com/title/tt0112281/",
    description:
      "Ace Ventura, Pet Detective, returns from a spiritual quest to investigate the disappearance of a rare white bat, the sacred animal of a tribe in Africa.",
    year: 1995,
    genre: "Comedy",
    duration: 90,
  },
  {
    id: 3,
    title: "Armageddon",
    image:  "/movies-images/armageddon.webp",
    imdb_url: "https://www.imdb.com/title/tt0120591/",
    description:
      "After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, NASA recruits a misfit team of deep-core drillers to save the planet.",
    year: 1998,
    genre: "Action",
    duration: 151,
  },
  {
    id: 4,
    title: "Avatar",
    image:  "/movies-images/avatar.webp",
    imdb_url: "https://www.imdb.com/title/tt0499549/",
  },
  {
    id: 5,
    title: "Avengers: Age of Ultron",
    image:  "/movies-images/avengers-age-of-ultron.webp",
    imdb_url: "https://www.imdb.com/title/tt2395427/",
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    image:  "/movies-images/avengers-endgame.webp",
    imdb_url: "https://www.imdb.com/title/tt4154796/",
    date_watched: "2023-08-08"
  },
  {
    id: 7,
    title: "Avengers: Infinity War",
    image:  "/movies-images/avengers-infinity-war.webp",
    imdb_url: "https://www.imdb.com/title/tt4154756/",
    date_watched: "2023-08-07"
  },
  {
    id: 8,
    title: "Batman: The Dark Knight",
    image:  "/movies-images/batman-the-dark-knight.webp",
    imdb_url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 9,
    title: "Big",
    image:  "/movies-images/big.webp",
    imdb_url: "https://www.imdb.com/title/tt0094737/",
  },
  {
    id: 10,
    title: "Big Hero 6",
    image:  "/movies-images/big-hero-6.webp",
    imdb_url: "https://www.imdb.com/title/tt2245084/",
  },
  {
    id: 11,
    title: "Black Panther",
    image:  "/movies-images/black-panther.webp",
    imdb_url: "https://www.imdb.com/title/tt1825683/",
  },
  {
    id: 12,
    title: "Black Widow",
    image:  "/movies-images/black-widow.webp",
    imdb_url: "https://www.imdb.com/title/tt3480822/",
  },
  {
    id: 13,
    title: "Captain America: Civil War",
    image:  "/movies-images/captain-america-civil-war.webp",
    imdb_url: "https://www.imdb.com/title/tt3498820/",
  },
  {
    id: 14,
    title: "Captain America: The First Avenger",
    image:  "/movies-images/captain-america-the-first-avenger.webp",
    imdb_url: "https://www.imdb.com/title/tt0458339/",
  },
  {
    id: 15,
    title: "Captain America: The Winter Soldier",
    image:  "/movies-images/captain-america-the-winter-soldier.webp",
    imdb_url: "https://www.imdb.com/title/tt1843866/",
  },
  {
    id: 16,
    title: "Captain Marvel",
    image:  "/movies-images/captain-marvel.webp",
    imdb_url: "https://www.imdb.com/title/tt4154664/",
  },
  {
    id: 17,
    title: "Castaway",
    image:  "/movies-images/castaway.webp",
    imdb_url: "https://www.imdb.com/title/tt0162222/",
  },
  {
    id: 18,
    title: "Coco",
    image:  "/movies-images/coco.webp",
    imdb_url: "https://www.imdb.com/title/tt2380307/",
  },
  {
    id: 19,
    title: "Doctor Strange",
    image:  "/movies-images/doctor-strange.webp",
    imdb_url: "https://www.imdb.com/title/tt1211837/",
  },
  {
    id: 20,
    title: "Dodgeball: A True Underdog Story",
    image:  "/movies-images/dodgeball.webp",
    imdb_url: "https://www.imdb.com/title/tt0364725/",
  },
  {
    id: 21,
    title: "Ferris Bueller's Day Off",
    image:  "/movies-images/ferris-buellers-day-off.webp",
    imdb_url: "https://www.imdb.com/title/tt0091042/",
  },
  {
    id: 22,
    title: "Flubber",
    image:  "/movies-images/flubber.webp",
    imdb_url: "https://www.imdb.com/title/tt0119137/",
  },
  {
    id: 23,
    title: "Forrest Gump",
    image:  "/movies-images/forrest-gump.webp",
    imdb_url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 24,
    title: "Free Guy",
    image:  "/movies-images/free-guy.webp",
    imdb_url: "https://www.imdb.com/title/tt6264654/",
  },
  {
    id: 25,
    title: "George of the Jungle",
    image:  "/movies-images/george-of-the-jungle.webp",
    imdb_url: "https://www.imdb.com/title/tt0119190/",
  },
  {
    id: 26,
    title: "Guardians of the Galaxy",
    image:  "/movies-images/guardians-of-the-galaxy.webp",
    imdb_url: "https://www.imdb.com/title/tt2015381/",
  },
  {
    id: 27,
    title: "Guardians of the Galaxy Vol. 2",
    image:  "/movies-images/guardians-of-the-galaxy-vol-2.webp",
    imdb_url: "https://www.imdb.com/title/tt3896198/",
  },
  {
    id: 28,
    title: "Happy Gilmore",
    image:  "/movies-images/happy-gilmore.webp",
    imdb_url: "https://www.imdb.com/title/tt0116483/",
  },
  {
    id: 29,
    title: "Hercules",
    image:  "/movies-images/hercules.webp",
    imdb_url: "https://www.imdb.com/title/tt0119282/",
  },
  {
    id: 30,
    title: "Home Alone",
    image:  "/movies-images/home-alone.webp",
    imdb_url: "https://www.imdb.com/title/tt0099785/",
  },
  {
    id: 31,
    title: "Home Alone 2: Lost in New York",
    image:  "/movies-images/home-alone-2.webp",
    imdb_url: "https://www.imdb.com/title/tt0104431/",
  },
  {
    id: 32,
    title: "Inside Out",
    image:  "/movies-images/inside-out.webp",
    imdb_url: "https://www.imdb.com/title/tt2096673/",
  },
  {
    id: 33,
    title: "Iron Man",
    image:  "/movies-images/iron-man.webp",
    imdb_url: "https://www.imdb.com/title/tt0371746/",
  },
  {
    id: 34,
    title: "Iron Man 2",
    image:  "/movies-images/iron-man-2.webp",
    imdb_url: "https://www.imdb.com/title/tt1228705/",
  },
  {
    id: 35,
    title: "Iron Man 3",
    image:  "/movies-images/iron-man-3.webp",
    imdb_url: "https://www.imdb.com/title/tt1300854/",
  },
  {
    id: 36,
    title: "Jingle All The Way",
    image:  "/movies-images/jingle-all-the-way.webp",
    imdb_url: "https://www.imdb.com/title/tt0116705/",
  },
  {
    id: 37,
    title: "Jumanji",
    image:  "/movies-images/jumanji.webp",
    imdb_url: "https://www.imdb.com/title/tt0113497/",
  },
  {
    id: 38,
    title: "Kindergarten Cop",
    image:  "/movies-images/kindergarten-cop.webp",
    imdb_url: "https://www.imdb.com/title/tt0099938/",
  },
  {
    id: 39,
    title: "Lego Batman",
    image:  "/movies-images/lego-batman.webp",
    imdb_url: "https://www.imdb.com/title/tt4116284/",
  },
  {
    id: 40,
    title: "Lego Movie",
    image:  "/movies-images/lego-movie.webp",
    imdb_url: "https://www.imdb.com/title/tt1490017/",
  },
  {
    id: 41,
    title: "Lego Movie 2",
    image:  "/movies-images/lego-movie-2.webp",
    imdb_url: "https://www.imdb.com/title/tt3513498/",
  },
  {
    id: 42,
    title: "Men in Black",
    image:  "/movies-images/men-in-black.webp",
    imdb_url: "https://www.imdb.com/title/tt0119654/",
  },
  {
    id: 43,
    title: "Men In Black 2",
    image:  "/movies-images/men-in-black-2.webp",
    imdb_url: "https://www.imdb.com/title/tt0120912/",
  },
  {
    id: 44,
    title: "Men In Black 3",
    image:  "/movies-images/men-in-black-3.webp",
    imdb_url: "https://www.imdb.com/title/tt1409024/",
  },
  {
    id: 45,
    title: "Monsters Inc.",
    image:  "/movies-images/monsters-inc.webp",
    imdb_url: "https://www.imdb.com/title/tt0198781/",
  },
  {
    id: 46,
    title: "Monsters University",
    image:  "/movies-images/monsters-university.webp",
    imdb_url: "https://www.imdb.com/title/tt1453405/",
  },
  {
    id: 47,
    title: "Mrs. Doubtfire",
    image:  "/movies-images/mrs-doubtfire.webp",
    imdb_url: "https://www.imdb.com/title/tt0107614/",
  },
  {
    id: 48,
    title: "Onward",
    image:  "/movies-images/onward.webp",
    imdb_url: "https://www.imdb.com/title/tt7146812/",
  },
  {
    id: 49,
    title: "Pixels",
    image:  "/movies-images/pixels.webp",
    imdb_url: "https://www.imdb.com/title/tt2120120/",
  },
  {
    id: 50,
    title: "Ratatouille",
    image:  "/movies-images/ratatouille.webp",
    imdb_url: "https://www.imdb.com/title/tt0382932/",
  },
  {
    id: 51,
    title: "Shaggy D.A.",
    image:  "/movies-images/shaggy-da.webp",
    imdb_url: "https://www.imdb.com/title/tt0078259/",
  },
  {
    id: 52,
    title: "Shallow Hal",
    image:  "/movies-images/shallow-hal.webp",
    imdb_url: "https://www.imdb.com/title/tt0256380/",
  },
  {
    id: 53,
    title: "Sonic the Hedgehog",
    image:  "/movies-images/sonic-the-hedgehog.webp",
    imdb_url: "https://www.imdb.com/title/tt3794354/",
  },
  {
    id: 54,
    title: "Sonic the Hedgehog 2",
    image:  "/movies-images/sonic-the-hedgehog-2.webp",
    imdb_url: "https://www.imdb.com/title/tt3794354/",
  },
  {
    id: 55,
    title: "Spies in Disguise",
    image:  "/movies-images/spies-in-disguise.webp",
    imdb_url: "https://www.imdb.com/title/tt5814534/",
  },
  {
    id: 56,
    title: "Step Brothers",
    image:  "/movies-images/step-brothers.webp",
    imdb_url: "https://www.imdb.com/title/tt0838283/",
  },
  {
    id: 57,
    title: "The Super Mario Bros Movie",
    image:  "/movies-images/the-super-mario-bros-movie.webp",
    imdb_url: "https://www.imdb.com/title/tt0108255/",
  },
  {
    id: 58,
    title: "The Avengers",
    image:  "/movies-images/the-avengers.webp",
    imdb_url: "https://www.imdb.com/title/tt0848228/",
  },
  {
    id: 59,
    title: "The Day After Tomorrow",
    image:  "/movies-images/the-day-after-tomorrow.webp",
    imdb_url: "https://www.imdb.com/title/tt0319262/",
  },
  {
    id: 60,
    title: "The Incredibles",
    image:  "/movies-images/the-incredibles.webp",
    imdb_url: "https://www.imdb.com/title/tt0317705/",
  },
  {
    id: 61,
    title: "The Incredibles 2",
    image:  "/movies-images/the-incredibles-2.webp",
    imdb_url: "https://www.imdb.com/title/tt3606756/",
  },
  {
    id: 62,
    title: "The Jungle Book",
    image:  "/movies-images/the-jungle-book.webp",
    imdb_url: "https://www.imdb.com/title/tt0061852/",
  },
  {
    id: 63,
    title: "The Matrix",
    image:  "/movies-images/the-matrix.webp",
    imdb_url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 64,
    title: "The Matrix Reloaded",
    image:  "/movies-images/the-matrix-reloaded.webp",
    imdb_url: "https://www.imdb.com/title/tt0234215/",
  },
  {
    id: 65,
    title: "The Matrix Revolutions",
    image:  "/movies-images/the-matrix-revolutions.webp",
    imdb_url: "https://www.imdb.com/title/tt0242653/",
  },
  {
    id: 66,
    title: "Thor",
    image:  "/movies-images/thor.webp",
    imdb_url: "https://www.imdb.com/title/tt0800369/",
  },
  {
    id: 67,
    title: "Thor: Ragnarok",
    image:  "/movies-images/thor-ragnarok.webp",
    imdb_url: "https://www.imdb.com/title/tt3501632/",
  },
  {
    id: 68,
    title: "Toy Story 4",
    image:  "/movies-images/toy-story-4.webp",
    imdb_url: "https://www.imdb.com/title/tt1979376/",
  },
  {
    id: 69,
    title: "Wall-E",
    image:  "/movies-images/wall-e.webp",
    imdb_url: "https://www.imdb.com/title/tt0910970/",
  },
  {
    id: 70,
    title: "X-Men",
    image:  "/movies-images/x-men.webp",
    imdb_url: "https://www.imdb.com/title/tt0120903/",
  },
  {
    id: 71,
    title: "Zoolander",
    image:  "/movies-images/zoolander.webp",
    imdb_url: "https://www.imdb.com/title/tt0196229/",
    description:
      "At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.",
    year: 2001,
  },
  {
    id: 72,
    title: "Zootopia",
    image:  "/movies-images/zootopia.webp",
    imdb_url: "https://www.imdb.com/title/tt2948356/",
  },
  {
    id: 73,
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    image:  "/movies-images/percy-jackson-the-lightning-thief.webp",
    imdb_url: "https://www.imdb.com/title/tt0814255/",
  },
  {
    id: 74,
    title: "Percy Jackson: Sea of Monsters",
    image:  "/movies-images/percy-jackson-sea-of-monsters.webp",
    imdb_url: "https://www.imdb.com/title/tt1854564/",
  },
  {
    id: 75,
    title: "The Minions",
    image:  "/movies-images/the-minions.webp",
    imdb_url: "https://www.imdb.com/title/tt2293640/",
  },
  {
    id: 76,
    title: "Despicable Me",
    image:  "/movies-images/despicable-me.webp",
    imdb_url: "https://www.imdb.com/title/tt1323594/",
  },
  {
    id: 77,
    title: "Despicable Me 2",
    image:  "/movies-images/despicable-me-2.webp",
    imdb_url: "https://www.imdb.com/title/tt1690953/",
  },
  {
    id: 78,
    title: "Despicable Me 3",
    image:  "/movies-images/despicable-me-3.webp",
    imdb_url: "https://www.imdb.com/title/tt3469046/",
  },
  {
    id: 79,
    title: "Minions: The Rise of Gru",
    image:  "/movies-images/minions-the-rise-of-gru.webp",
    imdb_url: "https://www.imdb.com/title/tt8116784/",
  },
  {
    id: 80,
    title: "Die Another Day",
    image:  "/movies-images/die-another-day.webp",
    imdb_url: "https://www.imdb.com/title/tt0246460/",
  },
  {
    id: 81,
    title: "Spiderman Into the Spiderverse",
    image:  "/movies-images/spiderman-into-the-spider-verse.webp",
    imdb_url: "https://www.imdb.com/title/tt4633694/",
  },
  {
    id: 82,
    title: "The Nutty Professor",
    image:  "/movies-images/the-nutty-professor.webp",
    imdb_url: "https://www.imdb.com/title/tt0117218/",
  },
  {
    id: 83,
    title: "Diary of a Wimpy Kid: Rodrick Rules",
    image:  "/movies-images/diary-of-a-wimpy-kid-rodrick-rules.webp",
    imdb_url: "https://www.imdb.com/title/tt1650043/",
  },
  {
    id: 84,
    title: "Turning Red",
    image:  "/movies-images/turning-red.webp",
    imdb_url: "https://www.imdb.com/title/tt11240542/",
  },
  {
    id: 85,
    title: "Horrid Henry The Movie",
    image:  "/movies-images/horrid-henry-the-movie.webp",
    imdb_url: "https://www.imdb.com/title/tt1684558/",
  },
  {
    id: 86,
    title: "The emoji movie",
    image:  "/movies-images/the-emoji-movie.webp",
    imdb_url: "https://www.imdb.com/title/tt4877122/",
  },
  {
    id: 87,
    title: "Deadpool",
    image:  "/movies-images/deadpool.webp",
    imdb_url: "https://www.imdb.com/title/tt1431045/",
    date_watched: "2023-08-09"
  },
  {
    id: 88,
    title: "Back to the Future",
    image:  "/movies-images/back-to-the-future.webp",
    imdb_url: "https://www.imdb.com/title/tt0088763/",
  },
  {
    id: 89,
    title: "Uncharted",
    image:  "/movies-images/uncharted.webp",
    imdb_url: "https://www.imdb.com/title/tt1464335/",
  },
  {
    id: 90,
    title: "spiderman homecoming",
    image:  "/movies-images/spiderman-homecoming.webp",
    imdb_url: "https://www.imdb.com/title/tt2250912/",
  },
  {
    id: 91,
    title: "Richie Rich",
    image:  "/movies-images/richie-rich.webp",
    imdb_url: "https://www.imdb.com/title/tt0110989/",
  },
  {
    id: 92,
    title: "Dr Dolittle",
    image:  "/movies-images/dr-dolittle.webp",
    imdb_url: "https://www.imdb.com/title/tt0118998/",
  },
  {
    id: 93,
    title: "Shrek",
    image:  "/movies-images/shrek.webp",
    imdb_url: "https://www.imdb.com/title/tt0126029/",
  },
  {
    id: 94,
    title: "Anchorman",
    image:  "/movies-images/anchorman.webp",
    imdb_url: "https://www.imdb.com/title/tt0357413/",
  },
  {
    id: 95,
    title: "Guardians of the Galaxy Vol. 3",
    image:  "/movies-images/guardians-of-the-galaxy-vol-3.webp",
    imdb_url: "https://www.imdb.com/title/tt6791350/",
    date_watched: "2023-08-12"
  },
  {
    id: 96,
    title: "The Good Dinosaur",
    image:  "/movies-images/the-good-dinosaur.webp",
    imdb_url: "https://www.imdb.com/title/tt1979388/",
  },
  {
    id: 97,
    title: "GoldenEye",
    image:  "/movies-images/goldeneye.webp",
    imdb_url: "https://www.imdb.com/title/tt0113189/",
  },
  {
    id: 98,
    title: "Skyfall",
    image:  "/movies-images/skyfall.webp",
    imdb_url: "https://www.imdb.com/title/tt1074638/",
  },
  {
    id: 99,
    title: "Casino Royale",
    image:  "/movies-images/casino-royale.webp",
    imdb_url: "https://www.imdb.com/title/tt0381061/",
  },
  {
    id: 100,
    title: "Die Hard",
    image:  "/movies-images/die-hard.webp",
    imdb_url: "https://www.imdb.com/title/tt0095016/",
  },
  {
    id: 101,
    title: "Die Hard 2",
    image:  "/movies-images/die-hard-2.webp",
    imdb_url: "https://www.imdb.com/title/tt0099423/",
  },
  {
    id: 102,
    title: "Batman",
    image:  "/movies-images/batman.webp",
    imdb_url: "https://www.imdb.com/title/tt0096895/",
  },
  {
    id: 103,
    title: "Batman Returns",
    image: "/movies-images/batman-returns.webp",
    imdb_url: "https://www.imdb.com/title/tt0103776/"
  },
  {
    id: 104,
    title: "Batman Forever",
    image: "/movies-images/batman-forever.webp",
    imdb_url: "https://www.imdb.com/title/tt0112462/"
  },
  {
    id: 105,
    title: "Batman & Robin",
    image: "/movies-images/batman-and-robin.webp",
    imdb_url: "https://www.imdb.com/title/tt0118688/"
  },
  {
    id: 106,
    title: "Batman Begins",
    image: "/movies-images/batman-begins.webp",
    imdb_url: "https://www.imdb.com/title/tt0372784/"
  },
  {
    id: 107,
    title: "The Dark Knight",
    image: "/movies-images/the-dark-knight.webp",
    imdb_url: "https://www.imdb.com/title/tt0468569/"
  },
  {
    id: 108,
    title: "Die Hard with a Vengeance",
    image: "/movies-images/die-hard-with-a-vengeance.webp",
    imdb_url: "https://www.imdb.com/title/tt0112864/"
  }
];

export default function Home() {
  return (
    <div className="bg-indigo-950 text-slate-300">

      <MainHeader />
      <main className="mx-auto w-[90%] md:w-[92%] lg:w-[95%]] flex flex-col items-center justify-between min-h-screen gap-y-12 >*:bg-slate-200 mt-16">
        <h1 className="mb-4 text-sm tracking-wide text-left font-extralight lg:text-2xl lg:mb-6 text-slate-400">Movies Database</h1>
        <div className="movies-grid w-full min-h-[500px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 gap-12">
          {MoviesList.map((movie, id) => (
            <div key={id} className="movie-card justify-items-center content-center border-yellow-500/10 w-[200px] flex flex-col items-center duration-300 ease-in-out border cursor-pointer border-tr-md border-tl-md border-violet-900 movie-card text-light_colour border-secondary group hover:bg-secondary">
              <div className="movie-poster">
                <Image src={movie.image} className={`object-cover duration-1000 border-tr-md border-tl-md lg:opacity-50 group-hover:lg:opacity-100 group-hover:ease-in-out`} alt={movie.title} width={200} height={300} />
              </div>
              <div className="movie-info">
                <p className="movie-title bg-violet-900  lg:px-2 group-hover:pt-2 ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 w-[200px] text-center text-xs min-h-[60px] max-w-full flex items-center justify-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <MainFooter />
    </div>
  );
}