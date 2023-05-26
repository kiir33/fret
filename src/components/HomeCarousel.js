import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { imageBaseUrl } from '../Links'

const HomeCarousel = () => {

  const text4 = 'FRET';
  let carouselImages = [
    {
      "caption": text4,
      "image": "241194013-8ba8b68a-a908-473b-af5a-0060a478a209.jpg"
    },
    {
      "caption": text4,
      "image": "241194022-49d276cf-1f4a-429b-a0ee-136d1322f0e7.jpg"
    },
    {
      "caption": text4,
      "image": "241194024-df3e9d61-957d-4552-81d9-14244aa30f08.jpg"
    },
    {
      "caption": "FRET with NIGHT",
      "image": "241194027-23f629a7-48f2-46fe-aae0-27860fef04ff.jpg"
    },
    {
      "caption": "Baaja Gaja Chowk",
      "image": "241194016-812e7092-a8b0-49d6-9a9c-7ff1cff69976.jpg"
    },
    {
      "caption": "Performance at Bikalpa Art Center",
      "image": "241193957-affa73f3-5bc5-4704-a580-78fcbe81288d.jpg"
    },
    {
      "caption": "Fret Performing at Patan",
      "image": "241193789-796ffdfc-8cfd-493b-a197-c325b4acd5ae.jpg"
    },
    {
      "caption": "Raaga Chikitsa",
      "image": "241193974-512995d6-8e49-438e-bbe6-e9fe540a2383.png"
    }
  ]

  return (
    <div className="carousel-container" id="home">
      <Carousel className="carousel-container" showThumbs={false}
        useKeyboardArrows={true} infiniteLoop={true} >
        {
          carouselImages.map((carousel) => {
            let image = imageBaseUrl + carousel.image;
            return (
              <div>
                <img src={image} className="carousel-image rounded" alt={carousel.caption} />
                <p className="legend text-info">{carousel.caption}</p>
              </div>);
          })
        }
      </Carousel>
    </div>
  )
}

export default HomeCarousel;
