import Header from "../layout/Header";
import MyResources from "../components/MyResources";
import Footer from "../layout/Footer";

const Resources = () => {
  return (
    <div className="resources w-full flex flex-col md:flex-row">
      <Header />
      <div className="content-and-footer px-2 md:px-16 w-full md:w-4/5">
        <div className="main-content flex justify-center pt-8 md:pt-32">
          <MyResources />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Resources;
