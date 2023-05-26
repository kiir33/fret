import React from 'react'
import VideoCard from './VideoCard'
import { registrationLink } from '../../Links'

const Videos = () => {
  const videos = require('./VideosData.json');
  return (
    <div className="row my-4 p-4">
      <p className="h4 text-center" id="our_creations">Our Creations</p>

      {
        videos.map((video, i) => (
          <VideoCard video={video} key={i} />
        ))
      }

    </div>
  )
}

export default Videos;
