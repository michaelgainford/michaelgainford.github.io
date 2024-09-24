import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

const jokes = [
  {
    setup: "What do you call a fish wearing a crown?",
    punchline: "A kingfish"
  },
  {
    setup: "What do you call a fish wearing a crown?",
    punchline: "A kingfish"
  },
  {
    setup: "What do you call a fish wearing a crown?",
    punchline: "A kingfish"
  },
  {
    setup: "What do you call a fish wearing a crown?",
    punchline: "A kingfish"
  },
  {
    setup: "What do you call a fish wearing a crown?",
    punchline: "A kingfish"
  },
  {
    setup: "What do you call a fish wearing a crown?",
    punchline: "A kingfish"
  },
  {
    setup: "What do you call a fish wearing a crown?",
    punchline: "A kingfish"
  },
  {
    setup: "What do you call a fish wearing a crown?",
    punchline: "A kingfish"
  }
];

export default function Home() {
  return (
    <div className={`${globalPageStyles} bg-rose-950 bg-brick-wall-background`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text={`Jokes`} />
        <div className={`grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-8 lg:gap-16`}>
          {jokes.map((joke, index) => (
            <div key={index} className={`border border-rose-700 bg-rose-900 p-4 rounded-lg min-h-[200px] space-y-4`}>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          ))}
        </div>
      </main>
      <MainFooter />
    </div>
  );
}