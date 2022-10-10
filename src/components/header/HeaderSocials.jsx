import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa' 
import './header.css'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://linkedin.com'> <BsLinkedin/></a>
        <a href='https://github.com/enriquelaffranconi'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials