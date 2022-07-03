import imagePlaceholder from "../assets/global-images/image-placeholder.png";
import imageFairway from "../assets/past-projects/fairway-screenshot.webp";
import imageGolfMem from "../assets/past-projects/golf-membership-screenshot.webp";
import imageMakeUp from "../assets/past-projects/make-up-by-sophie-court-screenshot.webp";
import imageFCC1 from "../assets/past-projects/fcc-portfolio-screenshot.webp";
import imageFCC2 from "../assets/past-projects/landing-page-screenshot.webp";
import imageFCC3 from "../assets/past-projects/survey-form-screenshot.webp";
import imageFCC4 from "../assets/past-projects/tech-doc-page-screenshot.webp";
import imageFCC5 from "../assets/past-projects/tribute-page-screenshot.webp";

const MyProjects = () => {
  return (
    <div className="projects flex flex-col gap-4 w-full border-cyan-500 text-light">
      <h1 className="text-base md:text-2xl text-highlight tracking-[0.36em] mb-8 md:mb-16 text-center md:text-right uppercase">
        My Work
      </h1>
      <div className="projects gap-y-4">
        <div className="main-projects">
{/*           <h2 className="text-center text-theme-alt text-4xl font-bold lowercase">
            Main Projects
          </h2> */}
          <div className="projects-wrapper grid md:grid-cols-2">
            <div className="project p-2 md:p-16 md:hover:p-8 flex flex-col items-center mb-0 pb-4 hover:-mb-4 md:hover:pb-0 ease-in-out duration-500 border-2 border-transparent hover:border-theme-alt hover:bg-theme-alt">
              <img
                src={imageFairway}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt hover:border-highlight opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-sm p-4 w-max border-b-4 border-theme-alt">
                Fairway Golf Group Holidays
              </p>
            </div>
            <div className="project p-2 md:p-16 md:hover:p-8 flex flex-col mb-0 pb-4 hover:-mb-4 md:hover:pb-0 ease-in-out duration-500">
              <img
                src={imageGolfMem}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-sm p-4">
                Project
              </p>
            </div>
            <div className="project p-2 md:p-16 md:hover:p-8 flex flex-col mb-0 pb-4 hover:-mb-4 md:hover:pb-0 ease-in-out duration-500">
              <img
                src={imageMakeUp}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-sm p-4">
                Project
              </p>
            </div>
            <div className="project p-2 md:p-16 md:hover:p-8 flex flex-col mb-0 pb-4 hover:-mb-4 md:hover:pb-0 ease-in-out duration-500">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-sm p-4">
                Project
              </p>
            </div>
          </div>
        </div>

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
             
             <p className="text-center lowercase text-light tracking-widest text-xs p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC2}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-xs p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC3}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-xs p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC4}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-xs p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imageFCC5}
                alt="template"
                className="w-full h-auto border-lg rounded-lg border-[12px] border-theme-alt opacity-60 hover:opacity-100 ease-in-out duration-500"
              />
              <p className="text-center lowercase text-light tracking-widest text-xs p-4">Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
