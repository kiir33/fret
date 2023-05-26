import React from 'react'
import VideoCard from './VideoCard'
import UpcomingAlbum from '../banners/UpcomingAlbum';

const Videos = () => {
  const videos = require('./VideosData.json');
  return (
    <div id="our_creations" className="row pt-4">
      {/* <p className="h2 text-center" >Our Creations</p> */}

      <UpcomingAlbum />

      {
        videos.map((video, i) => (
          <VideoCard video={video} key={i} />
        ))
      }

    </div>
  )
}

export default Videos;
