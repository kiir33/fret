import React from 'react'
import VideoCard from './VideoCard'

const Videos = () => {
  const videos = require('./VideosData.json');
  return (
    <div id="our_creations" className="row px-4">
      {/* <p className="h2 text-center" >Our Creations</p> */}
      {
        videos.map((video, i) => (
          <VideoCard video={video} key={i} />
        ))
      }

    </div>
  )
}

export default Videos;
