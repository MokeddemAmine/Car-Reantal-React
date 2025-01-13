import React from 'react';
import { FaStar } from "react-icons/fa";

const testimonialData = [
    {
        name:'Mohammed',
        image:"",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay:"0",
    },
    {
        name:'Reda',
        image:"",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay:'300',
    },
    {
        name:'Nouri',
        image:"",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay:'1000',
    }
];
const Testimonial = () => {
  return (
    <div className='testimonial py-5'>
      <div className="container">
        <div className='text-center mb-4'>
            <h2 data-aos="fade-up" className="text-capitalize mb-2 fs-4">what our clients say about us</h2>
            <p data-aos="fade-up" className='m-0 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, deserunt?</p>
        </div>
        <div className='row'>
            {testimonialData.map((data) => (
                <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.name} className="col-md-6 col-lg-4 p-3">
                    <div className="card border-dark text-center">
                        <div className="card-body d-flex flex-column gap-3">
                            <div className="image">
                            <img className='rounded-circle h-25 w-25' src="https://picsum.photos/200" alt={data.name+' picture'} />
                            </div>
                            <div>
                            <FaStar className='text-primary'/>
                            <FaStar className='text-primary'/>
                            <FaStar className='text-primary'/>
                            <FaStar className='text-primary'/>
                            <FaStar className='text-primary'/>
                            </div>
                            <p className="fs-6 m-0">{data.description}</p>
                            <p className='fs-5 m-0 text-center fw-bold'>{data.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
