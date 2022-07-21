import MyProjectsSub from "../data/SubProjectsData";

const SubProjects = () => {
  return (
    <div className="sub-projects flex flex-col">
      <div className="projects-wrapper flex flex-col">
          <h3 className="text-center text-theme-alt text-4xl font-bold lowercase mt-4 pb-4 mb-4 border-b-4 border-theme-alt w-fit mx-auto">
            Sub Projects
          </h3>
          <div className="projects-wrapper grid lg:grid-cols-3 md:gap-4 sm:px-4 lg:px-0">
            {Object.values(MyProjectsSub).map((myProjectSub) => {
              return (
                <div
                  key={myProjectSub.id}
                  className="project flex flex-col items-center mb-4 md:mb-8 hover:bg-theme-alt border-2 border-transparent hover:border-theme-alt rounded-xl ease-in-out duration-500 lowercase hover:uppercase"
                >
                  <a
                    href={myProjectSub.url}
                    className="p-2 sm:p-4 xl:p-8 text-light hover:text-highlight ease-in-out duration-500"
                  >
                    <img
                      src={myProjectSub.image}
                      alt="template"
                      className="w-full h-auto border-lg rounded-xl object-cover border-[4px] md:border-[6px] border-theme-alt hover:border-highlight lg:opacity-60 hover:opacity-100 ease-in-out duration-500"
                    />
                    <p className="text-center lowercase tracking-widest text-sm p-2 sm:p-4 md:p-8 w-full">
                      {myProjectSub.projectName}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default SubProjects;
