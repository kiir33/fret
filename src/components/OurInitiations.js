import React, { useState } from "react";
import ambience from "../images/initiations/ambience.png";
import InitiationCard from "./InitiationCard";

const names = ["Ambience of Bhaktapur"];
const images = [ambience];
const details = [
  <p>
    Bhaktapur is well known all over the world for its culture, heritage and
    traditions. Within the culture of Bhaktapur, Musical culture and tradition
    is an important accept. Music is a very essential factor which keeps the
    ambience alive in Bhaktapur. WIthout the existing traditional music,
    Bhaktapur will lose its soul. So we have named this initiation as ‘Ambience
    of Bhaktapur’. Nowadays, we can see our young generation are getting
    detached from their own origin, of which music is a dominant aspect. To keep
    the ambience of Bhaktapur alive, music should be understood and learned.
    So,in order to understand anything, we have to spread knowledge about it. So
    the most effective way of doing so is to give it an academic direction.
    ‘Ambience of Bhaktapur’ is an initiation designed by Fret with a motive to
    make the music and musical instrument known among students from their school
    level. We believe giving musical knowledge about music from school level
    will develop an interest to learn music and even encourage them to pursue
    music as a profession too. Through this initiative we firmly believe to
    promote our music and musical instruments into the world music scenario.That
    is why we are taking initiatives through schools of Bhaktapur.
  </p>,
];

const OurInitiations = ({}) => {
  return (
    <div className="bg-light p-4 my-4 rounded" id="know_us">
      <p className="h2 text-center">Our Initiations</p>

      <div className="row">
        {names.map((name, i) => (
          <InitiationCard
            image={images[i]}
            title={name}
            details={details[i]}
            pos={i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default OurInitiations;
