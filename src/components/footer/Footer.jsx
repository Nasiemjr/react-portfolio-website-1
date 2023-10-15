import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>EGATOR</a>

    <ul className='permalinks'>
      <li><a href='#'/>Home</li>
      <li><a href='#about'/>About</li>
      <li><a href='#experience'/>Experience</li>
      <li><a href='#services'/>Services</li>
      <li><a href='#portfolio'/>Portfolio</li>
      <li><a href='#testimonials'/>Testimonials</li>
      <li><a href='#contact'/>Contact</li>
    </ul>

    <div className="footer__socials">
      <a href='https://facebook.com'><FaFacebookF/></a>
      <a href='https://instagram.com'><FiInstagram/></a>
      <a href='https://twitter.com'><IoLogoTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; EGATOR Tutorials. All rights reserved.</small>
    </div>

    </footer>
  )
}
