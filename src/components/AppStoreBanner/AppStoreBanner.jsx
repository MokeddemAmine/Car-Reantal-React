import React from 'react'
import pattern from '../../assets/website/pattern.jpeg';
import PlayStoreImg from '../../assets/website/play_store.png';
import AppStoreImg from '../../assets/website/app_store.png';

const bannerImg = {
    backgroundImage:`url(${pattern})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    height:'100%',
    width:'100%'
}

const AppStoreBanner = () => {
  return (
    <div className='app-store-banner py-5'>
      <div className="container rounded d-flex align-items-center justify-content-center" style={bannerImg}>
        <div>
            <div>
                <h2 data-aos="fade-up" className="text-capitalize fs-4 text-center text-dark fw-bold">get started with our app</h2>
                <p data-aos="fade-up" className='text-secondary px-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, quisquam adipisci soluta eum porro odio.</p>
                <div data-aos="fade-up" className='d-flex justify-content-center flex-wrap align-items-center gap-4'>
                    <a href="">
                        <img src={PlayStoreImg} alt="" className='app-image' />
                    </a>
                    <a href="">
                        <img src={AppStoreImg} alt="" className='app-image' />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppStoreBanner
