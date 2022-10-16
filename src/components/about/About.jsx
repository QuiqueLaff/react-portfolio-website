import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'> 
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small> 2 Year Working freelance </small>
              </article> 

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Living in</h5>
                <small>Amsterdam</small>
              </article> 

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Looking for</h5>
                <small>Full-time job</small>
              </article> 
            </div>
            <p>I'm currently working as a freelance Web Developer and I'm looking for a full-time position as a Frontend Engineer. I've recently started on this path after ending a 10 year journey working on the films industry and decided to fully commit to it. I love turning ideas into a reality writing code, it's empowering and stimulating. I can't wait to start working together with an engineering team. Let's have a chat!</p>
            <a href='#contact'className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>  
    )
}

export default About