//import imagePlaceholder from "../assets/global-images/image-placeholder.png";
import MyResourcesCollection from "./MyResourcesItems";

const MyResources = () => {
  return (
    <div className="flex flex-col gap-4 w-full border-cyan-500">
      <h1 className="text-2xl text-highlight tracking-[0.36em] mb-16 text-right uppercase">
        Resources
      </h1>
      <div className="border-solid border-2 border-orange-500 gap-y-4">
        <p className="text-light">Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        <MyResourcesCollection />
      </div>
    </div>
  );
};

export default MyResources;
