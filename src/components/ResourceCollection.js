import ResourcesData from "../data/ResourcesData";

const ResourceCollection = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="gap-y-4 px-2 md:px-8">
      <div className="resource-collection w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16 px-8 md:px-0">
      {Object.values(ResourcesData).map((myResource) => {
        return (
          <div
            key={myResource.id}
            className="resource flex flex-col w-full justify-start items-center gap-4 mb-8 md:mb-2 mx-auto"
          >
            <a
              href={myResource.resourceUrl}
              className="w-full flex flex-col md:grayscale hover:grayscale-0 items-center bg-theme hover:bg-theme-alt border-2 border-theme-alt rounded-2xl hover:rounded-none duration-500 transition ease-in-out text-highlight pb-2 lg:pb-0 xl:pt-6 xl:pb-2"
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
                  className="h-16 w-16 hover:h-20 hover:w-20 mx-auto ease-in-out transition-all duration-500"
                />
              </div>
            </a>
            <div className="text-xs">
              <p className="text-theme-tint flex flex-wrap justify-center items-start h-full">
                {Object.values(myResource.resourceTags).map((resourceTag) => {
                  return (
                    <span className="p-2 border inline-flex items-center justify-center flex-row flex-wrap border-theme-alt text-[10px] hover:text-sm transition-all duration-300 mb-2 ease-in-out rounded text-light bg-theme mx-2 hover:bg-highlight hover:text-theme">
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
      </div>
    </div>
  );
};

export default ResourceCollection;
