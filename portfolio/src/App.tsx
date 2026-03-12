import  ProjectList  from "./components/ProjectList";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
<Slider />
  <ProjectList />
  <About />
    </div>
  );
}

export default App;