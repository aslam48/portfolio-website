import React from 'react'
import CV from "../../assets/figma.pdf"


export const CTA = () => {
  return (
    <div className='cta'>
        <a href='https://digital-resume001.netlify.app/'  id='small' className='btn btn-primary'>view CV</a>
        <a href={CV} download className='btn'>Download CV </a>
        <a href='#contact' className='btn btn-primary'>Let TAlk</a>
    </div>
  )
}
export default CTA