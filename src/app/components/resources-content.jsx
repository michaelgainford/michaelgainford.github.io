import Image from "next/image";

/* FULL RESOURCES ARRAY */
const ResourceData = [
  {
    id: 1,
    resourceName: "GitHub",
    resourceUrl: "https://www.github.com",
    resourceDetails:
      "The world's number one code repository. A place for storing all your code and super useful for collaborating with others on projects.",
    resourceTags: ["git", "version control"],
    resourceImage: "/resources-screenshots/screenshot-of-github.png",
    resourceIsFavourite: true,
  },
  {
    id: 2,
    resourceName: "MDN",
    resourceUrl: "https://developer.mozilla.org/en-US/",
    resourceDetails:
      "The Mozilla Developer Network is a great resource for learning about web development. It's also a great place to find code snippets for common tasks.",
    resourceTags: ["docs", "standards"],
    resourceImage: "/mdn-screenshot.png",
  },
  {
    id: 3,
    resourceName: "W3 Schools",
    resourceUrl: "https://www.w3schools.com",
    resourceDetails:
      "A great resource for learning HTML, CSS and JavaScript. It's also a great place to find code snippets for common tasks. My bible when learning web development.",
    resourceTags: ["docs", "tutorials"],
    resourceImage: "/w3-schools-screenshot.png",
  },
  {
    id: 4,
    resourceName: "CSS Tricks",
    resourceUrl: "https://css-tricks.com/",
    resourceDetails: "A great resource for learning CSS.",
    resourceTags: ["css", "docs"],
    resourceImage: "/css-tricks-screenshot.png",
  },
  {
    id: 5,
    resourceName: "CodePen",
    resourceUrl: "https://codepen.io/",
    resourceDetails: "A great place to test out code snippets.",
    resourceTags: ["code", "sandbox"],
    resourceImage: "/codepen-screenshot.png",
  },
  {
    id: 6,
    resourceName: "Stack Overflow",
    resourceUrl: "https://stackoverflow.com/",
    resourceDetails: "A great place to find answers to your coding questions.",
    resourceTags: ["questions", "answers"],
    resourceImage: "/stack-overflow-screenshot.png",
  },
  {
    id: 7,
    resourceName: "Can I Use",
    resourceUrl: "https://caniuse.com/",
    resourceDetails:
      "A great place to find out if a feature is supported by browsers.",
    resourceTags: ["compatibility", "docs"],
    resourceImage: "/can-i-use-screenshot.png",
  },
  {
    id: 8,
    resourceName: "Google Fonts",
    resourceUrl: "https://fonts.google.com/",
    resourceDetails: "A great place to find free fonts.",
    resourceTags: ["fonts"],
    resourceImage: "/google-fonts-screenshot.png",
  },
  {
    id: 9,
    resourceName: "Font Awesome",
    resourceUrl: "https://fontawesome.com/",
    resourceDetails: "A great place to find free icons.",
    resourceTags: ["fonts", "icons"],
    resourceImage: "/font-awesome-screenshot.png",
  },
  {
    id: 10,
    resourceName: "Google Analytics",
    resourceUrl:
      "https://analytics.google.com/analytics/web/provision/#/provision",
    resourceDetails: "Webstats for your website.",
    resourceTags: ["analytics", "site performance"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 11,
    resourceName: "Coolors",
    resourceUrl: "https://coolors.co/",
    resourceDetails: "A great place to find color palettes.",
    resourceTags: ["colours", "design"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 12,
    resourceName: "Web.dev",
    resourceUrl: "https://web.dev/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["docs", "tutorials"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 13,
    resourceName: "Google Lighthouse",
    resourceUrl: "https://developers.google.com/web/tools/lighthouse",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["site performance"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 14,
    resourceName: "Google Search Console",
    resourceUrl: "https://search.google.com/search-console/about",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["site performance"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 15,
    resourceName: "Google PageSpeed Insights",
    resourceUrl: "https://developers.google.com/speed/pagespeed/insights/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["site performance"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 16,
    resourceName: "Free Code Camp",
    resourceUrl: "https://www.freecodecamp.org/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["tutorials"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 17,
    resourceName: "Codecademy",
    resourceUrl: "https://www.codecademy.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["tutorials"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 18,
    resourceName: "Udemy",
    resourceUrl: "https://www.udemy.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["tutorials"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 19,
    resourceName: "Burst",
    resourceUrl: "https://burst.shopify.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["images", "shopify"],
    resourceImage: "/burst-screenshot.png",
  },
  {
    id: 20,
    resourceName: "Unsplash",
    resourceUrl: "https://unsplash.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["images"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 21,
    resourceName: "YouTube",
    resourceUrl: "https://www.youtube.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["tutorials"],
    resourceImage: "/image-placeholder-dark.png",
  },
];

/* FULL ARRAY, SORTED BY NAME */
const resourceDataSortedByName = [...ResourceData].sort((a, b) =>
  a.resourceName > b.resourceName ? 1 : -1
);

/* FULL NEWSLETTERS ARRAY */
const ResourceNewsletterData = [
  {
    id: 1,
    resourceName: "Frontend Focus",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 2,
    resourceName: "CSS Weekly",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 3,
    resourceName: "Web Designer Depot",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 4,
    resourceName: "Smashing Magazine",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/image-placeholder-dark.png",
  },
];

/* FULL NEWSLETTERS ARRAY, SORTED BY NAME */
const resourceNewsletterDataSortedByName = [...ResourceNewsletterData].sort(
  (a, b) => (a.resourceName > b.resourceName ? 1 : -1)
);

/* ARRAY: FAVOURITE RESOURCES */
const bestResources = resourceDataSortedByName.filter(
  (bestResource) => bestResource.resourceIsFavourite === true
);

/* ARRAY: ACCESSIBILITY & COMPATIBILITY */
const bestAccessibilityResources = resourceDataSortedByName.filter(
  (bestAccessibilityResource) =>
    bestAccessibilityResource.resourceTags.includes("accessibility") || bestAccessibilityResource.resourceTags.includes("compatibility")
);

/* ARRAY: ASSETS */
const bestAssetsResources = resourceDataSortedByName.filter(
  (bestAssetsResource) =>
    bestAssetsResource.resourceTags.includes("fonts") ||
    bestAssetsResource.resourceTags.includes("images")
);

/* ARRAY: CSS */
const bestCSSResources = resourceDataSortedByName.filter((bestCSSResource) =>
  bestCSSResource.resourceTags.includes("css")
);

/* ARRAY: DESIGN */
const bestDesignResources = resourceDataSortedByName.filter(
  (bestDesignResource) => bestDesignResource.resourceTags.includes("design") || bestDesignResource.resourceTags.includes("colours")
);

/* ARRAY: IMAGES */
const bestImageResources = resourceDataSortedByName.filter(
  (bestImageResource) => bestImageResource.resourceTags.includes("images")
);

/* ARRAY: SHOPIFY */
const bestShopifyResources = resourceDataSortedByName.filter(
  (bestShopifyResource) => bestShopifyResource.resourceTags.includes("shopify")
);

/* ARRAY: TUTORIALS */
const bestTutorialResources = resourceDataSortedByName.filter(
  (bestTutorialResource) =>
    bestTutorialResource.resourceTags.includes("tutorials")
);


export default function Content() {
  return (
    <div className="content col-start-1 col-span-1 lg:col-start-3 lg:col-span-9">
      <div className="actual-content grid grid-cols-1 gap-4 ">
        {/* START Accessibility & Compatibility */}
        <div className="p-4 mx-2 lg:mx-0 rounded-xl border border-slate-700">
          <details>
            <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 after:content-['>'] after:text-base after:text-slate-400 after:font-light gap-x-2 hover:cursor-pointer">
              <h2 className="text-sm lg:text-lg font-light py-4 text-slate-400 flex justify-start hover:text-slate-200">
                Best sites for: ACCESSIBILITY &amp; COMPATIBILITY
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pt-4">
              {bestAccessibilityResources.map((individualResource) => (
                <div className="resource-link" key={individualResource.id}>
                  <h2 className="text-base font-bold lg:font-medium text-center uppercase text-slate-400">
                    {individualResource.resourceName}
                  </h2>
                  <Image
                    src={individualResource.resourceImage}
                    alt={individualResource.resourceName}
                    width={800}
                    height={600}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3] rounded-lg"
                  />
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                  <div className="tags flex flex-wrap justify-start text-[10px] divide-x divide-red-500">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center border-r border-slate-800 last-of-type:border-none px-1"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
        {/* END Accessibility & Compatibility */}
        {/* START Assets */}
        <div className="p-4 mx-2 lg:mx-0 rounded-xl border border-slate-700 hover:border-slate-400/75">
          <details>
            <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 hover:text-slate-200 after:content-['>'] after:text-base after:text-slate-400 after:font-light gap-x-2">
              <h2 className="text-sm lg:text-lg font-light py-4 flex justify-start hover:text-slate-200">
                Best sites for: ASSETS
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pt-4">
              {bestAssetsResources.map((individualResource) => (
                <div className="resource-link" key={individualResource.id}>
                  <h2 className="text-base font-bold lg:font-medium text-center uppercase text-slate-400">
                    {individualResource.resourceName}
                  </h2>
                  <Image
                    src={individualResource.resourceImage}
                    alt={individualResource.resourceName}
                    width={800}
                    height={600}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3] rounded-lg"
                  />
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                  <div className="tags flex flex-wrap justify-start text-[10px] divide-x divide-red-500">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center border-r border-slate-800 last-of-type:border-none px-1"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
        {/* END Accessibility & Compatibility */}
        {/* START Best CSS */}
        <div className="p-4 mx-2 lg:mx-0 rounded-xl border border-slate-700">
          <details>
            <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 after:content-['>'] after:text-base after:text-slate-400 after:font-light gap-x-2">
              <h2 className="text-sm lg:text-lg font-light py-4 text-slate-400 flex justify-start hover:text-slate-200">
                Best sites for: CSS
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pt-4">
              {bestCSSResources.map((individualResource) => (
                <div className="resource-link" key={individualResource.id}>
                  <h2 className="text-base font-bold lg:font-medium text-center uppercase text-slate-400">
                    {individualResource.resourceName}
                  </h2>
                  <Image
                    src={individualResource.resourceImage}
                    alt={individualResource.resourceName}
                    width={800}
                    height={600}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3] rounded-lg"
                  />
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                  <div className="tags flex flex-wrap justify-start text-[10px] divide-x divide-red-500">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center border-r border-slate-800 last-of-type:border-none px-1"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
        {/* END Best CSS */}
        <div className="p-4 mx-2 lg:mx-0 rounded-xl border border-slate-700">
          <details>
            <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 after:content-['>'] after:text-base after:text-slate-400 after:font-light gap-x-2">
              <h2 className="text-sm lg:text-lg font-light py-4 text-slate-400 flex justify-start hover:text-slate-200">
                Best sites for: DESIGN
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pt-4">
              {bestDesignResources.map((individualResource) => (
                <div className="resource-link" key={individualResource.id}>
                  <h2 className="text-base font-bold lg:font-medium text-center uppercase text-slate-400">
                    {individualResource.resourceName}
                  </h2>
                  <Image
                    src={individualResource.resourceImage}
                    alt={individualResource.resourceName}
                    width={800}
                    height={600}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3] rounded-lg"
                  />
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                  <div className="tags flex flex-wrap justify-start text-[10px] divide-x divide-red-500">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center border-r border-slate-800 last-of-type:border-none px-1"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
        <div className="p-4 mx-2 lg:mx-0 rounded-xl border border-slate-700">
          <details>
            <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 after:content-['>'] after:text-base after:text-slate-400 after:font-light gap-x-2">
              <h2 className="text-sm lg:text-lg font-light py-4 text-slate-400 flex justify-start hover:text-slate-200">
                Best sites for: IMAGES
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pt-4">
              {bestImageResources.map((individualResource) => (
                <div className="resource-link" key={individualResource.id}>
                  <h2 className="text-base font-bold lg:font-medium text-center uppercase text-slate-400">
                    {individualResource.resourceName}
                  </h2>
                  <Image
                    src={individualResource.resourceImage}
                    alt={individualResource.resourceName}
                    width={800}
                    height={600}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3] rounded-lg"
                  />
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                  <div className="tags flex flex-wrap justify-start text-[10px] divide-x divide-red-500">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center border-r border-slate-800 last-of-type:border-none px-1"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
        <div className="p-4 mx-2 lg:mx-0 rounded-xl border border-slate-700">
          <details>
            <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 after:content-['>'] after:text-base after:text-slate-400 after:font-light gap-x-2">
              <h2 className="text-sm lg:text-lg font-light py-4 text-slate-400 flex justify-start hover:text-slate-200">
                Best sites for: SHOPIFY
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pt-4">
              {bestShopifyResources.map((individualResource) => (
                <div className="resource-link" key={individualResource.id}>
                  <h2 className="text-base font-bold lg:font-medium text-center uppercase text-slate-400">
                    {individualResource.resourceName}
                  </h2>
                  <Image
                    src={individualResource.resourceImage}
                    alt={individualResource.resourceName}
                    width={800}
                    height={600}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3] rounded-lg"
                  />
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                  <div className="tags flex flex-wrap justify-start text-[10px] divide-x divide-red-500">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center border-r border-slate-800 last-of-type:border-none px-1"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
        <div className="p-4 mx-2 lg:mx-0 rounded-xl border border-slate-700">
          <details>
            <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 after:content-['>'] after:text-base after:text-slate-400 after:font-light gap-x-2">
              <h2 className="text-sm lg:text-lg font-light py-4 text-slate-400 flex justify-start hover:text-slate-200">
                Best sites for: TUTORIALS
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pt-4">
              {bestTutorialResources.map((individualResource) => (
                <div className="resource-link" key={individualResource.id}>
                  <h2 className="text-base font-bold lg:font-medium text-center uppercase text-slate-400">
                    {individualResource.resourceName}
                  </h2>
                  <Image
                    src={individualResource.resourceImage}
                    alt={individualResource.resourceName}
                    width={800}
                    height={600}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3] rounded-lg"
                  />
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                  <div className="tags flex flex-wrap justify-start text-[10px] divide-x divide-red-500">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center border-r border-slate-800 last-of-type:border-none px-1"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
        <div className="p-4 mx-2 lg:mx-0 rounded-xl border border-slate-700">
          <details>
            <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 after:content-['>'] after:text-base after:text-slate-400 after:font-light gap-x-2">
              <h2 className="text-sm lg:text-lg font-light py-4 text-slate-400 flex justify-start">
                Newsletters
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pt-4">
              {resourceNewsletterDataSortedByName.map((individualResource) => (
                <div className="resource-link" key={individualResource.id}>
                  <h2 className="text-base font-bold lg:font-medium text-center uppercase text-slate-400">
                    {individualResource.resourceName}
                  </h2>
                  <Image
                    src={individualResource.resourceImage}
                    alt={individualResource.resourceName}
                    width={800}
                    height={600}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3] rounded-lg"
                  />
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
