const ResourceData = [
  {
    id: 1,
    resourceName: "GitHub",
    resourceUrl: "https://www.github.com",
    resourceDetails:
      "The world's number one code repository. A place for storing all your code and super useful for collaborating with others on projects.",
    resourceTags: ["git", "version control", "code"],
  },
  {
    id: 2,
    resourceName: "MDN",
    resourceUrl: "https://mdn.dev",
    resourceTags: ["docs", "web dev"],
  },
  {
    id: 3,
    resourceName: "W3 Schools",
    resourceUrl: "https://www.w3schools.com",
    resourceDetails:
      "A great resource for learning HTML, CSS and JavaScript. It's also a great place to find code snippets for common tasks. My bible when learning web development.",
    resourceTags: ["docs", "web dev"],
  },
  {
    id: 4,
    resourceName: "CSS Tricks",
    resourceUrl: "https://css-tricks.com/",
    resourceTags: ["css", "docs", "web dev"],
  },
  {
    id: 5,
    resourceName: "CodePen",
    resourceUrl: "https://codepen.io/",
    resourceTags: ["code", "web dev"],
  },
  {
    id: 6,
    resourceName: "Stack Overflow",
    resourceUrl: "https://stackoverflow.com/",
    resourceTags: ["code", "web dev"],
  },
  {
    id: 7,
    resourceName: "Can I Use",
    resourceUrl: "https://caniuse.com/",
    resourceTags: ["code", "web dev"],
  },
  {
    id: 8,
    resourceName: "Google Fonts",
    resourceUrl: "https://fonts.google.com/",
    resourceTags: ["fonts", "web dev"],
  },
  {
    id: 9,
    resourceName: "Font Awesome",
    resourceUrl: "https://fontawesome.com/",
    resourceTags: ["fonts", "web dev"],
  },
  {
    id: 10,
    resourceName: "Google Analytics",
    resourceUrl: "https://analytics.google.com/",
    resourceTags: ["analytics", "web dev"],
  },
  {
    id: 11,
    resourceName: "Coolors",
    resourceUrl: "https://coolors.co/",
    resourceTags: ["colors", "web dev"],
  },
  {
    id: 12,
    resourceName: "Web.dev",
    resourceUrl: "https://web.dev/",
    resourceTags: ["web dev"],
  },
  {
    id: 13,
    resourceName: "Google Lighthouse",
    resourceUrl: "https://developers.google.com/web/tools/lighthouse",
    resourceTags: ["web dev"],
  },
  {
    id: 14,
    resourceName: "Google Search Console",
    resourceUrl: "https://search.google.com/search-console/about",
    resourceTags: ["web dev"],
  },
  {
    id: 15,
    resourceName: "Google PageSpeed Insights",
    resourceUrl: "https://developers.google.com/speed/pagespeed/insights/",
    resourceTags: ["web dev"],
  },
  {
    id: 16,
    resourceName: "Free Code Camp",
    resourceUrl: "https://www.freecodecamp.org/",
    resourceTags: ["code", "web dev"],
  },
  {
    id: 17,
    resourceName: "Codecademy",
    resourceUrl: "https://www.codecademy.com/",
    resourceTags: ["code", "web dev"],
  },
  {
    id: 18,
    resourceName: "Udemy",
    resourceUrl: "https://www.udemy.com/",
    resourceTags: ["code", "web dev"],
  },
  {
    id: 19,
    resourceName: "Burst",
    resourceUrl: "https://burst.shopify.com/",
    resourceTags: ["images", "web dev"],
  },
  {
    id: 20,
    resourceName: "Unsplash",
    resourceUrl: "https://unsplash.com/",
    resourceTags: ["images", "web dev"],
  },
];

const ResourceNewsletterData = [
  {
    id: 1,
    resourceName: "Frontend Focus",
    resourceUrl: "https://google.co.uk",
  },
  {
    id: 2,
    resourceName: "CSS Weekly",
    resourceUrl: "https://google.co.uk",
  },
  {
    id: 3,
    resourceName: "Web Designer Depot",
    resourceUrl: "https://google.co.uk",
  },
  {
    id: 4,
    resourceName: "Smashing Magazine",
    resourceUrl: "https://google.co.uk",
  },
];

export default function Content() {
  return (
    <div className="content col-start-1 col-span-1 lg:col-start-3 lg:col-span-10">
      <div className="actual-content">
        <div className="mb-16 p-4 lg:p-8 border mx-2 lg:mx-0 border-slate-800 rounded-xl">
          <h2 className="text-base lg:text-xl w-full border-b border-slate-700 mb-4 py-4 text-slate-400">Websites &amp; Apps</h2>
          <div className="resource-links auto-rows-fr grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8">
            {ResourceData.map((individualResource) => (
              <div className="resource-link" key={individualResource.id}>
                <h2 className="text-lg lg:text-2xl font-bold lg:font-medium text-center uppercase text-slate-400">
                  {individualResource.resourceName}
                </h2>

                <a
                  className="btn border border-slate-700 p-2 rounded-lg"
                  href={individualResource.resourceUrl}
                >
                  Visit site
                </a>

                <details className="hidden lg:block w-full hover:cursor-pointer">
                  <summary className="text-[10px] pb-2 lowercase flex flex-col items-center">
                    About {individualResource.resourceName}
                  </summary>
                  <p className="text-xs py-4">
                    {individualResource.resourceDetails}
                  </p>
                  <div className="tags flex flex-wrap gap-2 justify-start mt-4 border-t border-slate-600">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center px-2 py-1 rounded-md border border-gray-700"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl py-4">Newsletters</h2>
          <div className="resource-links grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8">
            {ResourceNewsletterData.map((individualNewsletterResource) => (
              <a
                className="resource-link flex flex-col gap-4 border border-gray-700 justify-between"
                key={individualNewsletterResource.id}
                href={individualNewsletterResource.resourceUrl}
              >
                <h2 className="text-lg lg:text-xl font-bold lg:font-light text-center">
                  {individualNewsletterResource.resourceName}
                </h2>

                <details className="w-full px-4">
                  <summary className="text-[10px] pb-2 uppercase flex flex-col items-center border-b border-gray-700">
                    About {individualNewsletterResource.resourceName}
                  </summary>
                  <p className="text-xs py-4">
                    {individualNewsletterResource.resourceDetails}
                  </p>
                </details>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
