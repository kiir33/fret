import React from 'react'
import yajoo from '../images/cover.jpg'

const KnowUs = () => {
  return (
    <div className="bg-light py-4 mb-5">
      <p className="h2 text-center">Know Us</p>
      <div className="row m-5">
      <div className="col-8">
        <p className="h4 mb-4">Yajoo Acharya</p>
        <p>
          Fret is an instrumental trio from Nepal, creating new form of music, furnishing fusion grooves in an evolved manner blending traditional and ethnic music with an influence of eastern classical, western music and world music through Sarangi, Flute and Newari drums.
          Here's a small Solitude from fret for project Naadhe "khola ra kharani".
          We have more artists, poets and performance art in this list.
          All the performing artists in "khola ra kharani"will be provided a space in the upcoming collaborative project extend play of art &music.
          Which is also a Monthly collaborative workshop organized by Naadhe with the help of Himalayan Light Culture House.
        </p>
      </div>
      <div className="col m-auto">
        <img src={yajoo} className="rounded-circle member-img ms-5" />
      </div>
      </div>
    </div>
  )
}

export default KnowUs
