import Image from "next/image";

const ResourceData = [
  {
    id: 1,
    resourceName: "GitHub",
    resourceUrl: "https://www.github.com",
    resourceDetails:
      "The world's number one code repository. A place for storing all your code and super useful for collaborating with others on projects.",
    resourceTags: ["git", "version control"],
    resourceImage: "/resources-screenshots/screenshot-of-github.png",
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
    resourceTags: ["analytics", "web dev"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 11,
    resourceName: "Coolors",
    resourceUrl: "https://coolors.co/",
    resourceDetails: "A great place to find color palettes.",
    resourceTags: ["colors", "design"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 12,
    resourceName: "Web.dev",
    resourceUrl: "https://web.dev/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["web dev"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 13,
    resourceName: "Google Lighthouse",
    resourceUrl: "https://developers.google.com/web/tools/lighthouse",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["web dev"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 14,
    resourceName: "Google Search Console",
    resourceUrl: "https://search.google.com/search-console/about",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["web dev"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 15,
    resourceName: "Google PageSpeed Insights",
    resourceUrl: "https://developers.google.com/speed/pagespeed/insights/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["web dev"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 16,
    resourceName: "Free Code Camp",
    resourceUrl: "https://www.freecodecamp.org/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["code", "web dev"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 17,
    resourceName: "Codecademy",
    resourceUrl: "https://www.codecademy.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["code", "web dev"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 18,
    resourceName: "Udemy",
    resourceUrl: "https://www.udemy.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["code", "web dev"],
    resourceImage: "/image-placeholder-dark.png",
  },
  {
    id: 19,
    resourceName: "Burst",
    resourceUrl: "https://burst.shopify.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["images", "web dev"],
    resourceImage: "/burst-screenshot.png",
  },
  {
    id: 20,
    resourceName: "Unsplash",
    resourceUrl: "https://unsplash.com/",
    resourceDetails: "A great place to find web development resources.",
    resourceTags: ["images", "web dev"],
    resourceImage: "/image-placeholder-dark.png",
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
        <div className="mb-16 p-4 lg:px-4 lg:py-8 mx-2 lg:mx-0 rounded-xl">
          <details open>
            <summary className="flex justify-start items-center justify-items-start text-2xl lg:text-4xl font-bold text-slate-400 after:content-['>'] after:text-base after:text-slate-400 gap-x-2">
              <h2 className="text-base lg:text-lg w-full border-b border-slate-800 py-4 text-slate-400 flex justify-start">
                Top Websites &amp; Apps
              </h2>
            </summary>
            <div className="resource-links auto-rows-fr grid sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
              {ResourceData.map((individualResource) => (
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
                    className="btn border-b border-slate-700 p-2 hover:rounded-lg hover:bg-white text-xs hover:text-slate-900 transition-all duration-300 ease-in-out w-full max-w-[200px] text-center"
                    href={individualResource.resourceUrl}
                  >
                    Visit site
                  </a>
                  <div className="tags flex flex-wrap gap-2 justify-start text-[10px]">
                    {individualResource.resourceTags.map((tag) => (
                      <span
                        className="tag text-[10px] text-center px-2 py-1 rounded-md border border-gray-700"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <details className="hidden lg:block w-full hover:cursor-pointer">
                    <summary className="text-[10px] pb-2 lowercase flex flex-col items-center text-cente italic">
                      About {individualResource.resourceName}
                    </summary>
                    <p className="text-xs py-4">
                      {individualResource.resourceDetails}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </details>
        </div>

        <div>
          <details>
            <summary className="flex text-2xl lg:text-4xl font-bold text-slate-400">
              <h2 className="text-base lg:text-xl w-full border-b border-slate-700 mb-4 py-4 text-slate-400">
                Newsletters
              </h2>
            </summary>

            <div className="resource-links grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8">
              {ResourceNewsletterData.map((individualNewsletterResource) => (
                <a
                  className="resource-link flex flex-col gap-4 border border-gray-700 justify-between"
                  key={individualNewsletterResource.id}
                  href={individualNewsletterResource.resourceUrl}
                >
                  <Image
                    src={individualNewsletterResource.resourceImage}
                    alt={individualNewsletterResource.resourceName}
                    width={100}
                    height={100}
                  />
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
          </details>
        </div>

        <div>
          <details>
            <summary className="flex text-2xl lg:text-4xl font-bold text-slate-400">
              <h2 className="text-base lg:text-xl w-full border-b border-slate-700 mb-4 py-4 text-slate-400">
                Newsletters
              </h2>
            </summary>

            <div className="resource-links grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8">
              {ResourceNewsletterData.map((individualNewsletterResource) => (
                <a
                  className="resource-link flex flex-col gap-4 border border-gray-700 justify-between"
                  key={individualNewsletterResource.id}
                  href={individualNewsletterResource.resourceUrl}
                >
                  <Image
                    src={individualNewsletterResource.resourceImage}
                    alt={individualNewsletterResource.resourceName}
                    width={100}
                    height={100}
                  />
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
          </details>
        </div>

        <div>
          <details>
            <summary className="flex text-2xl lg:text-4xl font-bold text-slate-400">
              <h2 className="text-base lg:text-xl w-full border-b border-slate-700 mb-4 py-4 text-slate-400">
                Newsletters
              </h2>
            </summary>

            <div className="resource-links grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8">
              {ResourceNewsletterData.map((individualNewsletterResource) => (
                <a
                  className="resource-link flex flex-col gap-4 border border-gray-700 justify-between"
                  key={individualNewsletterResource.id}
                  href={individualNewsletterResource.resourceUrl}
                >
                  <Image
                    src={individualNewsletterResource.resourceImage}
                    alt={individualNewsletterResource.resourceName}
                    width={100}
                    height={100}
                  />
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
          </details>
        </div>

        <div>
          <details>
            <summary className="flex text-2xl lg:text-4xl font-bold text-slate-400">
              <h2 className="text-base lg:text-xl w-full border-b border-slate-700 mb-4 py-4 text-slate-400">
                Newsletters
              </h2>
            </summary>

            <div className="resource-links grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8">
              {ResourceNewsletterData.map((individualNewsletterResource) => (
                <a
                  className="resource-link flex flex-col gap-4 border border-gray-700 justify-between"
                  key={individualNewsletterResource.id}
                  href={individualNewsletterResource.resourceUrl}
                >
                  <Image
                    src={individualNewsletterResource.resourceImage}
                    alt={individualNewsletterResource.resourceName}
                    width={100}
                    height={100}
                  />
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
          </details>
        </div>
      </div>
    </div>
  );
}
