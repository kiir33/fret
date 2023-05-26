import React from "react";
import { imageBaseUrl } from "../../Links";

const InitiationCard = ({ initiation }) => {
  let title = initiation.title;
  let images = initiation.images.map((img) => imageBaseUrl + img);
  
  return (
    <div className="my-4 p-0">
      <p className="h5 mx-2">{title}</p>
      <div className="text-justify ps-2">
        <img className="img-initiations rounded-2" src={images[0]} alt={title} />
        <p className="fw-light">{initiation.details}</p>
      </div>
      {/* Images */}
      <div class="row">
        <div className="col-md-4 col-sm-6 mx-auto my-2">
          <img src={images[1]} alt={title} class="image-initiations-thumbs" />
        </div>
        <div className="col-md-4 col-sm-6 mx-auto my-2">
          <img src={images[2]} alt={title} class="image-initiations-thumbs" />
        </div>
        <div className="col-md-4 mx-auto col-sm-6 my-2">
          <img src={images[3]} alt={title} class="image-initiations-thumbs" />
        </div>
      </div>
    </div>
  );
};

export default InitiationCard;
