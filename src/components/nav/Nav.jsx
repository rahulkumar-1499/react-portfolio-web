import React from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{FcAbout} from 'react-icons/fc'
import{BiBookmarks} from 'react-icons/bi'
import {AiOutlineContacts} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
  const[navActive,setActive]=useState('#');
  return (
   <nav>
    {/* eslint-disable-next-line */}
    <a href="#" onClick={()=>{setActive('#')}} className={navActive==='#'?'active':''}><AiOutlineHome/></a>
    <a href="#abouta" onClick={()=>{setActive('#abouta')}} className={navActive==='#abouta'?'active':''}><FcAbout/></a>
    <a href="#experience" onClick={()=>{setActive('#experience')}} className={navActive==='#experience'?'active':''}><BiBookmarks/></a>
    <a href="#contacts"onClick={()=>{setActive('#contacts')}} className={navActive==='#contacts'?'active':''}><AiOutlineContacts/></a>
    <a href="#portfolio"onClick={()=>{setActive('#services')}} className={navActive==='#services'?'active':''}><AiOutlineFundProjectionScreen/></a>    
   </nav>
  )
}

export default Nav
