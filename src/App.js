import { Header } from "./components/header/Header";
import Data from "./data/data";

import "./assets/css/styles.css";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projects/Projects";
import { Skill } from "./components/skills/Skill";

function App() {
  return (
    <div className="App">
      <Header data={Data} />
      <About data={Data} />
      <Projects data={Data} />
      <Skill data={Data} />
      <Footer />
    </div>
  );
}

export default App;
