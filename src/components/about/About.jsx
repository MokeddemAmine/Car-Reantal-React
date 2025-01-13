import React from 'react'
import CarPng from '../../assets/car1.png';
const About = ({theme}) => {
  return (
    <div className='about'>
      <div className="container d-flex">
        <div className="flex-grow-1 row align-items-center">
            <div data-aos="slide-right" data-aos-delay="1500" className="col-md-6 order-2 order-md-1">
                <img src={CarPng} alt="about image" className='mw-100' />
            </div>
            <div className="col-md-6 order-1 order-md-2">
                <div className='d-flex flex-column gap-3'>
                    <h2 data-aos="fade-up" className="fs-2 fw-bold">About us</h2>
                    <p data-aos="fade-up" className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid!</p>
                    <p data-aos="fade-up" className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid!</p>
                    <div>
                    <button data-aos="fade-up" className="btn btn-outline-primary text-capitalize">get started</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
