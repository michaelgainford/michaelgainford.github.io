import imageFCC1 from "../assets/past-projects/fcc-portfolio-screenshot.webp";
import imageFCC2 from "../assets/past-projects/landing-page-screenshot.webp";
import imageFCC3 from "../assets/past-projects/survey-form-screenshot.webp";
import imageFCC4 from "../assets/past-projects/tech-doc-page-screenshot.webp";
import imageFCC5 from "../assets/past-projects/tribute-page-screenshot.webp";

const MyProjectsSub = () => {
  const myProjectsSubInfo = [
    {
      id: 1,
      projectName: "Project Name",
      url: "https://google.co.uk",
      image: imageFCC1,
    },
    {
      id: 2,
      projectName: "Project Name",
      url: "https://google.co.uk",
      image: imageFCC2,
    },
    {
      id: 3,
      projectName: "Project Name",
      url: "https://google.co.uk",
      image: imageFCC3,
    },
    {
      id: 4,
      projectName: "Project Name",
      url: "https://google.co.uk",
      image: imageFCC4,
    },
    {
      id: 5,
      projectName: "Project Name",
      url: "https://google.co.uk",
      image: imageFCC5,
    },
  ];

  return (
    <div className="sub-projects pt-24">
      <h3 className="text-center text-theme-alt text-4xl font-bold lowercase">
        Sub Projects
      </h3>
      <div className="projects-wrapper grid grid-cols-3">
        {Object.values(myProjectsSubInfo).map((myProjectSub) => {
          return (
            <div
              key="myProjectMain.id"
              className="project p-2 md:p-16 md:hover:p-8 flex flex-col items-center mb-0 pb-4 hover:-mb-4 md:hover:pb-0 ease-in-out duration-500 rounded-xl border-2 border-transparent hover:border-theme-alt hover:bg-theme-alt lowercase hover:uppercase hover:gap-y-4"
            >
              <a href={myProjectSub.url}>
                <img
                  src={myProjectSub.image}
                  alt="template"
                  className="w-full h-auto border-lg rounded-lg border-[8px] border-theme-alt hover:border-highlight opacity-60 hover:opacity-100 ease-in-out duration-500"
                />
                <p className="text-center lowercase text-light tracking-widest text-sm p-4 w-full ease-in-out duration-500">
                  {myProjectSub.projectName}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjectsSub;
