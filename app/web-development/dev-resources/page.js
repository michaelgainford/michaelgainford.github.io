//import Image from "next/image";
import Link from "next/link";
import MainHeader from "@/components/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
const mainStyles = "mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center";

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
  { name: "SVG Repo", url: "https://svgrepo.com", image: "template", tags: ["icons", "svg"] },
  { name: "HTML5 Doctor", url: "http://html5doctor.com", image: "html5-doctor", tags: ["html", "docs"] },
  { name: "CSS Tricks", url: "https://css-tricks.com", image: "css-tricks", tags: ["css", "tutorials"] },
  { name: "CSS Stats", url: "https://cssstats.com", image: "css-stats", tags: ["css", "analytics"] },
  { name: "WebAIM", url: "https://webaim.org", image: "webaim", tags: ["accessibility", "web dev"] },
];

const resourcesSortedByName = resources.sort((a, b) => a.name.localeCompare(b.name));

export default function Home() {
  return (
    <div className="bg-teal-900/80 text-slate-300">

      <MainHeader />

      <main className={mainStyles}>
         <H1 text="Dev Resources" />
         <div className="grid w-full grid-cols-2 pt-4 sm:pt-6 lg:pt-16 resources md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 border-rose-500 gap-x-4 gap-y-8 md:gap-8 lg:gap-12">

          {resourcesSortedByName.map((resource, index) => (
            <Link target="_blank" href={resource.url} key={index} className="text-center border rounded-lg resource border-emerald-950 bg-emerald-950 hover:bg-emerald-800 text-white/80 group">
              <div className="hidden w-full bg-teal-700 rounded-t-lg resource-image aspect-square">
                {/* <Image src={`/resource-screenshots/screenshot-of-${resource.image}.png`} alt={resource.name} width={250} height={200} className="object-cover w-full h-full transition rounded-t-lg lg:opacity-20 group-hover:opacity-100" /> */}
              </div>
              <div className="py-2 resource-details gap-y-4">
                <span className="py-2 text-xs tracking-widest uppercase lg:text-sm">{resource.name}</span>
                <div className="flex flex-wrap justify-center gap-2 p-2 resource-tags">
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