//import Image from "next/image";
import MainNav from "@/components/MainNav";
import MainLogo from "@/components/MainLogo";
import MainFooter from "@/components/MainFooter";
// import hand.svg from the public folder
//import hand from "../public/hand.svg";
import MainProjects from "@/components/MainProjects";
import MainHeader from "@/components/MainHeader";
import Link from "next/link";

const resources = [
  { name: "Codepen", url: "https://codepen.io", tags: ["Tag", "Tag", "Tag"] },
  { name: "Coolors", url: "https://coolors.co", tags: ["Tag", "Tag", "Tag"] },
  { name: "Can I Use", url: "https://caniuse.com", tags: ["Tag", "Tag", "Tag"] },
  { name: "Font Awesome", url: "https://fontawesome.com", tags: ["Tag", "Tag", "Tag"] },
  { name: "GitHub", url: "https://github.com/", tags: ["code", "dev tools"] },
  { name: "Google Analytics", url: "https://analytics.google.com", tags: ["Tag", "Tag", "Tag"] },
  { name: "Google Fonts", url: "https://fonts.google.com", tags: ["Tag", "Tag", "Tag"] },
  { name: "Krystal UK", url: "https://krystal.uk", tags: ["Tag", "Tag", "Tag"] },
  { name: "LinkedIn", url: "https://linkedin.com", tags: ["Tag", "Tag", "Tag"] },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/", tags: ["docs", "Tag", "Tag"] },
  { name: "Next.js", url: "https://nextjs.org", tags: ["Tag", "Tag", "Tag"] },
  { name: "PageSpeed Insights", url: "https://developers.google.com/speed/pagespeed/insights/", tags: ["Tag", "Tag", "Tag"] },
  { name: "Tailwind CSS", url: "https://tailwindcss.com", tags: ["Tag", "Tag", "Tag"] },
  { name: "W3 Schools", url: "https://w3schools.com", tags: ["docs"] },
  { name: "Wesh", url: "https://wesh.uk", tags: ["Tag", "Tag", "Tag"] },
  { name: "X", url: "https://x.co", tags: ["Tag", "Tag", "Tag"] },
  { name: "YouTube", url: "https://youtube.com", tags: ["Tag", "Tag", "Tag"] },
];



const resourcesSortedByName = resources.sort((a, b) => a.name.localeCompare(b.name));


export default function Home() {
  return (
    <div className="bg-emerald-500/50 text-slate-800">

      <MainHeader />

      <main className="mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center min-h-screen >*:bg-slate-200">
         <h1 className="mb-4 text-sm tracking-wide text-left font-extralight lg:text-2xl lg:mb-6 text-slate-400 mt-12">Dev Resources</h1>
         <div className="resources flex flex-row flex-wrap justify-start border-rose-500 gap-12 w-full pt-16">

          {resourcesSortedByName.map((resource, index) => (
            <Link href={resource.url} key={index} className="resource border border-emerald-950 text-center w-[200px] bg-emerald-950 text-white/80">
              <div className="resource-image aspect-square w-full bg-emerald-700"></div>
              <div className="resource-details gap-y-4 py-2">
                <span className="uppercase py-2 text-sm tracking-widest">{resource.name}</span>
                <div className="resource-tags py-2 flex flex-wrap justify-center gap-2">
                  {resource.tags.map((tag, index) => (
                    <span className="border border-emerald-800 py-1 px-2 rounded-lg tracking-wide text-xs" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <MainFooter />
    </div>
  );
}