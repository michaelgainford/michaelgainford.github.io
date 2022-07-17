import imageW3Schools from "../assets/images__resources/w3-schools-logo.png";
import imageCodepen from "../assets/images__resources/codepen-logo.png";
import imageFontAwesome from "../assets/images__resources/font-awesome-logo.png";
import imageFreeCodeCamp from "../assets/images__resources/free-code-camp-logo.png";
import imageGitHub from "../assets/images__resources/github-logo.png";
import imageGoogleFonts from "../assets/images__resources/google-fonts-logo.png";
import imageMDN from "../assets/images__resources/mdn-logo.png";
import imageTwitter from "../assets/images__resources/twitter-logo.png";
import imageReactJS from "../assets/images__resources/react-js-logo.png";
import imageYouTube from "../assets/images__resources/youtube-logo.png";
import imageLinkedIn from "../assets/images__resources/linkedin.png";
import imageGoogleAnalytics from "../assets/images__resources/google-analytics-logo.png";
import imageGoogleDomains from "../assets/images__resources/google-domains-logo.png";

const MyResourcesCollection = () => {
  const myResourcesCollectionInfo = [
    {
      id: 1,
      resourceName: "W3 Schools",
      resourceSlug: "w3-schools",
      resourceUrl: "https://www.w3schools.com/",
      resourceImage: imageW3Schools,
      resourceTags: ["code", "tutorials"],
    },
    {
      id: 2,
      resourceName: "Codepen",
      resourceSlug: "codepen",
      resourceUrl: "https://codepen.io/",
      resourceImage: imageCodepen,
      resourceTags: ["code"],
    },
    {
      id: 3,
      resourceName: "Font Awesome",
      resourceSlug: "font-awesome",
      resourceUrl: "https://fontawesome.com/",
      resourceImage: imageFontAwesome,
      resourceTags: ["icons"],
    },
    {
      id: 4,
      resourceName: "Free Code Camp",
      resouceSlug: "free-code-camp",
      resourceUrl: "https://www.freecodecamp.org/",
      resourceImage: imageFreeCodeCamp,
      resourceTags: ["code", "tutorials"],
    },
    {
      id: 5,
      resourceName: "GitHub",
      resouceSlug: "github",
      resourceUrl: "https://github.com/",
      resourceImage: imageGitHub,
      resourceTags: ["code", "repo"],
    },
    {
      id: 6,
      resourceName: "Google Fonts",
      resouceSlug: "google-fonts",
      resourceUrl: "https://fonts.google.com/",
      resourceImage: imageGoogleFonts,
      resourceTags: ["code", "fonts"],
    },
    {
      id: 7,
      resourceName: "MDN",
      resouceSlug: "mdn",
      resourceUrl: "https://developer.mozilla.org/en-US/",
      resourceImage: imageMDN,
      resourceTags: ["code", "docs"],
    },
    {
      id: 8,
      resourceName: "Twitter",
      resouceSlug: "twitter",
      resourceUrl: "https://twitter.com/",
      resourceImage: imageTwitter,
      resourceTags: ["code", "tutorials", "networking"],
    },
    {
      id: 9,
      resourceName: "ReactJS",
      resouceSlug: "react-js",
      resourceUrl: "https://reactjs.org",
      resourceImage: imageReactJS,
      resourceTags: ["code", "tutorials", "react", "docs"],
    },
    {
      id: 10,
      resourceName: "YouTube",
      resouceSlug: "youtube",
      resourceUrl: "https://youtube.com",
      resourceImage: imageYouTube,
      resourceTags: ["tutorials", "react", "docs"],
    },
    {
      id: 11,
      resourceName: "LinkedIn",
      resouceSlug: "linkedin",
      resourceUrl: "https://linkedin.com",
      resourceImage: imageLinkedIn,
      resourceTags: ["networking", "work"],
    },
    {
      id: 12,
      resourceName: "Google Analytics",
      resouceSlug: "google-analytics",
      resourceUrl: "https://analytics.google.com",
      resourceImage: imageGoogleAnalytics,
      resourceTags: ["webmaster"],
    },
    {
      id: 13,
      resourceName: "Google Domains",
      resouceSlug: "google-domains",
      resourceUrl: "https://domains.google.com",
      resourceImage: imageGoogleDomains,
      resourceTags: ["webmaster"],
    },    
  ];
  return (
    <div className="resource-collection w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16 px-8 md:px-0">
      {Object.values(myResourcesCollectionInfo).map((myResource) => {
        return (
          <div
            key={myResource.id}
            className="resource flex flex-col w-full justify-start items-center gap-4 mb-8 md:mb-2 mx-auto"
          >
            <a
              href={myResource.resourceUrl}
              className="w-full flex flex-col md:grayscale hover:grayscale-0 Sitems-center bg-theme hover:bg-theme-alt border-2 border-theme-alt rounded-2xl duration-500 transition ease-in-out text-highlight pb-8 lg:pb-0"
            >
              <div className="resource-name w-full">
                <h2 className="p-4 w-full text-center text-sm text-light md:text-highlight uppercase border-b-2 border-theme-alt tracking-normal">
                  {myResource.resourceName}
                </h2>
              </div>
              <div className="resource-image p-8">
                <img
                  src={myResource.resourceImage}
                  alt={myResource.resourceName}
                  className="h-20 w-20 hover:h-24 hover:w-24 mx-auto ease-in-out transition-all duration-500"
                />
              </div>
            </a>
            <div className="text-xs">
              <p className="text-theme-tint flex flex-wrap justify-center items-start h-full">
                {Object.values(myResource.resourceTags).map((resourceTag) => {
                  return (
                    <span className="p-2 border inline-flex items-center justify-center flex-row flex-wrap border-theme-alt text-[10px] hover:text-sm transition-all duration-300 ease-in-out rounded text-light bg-theme mx-2 hover:bg-highlight hover:text-theme">
                      {resourceTag}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default MyResourcesCollection;
