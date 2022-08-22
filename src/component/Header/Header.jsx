import React from 'react'
import "./Header.css"
import CTA from  './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

let Header = () => {
  return (
    <div className='container header__container'>
      <h5>Hello I,m</h5>
      <h1>Aslam Iliyas</h1>
      <h5 className='text-light'>Front-end Developer</h5>
      <CTA/>
      <HeaderSocials />

      <div className='me'>
        <img src={ME} alt='me' />
      </div>
      
      <a href='#contact' className='scrool__down'>Scroll down</a>
      </div>
  )
}
export default Header