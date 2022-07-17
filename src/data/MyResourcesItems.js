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
      resourceTags: ["tutorials"],
    },
  ];
  return (
    <div className="resource-collection w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
      {Object.values(myResourcesCollectionInfo).map((myResource) => {
        return (
          <div
            key="{myResource.id}"
            className="resource flex flex-col w-full justify-between items-center gap-4"
          >
            <a
              href={myResource.resourceUrl}
              className="w-full flex flex-col grayscale hover:grayscale-0 Sitems-center bg-theme hover:bg-theme-alt border-2 border-theme-alt rounded-2xl duration-500 transition ease-in-out text-highlight"
            >
              <div className="resource-name w-full">
                <h2 className="p-4 w-full text-center text-sm text-highlight uppercase border-b-2 border-theme-alt tracking-wider">
                  {myResource.resourceName}
                </h2>
              </div>
              <div className="resource-image px-4 py-12">
                <img
                  src={myResource.resourceImage}
                  alt={myResource.resourceName}
                  className="h-16 w-16 lg:h-20 lg:w-20 mx-auto"
                />
              </div>
            </a>
            <div className="text-xs">
              <p>
                <span>{myResource.resourceTags}</span>
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
