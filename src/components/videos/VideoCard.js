import React from 'react'

const VideoCard = ({ video }) => {

  const videoStyle = {
    width: '98%',
    height: 'auto',
    minHeight: '260px',
    borderRadius: '4px'
  }

  return (
    <div className='col-sm-12 col-md-6 col-lg-4 p-2'>
      <div className="text-center my-4">
        <iframe style={videoStyle} src={video.link}
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
    </div>
  )
}

export default VideoCard
