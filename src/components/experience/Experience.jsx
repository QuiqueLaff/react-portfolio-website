import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>React</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Next.js</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Bootsrap</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML/CSS</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
       
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Postman</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
     
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Experience