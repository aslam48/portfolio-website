import React from 'react'
import "./Header.css"
import CTA from  './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

let Header = () => {
  return (
    <header>
    <div className='container header__container'>
      <h5>Hello I,m</h5>
      <h1>Aslam Iliyas</h1>
      <h5 className='text-light'>Front-end Developer</h5>
      <CTA/>
      <HeaderSocials />

      <div className='me'>
        <img src={ME} alt='me' height={222} />
      </div>
      
      <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
      </header>
  )
}
export default Header