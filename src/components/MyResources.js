//import imagePlaceholder from "../assets/global-images/image-placeholder.png";
import MyResourcesCollection from "./MyResourcesItems";

const MyResources = () => {
  return (
    <div className="flex flex-col gap-4 w-full border-cyan-500">
      <h1 className="text-2xl text-highlight tracking-[0.36em] mb-16 text-right uppercase">
        Resources
      </h1>
      <div className="gap-y-4 px-8">
        <p className="text-light text-sm py-12">
          Below is a selection of my favourite resources for all things web development.
          </p>
        <MyResourcesCollection />
      </div>
    </div>
  );
};

export default MyResources;
