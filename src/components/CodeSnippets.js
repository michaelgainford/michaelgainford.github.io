import MyCodeData from "../data/CodeData";

const CodeSnippets = () => {
  return (
    <div className="gap-y-12">
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
  );
};

export default CodeSnippets;
