{/********************************
  MOVIES
*********************************/}
import DataForMoviesListImport from "@/data/data_for__movies.json";

const DataForMoviesList = DataForMoviesListImport.Movies;
DataForMoviesList.sort((a, b) => a.title.localeCompare(b.title));
const watchedMovies = DataForMoviesList.filter((movie) => movie.watched === true);
const watchedMoviesLength = watchedMovies.length;
const unwatchedMovies = DataForMoviesList.filter((movie) => movie.watched === false);
const unwatchedMoviesLength = unwatchedMovies.length;

{/********************************
	EXPORTS
*********************************/}
export { 
	DataForMoviesList,
	watchedMovies,
	watchedMoviesLength,
	unwatchedMovies,
	unwatchedMoviesLength
};