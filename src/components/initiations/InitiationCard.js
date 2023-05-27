import React from "react";
import { imageBaseUrl } from "../../Links";

const InitiationCard = ({ initiation }) => {
  let title = initiation.title;
  let images = initiation.images.map((img) => imageBaseUrl + img);

  return (
    <div className="initiation-card">
      <p className="fs-5 mx-2">{title}</p>
      <div className="fw-light px-2" style={{ textAlign: 'justify' }}>
        <img className="img-initiations rounded-2 ms-3" src={images[0]} alt={title} />
        {initiation.details}
      </div>
      {/* Images */}
      <div class="row mt-5 initiations-images">
        <div className="col-md-4 col-sm-6 mx-auto">
          <img src={images[1]} alt={title} class="image-initiations-thumbs" />
        </div>
        <div className="col-md-4 col-sm-6 mx-auto">
          <img src={images[2]} alt={title} class="image-initiations-thumbs" />
        </div>
        <div className="col-md-4 mx-auto col-sm-6">
          <img src={images[3]} alt={title} class="image-initiations-thumbs" />
        </div>
      </div>
    </div>
  );
};

export default InitiationCard;
