import MainProjects from "../components/MainProjects";
import SubProjects from "../components/SubProjects";

const MyProjects = () => {
  return (
    <div className="min-h-full flex flex-col gap-4 w-full border-cyan-500 text-light">
      <h1 className="text-base md:text-2xl text-highlight tracking-[0.24em] md:tracking-[0.36em] mb-8 md:mb-16 mt-8 text-center md:text-right uppercase">
        My Work
      </h1>
      <div className="gap-y-4">
        <p className="text-light text-xs md:text-sm p-4 lg: py-8 px-8 mt-8 mb-16 border border-theme-alt hover:border-highlight rounded-xl bg-theme tracking-widest leading-6 md:leading-8 lg:mx-16">
          Thank you for visiting my website. This is my coding playground, for keeping <a className="border-b border-theme-tint" href="/projects">projects</a>, <a className="border-b border-theme-tint" href="/resources">resources</a> and other useful <a className="border-b border-theme-tint" href="./code">code snippets</a>. You can visit my personal website over at <a className="border-b border-highlight hover:border-transparent" href="https://michaelgainford.co.uk">michaelgainford.co.uk</a>.
        </p>
        <MainProjects />
        <SubProjects />
      </div>
    </div>
  );
};

export default MyProjects;
