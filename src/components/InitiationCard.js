import React from "react";
const InitiationCard = ({ image, title, details }) => {
  return (
    <div className="my-4 p-0">
      <p className="h5 mx-2">{title}</p>
      <div className="text-justify ps-2">
        <img className="img-initiations rounded-2" src={image} alt="Image" />
        <p className="fw-light">{details}</p>
      </div>
    </div>
  );
};

export default InitiationCard;
