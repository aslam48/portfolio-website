import React from 'react'
import "./Service.css"
import {FcCheckmark} from "react-icons/fc"


let Service = () => {
  return (
    <section id='service'>  
    <h5>What  i Offer</h5>
    <h2>Services</h2>

    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3>Other stacks</h3>
        </div>

        <ul className='service__list'>
          <li>
          <FcCheckmark className='service_list_icons'/> 
          <p>Customer Service</p>
          </li>

          <li>
          <FcCheckmark className='service_list_icons'/> 
          <p>Vitual Assistance</p>
          </li>

          <li>
          <FcCheckmark className='service_list_icons'/> 
          <p>Lead Generation</p>
          </li>

          <li>
          <FcCheckmark className='service_list_icons'/> 
          <p>Typing</p>
          </li>
        </ul>
      </article>


      {/* ________web development side__________ */}

      <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>

        <ul className='service__list'>
          <li>
          <FcCheckmark className='service_list_icons'/> 
          <p>BRANDING</p>
          </li>

          <li>
          <FcCheckmark className='service_list_icons'/> 
          <p>QUALITY</p>
          </li>

          <li>
          <FcCheckmark className='service_list_icons'/> 
          <p>DESIGN</p>
          </li>

          <li>
          <FcCheckmark className='service_list_icons'/> 
          <p>CREATIVITY</p>
          </li>
        </ul>
      </article>
    </div>
      </section>
  )
}
export default Service