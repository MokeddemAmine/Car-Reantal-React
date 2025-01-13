import React from 'react';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car5.png';
import car3 from '../../assets/car6.png';

const CarListData = [
    {
        name:'bmw ux',
        price:100,
        image:car1,
        aosDelay:'0',
    },
    {
        name:'kia ux',
        price:140,
        image:car2,
        aosDelay:'500',
    },
    {
        name:'bmw ux',
        price:100,
        image:car3,
        aosDelay:'1000',
    },
];
const CarList = () => {
  return (
    <div className='car-list py-5'>
      <div className="container">
        <h2 data-aos="fade-up"  className="text-capitalize fs-3 fs-bold">discover our cars</h2>
        <p data-aos="fade-up" className='fs-6 text-secondary pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dicta magnam? Laboriosam?</p>
        <div className="row">
            {CarListData.map((car) => (
                <div className="col-md-6 col-lg-4 p-3" data-aos="fade-up" data-aos-delay={car.aosDelay}>
                    <div className='car position-relative p-3 border border-secondary rounded d-flex flex-column gap-3'>
                        <div className='image w-100'>
                            <img className='h-100' src={car.image} alt={car.name} />
                        </div>
                        <div className='d-flex flex-column gap-1'>
                            <h3 className='text-primary fw-bold fs-4 text-capitalize'>{car.name}</h3>
                            <div className='d-flex justify-content-between align-items-center fw-bold'>
                                <p className='m-0'>{car.price}$/Day</p>
                                <a href="#" className='text-capitalize text-decoration-none text-dark'>details</a>
                            </div>
                        </div>
                        <p className='fs-5 fw-bold position-absolute top-0'>12Km</p>
                    </div>
                </div>
            ))}
        </div>
        <div data-aos="fade-up" className='d-flex justify-content-center mt-4'>
            <button className='text-capitalize btn btn-outline-primary'>get started</button>
        </div>
      </div>
    </div>
  )
}

export default CarList