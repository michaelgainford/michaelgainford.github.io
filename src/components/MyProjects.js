import imageFCC1 from "../assets/past-projects/fcc-portfolio-screenshot.webp";
import imageFCC2 from "../assets/past-projects/landing-page-screenshot.webp";
import imageFCC3 from "../assets/past-projects/survey-form-screenshot.webp";
import imageFCC4 from "../assets/past-projects/tech-doc-page-screenshot.webp";
import imageFCC5 from "../assets/past-projects/tribute-page-screenshot.webp";
import MyProjectsMain from "./MyProjectsMain";

const MyProjects = () => {
  return (
    <div className="projects flex flex-col gap-4 w-full border-cyan-500 text-light">
      <h1 className="text-base md:text-2xl text-highlight tracking-[0.36em] mb-8 md:mb-16 text-center md:text-right uppercase">
        My Work
      </h1>
      <div className="projects gap-y-4">

        <MyProjectsMain />

        <div className="sub-projects pt-16">
          <h3 className="text-center text-theme-alt text-4xl font-bold lowercase">
            Sub Projects
          </h3>
          <div className="projects-wrapper grid grid-cols-3">
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC1}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />

              <p className="text-center lowercase text-light tracking-widest text-xs p-4">
                Project
              </p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC2}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-xs p-4">
                Project
              </p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC3}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-xs p-4">
                Project
              </p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC4}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-xs p-4">
                Project
              </p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC5}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-xs p-4">
                Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
