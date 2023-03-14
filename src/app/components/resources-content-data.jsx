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
    resourceTags: ["images", "shopify"],
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

const resourceDataSortedByName = [...ResourceData].sort((a, b) =>
  a.resourceName > b.resourceName ? 1 : -1
);

const ResourceNewsletterData = [
  {
    id: 1,
    resourceName: "Frontend Focus",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/resources-screenshots/screenshot-of-github.png",
  },
  {
    id: 2,
    resourceName: "CSS Weekly",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/resources-screenshots/screenshot-of-github.png",
  },
  {
    id: 3,
    resourceName: "Web Designer Depot",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/resources-screenshots/screenshot-of-github.png",
  },
  {
    id: 4,
    resourceName: "Smashing Magazine",
    resourceUrl: "https://google.co.uk",
    resourceImage: "/resources-screenshots/screenshot-of-github.png",
  },
];

const resourceNewsletterDataSortedByName = [...ResourceNewsletterData].sort(
  (a, b) => (a.resourceName > b.resourceName ? 1 : -1)
);
const bestResources = resourceDataSortedByName.filter(
  (bestResource) => bestResource.resourceIsFavourite === true
);
const bestAccessibilityResources = resourceDataSortedByName.filter(
  (bestAccessibilityResource) => bestAccessibilityResource.resourceTags.includes("accessibility")
);

const bestCSSResources = resourceDataSortedByName.filter((bestCSSResource) =>
  bestCSSResource.resourceTags.includes("css")
);

const bestImageResources = resourceDataSortedByName.filter(
  (bestImageResource) => bestImageResource.resourceTags.includes("images")
);

const bestDesignResources = resourceDataSortedByName.filter(
  (bestDesignResource) => bestDesignResource.resourceTags.includes("design")
);

const bestShopifyResources = resourceDataSortedByName.filter(
  (bestShopifyResource) => bestShopifyResource.resourceTags.includes("shopify")
);
