import DeadpoolDataImport from "@/data/data_for__deadpool.json";

const deadpoolData = DeadpoolDataImport;
const page = deadpoolData.page;
const films = deadpoolData.films;
const cast = deadpoolData.cast;
const pillars = deadpoolData.pillars;
const quotes = deadpoolData.quotes;
const scenes = deadpoolData.scenes;

const deadpoolStats = {
  filmCount: films.length,
  castLength: cast.length,
  pillarsLength: pillars.length,
  quoteCount: quotes.length,
  sceneCount: scenes.length,
};

export {
  deadpoolData,
  page,
  films,
  cast,
  pillars,
  quotes,
  scenes,
  deadpoolStats,
};
