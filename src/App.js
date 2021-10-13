import HomeCarousel from "./components/HomeCarousel";
import Intro from "./components/Intro";
import KnowUs from "./components/KnowUs";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-2">
        <HomeCarousel />
        <Intro />
        <KnowUs />
      </div>
    </div>
  );
}

export default App;
