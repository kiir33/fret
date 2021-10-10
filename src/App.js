import Carousel from "./components/Carousel";
import Intro from "./components/Intro";
import KnowUs from "./components/KnowUs";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Carousel />
        <Intro />
        <KnowUs />
      </div>
    </div>
  );
}

export default App;
