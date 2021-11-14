import React, { useState } from 'react'
import MemberCard from './MemberCard'
import eitv from '../images/fret-eitv.jpg'
import naadhe from '../images/fret-naadhe.jpg'
import ritu from '../images/fret-ritu.jpg'
import ktm from '../images/fret-ktm.jpg'
import raaga from '../images/fret-raaga.jpg'

const Performances = () => {

  const images = [eitv, naadhe, ritu, ktm, raaga]
  const names = [
    'EITV Opener(Letter from home) 2021',
    'EITV Opener(Letter from home) 2021',
    'EITV Opener(Letter from home) 2021',
    'EITV Opener(Letter from home) 2021',
    'EITV Opener(Letter from home) 2021',
  ]

  return (
    <div className="bg-light p-4 mt-4 rounded" id="performances">
      <p className="h2 text-center">Performances</p>

      <div className="row mt-4">

        
          {/* {images.map((image, i) =>
            <MemberCard image={image} title={names[i]} details={details[i]}
              pos={i} lastItem={names.length - 1} toggle={toggle} key={i} />)} */}
        

        <div className="col-4 text-center m-auto">
          <img className="image-performances" src={ritu} alt="Card image cap" /><br />
          <a href="#">
            <p className="btn text-dark px-0">
              EITV Opener(Letter from home) 2021
            </p>
          </a>
        </div>

        <div className="col-4 text-center m-auto">
          <img className="image-performances" src={eitv} alt="Card image cap" /><br />
          <a href="#">
            <p className="btn text-dark px-0">
              EITV Opener(Letter from home) 2021
            </p>
          </a>
        </div>

        <div className="col-4 text-center m-auto">
          <img className="image-performances" src={naadhe} alt="Card image cap" /><br />
          <a href="#">
            <p className="btn text-dark px-0">
              EITV Opener(Letter from home) 2021
            </p>
          </a>
        </div>

      </div>

    </div>
  )
}

export default Performances
