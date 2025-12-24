{/********************************
	PREMIER LEAGUE  
*********************************/}

{/* import EPL 100 Club Data */}
import epl100ScorerDataJSON from '@/data/data_for__englishpremierleague.json';

{/* Array of Premier League Seasons */}
const premierLeagueYears = [
	'92/93',
	'93/94', 
	'94/95', 
	'95/96', 
	'96/97', 
	'97/98', 
	'98/99', 
	'99/00', 
	'00/01', 
	'01/02', 
	'02/03', 
	'03/04', 
	'04/05', 
	'05/06', 
	'06/07', 
	'07/08', 
	'08/09', 
	'09/10', 
	'10/11', 
	'11/12', 
	'12/13', 
	'13/14', 
	'14/15', 
	'15/16', 
	'16/17', 
	'17/18', 
	'18/19', 
	'19/20', 
	'20/21', 
	'21/22', 
	'22/23', 
	'23/24', 
	'24/25',
];

const numberOfPremierLeagueSeasons = premierLeagueYears.length;

{/* map through the premier league seasons and create an array of season positions */}
const seasonPositions = Array.from({ length: numberOfPremierLeagueSeasons }, (_, i) => `season${i + 1}Pos`);

{/* paths */}
const clubLogosRoot = "/football/premier-league/club-logos";
const premierLeagueHubUrl = "/projects/football/competitions/english-premier-league";
const premierLeagueLogoSvgPath = "/football/competition-logos/premier-league-logo-white.svg";
const premierLeagueHubBlockImageRoot = "/football/premier-league/hub-blocks";
const epl100ScorerData = epl100ScorerDataJSON.Top_Scorers;

{/* Number of players in the 100 Club */}
const numberOfPlayersWithAtLeast100Goals = epl100ScorerData.length;

{/********************************
	EXPORTS 
*********************************/}
export {
	premierLeagueYears,
	seasonPositions,
	clubLogosRoot,
	premierLeagueHubUrl,
	premierLeagueLogoSvgPath,
	premierLeagueHubBlockImageRoot,
	epl100ScorerData,
	numberOfPlayersWithAtLeast100Goals
};