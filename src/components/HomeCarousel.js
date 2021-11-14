import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import fret1 from '../images/fret-1.jpg'
import fret2 from '../images/fret-2.jpg'
import fret3 from '../images/fret-3.png'

const HomeCarousel = () => {
  return (
    <div className="carousel-container" id="home">
      <Carousel className="carousel-container" showThumbs={false}
      useKeyboardArrows={true} infiniteLoop={true} >
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
