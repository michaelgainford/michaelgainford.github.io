const PageIntroText = (props) => {
  return (
    <p className="text-light text-xs md:text-sm p-4 lg: py-8 px-8 mt-8 mb-16 border border-theme-alt hover:border-highlight rounded-xl bg-theme tracking-widest leading-6 md:leading-8 lg:mx-16">
        {props.pText}
    </p>
  );
};

export default PageIntroText;
