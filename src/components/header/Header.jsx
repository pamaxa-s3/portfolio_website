import React from 'react'
import style from './Header.module.scss'
import baseStyle from '../../index.module.scss'
import CTA from './CTA'
import ME from '../../assets/images/me.png'
import Headersocials from './HeaderSocials'

function Header() {
   return (
      <header>
         <div className={[style.header__container, baseStyle.container].join(' ')}>
            <h5>Hello I`m</h5>
            <h1>Roman Strynzha</h1>
            <h5 className={baseStyle.textLight}>Fullstack Developer</h5>

            <CTA />
            <Headersocials />

            <div className={style.me}>
               <img src={ME} alt="me" />
            </div>

            <a href="#contact" className={style.scroll__down}>Scroll Down</a>

         </div>
      </header>
   )
}

export default Header