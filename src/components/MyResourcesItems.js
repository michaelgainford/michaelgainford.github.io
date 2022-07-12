//import imagePlaceholder from "../assets/global-images/image-placeholder.png";

const MyResourcesCollection = () => {
  const myResourcesCollectionInfo = [
    {
      id: 1,
      resourceName: "",
      resourceUrl: "https://google.co.uk",
      resourceImage: "image",
    },
    {
      id: 2,
      resourceName: "",
      resourceUrl: "https://google.co.uk",
      resourceImage: "image",
    },
    {
      id: 3,
      resourceName: "",
      resourceUrl: "https://google.co.uk",
      resourceImage: "image",
    },
    {
      id: 4,
      resourceName: "",
      resourceUrl: "https://google.co.uk",
      resourceImage: "image",
    },
    {
      id: 5,
      resourceName: "",
      resourceUrl: "https://google.co.uk",
      resourceImage: "image",
    },
  ];
  return (
    <div className="resource-collection">
      {Object.values(myResourcesCollectionInfo).map((myResource) => {
        return (
          <div key="myResource.id" className="resource border-2 border-theme-alt p-4 text-light flex">
            <div className="resource-name">{myResource.resourceName}</div>
            <div className="resource-image">{myResource.image}</div>
            <a href="{myResource.resourceUrl}">View</a>
          </div>
        );
      })};
    </div>
  );
};

export default MyResourcesCollection;
