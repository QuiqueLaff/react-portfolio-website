import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo'>Enrique Laffranconi</a>
      <ul className='permalinks'>
        <li><a href='#header' >Home </a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#services'>services</a></li>
        <li><a href='#portfolio'>portfolio</a></li>
        <li><a href='#testimonials'>testimonials</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>
     
      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/enrique-laffranconi/'><AiOutlineLinkedin /></a>
        <a href='http://github.com'><FaGithub/></a>
        <a href='https://instagram.com'><AiOutlineInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Enrique Laffranconi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
