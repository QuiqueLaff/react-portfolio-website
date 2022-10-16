import React from 'react'
import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

 

const data = [
  // {avatar: AVTR1,
  //  name: "Gachi",
  //  position: "",
  //  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  // },
  {avatar: AVTR2,
    name: "Braian Oxagaray",
    position: "Team Leader at NewBanking",
    link: 'https://www.linkedin.com/in/braian-oxagaray-087308124/',
    review: "I have worked with Enrique in several freelance projects, both in design and implementation. His attention to detail and contributions in the discussions during development were always very helpful."
   },
   {avatar: AVTR3,
    name: "Leonardo Molinari",
    position: "React Developer at Marking Sence LLC",
    link: 'https://www.linkedin.com/in/leomolinari/',
    review: "Hard worker with excellent relationships always. In the software development field, he showed a quick understanding with a continued growth of knowledge."
   },
  //  {avatar: AVTR4,
  //   name: "",
  //   position: "",
  //   review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
  //  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review, position, link}, index )=> {
          return( 
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className='client__name'> {name} </h5>
          <a href= {link} target={'_blank'} rel="noreferrer">{position}</a>
            <small className="client__review"> {review}</small>
          </SwiperSlide>
          )
        }
        )}
        
      </Swiper>
    </section> 
  )
}

export default Testimonials