import React from 'react'
import "./About.css"
import ME from '../../assets/me3.png'
import {FaAward} from "react-icons/fa"
import {FaRegFolderOpen} from "react-icons/fa"


let About = () => {
  return (
    
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about_me'>
            <div className='about__me-image'>
              <img src={ME} alt='about im'  height={540}/>
            </div>
          </div>

          <div className='about__content'>
          <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Expirence</h5>
                <small>0-1 year</small>
              </article>
           

            
              <article className='about__card'>
                <FaRegFolderOpen className='about_icon'/>
                <h5>Project</h5>
                <small>20+ self project</small>
              </article>
              
              </div>
         
          <p className='box'>I manage everything from website navigation and layout. My expertise lies within front-end web, apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS. I’m a lifelong learner  and love to read, run, and find new idea to solve problem</p>
         <a href='#contact' className='btn btn-primary'> Let,s Talk</a>

        
          </div>
        </div>
      </section>
   
  )
}
export default About