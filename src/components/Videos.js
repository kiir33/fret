import React from 'react'
import VideoCard from './VideoCard'

const videoLinks = [
  "https://www.youtube.com/embed/Xed9YL3tXiU",
  "https://www.youtube.com/embed/_cqPL7Lvi50",
  "https://www.youtube.com/embed/THPkX2oq-4c"
]

const Videos = () => {
  return (
    <div className="row my-4 p-4">
      <p className="h4 text-center" id="our_creations">Our Creations</p>

      {
        videoLinks.map((item, i) => (
          <VideoCard videoLink={item} key={i} />
        ))
      }

    </div>
  )
}

export default Videos
