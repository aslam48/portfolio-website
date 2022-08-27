import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import { useRef } from 'react';
import emailjs from "emailjs-com"

export const Contact = () => {

const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8io8oy7', 'template_vr9j21v', form.current, 'RKSoN2x6UO6RZY2zK')
     e.target.reset()
  };

  return (
    <section id='contact'>
      <h6>Get in Tourch</h6>
      <h2>Contact me</h2>

      <div className='container content__container'>
        <div className='content__options'>

          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>youngfizzy001@gmail.com</h6>
            <a href="mailto:youngfizzy001@gmail.com ">Send a message</a>
          </article>

          <article className='contact__option'>
          <RiMessengerLine   className='contact__option-icon' />
            <h4>Messanger</h4>
            <h6>aslam Iliyas</h6>
            <a href="https://web.facebook.com/profile.php?id=100076310060822" >Send a message</a>
          </article>

          <article className='contact__option'>
          <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Whatapp</h4>
            <h6>+2349066394608</h6>
            <a href="https://api.whatsapp.com/send?phone=2349066394608&text=Hi%20coming%20from%20your%20digital%20resume___my%20name%20is__________" >Send a message</a>
          </article>
        </div>



<form ref={form} onSubmit={sendEmail}>
  <input type="text" name="name" placeholder="your full name" required/>
  <input type="email" name="email" placeholder="your email" required/>
  <textarea name="message" rows="7" placeholder="your message" required></textarea>
  <button type="submit" className='btn btn-primary'>Send Message</button>
</form>
      </div>
    </section>
  )
}

export default Contact
