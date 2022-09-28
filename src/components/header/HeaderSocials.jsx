import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa' 
import './header.css'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://linkedin.com'> <BsLinkedin/></a>
        <a href='http://github.com'><FaGithub/></a>
        <a href='http://github.com'><FaGithub/></a>

    </div>
  )
}

export default HeaderSocials