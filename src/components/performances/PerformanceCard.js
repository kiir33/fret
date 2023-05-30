import React from "react";
import { imageBaseUrl } from "../../Links";
import Truncate from "react-truncate";

const PerformanceCard = ({ performance, handleClick }) => {
  let title = performance.title;
  let image = imageBaseUrl + performance.image;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 p-2">
      <div
        className="card bg-body shadow"
        onClick={() => handleClick(performance.link)}
      >
        <img className="card-img-top card-member-img" src={image} alt={title} />
        <div className="card-body">
          <p>
            <Truncate lines={1} ellipsis={<span>...</span>}>
              {title}
            </Truncate>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
