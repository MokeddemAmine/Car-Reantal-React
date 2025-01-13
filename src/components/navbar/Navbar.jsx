import React from 'react'
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
const Navlinks = [
    {
        id:'1',
        name:'home',
        link:'/',
    },
    {
        id:'2',
        name:'cars',
        link:'/cars',
    },
    {
        id:'3',
        name:'about',
        link:'/about',
    },
    {
        id:'4',
        name:'booking',
        link:'/booking',
    }
];
const Navbar = ({theme,setTheme}) => {
  return (
    <nav className='shadow-lg border-bottom'>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2">
            <div>
                <h1 className='fs-4 fw-bold m-0'>Car Rental</h1>
            </div>
            <div>
                <ul className="d-flex align-items-center gap-4 list-unstyled m-0">
                    {Navlinks.map((link) => (
                        <li key={link.id} className='py-2'>
                            <a href={link.link} className="py-1 text-decoration-none text-dark text-uppercase link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {
                    theme == 'dark'?
                    (
                        <BiSolidSun onClick={() => setTheme('light')} className='fs-4'/>
                    ):
                    (
                        <BiSolidMoon onClick={() => setTheme('dark')} className='fs-4'/>
                    )
                }
                
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
