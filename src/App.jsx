import "./index.css";
import Home from "./components/Home";
import CabinDetails from "./components/CabinDetails";
import Tree from "./components/Tree";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <CabinDetails />
      <Tree />
      <About />
      <Rooms />
      <Contact />
    </div>
  );
}
export default App;
