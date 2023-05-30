import React from "react";
import { imageBaseUrl } from "../../Links";

const InitiationCard = ({ initiation }) => {
  let title = initiation.title;
  let images = initiation.images.map((img) => imageBaseUrl + img);

  return (
    <div className="initiation-card">
      <br/>
      <p className="fs-5 px-4">{title}</p>
      <div className="fw-light px-4" style={{ textAlign: 'justify' }}>
        <img className="img-initiations rounded ms-2" src={images[0]} alt={title} />
        {initiation.details}
      </div>
      {/* Images */}
      <div class="row mt-4 initiations-images px-4">
        <div className="col-md-4">
          <img src={images[1]} alt={title} class="image-initiations-thumbs" />
        </div>
        <div className="col-md-4">
          <img src={images[2]} alt={title} class="image-initiations-thumbs" />
        </div>
        <div className="col-md-4">
          <img src={images[3]} alt={title} class="image-initiations-thumbs" />
        </div>
      </div>
    </div>
  );
};

export default InitiationCard;
