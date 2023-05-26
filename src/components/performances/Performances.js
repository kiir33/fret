import React from "react";
import PerformanceCard from "./PerformanceCard";

const Performances = () => {
  let performances = require('./PerforncesData.json');

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div className="bg-light p-4 mt-1 rounded" id="performances">
      <p className="h2 text-center text-uppercase">Performances</p>

      <div className="row mt-4">
        {performances.reverse().map((performance) => (
        <PerformanceCard
            performance={performance}
            key={performance.id}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Performances;
