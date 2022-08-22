import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
import {SiUpwork} from "react-icons/si"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/aslam-iliyas-3491601ba' ><BsLinkedin/></a>
        <a href='https://github.com/aslam48'><BsGithub/></a>
        <a href='https://web.facebook.com/profile.php?id=100076310060822'><BsFacebook/></a>
        <a href="https://api.whatsapp.com/send?phone=2349066394608&text=Hi%20coming%20from%20your%20digital%20resume___my%20name%20is__________" ><BsWhatsapp/></a>
        <a href='https://t.me/Aslam_iliyas'><BsTelegram/></a>
        <a href='https://www.upwork.com/freelancers/~019a574e379070d074' ><SiUpwork/></a>
    </div>
  )
}

export default HeaderSocials