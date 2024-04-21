//import Image from "next/image";
import MainNav from "@/components/MainNav";
import MainLogo from "@/components/MainLogo";
import MainIntro from "@/components/MainIntro";
import MainResources from "@/components/MainResources";
import MainFooter from "@/components/MainFooter";
// import hand.svg from the public folder
//import hand from "../public/hand.svg";
import MainProjects from "@/components/MainProjects";
import MainHeader from "@/components/MainHeader";

const quotes = [
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
    <div className="bg-amber-950/70">

      <MainHeader />

      <main className="mx-auto w-[90%] md:w-[92%] lg:w-[95%]] flex flex-col items-center min-h-screen gap-y-12 >*:bg-slate-200 mt-16">

        <h1 className="mb-4 text-sm tracking-wide text-left font-extralight lg:text-2xl lg:mb-6 text-slate-400">Jokes</h1>

        <div className="w-full flex flex-wrap gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="border border-rose-700 w-[400px] bg-rose-900 p-4 rounded-lg min-h-[200px] space-y-4">
              <p>{quote.setup}</p>
              <p>{quote.punchline}</p>
            </div>
          ))}
        </div>


      </main>
      <MainFooter />
    </div>
  );
}