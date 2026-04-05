{/********************************
  MOVIES
*********************************/}
import DataForMoviesListImport from "@/data/data_for__movies.json";

const DataForMoviesList = DataForMoviesListImport.Movies;
DataForMoviesList.sort((a, b) => a.title.localeCompare(b.title));

const toNumericScore = (value) => {
	if (typeof value === "number") {
		return Number.isFinite(value) ? value : null;
	}

	if (typeof value === "string" && value.trim() !== "") {
		const parsed = Number(value);
		return Number.isFinite(parsed) ? parsed : null;
	}

	return null;
};

const getAverageMigacriticScore = (movie) => {
	const bScore = toNumericScore(movie?.migacriticScore?.B);
	const dScore = toNumericScore(movie?.migacriticScore?.D);

	if (bScore === null || dScore === null) {
		return null;
	}

	return (bScore + dScore) / 2;
};

const watchedMovies = DataForMoviesList.filter((movie) => movie.watched === true);
const watchedMoviesLength = watchedMovies.length;
const unwatchedMovies = DataForMoviesList.filter((movie) => movie.watched === false);
const unwatchedMoviesLength = unwatchedMovies.length;

{/********************************
	EXPORTS
*********************************/}
export { 
	DataForMoviesList,
	getAverageMigacriticScore,
	watchedMovies,
	watchedMoviesLength,
	unwatchedMovies,
	unwatchedMoviesLength
};