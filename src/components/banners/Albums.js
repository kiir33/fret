import {
  imageBaseUrl,
  mokshaNoodleLink,
  // noodleArtistImgLink,
  noodleLogoLink
} from "../../Links";

const Albums = () => {
  const albumCover = imageBaseUrl + "241267187-da557c43-a812-44cd-8061-4f9bd1c22740.jpg";

  return (
    <div class="album-section mt-2">
      {/* <p class="title h2 text-center text-uppercase">Albums</p> */}
      <div className="albums row text-light">
        <div class="album col-md-2 col-sm-12 my-4 mx-auto text-center">
          <img src={albumCover} className="album-cover" alt="Moksha" />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-10 m-auto px-2 album-details text-center">
          <p className="h3">Moksha</p>
          <p className="fs-5 fw-light">
            <span className="fw-bold"> Fret</span>'s Debut Album is here now. <br />
            Released on
            <span className="fw-bold"> June 27, 2023 </span>
          </p>
          Available on:
          <a href={mokshaNoodleLink} target="blank">
            <img src={noodleLogoLink} alt="noodle" className="noodle-logo mx-2 btn btn-dark" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Albums;