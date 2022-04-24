import React from 'react'
import style from './Header.module.scss'
import CV from '../../assets/cv.pdf'
import baseStyle from '../../index.module.scss'

function CTA() {
   return (
      <div className={style.cta}>
         <a href={CV} className={baseStyle.btn} download>Download CV</a>
         <a href="#contact" className={[baseStyle.btn, baseStyle.btnPrimary].join(' ')}>Let`s talk</a>
      </div>
   )
}

export default CTA