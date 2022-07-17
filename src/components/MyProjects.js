import MyProjectsMain from "./MyProjectsMain";
import MyProjectsSub from "./MyProjectsSub";

const MyProjects = () => {
  return (
    <div className="min-h-full flex flex-col gap-4 w-full border-cyan-500 text-light">
      <h1 className="text-base md:text-2xl text-highlight tracking-[0.24em] md:tracking-[0.36em] mb-8 md:mb-16 mt-8 text-center md:text-right uppercase">
        My Work
      </h1>
      <div className="gap-y-4">
        <p className="text-light text-xs md:text-sm p-4 lg: py-8 px-8 mt-8 mb-16 border border-theme-alt hover:border-highlight rounded-xl bg-theme tracking-widest leading-6 md:leading-8">
          Thank you for visiting my website. This is my coding playground, for keeping projects, resources and other useful code.
        </p>
        <MyProjectsMain />
        <MyProjectsSub />
      </div>
    </div>
  );
};

export default MyProjects;
