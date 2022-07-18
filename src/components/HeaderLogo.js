import Logo from "../../src/assets/images__global/logo-white-gold.png";

const HeaderLogo = () => {
  return (
    <div className="logo">
      <a className="mx-auto flex justify-center p-4" href="/">
        <img
          src={Logo}
          alt="MG logo"
          className="mx-auto my-0 md:my-8 p-6 pb-0 w-24 md:w-36 h-auto"
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
