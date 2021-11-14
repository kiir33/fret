import React, { useState } from 'react'
import yajoo from '../images/yajoo.png'
import prabin from '../images/prabin.png'
import roshik from '../images/roshik.png'
import MemberCard from './MemberCard'

const KnowUs = ({toggle}) => {
  
  return (
    <div className="bg-light p-4 my-4 rounded" id="know_us">
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
export const images = [yajoo, prabin, roshik]
export const details = [
  "Yajoo is a young enthusiast flutist from Bhaktapur who has completed her graduation in Music, \
  flute as a major from Rabindra Bharati University, Kolkata, India. She was a winner of 23rd \
  Bal Sastriya Sangeet competition held by Kirateswor Sangeet Ashram 0n 2016.  She used to play \
  as a band member of Gorkhali Girls Band. She has been actively participating in many musical \
  events. She has been learning flute from her very early age and moving on with the wide view \
  of contributing through her music.",
  
  "Prabin Lakhaju, an enthusiast percussionist from Bhaktapur  who has been learning and \
  performing music since his childhood is engaged with newari Dapha traditions and now \
  studying Ethnomusicology in Kathmandu University, Department of Music.  He is an active \
  practitioner of Dapha Traditions. Later on, after joining the Department of Music, Kathmandu \
  University, he has been learning North Indian Classical Music especially vocal, tabla and \
  Navabaja ensemble. \
  He has been involved in project Folklok as a researcher. He is working as a music teacher \
  and as an ethnomusicologist in his locality and reviving music which has been lost in the \
  past few years. He has collaborated with different artists and musicians at Bhaktapur in \
  different events. He also had been involved in Theatre shows as a background musician at \
  Aastha Theatre, Bhaktapur and Kunja Natak Ghar, New Baneshwor.",

  "Roshik Jadhari is a young artist from Bhaktapur who has been playing different musical \
  instrument from his early childhood. He used to play in Band Khalimalicha, and teaching \
  music in Mukti Sangeet Prasikshyan Kendra, Bhaktapur.  He is studying Ethnomusicology in \
  Kathmandu University, Department of music. Beside Sarangi, he has been learning and performing \
  flute and newari instruments in different places. He has been playing vital role to preserve \
  the endangered Mwali Baja.",
]
