import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Tourch</h5>
      <h2>Contact me</h2>

      <div className='container content__container'>
        <div className='content__options'>
          <article className='contact__options'>
          <MdOutlineEmail />
            <h4>Email</h4>
            <h5>youngfizzy001@gmail.com</h5>
            <a href="mailto:youngfizzy001@gmail.com ">Send a message</a>
          </article>

          <article className='contact__options'>
          <RiMessengerLine />
            <h4>Messanger</h4>
            <h5>aslam Iliyas</h5>
            <a href="https://web.facebook.com/profile.php?id=100076310060822" >Send a message</a>
          </article>

          <article className='contact__options'>
          <MdOutlineEmail />
            <h4>Whatapp</h4>
            <h5>+</h5>
            <a href="https://api.whatsapp.com/send?phone=2349066394608&text=Hi%20coming%20from%20your%20digital%20resume___my%20name%20is__________" >Send a message</a>
          </article>
        </div>

{/* _________end___________ */}

<form action="">
  <input type="text" name="name" placeholder="your full name" required/>
  <input type="text" name="email" placeholder="your email" required/>
  <textarea type="message" rows="7" placeholder="your message" required>
  <button type="submit" className='btn btn-primary'>Send Message</button>


  </textarea>
</form>
      </div>
    </section>
  )
}

export default Contact
