import React, { useState } from 'react'
import yajoo from '../images/cover.jpg'
import MemberCard from './MemberCard'

const KnowUs = ({toggle}) => {
  
  return (
    <div className="bg-light p-4 my-4" id="know_us">
      <p className="h2 text-center">Know Us</p>

      <div className="row">

        {names.map((name, i) =>
          <MemberCard image={images[i]} title={name} details={details[i]}
            pos={i} lastItem={names.length - 1} toggle={toggle} key={i} />)}
      </div>

    </div>
  )
}

export default KnowUs

export const names = ['Yajoo Acharya', 'Prabin Lakhaju', 'Roshik Jadhari']
export const images = [yajoo, yajoo, yajoo]
export const details = [
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
