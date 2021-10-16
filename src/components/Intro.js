import React from 'react'
import cover from '../images/cover.jpg'

const Intro = () => {
  return (
    <div className="row p-4">
      <p className="h4 text-center fw-bolder my-4">ABOUT FRET</p>
      <div className="mx-auto my-2 col-md-12 col-lg-8">   
        <p>
          Fret is an instrumental trio from Nepal, creating new form of music, furnishing fusion grooves in an evolved manner blending traditional and ethnic music with an influence of eastern classical, western music and world music through Sarangi, Flute and Newari drums.
          Here's a small Solitude from fret for project Naadhe "khola ra kharani".
          We have more artists, poets and performance art in this list.
          All the performing artists in "khola ra kharani"will be provided a space in the upcoming collaborative project extend play of art &music.
          Which is also a Monthly collaborative workshop organized by Naadhe with the help of Himalayan Light Culture House.
        </p>
      </div>
      <div className="mx-auto my-2 col-md-12 col-lg-4">
        <img src={cover} className="img-fluid rounded" />
      </div>
    </div>
  )
}

export default Intro
