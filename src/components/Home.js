import Header from "../components/Header";
import MyProjects from "../components/MyProjects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home w-full flex flex-col md:flex-row bg-theme">
      <Header />
      <div className="content-and-footer px-8 w-4/5">
        <div className="main-content flex pt-32">
          <MyProjects />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
