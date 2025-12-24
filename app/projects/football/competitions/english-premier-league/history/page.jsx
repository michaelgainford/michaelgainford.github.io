import HeroPremierLeague from "@/components/hero/Hero_PremierLeague";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import H1 from "@/components/typography/H1_Span";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { globalPageStyles, mainStyles } from "@/variables/Styles";

export const metadata = {
    title: "Premier League History",
    description: "The history of the English Premier League since its inception in 1992."
}

const premierLeagueSeasonsData = [
    {
        id: 1,
        season: "1992/93",
        text: "The inaugural season of the Premier League saw Manchester United crowned champions, finishing 10 points ahead of Aston Villa. The top goalscorer was Teddy Sheringham of Nottingham Forest with 22 goals.",
        winners: "Manchester United (1)",
        runnersUp: "Aston Villa (1)",
        relegated: [
            "Crystal Palace (1), ",
            "Middlesbrough (1), ",
            "Nottingham Forest (1)"
        ],
        topGoalscorer: "Alan Shearer (34)"
    },
    {
        id: 2, 
        season: "1993/94",
        text: "Manchester United retained the title in the 1993/94 season, finishing eight points ahead of Blackburn Rovers. The top goalscorer was Andy Cole of Newcastle United with 34 goals.",
        winners: "Manchester United (2)",
        runnersUp: "Blackburn Rovers (1)",
        relegated: [
            "Sheffield United (1), ",
            "Oldham Athletic (1), ",
            "Swindon Town (1)"
        ],
        topGoalscorer: "Andy Cole (34)"
    },
    {
        id: 3,
        season: "1994/95",
        text: "Blackburn Rovers won the Premier League title in the 1994/95 season, finishing one point ahead of Manchester United. The top goalscorer was Alan Shearer of Blackburn Rovers with 34 goals.",
        winners: "Blackburn Rovers (1)",
        runnersUp: "Manchester United (1)",
        relegated: [
            "Crystal Palace (2), ",
            "Norwich City (1), ",
            "Leicester City (1), ",
            "Ipswich Town (1)"
        ],
        topGoalscorer: "Alan Shearer (34)"
    },
    {
        id: 4,
        season: "1995/96",
        text: "Manchester United won the Premier League title in the 1995/96 season, finishing four points ahead of Newcastle United. The top goalscorer was Alan Shearer of Newcastle United with 31 goals.",
        winners: "Manchester United (3)",
        runnersUp: "Newcastle United (1)",
        relegated: [
            "Manchester City (1), ",
            "QPR (1), ",
            "Bolton Wanderers (1)"
        ],
        topGoalscorer: "Alan Shearer (31)"
    },
    {
        id: 5,
        season: "1996/97",
        text: "Manchester United retained the title in the 1996/97 season, finishing seven points ahead of Newcastle United. The top goalscorer was Alan Shearer of Newcastle United with 25 goals.",
        winners: "Manchester United (4)",
        runnersUp: "Newcastle United (2)",
        relegated: [
            "Sunderland (1), ",
            "Middlesbrough (2), ",
            "Nottingham Forest (2)"
        ],
        topGoalscorer: "Alan Shearer (25)"
    },
    {
        id: 6,
        season: "1997/98",
        text: "Arsenal won the Premier League title in the 1997/98 season, finishing one point ahead of Manchester United. The top goalscorer was Chris Sutton of Blackburn Rovers with 18 goals.",
        winners: "Arsenal (1)",
        runnersUp: "Manchester United (2)",
        relegated: [
            "Bolton Wanderers (2), ",
            "Barnsley (1), ",
            "Crystal Palace (3)"
        ],
        topGoalscorer: "Chris Sutton (18)"
    },
    {
        id: 7,
        season: "1998/99",
        text: "Manchester United won the Premier League title in the 1998/99 season, finishing one point ahead of Arsenal. The top goalscorer was Jimmy Floyd Hasselbaink of Leeds United with 18 goals.",
        winners: "Manchester United (5)",
        runnersUp: "Arsenal (1)",
        relegated: [
            "Charlton Athletic (1), ",
            "Nottingham Forest (3), ",
            "Blackburn Rovers (2)"
        ],
        topGoalscorer: "Jimmy Floyd Hasselbaink (18)"
    },
    {
        id: 8,
        season: "1999/00",
        text: "Manchester United won the Premier League title in the 1999/00 season, finishing 18 points ahead of Arsenal. The top goalscorer was Kevin Phillips of Sunderland with 30 goals.",
        winners: "Manchester United (6)",
        runnersUp: "Arsenal (2)",
        relegated: [
            "Wimbledon (1), ",
            "Sheffield Wednesday (1), ",
            "Watford (1)"
        ],
        topGoalscorer: "Kevin Phillips (30)"
    },
    {
        id: 9,
        season: "2000/01",
        text: "Manchester United won the Premier League title in the 2000/01 season, finishing 10 points ahead of Arsenal. The top goalscorer was Jimmy Floyd Hasselbaink of Chelsea with 23 goals.",
        winners: "Manchester United (7)",
        runnersUp: "Arsenal (3)",
        relegated: [
            "Manchester City (2), ",
            "Coventry City (1), ",
            "Bradford City (2)"
        ],
        topGoalscorer: "Jimmy Floyd Hasselbaink (23)"
    },
    {
        id: 10,
        season: "2001/02",
        text: "Arsenal won the Premier League title in the 2001/02 season, finishing seven points ahead of Liverpool. The top goalscorer was Thierry Henry of Arsenal with 24 goals.",
        winners: "Arsenal (2)",
        runnersUp: "Liverpool (1)",
        relegated: [
            "Ipswich Town (2), ",
            "Derby County (1), ",
            "Leicester City (2)"
        ],
        topGoalscorer: "Thierry Henry (24)"
    },
    {
        id: 11,
        season: "2002/03",
        text: "Manchester United won the Premier League title in the 2002/03 season, finishing five points ahead of Arsenal. The top goalscorer was Ruud van Nistelrooy of Manchester United with 25 goals.",
        winners: "Manchester United (8)",
        runnersUp: "Arsenal (4)",
        relegated: [
            "West Ham United (1), ",
            "West Bromwich Albion (1), ",
            "Sunderland (2)"
        ],
        topGoalscorer: "Ruud van Nistelrooy (25)"
    },
    {
        id: 12,
        season: "2003/04",
        text: "Arsenal won the Premier League title in the 2003/04 season, finishing 11 points ahead of Chelsea. The top goalscorer was Thierry Henry of Arsenal with 30 goals.",
        winners: "Arsenal (3)",
        runnersUp: "Chelsea (1)",
        relegated: [
            "Leeds United (1), ",
            "Wolverhampton Wanderers (1), ",
            "Leicester City (3)"
        ],
        topGoalscorer: "Thierry Henry (30)"
    },
    {
        id: 13,
        season: "2004/05",
        text: "Chelsea won the Premier League title in the 2004/05 season, finishing 12 points ahead of Arsenal. The top goalscorer was Thierry Henry of Arsenal with 25 goals.",
        winners: "Chelsea (1)",
        runnersUp: "Arsenal (5)",
        relegated: [
            "Crystal Palace (4), ",
            "Norwich City (2), ",
            "Southampton (1)"
        ],
        topGoalscorer: "Thierry Henry (25)"
    },
    {
        id: 14,
        season: "2005/06",
        text: "Chelsea won the Premier League title in the 2005/06 season, finishing eight points ahead of Manchester United. The top goalscorer was Thierry Henry of Arsenal with 27 goals.",
        winners: "Chelsea (2)",
        runnersUp: "Manchester United (1)",
        relegated: [
            "Birmingham City (1), ",
            "West Bromwich Albion (2), ",
            "Sunderland (3)"
        ],
        topGoalscorer: "Thierry Henry (27)"
    },
    {
        id: 15,
        season: "2006/07",
        text: "Manchester United won the Premier League title in the 2006/07 season, finishing six points ahead of Chelsea. The top goalscorer was Didier Drogba of Chelsea with 20 goals.",
        winners: "Manchester United (9)",
        runnersUp: "Chelsea (2)",
        relegated: [
            "Watford (2), ",
            "Charlton Athletic (2), ",
            "Sheffield United (2)"
        ],
        topGoalscorer: "Didier Drogba (20)"
    },
    {
        id: 16,
        season: "2007/08",
        text: "Manchester United won the Premier League title in the 2007/08 season, finishing two points ahead of Chelsea. The top goalscorer was Cristiano Ronaldo of Manchester United with 31 goals.",
        winners: "Manchester United (10)",
        runnersUp: "Chelsea (3)",
        relegated: [
            "Derby County (2), ",
            "Birmingham City (2), ",
            "Reading (1)"
        ],
        topGoalscorer: "Cristiano Ronaldo (31)"
    },
    {
        id: 17,
        season: "2008/09",
        text: "Manchester United won the Premier League title in the 2008/09 season, finishing four points ahead of Liverpool. The top goalscorer was Nicolas Anelka of Chelsea with 19 goals.",
        winners: "Manchester United (11)",
        runnersUp: "Liverpool (1)",
        relegated: [
            "Newcastle United (3), ",
            "Middlesbrough (3), ",
            "West Bromwich Albion (3)"
        ],
        topGoalscorer: "Nicolas Anelka (19)"
    },
    {
        id: 18,
        season: "2009/10",
        text: "Chelsea won the Premier League title in the 2009/10 season, finishing one point ahead of Manchester United. The top goalscorer was Didier Drogba of Chelsea with 29 goals.",
        winners: "Chelsea (3)",
        runnersUp: "Manchester United (2)",
        relegated: [
            "Burnley (1), ",
            "Hull City (1), ",
            "Portsmouth (1)"
        ],
        topGoalscorer: "Didier Drogba (29)"
    },
    {
        id: 19,
        season: "2010/11",
        text: "Manchester United won the Premier League title in the 2010/11 season, finishing nine points ahead of Chelsea. The top goalscorer was Dimitar Berbatov of Manchester United with 20 goals.",
        winners: "Manchester United (12)",
        runnersUp: "Chelsea (4)",
        relegated: [
            "West Ham United (2), ",
            "Blackpool (1), ",
            "Birmingham City (3)"
        ],
        topGoalscorer: "Dimitar Berbatov (20)"
    },
    {
        id: 20,
        season: "2011/12",
        text: "Manchester City won the Premier League title in the 2011/12 season, finishing ahead of Manchester United on goal difference. The top goalscorer was Robin van Persie of Arsenal with 30 goals.",
        winners: "Manchester City (1)",
        runnersUp: "Manchester United (3)",
        relegated: [
            "Bolton Wanderers (3), ",
            "Blackburn Rovers (3), ",
            "Wolverhampton Wanderers (2)"
        ],
        topGoalscorer: "Robin van Persie (30)"
    },
    {
        id: 21,
        season: "2012/13",
        text: "Manchester United won the Premier League title in the 2012/13 season, finishing 11 points ahead of Manchester City. The top goalscorer was Robin van Persie of Manchester United with 26 goals.",
        winners: "Manchester United (13)",
        runnersUp: "Manchester City (2)",
        relegated: [
            "Reading (2), ",
            "Queens Park Rangers (1), ",
            "Wigan Athletic (1)"
        ],
        topGoalscorer: "Robin van Persie (26)"
    },
    {
        id: 22,
        season: "2013/14",
        text: "Manchester City won the Premier League title in the 2013/14 season, finishing two points ahead of Liverpool. The top goalscorer was Luis Suarez of Liverpool with 31 goals.",
        winners: "Manchester City (2)",
        runnersUp: "Liverpool (2)",
        relegated: [
            "Norwich City (3), ",
            "Fulham (1), ",
            "Cardiff City (1)"
        ],
        topGoalscorer: "Luis Suarez (31)"
    },
    {
        id: 23,
        season: "2014/15",
        text: "Chelsea won the Premier League title in the 2014/15 season, finishing eight points ahead of Manchester City. The top goalscorer was Sergio Aguero of Manchester City with 26 goals.",
        winners: "Chelsea (4)",
        runnersUp: "Manchester City (3)",
        relegated: [
            "Hull City (2), ",
            "Burnley (2), ",
            "Queens Park Rangers (2)"
        ],
        topGoalscorer: "Sergio Aguero (26)"
    },
    {
        id: 24,
        season: "2015/16",
        text: "Leicester City won the Premier League title in the 2015/16 season, finishing 10 points ahead of Arsenal. The top goalscorer was Harry Kane of Tottenham Hotspur with 25 goals.",
        winners: "Leicester City (1)",
        runnersUp: "Arsenal (6)",
        relegated: [
            "Newcastle United (4), ",
            "Norwich City (4), ",
            "Aston Villa (2)"
        ],
        topGoalscorer: "Harry Kane (25)"
    },
    {
        id: 25,
        season: "2016/17",
        text: "Chelsea won the Premier League title in the 2016/17 season, finishing seven points ahead of Tottenham Hotspur. The top goalscorer was Harry Kane of Tottenham Hotspur with 29 goals.",
        winners: "Chelsea (5)",
        runnersUp: "Tottenham Hotspur (1)",
        relegated: [
            "Hull City (3), ",
            "Middlesbrough (4), ",
            "Sunderland (4)"
        ],
        topGoalscorer: "Harry Kane (29)"
    },
    {
        id: 26,
        season: "2017/18",
        text: "Manchester City won the Premier League title in the 2017/18 season, finishing 19 points ahead of Manchester United. The top goalscorer was Mohamed Salah of Liverpool with 32 goals.",
        winners: "Manchester City (3)",
        runnersUp: "Manchester United (4)",
        relegated: [
            "Swansea City (1), ",
            "Stoke City (1), ",
            "West Bromwich Albion (4)"
        ],
        topGoalscorer: "Mohamed Salah (32)"
    },
    {
        id: 27,
        season: "2018/19",
        text: "Manchester City won the Premier League title in the 2018/19 season, finishing one point ahead of Liverpool. The top goalscorer was Mohamed Salah of Liverpool with 22 goals.",
        winners: "Manchester City (4)",
        runnersUp: "Liverpool (3)",
        relegated: [
            "Huddersfield Town (1), ",
            "Fulham (2), ",
            "Cardiff City (2)"
        ],
        topGoalscorer: "Mohamed Salah (22)"
    },
    {
        id: 28,
        season: "2019/20",
        text: "Liverpool won the Premier League title in the 2019/20 season, finishing 18 points ahead of Manchester City. The top goalscorer was Jamie Vardy of Leicester City with 23 goals.",
        winners: "Liverpool (1)",
        runnersUp: "Manchester City (4)",
        relegated: [
            "Norwich City (5), ",
            "Watford (2), ",
            "Bournemouth (1)"
        ],
        topGoalscorer: "Jamie Vardy (23)"
    },
    {
        id: 29,
        season: "2020/21",
        text: "Manchester City won the Premier League title in the 2020/21 season, finishing 12 points ahead of Manchester United. The top goalscorer was Harry Kane of Tottenham Hotspur with 23 goals.",
        winners: "Manchester City (5)",
        runnersUp: "Manchester United (6)",
        relegated: [
            "Fulham (3)", ,
            "West Bromwich Albion (5), ",
            "Sheffield United (3)"
        ],
        topGoalscorer: "Harry Kane (23)"
    },
    {
        id: 30,
        season: "2021/22",
        text: "Manchester City won the Premier League title in the 2021/22 season, finishing 25 points ahead of Liverpool. The top goalscorer was Mohamed Salah of Liverpool with 32 goals.",
        winners: "Manchester City (6)",
        runnersUp: "Liverpool (4)",
        relegated: [
            "Watford (3) ",
            "Norwich City (6) ",
            "Burnley (3)"
        ],
        topGoalscorer: "Mohamed Salah (32)"
    },
    {
        id: 31,
        season: "2022/23",
        text: "Manchester City won the Premier League title in the 2022/23 season, finishing 12 points ahead of Arsenal. The top goalscorer was Harry Kane of Tottenham Hotspur with 24 goals.",
        winners: "Manchester City (7)",
        runnersUp: "Arsenal (7)",
        relegated: [
            "Leicester City (2), ",
            "Leeds United (2), ",
            "Southampton (2)"
        ],
        topGoalscorer: "Erling Haaland (36)",
    },
    {
        id: 32,
        season: "2023/24",
        text: "Manchester City won the Premier League title in the 2023/24 season, finishing 10 points ahead of Liverpool. This was City's 4th consecutive title. A new Premier League record.",
        winners: "Manchester City (8), ",
        runnersUp: "Liverpool (5), ",
        relegated: [
            "Luton Town (1), ",
            "Burnley (4), ",
            "Sheffield United (4)"
        ],
        topGoalscorer: "Erling Haaland (27)",
    },
    {
        id: 33,
        season: "2024/25",
        text: "Liverpool won their 2nd Premier League title in the 2024/25 season, finishing 6 points ahead of Manchester City. This was made even more remarkable by the fact it was achieved under new management after the summer departure of long-term manager Jürgen Klopp (replaced by Arne Slot).",
        winners: "Liverpool (2)",
        runnersUp: "Manchester City (5)",
        relegated: [
            "Leicester City (3), ",
            "Ipswich Town (1), ",
            "Southampton (3), ",
        ],
        topGoalscorer: "Mohamed Salah (29)",

    }
]

