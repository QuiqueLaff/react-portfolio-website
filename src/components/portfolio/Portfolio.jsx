import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
 

const data = [
  {
   id: 1,
   image: IMG1,
   title: 'image1',
   github: 'https://github.com/enriquelaffranconi/Presentationgame',
   demo: 'https://presentation-eight-mu.vercel.app/', 
   name: "Personal introduction"

  },
  {
    id: 1,
    image: IMG2,
    title: 'image2',
    github: 'https://github.com',
    demo: 'https://dribble.com', 
    name: "Agua de las verdes matas - México"

 
   },
   {
    id: 1,
    image: IMG3,
    title: 'image3',
    github: 'https://github.com',
    demo: 'https://tomon.empretienda.com.ar/', 
    name: "TOMÓN - Argentina"

 
   },
   {
    id: 1,
    image: IMG4,
    title: 'image4',
    github: 'https://github.com',
    demo: '', 
    name: "nombre"

 
   },
   {
    id: 1,
    image: IMG5,
    title: 'image5',
    github: 'https://github.com',
    demo: 'https://dribble.com', 
    name: "nombre"

 
   },
   {
    id: 1,
    image: IMG6,
    title: 'image6',
    github: 'https://github.com',
    demo: 'https://dribble.com', 
    name: "nombre"

 
   },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porftolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, name}) => {
            return(
              <article key= {id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt= {title}></img>
              </div>
              <h3>{name}</h3>
              <div className="portfolio__item-cta">
                <a href= {github} className='btn' target={'_blank'} rel="noreferrer">Github</a>
                <a href= {demo} className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio