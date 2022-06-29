import Logo from "../../src/assets/global-images/logo-white-gold.png";

const MainLogo = () => {
  return (
    <div className="logo">
      <a className="mx-auto flex justify-center p-4" href="/">
        <img
          src={Logo}
          alt="MG logo"
          className="mx-auto my-16 p-6 w-36 h-auto"
        />
      </a>
    </div>
  );
};

export default MainLogo;
