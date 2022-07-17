import MyResourcesCollection from "../data/MyResourcesItems";

const MyResources = () => {
  return (
    <div className="flex flex-col gap-4 w-full border-cyan-500">
      <h1 className="text-base md:text-2xl text-highlight tracking-[0.24em] md:tracking-[0.36em] mb-8 md:mb-16 mt-8 text-center md:text-right uppercase">
        Resources
      </h1>
      <div className="gap-y-4 px-2 md:px-8">
        <p className="text-light text-xs md:text-sm p-4 lg: py-8 px-8 mt-8 mb-16 border border-theme-alt hover:border-highlight rounded-xl bg-theme tracking-widest leading-6 md:leading-8">
          Below, is a selection of my favourite and most useful resources for all things web development, covering everything from tutorials, assets, networking and all that is useful to help new developers, and also maybe help out an experienced dev or two.
        </p>
        <MyResourcesCollection />
      </div>
    </div>
  );
};

export default MyResources;
