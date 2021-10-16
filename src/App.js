import HomeCarousel from "./components/HomeCarousel";
import Intro from "./components/Intro";
import KnowUs from "./components/KnowUs";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";


function App() {
  return (
    <div style={{maxWidth: '100wh', overflowX: 'hidden'}}>
      <Navbar />
      <div className="mt-5 pt-2">
        <HomeCarousel />
        <Intro />
        <KnowUs />
        <Videos />
      </div>
    </div>
  );
}

export default App;
