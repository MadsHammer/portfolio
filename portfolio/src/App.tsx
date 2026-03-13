import ProjectList from "./components/ProjectList";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Slider from "./components/Slider";
import { Analytics } from "@vercel/analytics/react";
import ScrollBar from "./components/ScrollBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollBar />
      <Slider />
      <ProjectList />
      <About />
      <Analytics />
    </div>
  );
}

export default App;
