import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {SiFreelancer} from 'react-icons/si'
import {MdLocationOn} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
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
                <SiFreelancer className='about__icon'/>
                <h5>Freelance</h5>
                <small>experience </small>
              </article> 

              <article className='about__card'>
                <MdLocationOn className='about__icon'/>
                <h5>Based in</h5>
                <small>Amsterdam</small>
              </article> 

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Task-driven</h5>
                <small>accurate</small>
              </article> 
            </div>
            <p>After working in the Film Industry for almost a decade, I made a career change to follow my passion for coding. I'm currently working as a freelance Web Developer and I'm looking for a full-time position as a Frontend Engineer. My greatest asset is troubleshooting technical issues and implementing solutions to problems as they arise. I can't wait to contribute my skills and work in a team.</p>
            <a href='#contact'className='btn btn-primary'>Let's connect!</a>
        </div>
      </div>
    </section>  
    )
}

export default About