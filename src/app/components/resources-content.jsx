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
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 2,
    resourceName: "MDN",
    resourceUrl: "https://developer.mozilla.org/en-US/",
    resourceDetails:
      "The Mozilla Developer Network is a great resource for learning about web development. It's also a great place to find code snippets for common tasks.",
    resourceTags: ["docs", "standards"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 3,
    resourceName: "W3 Schools",
    resourceUrl: "https://www.w3schools.com",
    resourceDetails:
      "A great resource for learning HTML, CSS and JavaScript. It's also a great place to find code snippets for common tasks. My bible when learning web development.",
    resourceTags: ["docs", "tutorials"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 4,
    resourceName: "CSS Tricks",
    resourceUrl: "https://css-tricks.com/",
    resourceDetails: "A great resource for learning CSS.",
    resourceTags: ["css", "docs"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: false,
  },
  {
    id: 5,
    resourceName: "CodePen",
    resourceUrl: "https://codepen.io/",
    resourceDetails: "A great place to test out code snippets.",
    resourceTags: ["code", "sandbox"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 6,
    resourceName: "Stack Overflow",
    resourceUrl: "https://stackoverflow.com/",
    resourceDetails: "A great place to find answers to your coding questions.",
    resourceTags: ["questions", "answers"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: false,
  },
  {
    id: 7,
    resourceName: "Can I Use",
    resourceUrl: "https://caniuse.com/",
    resourceDetails:
      "A great place to find out if a feature is supported by browsers.",
    resourceTags: ["compatibility", "docs"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 8,
    resourceName: "Google Fonts",
    resourceUrl: "https://fonts.google.com/",
    resourceDetails: "A great place to find free fonts.",
    resourceTags: ["fonts"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 9,
    resourceName: "Font Awesome",
    resourceUrl: "https://fontawesome.com/",
    resourceDetails: "A great place to find free icons.",
    resourceTags: ["fonts", "icons"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 10,
    resourceName: "Google Analytics",
    resourceUrl:
      "https://analytics.google.com/analytics/web/provision/#/provision",
    resourceDetails: "Webstats for your website.",
    resourceTags: ["analytics", "site performance"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: false,
  },
  {
    id: 11,
    resourceName: "Coolors",
    resourceUrl: "https://coolors.co/",
    resourceDetails: "A great place to find color palettes.",
    resourceTags: ["colours", "design"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 12,
    resourceName: "Web.dev",
    resourceUrl: "https://web.dev/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["docs", "tutorials"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 13,
    resourceName: "Google Lighthouse",
    resourceUrl: "https://developers.google.com/web/tools/lighthouse",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["site performance"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: false,
  },
  {
    id: 14,
    resourceName: "Google Search Console",
    resourceUrl: "https://search.google.com/search-console/about",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["site performance"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: false,
  },
  {
    id: 15,
    resourceName: "Google PageSpeed Insights",
    resourceUrl: "https://developers.google.com/speed/pagespeed/insights/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["site performance"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 16,
    resourceName: "Free Code Camp",
    resourceUrl: "https://www.freecodecamp.org/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["tutorials"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 17,
    resourceName: "Codecademy",
    resourceUrl: "https://www.codecademy.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["tutorials"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 18,
    resourceName: "Udemy",
    resourceUrl: "https://www.udemy.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["tutorials"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 19,
    resourceName: "Burst",
    resourceUrl: "https://burst.shopify.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["images", "shopify"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 20,
    resourceName: "Unsplash",
    resourceUrl: "https://unsplash.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["images"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
  },
  {
    id: 21,
    resourceName: "YouTube",
    resourceUrl: "https://www.youtube.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["tutorials"],
    resourceImage: "/image-placeholder-dark.png",
    resourceIsFavourite: true,
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
    resourceUrl: "https://www.webdesignerdepot.com/",
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 4,
    resourceName: "Smashing Magazine",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 5,
    resourceName: "Dev Tips",
    resourceUrl: "https://umaar.com/dev-tips/",
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

/* ARRAY: Categories */
const resourceCategories = [
  {
    id: 1,
    resourceCategoryName: "Accessibility & Compatibility",
    resourceCategoryData: bestAccessibilityResources,
  },
  {
    id: 2,
    resourceCategoryName: "Assets",
    resourceCategoryData: bestAssetsResources,
  },
  {
    id: 3,
    resourceCategoryName: "CSS",
    resourceCategoryData: bestCSSResources,
  },
  {
    id: 4,
    resourceCategoryName: "Design",
    resourceCategoryData: bestDesignResources,
  },
  {
    id: 5,
    resourceCategoryName: "Images",
    resourceCategoryData: bestImageResources,
  },
  {
    id: 6,
    resourceCategoryName: "Shopify",
    resourceCategoryData: bestShopifyResources,
  },
  {
    id: 7,
    resourceCategoryName: "Tutorials",
    resourceCategoryData: bestTutorialResources,
  },
];
/* FULL ARRAY, SORTED BY NAME */
const resourceCategoriesSortedByName = [...resourceCategories].sort((a, b) =>
  a.resourceCategoryName > b.resourceCategoryName ? 1 : -1
);

export default function Content() {
  return (
    <div className="content col-start-1 col-span-1 lg:col-start-3 lg:col-span-9">
      <div className="actual-content grid grid-cols-1 gap-4 lg:gap-8 xl:gap-12">

        {/* START Categories */}
        {resourceCategoriesSortedByName.map((resourceCategory) => (
          <div className="resource-link-container mx-2 lg:mx-0 rounded-xl border border-slate-700" key={resourceCategory.id}>
            <details className="p-4 rounded-xl">
              <summary className="flex justify-start items-center justify-items-start text-sm font-bold text-slate-400 after:content-['>'] after:text-slate-400 after:font-light after:text-2xl gap-x-2 hover:cursor-pointer">
                <h2 className="text-base lg:text-xl font-light py-4 text-slate-400 flex justify-start items-center hover:text-slate-200">
                  Best sites for: {resourceCategory.resourceCategoryName}
                </h2>
              </summary>
              <div className="resource-links auto-rows-fr grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-8 lg:pt-4">
                {resourceCategory.resourceCategoryData.map((resource) => (
                  <div className="resource-link " key={resource.id}>
                    <a className="flex flex-col items-center justify-between rounded-xl pb-4 gap-4 text-gray-100 lg:text-gray-400 lg:hover:text-gray-100 transition-all duration-300 ease-in-out hover:drop-shadow-sm w-full hover:bg-red-950" href={resource.resourceUrl} target="_blank" rel="noreferrer">
                    <div className="resource-link-image">
                      <Image
                        src={resource.resourceImage}
                        alt={resource.resourceName}
                        width={800}
                        height={600}
                        className="lg:grayscale lg:hover:grayscale-0 transition-all duration-300 ease-in-out aspect-[4/3]"
                      />
                    </div>
                    <div className="resource-link-details pb-4 flex flex-col w-full gap-2">
                      <h3 className="text-sm lg:text-lg font-light">
                        {resource.resourceName}
                      </h3>
                      <div className="tags">
                        {resource.resourceTags.map((tag) => (
                          <span
                            className="text-[10px] bg-slate-700 rounded-lg px-2 py-1 mr-2"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    </a>
                  </div>
                ))}      
              </div>
            </details>
          </div>
        ))}
        {/* END Categories */}
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
                  <a
                    className="btn border border-slate-700 px-4 py-2 rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-fit text-center"
                    href={individualResource.resourceUrl}
                  >
                    Sign Up
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
