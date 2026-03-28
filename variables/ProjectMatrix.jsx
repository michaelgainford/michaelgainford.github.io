import MatrixDataImport from "@/data/data_for__the-matrix.json";

const matrixData = MatrixDataImport;
const trilogy = matrixData.trilogy;
const cast = matrixData.cast;
const pillars = matrixData.pillars;
const quotes = matrixData.quotes;
const scenes = matrixData.scenes;

const matrixStats = {
  trilogyLength: trilogy.length,
  castLength: cast.length,
  pillarsLength: pillars.length,
  quoteCount: quotes.length,
  sceneCount: scenes.length,
};

export {
  matrixData,
  trilogy,
  cast,
  pillars,
  quotes,
  scenes,
  matrixStats,
};
