import React from 'react'
import yajoo from '../images/cover.jpg'
import MemberCard from './MemberCard'

const KnowUs = () => {
  const images = [yajoo, yajoo, yajoo]
  const names = ['Yajoo Acharya', 'Prabin Lakhaju', 'Roshik Jadhari']

  return (
    <div className="bg-light py-4 mb-5">
      <p className="h2 text-center">Know Us</p>

      <div className="d-flex">

        {names.map((name, i) =>
          <MemberCard image={images[i]} title={name} details={details[i]} key={i} />)}
      </div>

    </div>
  )
}

export default KnowUs

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
