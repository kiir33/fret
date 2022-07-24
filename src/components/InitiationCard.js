import React from "react";
import Truncate from "react-truncate";
const InitiationCard = ({ image, title, details }) => {
  return (
    <div className="my-4 p-0">
      <p className="card-title h5 mb-2">{title}</p>
      <div className="text-start">
        <img
          className="img-initiations rounded-2"
          src={image}
          alt="Image"
        />
        <p className="text-justify fw-light">{details}</p>
      </div>
    </div>
  );
};

export default InitiationCard;
