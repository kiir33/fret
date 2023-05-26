import React from "react";
import InitiationCard from "./InitiationCard";
import initiations from "./InitiationsData";

const OurInitiations = () => {
  return (
    <div className="bg-light p-4 my-4 rounded" id="initiations">
      <p className="h2 text-center">Our Initiations</p>

      <div className="row">
        {initiations.map((initiation) => (
          <InitiationCard
            initiation={initiation}
            key={initiation.id}
          />
        ))}
      </div>
    </div>
  );
};

export default OurInitiations;
