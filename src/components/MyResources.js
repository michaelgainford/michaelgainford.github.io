//import imagePlaceholder from "../assets/global-images/image-placeholder.png";
import MyResourcesCollection from "../data/MyResourcesItems";

const MyResources = () => {
  return (
    <div className="flex flex-col gap-4 w-full border-cyan-500">
      <h1 className="text-base md:text-2xl text-highlight tracking-[0.36em] mb-8 md:mb-16 text-center md:text-right uppercase">
        Resources
      </h1>
      <div className="gap-y-4 px-2 md:px-8">
        <p className="text-light text-sm py-2 pl-2 mt-8 mb-12 border-l-4 border-theme-alt">
          Below, is a selection of my favourite and most useful resources for all things web development.
          </p>
        <MyResourcesCollection />
      </div>
    </div>
  );
};

export default MyResources;
