import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
const mainStyles = "mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center";
const quotes = [
  {
    quote: "The worst type of loneliness is the loneliness you feel when you are with people.",
  },
  {
    quote: "A toxic person only changes their victims, never themselves.",
  },
  {
    quote: "You can be the whole package at the wrong address."
  },
  {
    quote: "Once you've accepted your flaws, no one can use them against you."
  },
  {
    quote: "The hardest prison to escape is in your mind."
  },
  {
    quote: "Speaking about your goals kills motivation."
  },
  {
    quote: "When we\'re constantly wishing for something, we overlook what we already have."
  },
  {
    quote: "The less you care about the opinions of others, the more powerful you become."
  },
  {
    quote: "When you know what you want, have a plan to achieve it, and do the work consistently, nothing can stop you."
  },
  {
    quote: "Watch how people treat service workers. It\'ll show you their true character."
  },
  {
    quote: "Knowing what you want in life gets your far more than if you didn\'t"
  },
  {
    quote: "The only way to get what you want is to ask for it."
  },
  {
    quote: "Seeking out adversity will help us grow more than being in a comfort zone."
  },
  {
    quote: "Investing in yourself isn\'t selfish. It is the most worthwhile thing you can do."
  },
  {
    quote: "The power of focusing on one thing at a time will change your life."
  },
  {
    quote: "The sooner you stop lying to yourself, the quicker you can be unstoppable."
  },
  {
    quote: "Less friends = deeper relationships."
  },
  {
    quote: "People who accept suffering achieve greatness. Those who avoid it go nowhere."
  },
  {
    quote: "It\'s not what happens, it\'s how yoou react that matters."
  },
  {
    quote: "The more you learn, the more you earn."
  },
  {
    quote: "Your life can change tomorrow, if you make the choice to change it."
  },
  {
    quote: "The more sacrifices you are willing to make, the more successful you will become."
  },
  {
    quote: "You are what you say to yourself - change the words you use."
  },
  {
    quote: "To be great at anything, you must be consistently good for long enough."
  }
];

export default function Home() {
  return (
    <div className="bg-sky-900">

      <MainHeader />

      <main className={mainStyles}>

        <H1 text="Quotes" />

        <div className="flex flex-wrap justify-center w-full gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="w-1/4 p-4 space-y-4 text-center border rounded-lg border-sky-700 bg-sky-700 min-w-[200px] max-sm:w-full">
              <q className="text-sm tracking-wider text-center">{quote.quote}</q>
            </div>
          ))}
        </div>


      </main>
      <MainFooter />
    </div>
  );
}