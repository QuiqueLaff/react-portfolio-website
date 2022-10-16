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
            <p>After years working in the Film Industry, I decided to have a career switch and fully focus on programming. Innovative, task-driven and detail-oriented, I recently acquired great proficiency in CSS, HTML, JavaScript, NodeJS and React."</p>
            <a href='#contact'className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>  
    )
}

export default About