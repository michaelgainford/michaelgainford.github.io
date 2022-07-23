import MyResourcesCollection from "./MyResourceCollection";

const ResourceCollection = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full border-cyan-500">
      <div className="gap-y-4 px-2 md:px-8">
        <MyResourcesCollection />
      </div>
    </div>
  );
};

export default ResourceCollection;
