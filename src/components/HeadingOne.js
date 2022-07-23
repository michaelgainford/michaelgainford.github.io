const HeadingOne = (props) => {
  return (
    <h1 className="text-base md:text-2xl text-highlight tracking-[0.24em] md:tracking-[0.36em] mb-0 md:mb-16 md:mt-8 text-center md:text-right uppercase">
      {props.text}
    </h1>
  );
};

export default HeadingOne;
