import Logo from "../../src/assets/images__global/logo-white-gold.png";

const MainLogo = () => {
  return (
    <div className="logo">
      <a className="mx-auto flex justify-center p-4" href="/">
        <img
          src={Logo}
          alt="MG logo"
          className="mx-auto my-0 md:my-16 p-6 w-32 md:w-36 h-auto"
        />
      </a>
    </div>
  );
};

export default MainLogo;
