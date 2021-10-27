import { useState } from "react";
import MemberDetailDialog from './components/MemberDetailDialog'
import HomeCarousel from "./components/HomeCarousel";
import Intro from "./components/Intro";
import KnowUs from "./components/KnowUs";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
import ContactUs from "./components/ContactUs";


function App() {

  const [dialogVisible, setdialogVisible] = useState(false)
  const toggle = () => {
    let newState = !dialogVisible
    setdialogVisible(newState)
  }

  return (
    <div style={{ maxWidth: '100wh', overflowX: 'hidden' }}>
      <Navbar />
      <div className="mt-5 pt-2">
        <HomeCarousel />
        <Intro />
        <KnowUs toggle={toggle} />
        <Videos />
        <ContactUs/>
      </div>
      {
        dialogVisible &&
        <div>
          <div className="dialog-background" onClick={toggle}></div>
          <MemberDetailDialog toggle={toggle} details={details[0]} />
        </div>
      }
    </div>
  );
}

export default App;

const details = [
  "Fret is an instrumental trio from Nepal, creating new form of music, \
  furnishing fusion grooves in an evolved manner blending traditional and \
  ethnic music with an influence of eastern classical, western music and world \
  music through Sarangi, Flute and Newari drums.\
  Here's a small Solitude from fret for project Naadhe \"Khola Ra Kharani\".\
  We have more artists, poets and performance art in this list.\
  All the performing artists in \"khola ra kharani\" will be provided a space \
  in the upcoming collaborative project extend play of art & music.\
  Which is also a Monthly collaborative workshop organized by Naadhe with the \
  music through Sarangi, Flute and Newari drums.\
  Here's a small Solitude from fret for project Naadhe \"Khola Ra Kharani\".\
  We have more artists, poets and performance art in this list.\
  All the performing artists in \"khola ra kharani\" will be provided a space \
  in the upcoming collaborative project extend play of art & music.\
  Which is also a Monthly collaborative workshop organized by Naadhe with the \
  music through Sarangi, Flute and Newari drums.\
  Here's a small Solitude from fret for project Naadhe \"Khola Ra Kharani\".\
  We have more artists, poets and performance art in this list.\
  All the performing artists in \"khola ra kharani\" will be provided a space \
  in the upcoming collaborative project extend play of art & music.\
  Which is also a Monthly collaborative workshop organized by Naadhe with the \
  music through Sarangi, Flute and Newari drums.\
  Here's a small Solitude from fret for project Naadhe \"Khola Ra Kharani\".\
  We have more artists, poets and performance art in this list.\
  All the performing artists in \"khola ra kharani\" will be provided a space \
  in the upcoming collaborative project extend play of art & music.\
  Which is also a Monthly collaborative workshop organized by Naadhe with the \
  music through Sarangi, Flute and Newari drums.\
  Here's a small Solitude from fret for project Naadhe \"Khola Ra Kharani\".\
  We have more artists, poets and performance art in this list.\
  All the performing artists in \"khola ra kharani\" will be provided a space \
  in the upcoming collaborative project extend play of art & music.\
  Which is also a Monthly collaborative workshop organized by Naadhe with the \
  help of Himalayan Light Culture House.",
  "Fret is an instrumental trio from Nepal, creating new form of music, \
  furnishing fusion grooves in an evolved manner blending traditional and \
  ethnic music with an influence of eastern classical, western music and world \
  music through Sarangi, Flute and Newari drums.\
  Here's a small Solitude from fret for project Naadhe \"Khola Ra Kharani\".\
  We have more artists, poets and performance art in this list.\
  All the performing artists in \"khola ra kharani\" will be provided a space \
  in the upcoming collaborative project extend play of art & music.\
  Which is also a Monthly collaborative workshop organized by Naadhe with the \
  help of Himalayan Light Culture House.",
  "Fret is an instrumental trio from Nepal, creating new form of music, \
  furnishing fusion grooves in an evolved manner blending traditional and \
  ethnic music with an influence of eastern classical, western music and world \
  music through Sarangi, Flute and Newari drums.\
  Here's a small Solitude from fret for project Naadhe \"Khola Ra Kharani\".\
  We have more artists, poets and performance art in this list.\
  All the performing artists in \"khola ra kharani\" will be provided a space \
  in the upcoming collaborative project extend play of art & music.\
  Which is also a Monthly collaborative workshop organized by Naadhe with the \
  help of Himalayan Light Culture House.",
]