import React from 'react'
import "./Nav.css"

import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUserAdd} from "react-icons/ai"
import {BiBookAdd} from "react-icons/bi"
import {RiCustomerService2Fill} from "react-icons/ri"
import {MdOutlineContacts} from "react-icons/md"
import {useState} from "react"

const Nav = () => {
 const {activeNav, setActiveNav} = useState("#")
  return ( 
    <nav>
     
      <a href="# " onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : " "}> <AiOutlineHome/></a>
      <a href='#about'><AiOutlineUserAdd/></a>
      <a href='#expirence' ><BiBookAdd/></a>
      <a href='#service' ><RiCustomerService2Fill/></a>
      <a href='#contact'  ><MdOutlineContacts/></a>
    </nav>
  )
}
export default Nav