import "./index.css";
import Home from "./components/Home";
import CabinDetails from "./components/CabinDetails";
import Tree from "./components/Tree";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Home />
      <CabinDetails />
      <Tree />
      <About />
    </div>
  );
}
export default App;
