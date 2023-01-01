import React from "react";
const PerformanceCard = ({ image, title, pos, handleClick }) => {
  return (
    <div
      className="card bg-body shadow col-4 my-4 mx-auto p-0"
      style={{ width: "18rem" }}
      onClick={() => handleClick(pos)}
    >
      <img className="card-img-top card-member-img" src={image} alt={title} />
      <div className="card-body">
        <p className="card-title h5 text-center mb-2">{title}</p>
      </div>
    </div>
  );
};

export default PerformanceCard;
