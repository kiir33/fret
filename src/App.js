import { useState } from "react";
import MemberDetailDialog from "./components/MemberDetailDialog";
// import HomeCarousel from "./components/HomeCarousel";
import Intro from "./components/Intro";
import KnowUs from "./components/KnowUs";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
import ContactUs from "./components/ContactUs";
import { names, images, details } from "./components/KnowUs";
import Performances from "./components/Performances";
import OurInitiations from "./components/OurInitiations";
import FeaturedVideo from "./components/FeatureVideo";
import FretSchoolPopup from "./components/FretSchoolPopup";

function App() {
  const [dialogPos, setDialogPos] = useState(0);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(true);

  const toggle = (pos) => {
    setDialogPos(pos);
    console.log(pos);
    let newState = !dialogVisible;
    setDialogVisible(newState);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="main-container">
      <div className="secondary-container">
        <Navbar />
        <div className="mt-5 pt-2">
          <FeaturedVideo />
          {/* <HomeCarousel /> */}
          <hr />
          <Videos />
          <Performances />
          <OurInitiations />
          <Intro />
          <KnowUs toggle={toggle} />
          <ContactUs />
        </div>
        {/* Member Detail Dialog */}
        {
          dialogVisible && (
            <div>
              <div className="dialog-background" onClick={toggle} />
              <MemberDetailDialog
                toggle={toggle}
                title={names[dialogPos]}
                image={images[dialogPos]}
                details={details[dialogPos]}
              />
            </div>
          )
        }
        {/* Fret School Popup */}
        {
          popupVisible && <FretSchoolPopup closePopup={closePopup} />
        }
      </div>
    </div>
  );
}

export default App;
