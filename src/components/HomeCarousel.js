import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import fret1 from '../images/homepage/fret-1.jpg'
import fret2 from '../images/homepage/fret-2.jpg'
import fret3 from '../images/homepage/fret-3.png'
import fret4 from '../images/homepage/fret-4.jpg'
import fret5 from '../images/homepage/fret-5.jpg'
import fret6 from '../images/homepage/fret-6.jpg'
import fret7 from '../images/homepage/fret-7.jpg'
import fret8 from '../images/homepage/fret-8.jpg'

const HomeCarousel = () => {
  return (
    <div className="carousel-container" id="home">
      <Carousel className="carousel-container" showThumbs={false}
      useKeyboardArrows={true} infiniteLoop={true} >
                <div>
                    <img src={fret4} className="carousel-image rounded" />
                    <p className="legend text-info">FRET</p>
                </div>
                <div>
                    <img src={fret6} className="carousel-image rounded" />
                    {/* <p className="legend text-info">FRET</p> */}
                </div>
                <div>
                    <img src={fret7} className="carousel-image rounded" />
                    {/* <p className="legend text-info">FRET</p> */}
                </div>
                <div>
                    <img src={fret8} className="carousel-image rounded" />
                    <p className="legend text-info">FRET with NIGHT</p>
                </div>
                <div>
                    <img src={fret5} className="carousel-image rounded" />
                    <p className="legend text-info">Baaja Gaja Chowk</p>
                </div>
                <div>
                    <img src={fret1} className="carousel-image rounded" />
                    <p className="legend text-info">Performance at Bikalpa Art Center</p>
                </div>
                <div>
                    <img src={fret2} className="carousel-image rounded" />
                    <p className="legend text-info">Fret Performing at Patan</p>
                </div>
                <div>
                    <img src={fret3} className="carousel-image rounded" />
                    <p className="legend text-info">Raaga Chikitsa</p>
                </div>
            </Carousel>
    </div>
  )
}

export default HomeCarousel
