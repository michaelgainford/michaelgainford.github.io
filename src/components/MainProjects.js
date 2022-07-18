import MyProjectsMain from "../data/MainProjectsData";

const MainProjects = () => {
  return (
    <div className="main-projects">
      <div className="projects-wrapper grid lg:grid-cols-2 px-8 md:px-0">
        {Object.values(MyProjectsMain).map((myProjectMain) => {
          return (
            <div
              key={myProjectMain.id}
              className="project flex flex-col items-center mb-4 md:mb-8 hover:bg-theme-alt border-2 border-transparent hover:border-theme-alt rounded-xl ease-in-out duration-500 lowercase hover:uppercase sm:px-6 lg:px-0"
            >
              <a
                href={myProjectMain.url}
                className="p-2 sm:p-8 md:p-16 md:pb-0 hover:md:p-8 hover:md:pb-0 text-light hover:text-highlight ease-in-out duration-500"
              >
                <img
                  src={myProjectMain.image}
                  alt="{myProjectMain.projectName}"
                  className="w-full h-auto border-lg rounded-xl object-cover border-[8px] md:border-[12px] border-theme-alt hover:border-highlight lg:opacity-60 hover:opacity-100 ease-in-out duration-500 hover:filter-none"
                />
                <p className="text-center tracking-widest uppercase text-[10px] md:text-xs p-2 sm:p-4 md:py-8 w-full">
                  {myProjectMain.projectName}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainProjects;
