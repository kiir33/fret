import React, { useState } from "react";
import PerformanceCard from "./PerformanceCard";
import eitv from "../images/fret-eitv.jpg";
import naadhe from "../images/fret-naadhe.jpg";
import ritu from "../images/fret-ritu.jpg";
import ktm from "../images/fret-ktm.jpg";
import raaga from "../images/fret-raaga.jpg";

const Performances = () => {
  const images = [eitv, naadhe, ritu, ktm, raaga];
  const names = [
    "EITV Opener(Letter from home) 2021",
    "EITV Opener(Letter from home) 2021",
    "EITV Opener(Letter from home) 2021",
    "EITV Opener(Letter from home) 2021",
    "EITV Opener(Letter from home) 2021",
  ];
  const linkUrls = [
    "https://www.youtube.com/watch?v=_cqPL7Lvi50",
    "https://www.youtube.com/watch?v=_cqPL7Lvi50",
    "https://www.youtube.com/watch?v=_cqPL7Lvi50",
    "https://www.youtube.com/watch?v=_cqPL7Lvi50",
    "https://www.youtube.com/watch?v=_cqPL7Lvi50",
  ];

  const handleClick = (pos) => {
    window.open(linkUrls[pos]);
  };
  return (
    <div className="bg-light p-4 mt-4 rounded" id="performances">
      <p className="h2 text-center">Performances</p>

      <div className="row mt-4">
        {images.map((image, i) => (
          <PerformanceCard
            image={image}
            title={names[i]}
            pos={i}
            key={i}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Performances;
