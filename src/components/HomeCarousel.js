import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <div className="carousel-container" id="home">
      <Carousel className="carousel-container" showThumbs={false}
      useKeyboardArrows={true} infiniteLoop={true} >
                <div>
                    <img src="https://source.unsplash.com/random?music" className="carousel-image" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://source.unsplash.com/random?tabla" className="carousel-image" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://source.unsplash.com/random?concert" className="carousel-image" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default HomeCarousel
