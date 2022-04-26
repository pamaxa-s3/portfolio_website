import React from 'react'
import style from './Nav.module.scss'
import baseStyle from '../../index.module.scss'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
// import { MdOutlineLibraryBooks } from 'react-icons/md'
import { useState } from 'react'

function Nav() {
   const [activeNav, setActiveNav] = useState('#')
   return (
      <nav>
         <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? style.active : null}><AiOutlineHome /></a>
         <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? style.active : null}><AiOutlineUser /></a>
         <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? style.active : null}><BiBook /></a>
         <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? style.active : null}><RiServiceLine /></a>
         {/* <a href="#portfolio"><MdOutlineLibraryBooks /></a> */}
         <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? style.active : null}><BiMessageSquareDetail /></a>
      </nav>
   )
}

export default Nav