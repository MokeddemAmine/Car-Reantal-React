import React from 'react'
import carPng from '../../assets/car.png';
import yellowCarPng from '../../assets/banner-car.png';
const Hero = ({theme}) => {
  return (
    <div className='hero'>
      <div className="container d-flex">
        <div className="row align-items-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="col-md-6 order-md-2">
                <img src={theme=="dark"?carPng:yellowCarPng} className='drop-shadow-sm w-100' alt="car rental"/>
            </div>
            <div className="col-md-6 order-md-1">
                <p data-aos="fade-up" className='text-primary fs-4'>Effortless</p>
                <h1 data-aos="fade-up" data-aos-delay="600" className='fs-1 fw-bold'>Car Rental</h1>
                <p data-aos="fade-up" data-aos-delay="1000" className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere reiciendis illo, praesentium dignissimos ad eos ipsa qui?</p>
                <button data-aos="fade-up" data-aos-delay="1600" className='btn btn-primary'>Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
