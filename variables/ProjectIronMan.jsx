import IronManDataImport from "@/data/data_for__iron-man.json";

const ironManData = IronManDataImport;
const page = ironManData.page;
const films = ironManData.films;
const cast = ironManData.cast;
const pillars = ironManData.pillars;
const quotes = ironManData.quotes;
const scenes = ironManData.scenes;

const ironManStats = {
  filmCount: films.length,
  castLength: cast.length,
  pillarsLength: pillars.length,
  quoteCount: quotes.length,
  sceneCount: scenes.length,
};

export {
  ironManData,
  page,
  films,
  cast,
  pillars,
  quotes,
  scenes,
  ironManStats,
};
