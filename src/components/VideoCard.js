import React from 'react'

const VideoCard = ({ videoLink }) => {

  const videoStyle = {
    maxWidth: '100%',
    height: 'auto',
    minHeight: '240px',
    borderRadius: '4px'
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 m-auto text-center my-4">
      <iframe style={videoStyle} src={videoLink}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    </div>
  )
}

export default VideoCard
