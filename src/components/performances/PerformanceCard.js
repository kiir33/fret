import React from "react";
import { imageBaseUrl } from "../../Links";

const PerformanceCard = ({ performance, handleClick }) => {
  let title = performance.title;
  let image = imageBaseUrl + performance.image;
  return (
    <div
      className="card bg-body shadow col-4 my-4 mx-auto p-0"
      style={{ width: "18rem" }}
      onClick={() => handleClick(performance.link)}
    >
      <img className="card-img-top card-member-img" src={image} alt={title} />
      <div className="card-body">
        <p className="card-title h5 text-center mb-2">{title}</p>
      </div>
    </div>
  );
};

export default PerformanceCard;
