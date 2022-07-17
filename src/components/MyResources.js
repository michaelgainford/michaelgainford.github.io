import MyResourcesCollection from "../data/MyResourcesItems";

const MyResources = () => {
  return (
    <div className="flex flex-col gap-4 w-full border-cyan-500">
    <h1 className="text-base md:text-2xl text-highlight tracking-[0.36em] mb-8 md:mb-16 text-center md:text-right uppercase">
        Resources
      </h1>
      <div className="gap-y-4 px-2 md:px-8">
        <p className="text-light text-sm p-4 mt-8 mb-16 border-4 border-theme-alt bg-theme tracking-widest">
          Below, is a selection of my favourite and most useful resources for all things web development, covering everything from tutorials, assets, networking and all that is useful to help new developers, and also maybe help out an experienced dev or two.
        </p>
        <MyResourcesCollection />
      </div>
    </div>
  );
};

export default MyResources;
