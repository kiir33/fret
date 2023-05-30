const FeaturedVideo = () => {
  const videoLink = "https://user-images.githubusercontent.com/30041751/241194586-599f793c-e44b-405c-b95b-7039e9f1b4c9.mp4";
  return (
    <video width="100%" className="feature-video my-4" controls autoplay>
      <source src={videoLink} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default FeaturedVideo;