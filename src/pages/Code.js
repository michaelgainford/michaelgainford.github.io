import Header from "../layout/Header";
import HeadingOne from "../components/HeadingOne";
import PageIntroText from "../components/PageIntroText";
import CodeSnippets from "../components/CodeSnippets";
import Footer from "../layout/Footer";

const Code = () => {
  const pText = `This is a page dedicated to useful code snippets for all aspects of web development.`;
  return (
    <div className="code w-full flex flex-col md:flex-row">
      <Header />
      <div className="content-and-footer px-2 md:px-16 w-full md:w-4/5">
        <div className="main-content flex flex-col justify-center pt-8 md:pt-16">
          <HeadingOne text="Code" />
          <div className="content-below-h1 gap-y-4">
            <PageIntroText pText={ pText }/>
            <CodeSnippets />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Code;
