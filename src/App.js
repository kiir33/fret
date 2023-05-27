import { useState } from "react";
import { imageBaseUrl } from "./Links";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Videos from "./components/videos/Videos";
import KnowUs from "./components/know_us/KnowUs";
import HomeCarousel from "./components/HomeCarousel";
import FeaturedVideo from "./components/FeatureVideo";
import members from "./components/know_us/MembersData";
import FretSchoolPopup from "./components/FretSchoolPopup";
import Announcement from "./components/banners/Announcement";
import Performances from "./components/performances/Performances";
import OurInitiations from "./components/initiations/OurInitiations";
import MemberDetailDialog from "./components/know_us/MemberDetailDialog";

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
        <div className="mt-5 pt-3">
          <Announcement />
          <Videos />
          <Performances />
          <FeaturedVideo />
          <OurInitiations />
          <Intro />
          <KnowUs toggle={toggle} />
          <HomeCarousel />
          <ContactUs />
        </div>
        {/* Member Detail Dialog */}
        {
          dialogVisible && (
            <div>
              <div className="dialog-background" onClick={toggle} />
              <MemberDetailDialog
                toggle={toggle}
                title={members[dialogPos].name}
                image={imageBaseUrl + members[dialogPos].image}
                details={members[dialogPos].details}
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