export default function PAGE_PREMIER_LEAGUE_HISTORY () {
	return (
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
                <HeroPremierLeague />
				<div className={`${mainStyles} text-xs! py-4`}>
                    <NavForPremierLeagueHub />
                </div>
				<div className={`${mainStyles}`}>
					<H1 
                      text="Premier League History" 
                      font_sizes="text-base lg:text-[24px]!" 
                      other_classes="uppercase" 
                    />
				</div>
				<div className={`${mainStyles}`}>
                    <p className="text-sm lg:text-sm max-w-[800px]">The Premier League was founded in 1992 when the clubs in the Football League First Division broke away from the Football League to form their own competition. The Premier League is the top tier of English football and is the most-watched sports league in the world. The league has been dominated by Manchester United (13) and Manchester City (8) with Chelsea (5), Arsenal (3), Liverpool (2), Leicester City (1) and Blackburn Rovers (1) being the only other clubs to win the title.</p>

                    <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 seasons">
                        {premierLeagueSeasonsData.map((season, index) => (
                            <div key={season.id} className={`pt-4 pb-8 border border-epl rounded-lg season season-${index} [&>h3]:px-4 [&>h3]:mb-1 [&>h3]:text-sm [&>h3]:font-light [&>h3]:tracking-wider [&>h3]:uppercase [&>p]:px-4 [&>p]:mb-4 [&>p]:text-xs`}>
                                <h2 className="px-4 pb-3 mb-4 text-sm font-bold border-b border-current lg:text-xl">{season.season}</h2>
                                <h3>Overview</h3>
                                <p>{season.text}</p>
                                <h3>Winners</h3>
                                <p>{season.winners}</p>
                                <h3>Runners-up</h3>
                                <p>{season.runnersUp}</p>
                                <h3>Relegated</h3>
                                <p>{season.relegated}</p>
                                <h3>Top Goalscorer</h3>
                                <p>{season.topGoalscorer}</p>
                            </div>
                        ))}
                    </div>
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}
