//import Image from "next/image";
import MainNav from "@/components/MainNav";
import MainLogo from "@/components/MainLogo";
import MainFooter from "@/components/MainFooter";
// import hand.svg from the public folder
//import hand from "../public/hand.svg";
import MainProjects from "@/components/MainProjects";
import MainHeader from "@/components/MainHeader";
import Link from "next/link";
import H1Span from "@/components/typography/H1Span";
import Image from "next/image";

const resources = [
  { name: "Codepen", url: "https://codepen.io", image: "codepen", tags: ["code", "sandbox"] },
  { name: "Coolors", url: "https://coolors.co", image: "coolors", tags: ["colours", "design"] },
  { name: "Can I Use", url: "https://caniuse.com", image: "can-i-use", tags: ["web dev", "browsers"] },
  { name: "Font Awesome", url: "https://fontawesome.com", image: "font-awesome", tags: ["typography", "icons"] },
  { name: "GitHub", url: "https://github.com/", image: "github", tags: ["code", "dev tools"] },
  { name: "Google Analytics", url: "https://analytics.google.com", image: "google-analytics", tags: ["analytics"] },
  { name: "Google Fonts", url: "https://fonts.google.com", image: "google-fonts", tags: ["typography"] },
  { name: "Krystal UK", url: "https://krystal.uk", image: "krystal", tags: ["hosting", "domains"] },
  { name: "LinkedIn", url: "https://linkedin.com", image: "linkedin", tags: ["networking", "social", "jobs"] },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/", image: "mdn-docs", tags: ["docs", "web dev"] },
  { name: "Next.js", url: "https://nextjs.org", image: "nextjs", tags: ["js", "react"] },
  { name: "PageSpeed Insights", url: "https://developers.google.com/speed/pagespeed/insights/", image: "google-analytics", tags: ["analytics"] },
  { name: "Tailwind CSS", url: "https://tailwindcss.com", image: "tailwind-css", tags: ["css"] },
  { name: "W3 Schools", url: "https://w3schools.com", image: "w3-schools", tags: ["docs", "tutorials"] },
  { name: "Wesh", url: "https://wesh.uk", image: "wesh-uk", tags: ["hosting", "domains"] },
  { name: "X", url: "https://x.co", image: "x", tags: ["networking", "social"] },
  { name: "YouTube", url: "https://youtube.com", image: "youtube", tags: ["social", "tutorials"] },
];



const resourcesSortedByName = resources.sort((a, b) => a.name.localeCompare(b.name));


export default function Home() {
  return (
    <div className="bg-teal-900/80 text-slate-200">

      <MainHeader />

      <main className="mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center min-h-screen >*:bg-slate-200">
         <h1 className="mb-4 text-sm tracking-wide text-left font-extralight lg:text-2xl lg:mb-6 text-slate-400 mt-12">Dev Resources</h1>
         <div className="resources grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 border-rose-500 gap-x-4 gap-y-8 md:gap-8 lg:gap-12 w-full pt-16">

          {resourcesSortedByName.map((resource, index) => (
            <Link target="_blank" href={resource.url} key={index} className="resource border border-emerald-950 text-center bg-emerald-950 text-white/80 rounded-lg group">
              <div className="resource-image aspect-square w-full bg-teal-700 rounded-t-lg">
                <Image src={`/resource-screenshots/screenshot-of-${resource.image}.png`} alt={resource.name} width={250} height={200} className="object-cover w-full h-full rounded-t-lg lg:opacity-50 group-hover:opacity-100 transition" />
              </div>
              <div className="resource-details gap-y-4 py-2">
                <span className="uppercase py-2 text-xs lg:text-sm tracking-widest">{resource.name}</span>
                <div className="resource-tags p-2 flex flex-wrap justify-center gap-2">
                  {resource.tags.map((tag, index) => (
                    <span className="border border-emerald-800 py-1 px-2 rounded-lg tracking-wide text-[10px]" key={index}>{tag}</span>
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