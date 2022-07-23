const PageIntroText = (props) => {
  return (
    <p className="text-light text-xs lg:text-sm p-4 md:py-8 px-8 my-12 border font-light max-w-full mx-auto border-theme-alt hover:border-highlight rounded-xl bg-theme tracking-widest leading-6 md:leading-10 lg:mx-8">
        {props.pText}
    </p>
  );
};

export default PageIntroText;
