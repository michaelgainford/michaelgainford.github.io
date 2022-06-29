import imagePlaceholder from "../assets/global-images/image-placeholder.png";

const MyProjects = () => {
  return (
    <div className="projects flex flex-col gap-4 w-full border-cyan-500 text-light">
      <h1 className="text-2xl text-highlight tracking-[0.36em] mb-16 text-right uppercase">
        Projects
      </h1>
      <div className="projects gap-y-12">
        <div className="main-projects">
          <h2 className="text-center lowercase">Main Projects</h2>
          <div className="projects-wrapper grid grid-cols-2">
            <div className="project p-8 flex flex-col">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg"
              />
              <p className="text-center uppercase tracking-widest p-4 bg-theme">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg"
              />
              <p className="text-center uppercase tracking-widest p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg"
              />
              <p className="text-center uppercase tracking-widest p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg"
              />
              <p className="text-center uppercase tracking-widest p-4">Project</p>
            </div>
          </div>
        </div>

        <div className="sub-projects pt-16">
          <h3 className="text-center lowercase">Sub Projects</h3>
          <div className="projects-wrapper grid grid-cols-4">
            <div className="project p-8 flex flex-col">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg"
              />
              <p className="text-center p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg"
              />
              <p className="text-center p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg"
              />
              <p className="text-center p-4">Project</p>
            </div>
            <div className="project p-8 flex flex-col">
              <img
                src={imagePlaceholder}
                alt="template"
                className="w-full h-auto border-lg rounded-lg"
              />
              <p className="text-center p-4">Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
