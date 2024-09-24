import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";
import H1 from "@/components/typography/H1Span";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
const pageStyles = "bg-gradient-to-b bg-indigo-900 bg-melt-background text-slate-300";

import DataForMoviesList from "@/components/data/DataForMovies";
DataForMoviesList.sort((a, b) => a.title.localeCompare(b.title));
const watchedMovies = DataForMoviesList.filter((movie) => movie.watched === true);
const unwatchedMovies = DataForMoviesList.filter((movie) => movie.watched === false);
const watchedMoviesLength = watchedMovies.length;

export default function Home() {
  return (
    <div className={`${globalPageStyles} ${pageStyles}`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text={`Movies Database (${watchedMoviesLength} Watched)`} />
        <div className={`grid w-full grid-cols-3 gap-4 movies-grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 max-sm:gap-y-6 md:gap-6 lg:gap-8 xl:gap-12`}>
          {watchedMovies.map((movie, id) => (
            <div key={id} className={`flex flex-col items-center content-center duration-300 ease-in-out border cursor-pointer movie-card justify-items-center border-yellow-500/10 border-violet-900 text-light_colour border-secondary group hover:bg-secondary bg-violet-800`}>
              <div className={`w-full max-w-full movie-poster`}>
                <Image src={movie.image} className={`object-cover duration-1000 border-tr-md border-tl-md lg:opacity-80 group-hover:lg:opacity-100 group-hover:ease-in-out group-hover:scale-150 w-full`} alt={movie.title} width={200} height={300} />
              </div>
              <div className={`w-full movie-info`}>
                <p className={`movie-title bg-violet-900 w-full px-2  ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center`}>{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`w-full p-4 my-8 border rounded-lg border-indigo-900/50 lg:my-16`}>
          <h2 className={`mb-4 text-lg`}>To Watch</h2>
          <div className={`min-h-[100px] movies-grid w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-4 max-sm:gap-y-6 md:gap-6 lg:gap-8 xl:gap-12`}>
          {unwatchedMovies.map((movie, id) => (
            <div key={id} className={`flex flex-col items-center content-center duration-300 ease-in-out border cursor-pointer movie-card justify-items-center border-yellow-500/10 border-violet-900 text-light_colour border-secondary group hover:bg-secondary`}>
              <div className={`w-full max-w-full movie-poster`}>
                <Image src={movie.image} className={`object-cover duration-1000 border-tr-md border-tl-md lg:opacity-50 group-hover:lg:opacity-100 group-hover:ease-in-out w-full`} alt={movie.title} width={200} height={300} />
              </div>
              <div className={`w-full movie-info`}>
                <p className={`movie-title bg-violet-900 w-full px-2 group-hover:pt-2 ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center`}>
                  {movie.title}
                </p>
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