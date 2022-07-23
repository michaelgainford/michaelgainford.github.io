import Header from "../layout/Header";
import HeadingOne from "../components/HeadingOne";
import PageIntroText from "../components/PageIntroText";
import ResourceCollection from "../components/ResourceCollection";
import Footer from "../layout/Footer";

const Resources = () => {
  const pText = "Below, is a selection of my favourite and most useful resources for all things web development, covering everything from tutorials, assets, networking and all that is useful to help new developers, and also maybe help out an experienced dev or two.";
  return (
    <div className="resources w-full flex flex-col md:flex-row">
      <Header />
      <div className="content-and-footer px-2 md:px-16 w-full md:w-4/5">
        <div className="main-content flex flex-col justify-center pt-8 md:pt-16">
          <HeadingOne text="Resources" />
          <div className="content-below-h1 gap-y-4">
            <PageIntroText pText={ pText } />
            <ResourceCollection />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Resources;
