import React from 'react'
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import { Navlinks } from './Navbar';

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div style={{translate:'.5s'}} className={`nav-mobile d-md-none position-fixed ${showMenu?"start-0":"start-n100"} top-0 z-1 shadow-sm`}>
      <div className="card h-100 p-2 pt-5">
            <div className="d-flex align-items-center justify-content-start gap-3">
                <FaUserCircle size={50} />
                <div>
                    <h2 className='fs-4'>Hello User</h2>
                    <h3 className='text-secondary fs-5'>Premium user</h3>
                </div>
            </div>
            <nav className='mt-4'>
                <ul className="list-unstyled d-flex flex-column gap-3 ps-3">
                    {
                        Navlinks.map((data) => (
                            <li key={data.id}>
                                <a href={data.link} className='text-uppercase text-decoration-none'>{data.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className="copiright position-absolute bottom-0 pb-3">
                Made with <FaHeart className='text-primary'/> by Amine Mokeddem
            </div>
      </div>
    </div>
  )
}

export default ResponsiveMenu
