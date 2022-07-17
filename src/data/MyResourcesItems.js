import imageW3Schools from "../assets/images__resources/w3-schools/w3-schools-logo-200x200.png";

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
      resourceImage:
        "../assets/images__resources/codepen/codepen-logo-200x200.png",
      resourceTags: ["code"],
    },
    {
      id: 3,
      resourceName: "Font Awesome",
      resourceSlug: "font-awesome",
      resourceUrl: "https://fontawesome.com/",
      resourceImage:
        "../assets/images__resources/font-awesome/font-awesome-logo-200x200.png",
      resourceTags: ["icons"],
    },
    {
      id: 4,
      resourceName: "Free Code Camp",
      resouceSlug: "free-code-camp",
      resourceUrl: "https://www.freecodecamp.org/",
      resourceImage:
        "../assets/images__resources/free-code-camp/free-code-camp-logo-200x200.png",
      resourceTags: ["code", "tutorials"],
    },
    {
      id: 5,
      resourceName: "GitHub",
      resouceSlug: "github",
      resourceUrl: "https://github.com/",
      resourceImage:
        "../assets/images__resources/github/github-logo-200x200.png",
      resourceTags: ["code", "repo"],
    },
    {
      id: 6,
      resourceName: "Google Fonts",
      resouceSlug: "google-fonts",
      resourceUrl: "https://fonts.google.com/",
      resourceImage:
        "../assets/images__resources/google-fonts/google-fonts-logo-200x200.png",
      resourceTags: ["code", "fonts"],
    },
    {
      id: 7,
      resourceName: "MDN",
      resouceSlug: "mdn",
      resourceUrl: "https://developer.mozilla.org/en-US/",
      resourceImage: "../assets/images__resources/mdn/mdn-logo-200x200.png",
      resourceTags: ["code", "docs"],
    },
    {
      id: 8,
      resourceName: "Twitter",
      resouceSlug: "twitter",
      resourceUrl: "https://twitter.com/",
      resourceImage:
        "../assets/images__resources/twitter/twitter-logo-200x200.png",
      resourceTags: ["code", "tutorials", "networking"],
    },
    {
      id: 9,
      resourceName: "ReactJS",
      resouceSlug: "react-js",
      resourceUrl: "https://reactjs.org",
      resourceImage:
        "../assets/images__resources/twitter/twitter-logo-200x200.png",
      resourceTags: ["code", "tutorials", "react"],
    },
  ];
  return (
    <div className="resource-collection w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
      {Object.values(myResourcesCollectionInfo).map((myResource) => {
        return (
          <div
            key="{myResource.id}"
            className="resource  text-light flex flex-col w-full justify-between items-center gap-4"
          >
            <a
              href={myResource.resourceUrl}
              className="w-full flex flex-col grayscale hover:grayscale-0 Sitems-center bg-theme hover:bg-theme-alt border-2 border-theme-alt rounded-2xl duration-500 transition ease-in-out"
            >
              <div className="resource-name w-full">
                <h2 className="p-4 w-full text-center text-sm border-b-2 border-theme-alt">
                  {myResource.resourceName}
                </h2>
              </div>
              <div className="resource-image px-4 py-12">
                <img
                  src={myResource.resourceImage}
                  alt={myResource.resourceName}
                  className="h-16 w-16 mx-auto"
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
