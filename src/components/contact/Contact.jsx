import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fsyu74k', 'template_a7sgj3t', form.current, 'h8_YSpRb81YzHoxwV')
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='email'>enriquelaffranconi@gmail.com</h5>
            <a href="mailto:enriquelaffranconi@gmail.com" target="_blanck">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+310627478963</h5>
            <a href="mailto:enriquelaffranconi@gmail.com" target="_blanck">Send a message</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+310627478963</h5>
            <a href="https://wa.me/310627478963" target="_blanck">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}  
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
 
export default Contact