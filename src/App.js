import "./index.css";

//const projectsList = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];

function App() {
  return (
    <div className="w-screen min-h-screen mx-auto flex flex-col md:flex-row border-purple-500">
      <div className="logo-nav border-red-500">
        <div className="logo">Logo</div>
        <nav className="nav-main">
          <ul>
            <li>Home</li>
            <li>Code</li>
            <li>Resources</li>
            <li>Twitter</li>
          </ul>
        </nav>
      </div>
      <div className="px-0">
        <div className="main-content border-yellow-500">
          <div className="projects flex flex-col gap-4">
            <h1>Projects</h1>
            <div className="projects">
              <div className="project">Project</div>
              <div className="project">Project</div>
              <div className="project">Project</div>
              <div className="project">Project</div>
              <div className="project">Project</div>
              <div className="project">Project</div>
              <div className="project">Project</div>
              <div className="project">Project</div>
              <div className="project">Project</div>
              <div className="project">Project</div>
            </div>
          </div>
        </div>
        <footer className="footer-main">Footer</footer>
      </div>
    </div>
  );
}

export default App;
