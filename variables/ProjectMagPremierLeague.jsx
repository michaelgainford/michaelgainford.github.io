{/********************************
  THE MAG PREMIER LEAGUE
*********************************/}

{/* Imports */}
import magPremierLeagueDataJSON from '@/data/data_for__magpremierleague.json';


{/* Variables */}
const leagueTableStructure = [
	{
		team: 'Alfie',
		played: 0,
		won: 0,
		drawn: 0,
		lost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
		goalDifference: 0,
		points: 0
	},
	{
		team: 'Garcon',
		played: 0,
		won: 0,
		drawn: 0,
		lost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
		goalDifference: 0,
		points: 0
	},
	{
		team: 'Michael',
		played: 0,
		won: 0,
		drawn: 0,
		lost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
		goalDifference: 0,
		points: 0
	}
];
const magPLCurrentSeason = 2;
const magPremierLeagueSeasons = magPremierLeagueDataJSON.Seasons;
const magEPLUpcomingMatches = magPremierLeagueSeasons.filter(season => season.season === magPLCurrentSeason)[0].fixtures.filter(fixture => fixture.upcoming === true);

{/********************************
  EXPORTS
*********************************/}
export {
	leagueTableStructure,
	magPLCurrentSeason,
	magEPLUpcomingMatches,
	magPremierLeagueSeasons
};