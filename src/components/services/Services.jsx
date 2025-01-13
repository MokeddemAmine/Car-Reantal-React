import React from 'react';
import {FaCameraRetro} from 'react-icons/fa';
import {GiNotebook} from 'react-icons/gi';
import {SlNote} from 'react-icons/sl';

const skillData = [
    {
        name:'best price',
        icon:(
            <FaCameraRetro className="fs-3 icon text-primary"/>
        ),
        link:'#',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay:'0',
    },
    {
        name:'fast and safe',
        icon:(
            <GiNotebook className="fs-3 icon text-primary"/>
        ),
        link:'#',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay:'500',
    },
    {
        name:'experience drivers',
        icon:(
            <SlNote className="fs-3 icon text-primary"/>
        ),
        link:'#',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay:'1000',
    }
]
const Services = () => {
  return (
    <div className='services py-5'>
      <div className="container d-flex flex-column">
        <div className="pb-4">
            <h2 className="fs-2 fw-bold text-center">Why Choose Us</h2>
        </div>
        <div className="flex-grow-1 row align-items-center">
            {skillData.map((skill) => (
                <div className="col-md-6 col-lg-4 p-4" key={skill.name} data-aos="fade-up" data-aos-delay={skill.aosDelay} >
                    <div className="card text-center p-4 border-0">
                        <div className="car-body d-flex flex-column gap-3">
                            <div>{skill.icon}</div>
                            <h3 className='text-capitalize'>{skill.name}</h3>
                            <p>{skill.description}</p>
                            <a href={skill.link} className='text-capitalize text-decoration-none fw-bold fs-5'>learn more</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Services
