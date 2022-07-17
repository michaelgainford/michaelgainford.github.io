import Header from "../layout/Header";
import MyProjects from "../components/MyProjects";
import Footer from "../layout/Footer";
//const page = "home";

const Home = () => {
  return (
    <div className="home w-full flex flex-col md:flex-row md:px-0">
      <Header />
      <div className="content-and-footer md:px-16 w-full md:w-4/5 px-4 lg:px-0">
        <div className="main-content flex flex-col justify-center pt-8 md:pt-16">
          <MyProjects />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
