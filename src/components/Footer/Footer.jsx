import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
    {
        title:'home',
        link:'#',
    },
    {
        title:'about',
        link:'/#about',
    },
    {
        title:'contact',
        link:'/#contact',
    },
    {
        title:'blog',
        link:'/#blog',
    },
]
const Footer = () => {
  return (
    <footer className='py-4'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3 p-3">
                    <h3 className="fs-5 fw-bold text-capitalize mb-3">car rental</h3>
                    <p className="mb-0 fs-6 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.</p><br/>
                    <div className='d-flex align-items-center gap-3 mb-3'>
                        <FaLocationArrow />
                        <p className='mb-0'>Mokeddem, Amine Mohammed</p>
                    </div>
                    <div className='d-flex align-items-center gap-3 mb-3'>
                        <FaMobileAlt/>
                        <p className='mb-0'>+213 655069573</p>
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <a href="" className='social-icon'>
                            <FaInstagram className='fs-3'/>
                        </a>
                        <a href="" className='social-icon'>
                            <FaFacebook className='fs-3'/>
                        </a>
                        <a href="" className='social-icon'>
                            <FaLinkedin className='fs-3'/>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 p-3">
                    <h3 className="fs-5 fw-bold text-capitalize mb-3">important links</h3>
                    <ul className="list-unstyled">
                        {FooterLinks.map((link) => (
                            <li key={link.title} className='mb-2'>
                                <span className='me-2'>&#11162;</span>
                                <a href={link.link} className='link text-decoration-none text-capitalize text-secondary'>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 col-lg-3 p-3">
                    <h3 className="fs-5 fw-bold text-capitalize mb-3">links</h3>
                    <ul className="list-unstyled">
                        {FooterLinks.map((link) => (
                            <li key={link.title} className='mb-2'>
                                <span className='me-2'>&#11162;</span>
                                <a href={link.link} className='link text-decoration-none text-capitalize text-secondary '>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 col-lg-3 p-3">
                    <h3 className="fs-5 fw-bold text-capitalize mb-3">locations</h3>
                    <ul className="list-unstyled">
                        {FooterLinks.map((link) => (
                            <li key={link.title} className='mb-2'>
                                <span className='me-2'>&#11162;</span>
                                <a href={link.link} className='link text-decoration-none text-capitalize text-secondary '>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
