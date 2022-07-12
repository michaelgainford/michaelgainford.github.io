import imageFCC1 from "../assets/past-projects/fcc-portfolio-screenshot.webp";
import imageFCC2 from "../assets/past-projects/landing-page-screenshot.webp";
import imageFCC3 from "../assets/past-projects/survey-form-screenshot.webp";
import imageFCC4 from "../assets/past-projects/tech-doc-page-screenshot.webp";
import imageFCC5 from "../assets/past-projects/tribute-page-screenshot.webp";
//import imagePlaceholder from "../assets/global-images/image-placeholder.png";

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
    <div className="sub-projects pt-24 pb-16">
      <h3 className="text-center text-theme-alt text-4xl font-bold lowercase mt-4 pb-4 mb-4 border-b-4 border-theme-alt w-fit mx-auto">
        Sub Projects
      </h3>
      <div className="projects-wrapper grid md:grid-cols-3 md:gap-4">
        {Object.values(myProjectsSubInfo).map((myProjectSub) => {
          return (
            <div
              key="myProjectSub.id"
              className="project flex flex-col items-center mb-4 md:mb-8 hover:bg-theme-alt border-2 border-transparent hover:border-theme-alt rounded-xl ease-in-out duration-500 lowercase hover:uppercase"
            >
              <a href={myProjectSub.url} className="p-2 sm:p-8 md:p-8 text-light hover:text-highlight ease-in-out duration-500">
                <img
                  src={myProjectSub.image}
                  alt="template"
                  className="w-full h-auto border-lg rounded-xl object-cover border-[4px] md:border-[6px] border-theme-alt hover:border-highlight opacity-60 hover:opacity-100 ease-in-out duration-500"
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
  );
};

export default MyProjectsSub;
