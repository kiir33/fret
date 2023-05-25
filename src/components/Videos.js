import React from 'react'
import VideoCard from './VideoCard'
import { registrationLink } from '../Links'

const videoLinks = [
  "https://www.youtube.com/embed/Xed9YL3tXiU",
  "https://www.youtube.com/embed/_cqPL7Lvi50",
  "https://www.youtube.com/embed/THPkX2oq-4c"
]

const Videos = () => {
  return (
    <div className="row my-4 p-4">
      <div className='row bg-warning rounded mx-auto p-2'>
        <p className='col-md-6 col-sm-12 my-auto h5 text-center'>
          <b>Hurry up!</b> <br />
          Registrations for <b>Fret Scool</b> are open!</p>
        <a target="blank" className="col-md-4 col-sm-12 btn btn-dark p-3 text-xl-center mx-auto my-2" href={registrationLink}>Click Here to Register Now</a>
      </div>

      <p className="h4 text-center mt-5" id="our_creations">Our Creations</p>

      {
        videoLinks.map((item, i) => (
          <VideoCard videoLink={item} key={i} />
        ))
      }

    </div>
  )
}

export default Videos
