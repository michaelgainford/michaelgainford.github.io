//import imagePlaceholder from "../assets/global-images/image-placeholder.png";

const MyResourcesCollection = () => {
  const myResourcesCollectionInfo = [
    {
      id: 1,
      resourceName: "W3 Schools",
      resourceSlug: "w3-schools",
      resourceUrl: "https://google.co.uk",
      resourceImage:
        "../images/resources/w3-schools/w3-schools-logo-200x200.png",
      resourceTags: ["code", "tutorials"],
    },
    {
      id: 2,
      resourceName: "Codepen",
      resourceSlug: "codepen",
      resourceUrl: "https://google.co.uk",
      resourceImage: "../images/resources/codepen/codepen-logo-200x200.png",
    },
    {
      id: 3,
      resourceName: "Font Awesome",
      resourceSlug: "font-awesome",
      resourceUrl: "https://google.co.uk",
      resourceImage:
        "../images/resources/font-awesome/font-awesome-logo-200x200.png",
    },
    {
      id: 4,
      resourceName: "Free Code Camp",
      resouceSlug: "free-code-camp",
      resourceUrl: "https://google.co.uk",
      resourceImage: "../images/resources/free-code-camp/free-code-camp-logo-200x200.png",
    },
    {
      id: 5,
      resourceName: "GitHub",
      resouceSlug: "github",
      resourceUrl: "https://google.co.uk",
      resourceImage: "../images/resources/github/github-logo-200x200.png",
    },
    {
      id: 6,
      resourceName: "Google Fonts",
      resouceSlug: "google-fonts",
      resourceUrl: "https://google.co.uk",
      resourceImage: "../images/resources/google-fonts/google-fonts-logo-200x200.png",
    },
    {
      id: 7,
      resourceName: "MDN",
      resouceSlug: "mdn",
      resourceUrl: "https://google.co.uk",
      resourceImage: "../images/resources/mdn/mdn-logo-200x200.png",
    },
    {
      id: 8,
      resourceName: "Twitter",
      resouceSlug: "twitter",
      resourceUrl: "https://google.co.uk",
      resourceImage: "../images/resources/twitter/twitter-logo-200x200.png",
    },
  ];
  return (
    <div className="resource-collection w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
      {Object.values(myResourcesCollectionInfo).map((myResource) => {
        return (
          <div
            key="myResource.id"
            className="resource  text-light flex flex-col w-full justify-between items-center gap-4"
          >
            <a
              href={myResource.resourceUrl}
              className="w-full flex flex-col items-center bg-theme hover:bg-theme-alt border-2 border-theme-alt rounded-2xl duration-500 transition ease-in-out"
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
            <div className="p-0 text-xs">
              <p>{myResource.resourceTags}</p>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default MyResourcesCollection;
