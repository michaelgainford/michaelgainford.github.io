import MyProjectsMain from "./MyProjectsMain";
import MyProjectsSub from "./MyProjectsSub";

const MyProjects = () => {
  return (
    <div className="projects flex flex-col gap-4 w-full border-cyan-500 text-light">
      <h1 className="text-base md:text-2xl text-highlight tracking-[0.36em] mb-8 md:mb-16 text-center md:text-right uppercase">
        My Work
      </h1>
      <div className="projects gap-y-4">
        <MyProjectsMain />
        <MyProjectsSub />
      </div>
    </div>
  );
};

export default MyProjects;
