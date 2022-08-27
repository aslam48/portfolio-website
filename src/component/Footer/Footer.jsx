
import React from 'react'
import "./Footer.css"
import  {BsSlack} from 'react-icons/bs'
import  {FiTwitter} from 'react-icons/fi'
import  {FaLinkedin} from 'react-icons/fa'


let Footer = () => {
  return (
    <footer>
        <a href='# ' className='footer__logo'>ASLAM ILIYAS</a>

        <ul className='pernalinks'>
          <li><a href='# '>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#expirence'>Expeirience</a></li>
          <li><a href='#service'>Service</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        
        <div className="footer__socials">
          <a href="https://app.slack.com/client/T0195LMKD1R/D03UM038W6Q/rimeto_profile/U03UFH3E7GD" ><BsSlack/></a>
          <a href="https://twitter.com/AslamIliyas1" ><FiTwitter/></a>
          <a href="https://www.linkedin.com/in/aslam-iliyas-3491601ba" ><FaLinkedin/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Aslam Iliyas. All rights reserved.</small>
        </div>
    </footer>
  )
}
export default Footer