import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";
import H1 from "@/components/typography/H1Span";
import { mainStyles } from "@/components/data/Variables";

import DataForMoviesList from "@/components/data/DataForMovies";
// Sort MoviesList by title
DataForMoviesList.sort((a, b) => a.title.localeCompare(b.title));

const pageStyles = "bg-indigo-950 text-slate-300";
// Filter MoviesList by watched
const watchedMovies = DataForMoviesList.filter((movie) => movie.watched === true);
const unwatchedMovies = DataForMoviesList.filter((movie) => movie.watched === false);
// get length of watchedMovies
const watchedMoviesLength = watchedMovies.length;

export default function Home() {
  return (
    <div className={pageStyles}>
      <MainHeader />
      <main className={mainStyles}>
        <H1 text={`Movies Database (${watchedMoviesLength} Watched)`} />
        <div className="movies-grid w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-4 max-sm:gap-y-6 md:gap-6 lg:gap-8 xl:gap-12">
          {watchedMovies.map((movie, id) => (
            <div key={id} className="movie-card justify-items-center content-center border-yellow-500/10 flex flex-col items-center duration-300 ease-in-out border cursor-pointer border-violet-900 movie-card text-light_colour border-secondary group hover:bg-secondary">
              <div className="movie-poster w-full max-w-full">
                <Image src={movie.image} className={`object-cover duration-1000 border-tr-md border-tl-md lg:opacity-50 group-hover:lg:opacity-100 group-hover:ease-in-out group-hover:scale-150 w-full`} alt={movie.title} width={200} height={300} />
              </div>
              <div className="w-full movie-info">
                <p className="movie-title bg-violet-900 w-full px-2  ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full border border-indigo-900/50  rounded-lg p-4 my-8 lg:my-16 ">
          <h2 className="text-lg mb-4">To Watch</h2>
          <div className="min-h-[100px] movies-grid w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-4 max-sm:gap-y-6 md:gap-6 lg:gap-8 xl:gap-12">
          {unwatchedMovies.map((movie, id) => (
            <div key={id} className="movie-card justify-items-center content-center border-yellow-500/10 flex flex-col items-center duration-300 ease-in-out border cursor-pointer border-violet-900 movie-card text-light_colour border-secondary group hover:bg-secondary">
              <div className="movie-poster w-full max-w-full">
                <Image src={movie.image} className={`object-cover duration-1000 border-tr-md border-tl-md lg:opacity-50 group-hover:lg:opacity-100 group-hover:ease-in-out w-full`} alt={movie.title} width={200} height={300} />
              </div>
              <div className="w-full movie-info">
                <p className="movie-title bg-violet-900 w-full px-2 group-hover:pt-2 ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}