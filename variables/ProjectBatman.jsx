import BatmanDataImport from "@/data/data_for__batman.json";

const batmanData = BatmanDataImport;
const page = batmanData.page;
const films = batmanData.films;
const cast = batmanData.cast;
const pillars = batmanData.pillars;
const quotes = batmanData.quotes;
const scenes = batmanData.scenes;

const batmanStats = {
  filmCount: films.length,
  castLength: cast.length,
  pillarsLength: pillars.length,
  quoteCount: quotes.length,
  sceneCount: scenes.length,
};

export {
  batmanData,
  page,
  films,
  cast,
  pillars,
  quotes,
  scenes,
  batmanStats,
};
