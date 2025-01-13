import React, { useState } from 'react'
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import {HiMenuAlt1,HiMenuAlt3} from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

export const Navlinks = [
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
    const [showMenu,setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <nav className='navbar shadow-lg border-bottom'>
      <div className="container">
        <div className="flex-grow-1 d-flex justify-content-between align-items-center py-2">
            <div>
                <h1 className='fs-4 fw-bold m-0'>Car Rental</h1>
            </div>
            <div className='d-none d-md-block'>
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
            <div className='d-flex align-items-center gap-3'>
                {
                    theme == 'dark'?
                    (
                        <BiSolidSun onClick={() => setTheme('light')} className='fs-4'/>
                    ):
                    (
                        <BiSolidMoon onClick={() => setTheme('dark')} className='fs-4'/>
                    )
                }
                <div className='d-md-none'>
                {
                    showMenu?(
                        <HiMenuAlt1 onClick={toggleMenu}
                        size={30}
                        className="cursor-pointer"/>
                    ):(
                        <HiMenuAlt3 onClick={toggleMenu}
                            size={30}
                            className="cursor-pointer"
                        />
                    )
                }
            </div>
            </div>
            
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu}/>
    </nav>
  )
}

export default Navbar
