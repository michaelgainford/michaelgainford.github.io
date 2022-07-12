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
              className="project flex flex-col items-center mb-4 md:mb-8 hover:bg-theme-alt border-2 border-transparent hover:border-theme-alt rounded-xl ease-in-out duration-500 lowercase hover:uppercase"
            >
              <a
                href={myProjectMain.url}
                className="p-2 sm:p-8 md:p-8 text-light hover:text-highlight ease-in-out duration-500"
              >
                <img
                  src={myProjectMain.image}
                  alt="template"
                  className="w-full h-auto border-lg rounded-xl object-cover border-[8px] md:border-[12px] border-theme-alt hover:border-highlight opacity-60 hover:opacity-100 ease-in-out duration-500"
                />
                <p className="text-center lowercase tracking-widest text-sm p-2 sm:p-4 md:p-8 w-full">
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
