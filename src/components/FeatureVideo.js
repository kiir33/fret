import featured_video from "../videos/featured_video.mp4"

const FeaturedVideo = () => {
  return (
    <video width="100%" controls autoplay>
      <source src={featured_video} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default FeaturedVideo;