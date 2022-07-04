import imagePlaceholder from "../assets/global-images/image-placeholder.png";
import imageFairway from "../assets/past-projects/fairway-screenshot.webp";
import imageGolfMem from "../assets/past-projects/golf-membership-screenshot.webp";
import imageMakeUp from "../assets/past-projects/make-up-by-sophie-court-screenshot.webp";

const MyProjectsMain = () => {
  const myProjectsMainInfo = [
    {
      id: 1,
      projectName: "Fairway Golf Group Holidays",
      url: "https://fairwaygolfgroupholidays.co.uk",
      image: imageFairway,
    },
    {
      id: 2,
      projectName: "Make Up By Sophie Court",
      url: "https://fairwaygolfgroupholidays.co.uk",
      image: imageMakeUp,
    },
    {
      id: 3,
      projectName: "Golf Membership North West",
      url: "https://fairwaygolfgroupholidays.co.uk",
      image: imageGolfMem,
    },
    {
      id: 4,
      projectName: "Placeholder",
      url: "https://google.co.uk",
      image: imagePlaceholder,
    },
  ];

  return (
    <div className="main-projects">
      <div className="projects-wrapper grid md:grid-cols-2">
        {Object.values(myProjectsMainInfo).map((myProjectMain) => {
          return (
            <div
              key="myProjectMain.id"
              className="project p-2 md:p-16 md:hover:p-8 flex flex-col items-center mb-0 pb-4 hover:-mb-4 md:hover:pb-0 ease-in-out duration-500 rounded-xl border-2 border-transparent hover:border-theme-alt hover:bg-theme-alt lowercase hover:uppercase hover:gap-y-4"
            >
              <a href={myProjectMain.url}>
                <img
                  src={myProjectMain.image}
                  alt="template"
                  className="w-full h-auto border-lg rounded-lg border-[8px] border-theme-alt hover:border-highlight opacity-60 hover:opacity-100 ease-in-out duration-500"
                />
                <p className="text-center lowercase text-light tracking-widest text-sm p-4 w-full ease-in-out duration-500">
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

export default MyProjectsMain;
