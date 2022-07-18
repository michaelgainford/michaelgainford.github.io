import MyCodeData from "../data/CodeData";

const MyCode = () => {

  return (
    <div className="flex flex-col gap-4 w-full border-cyan-500">
      <h1 className="text-base md:text-2xl text-highlight tracking-[0.24em] md:tracking-[0.36em] mb-8 md:mb-16 mt-8 text-center md:text-right uppercase">
        Code
      </h1>
      <p className="text-light text-xs md:text-sm p-4 lg: py-8 px-8 mt-8 mb-16 border border-theme-alt hover:border-highlight rounded-xl bg-theme tracking-widest leading-6 md:leading-8">
        This is a page dedicated to useful code snippets for all aspects of web development.
      </p>
      <div className="border-solid border-orange-500 gap-y-12">
        <div className="code-snippets gap-4 lg:gap-x-8 lg:gap-y-8 flex flex-col md:flex-row flex-wrap w-full lg:justify-around pb-24">
          {Object.values(MyCodeData).map((myCodeSnippet) => {
            return (
              <div className="relative code-snippet bg-theme hover:bg-theme-alt border-theme-alt rounded-xl w-full lg:w-5/12 overflow-auto transition duration-500 ease-in-out border-2 hover:border-highlight hover:text-highlight pb-4 mb-4">
                <h2 className="text-theme-tint text-sm border-b-2 border-theme-alt p-4">
                  {myCodeSnippet.codeTitle}
                </h2>
                <p className="text-light text-xs py-4">
                  <code className="text-xs p-2">
                    <pre className="overflow-auto scroll-highlight w-11/12 mx-auto pb-8">
                      {Object.values(myCodeSnippet.codeSegments).map(
                        (codeLine) => {
                          return (
                            <span className="flex flex-col text-theme-tint">
                              {codeLine}
                            </span>
                          );
                        }
                      )}
                    </pre>
                  </code>
                </p>
                <span className="tags text-theme-tint italic font-light text-xs absolute bottom-2 right-4">
                  {myCodeSnippet.codeTag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCode;
