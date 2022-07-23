import Logo from "../../src/assets/images__global/logo-white-gold.png";

const HeaderLogo = () => {
  return (
    <div className="logo flex flex-col justify-center">
      <a className="mx-auto flex flex-col justify-center w-full h-full" href="/">
        <img
          src={Logo}
          alt="MG logo"
          className="mx-auto my-0 md:my-8 pb-0 w-[72px] md:w-[84px] lg:w[96px] h-auto
          "
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
