import React from "react";
import PerformanceCard from "./PerformanceCard";
import eitv_img from "../images/performances/fret-eitv.jpg";
import naadhe_img from "../images/performances/fret-naadhe.jpg";
import ritu_img from "../images/performances/fret-ritu.jpg";
import electrowave_img from "../images/performances/fret-ktm.jpg";
import raaga_img from "../images/performances/fret-raaga.jpg";
import seto_naadh_img from "../images/performances/seto_naadh.jpg";
import four_20_img from "../images/performances/four_20.jpg";
import baja_gaja_img from "../images/performances/baja_gaja.jpg";
import music_for_all_img from "../images/performances/music_for_all.jpg"
import heritage_n_thanks_gvg_img from "../images/performances/heritage_n_thanks_gvg.jpg"

const Performances = () => {
  let eitv_opener_url = "https://youtu.be/5RclRxiWSJA?t=2456";
  let raga_chikitsa_url = "https://www.facebook.com/MusicFret/videos/216423477112786";
  let khola_ra_kharani_url = "https://www.facebook.com/BramhaNaadh/videos/639328153715241";
  let ritustav_url = "https://www.facebook.com/MusicFret/videos/4650116888386555";
  let electrowave_url = "https://www.facebook.com/watch/?v=630174181696769";
  let seto_naadh_url = "https://www.facebook.com/MusicFret/videos/216423477112786";
  let four_20_url = "https://www.facebook.com/MusicFret/videos/216423477112786";
  let baja_gaja_url = "https://www.facebook.com/MusicFret/videos/216423477112786";
  let music_for_all_url = "https://www.facebook.com/photo?fbid=608820374533191";
  let heritage_n_thanks_gvg_url = "https://www.facebook.com/photo?fbid=582372557177973";

  const images = [eitv_img, raaga_img, naadhe_img, ritu_img, electrowave_img,
    seto_naadh_img, four_20_img, baja_gaja_img, music_for_all_img, heritage_n_thanks_gvg_img];
  const linkUrls = [
    eitv_opener_url,
    raga_chikitsa_url,
    khola_ra_kharani_url,
    ritustav_url,
    electrowave_url,
    seto_naadh_url,
    four_20_url,
    baja_gaja_url,
    music_for_all_url,
    heritage_n_thanks_gvg_url
  ];
  const names = [
    "EITV Opener(Letter from home) 2021",
    "Raga Chikitsha, Charity Event",
    "Khola ra Kharani, Lockdown Creation",
    "Ritustav, Sharad",
    "Electrowave of Kathmandu",
    "Philhaal - Setonaadh",
    "4:20",
    "Baja Gaja Chowk",
    "Music for all",
    "Heritage & Thanksgiving"
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
