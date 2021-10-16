import React from 'react'
import VideoCard from './VideoCard'

const Videos = () => {
  return (
    <div className="row my-4 p-4">
      <p className="h4 text-center" id="our_creations">Our Creations</p>

      {
        videoLinks.map((item, i) => (
          <VideoCard video={item} key={i} />
        ))
      }

    </div>
  )
}

export default Videos

const videoStyle = {
  maxWidth: '100%',
  height: 'auto',
  minHeight: '240px',
  borderRadius: '4px'
}

const videoLinks = [
  <iframe style={videoStyle} src="https://www.youtube.com/embed/wxPM8ueY-gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  <iframe style={videoStyle} src="https://www.youtube.com/embed/wxPM8ueY-gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  <iframe style={videoStyle} src="https://www.youtube.com/embed/wxPM8ueY-gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
]

