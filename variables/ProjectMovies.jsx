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
const topRatedMovies = [...watchedMovies]
	.map((movie) => ({ movie, score: getAverageMigacriticScore(movie) }))
	.filter(({ score }) => score !== null)
	.sort((a, b) => b.score - a.score)
	.slice(0, 12)
	.map(({ movie }) => movie);
const featuredMovies = topRatedMovies.length > 0 ? topRatedMovies : watchedMovies.slice(0, 12);
const watchedMoviesLength = watchedMovies.length;
const unwatchedMovies = DataForMoviesList.filter((movie) => movie.watched === false);
const unwatchedMoviesLength = unwatchedMovies.length;

{/********************************
	EXPORTS
*********************************/}
export { 
	DataForMoviesList,
	featuredMovies,
	getAverageMigacriticScore,
	watchedMovies,
	watchedMoviesLength,
	unwatchedMovies,
	unwatchedMoviesLength
};