import React from "react";
import yajoo from "../images/members/yajoo.jpg";
import prabin from "../images/members/prabin.jpg";
import roshik from "../images/members/roshik.png";
import MemberCard from "./MemberCard";

export const names = ["Yajoo Acharya", "Prabin Lakhaju", "Roshik Jadhari"];
export const images = [yajoo, prabin, roshik];
export const details = [
  <p>
    Yajoo is an ardent flutist from Bhaktapur with graduation in Music majoring
    in Flute from Rabindra Bharati University, Kolkata, India. Being an active
    learner and performer since her childhood, she has performed in both
    National and International music events. She has been actively learning
    North Indian classical Music, particularly flute and vocal music. She was a
    winner of 23rd Bal Shastriya Sangeet competition held by Kirateswor Sangeet
    Ashram 0n 2016. She used to play as a band member of Gorkhali Girls Band and
    many other bands too. She is working as a teacher in Bhaktapur as well as
    Kathmandu so that she could bring some change in the teaching mechanism of
    Nepal. She has collaborated and shared the stage with many artists from
    Kathmandu and Bhaktapur. She has been learning flute since childhood and
    strives to contribute through her music.
  </p>,

  <p>
    Prabin Lakhaju, an enthusiastic percussionist and ethnomusicologist from
    Bhaktapur, has been learning and performing music since his childhood. He is
    an active practitioner of Dapha Traditions. He has been learning North
    Indian Classical Music particularly Vocal, Tabala and Nava - baja ensemble
    of Bhaktapur. He has been involved in project Folklok as a researcher. He is
    working as a music teacher and reviving music which has not been in practice
    in the past few years. He has collaborated with different artists and
    musicians in different events. Besides, he has also worked in Theatre shows
    as a background musician at Aastha Theatre, Bhaktapur and Kunja Natak Ghar,
    New Baneshwor. He is recently working at Nepal Music Archive
  </p>,

  <p>
    Roshik Jadhari is a young enthusiast musician from Bhaktapur who strives to
    explore the unique traditional and folk instruments of Nepal. He has been
    learning music since his childhood and has been participating in musical
    events since then. He is also an active Dapha Practitioner with a
    determination to revitalise the instruments which are in stage of
    extinction. He has been teaching music in Mukti Sangeet Prasikshyan Kendra,
    Bhaktapur. He is studying Ethnomusicology in Kathmandu University,
    Department of music. Beside Sarangi, he has been learning and performing
    flute and Newari instruments. He has shared the stage with many well known
    musicians from Kathmandu and Bhaktapur. He has been playing a vital role to
    preserve the endangered Mwali Baja.
  </p>,
];

const KnowUs = ({ toggle }) => {
  return (
    <div className="bg-light p-4 my-4 rounded">
      {/* <p className="h2 text-center">Know Us</p> */}

      <div className="row">
        {names.map((name, i) => (
          <MemberCard
            image={images[i]}
            title={name}
            details={details[i]}
            pos={i}
            toggle={toggle}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default KnowUs;
