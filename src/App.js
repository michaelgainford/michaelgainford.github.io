import "./index.css";
import Home from "../src/components/Home";

//const projectsList = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];

function App() {
  return (
    <div className="w-screen min-h-screen mx-auto flex flex-col lg:flex-row min-w-[300px]">
      <Home />
    </div>
  );
}

export default App;
