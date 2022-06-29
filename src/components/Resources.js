import Header from "../components/Header";
import MyResources from "../components/MyResources";
import Footer from "../components/Footer";

const Resources = () => {
  return (
    <div className="code w-full flex flex-col md:flex-row">
      <Header />
      <div className="content-and-footer px-8 w-4/5">
        <div className="main-content border border-yellow-500 flex pt-32">
          <MyResources />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Resources;
