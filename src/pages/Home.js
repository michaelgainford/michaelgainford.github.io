import Header from "../layout/Header";
import HeadingOne from "../components/HeadingOne";
import PageIntroText from "../components/PageIntroText";
import ProjectsMain from "../components/ProjectsMain";
import ProjectsSub from "../components/ProjectsSub";
import Footer from "../layout/Footer";

const Home = () => {
  //const introProjectsLink = "<a className=\"border-b border-theme-tint mx-2\" href=\"/projects\">projects</a>";
  //const introResourcesLink = "<a className=\"border-b border-theme-tint mx-2\" href=\"./resources\">resources</a>";
  //const introCodeLink = "<a className=\"border-b border-theme-tint mx-2\" href=\"./code\">code snippets</a>";
  //const introMGDevLink = "<a className=\"border-b border-transparent text-highlight hover:border-transparent ml-2\" href=\"https://michaelgainford.co.uk\">michaelgainford.co.uk</a>";
  const introProjectsLink = "projects";
  const introResourcesLink = "resources";
  const introCodeLink = "code snippets";
  const introMGDevLink = "michaelgainford.co.uk";

  //let homepageHeadingOne = "My Work";
  //const homepageProjectsLink = "<a className=\"border-b border-theme-tint mx-2\" href=\"/projects\">projects</a>";
  const pText = `Thank you for visiting my website. This is my coding playground, for keeping , ${ introProjectsLink }, ${ introCodeLink} and other useful ${ introResourcesLink }. You can visit my personal website over at ${ introMGDevLink }.`;
  return (
    <div className="home w-full flex flex-col md:flex-row md:px-0">
      <Header />
      <div className="content-and-footer md:px-16 w-full md:w-4/5 px-4 lg:px-8">
        <div className="main-content flex flex-col justify-center pt-8 md:pt-16">
          <HeadingOne text="My Work" />
          <div className="content-below-h1 gap-y-4">
            <PageIntroText pText={ pText } />
            <ProjectsMain />
            <ProjectsSub />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
