import React from 'react'
import style from './About.module.scss'
import baseStyle from '../../index.module.scss'
import ME from '../../assets/images/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
   return (
      <>
         <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className={[baseStyle.container, style.container].join(' ')}>
               <div className={style.about__me}>
                  <div className={style.about__me_image}>
                     <img src={ME} alt="me" />
                  </div>
               </div>
               <div className={style.about__content}>
                  <div className={style.about__cards}>
                     <article className={style.about__card}>
                        <FaAward className={style.about__icon} />
                        <h5>Expirience</h5>
                        <small>3+ Years Working</small>
                     </article>
                     <article className={style.about__card}>
                        <FiUsers className={style.about__icon} />
                        <h5>Clients</h5>
                        <small>100+ Worldwide</small>
                     </article>
                     <article className={style.about__card}>
                        <VscFolderLibrary className={style.about__icon} />
                        <h5>Projects</h5>
                        <small>10 Completed Projects</small>
                     </article>
                  </div>

                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iure iusto nemo adipisci labore id accusantium possimus omnis blanditiis laboriosam quae fugiat dolores non, deleniti quaerat aliquam placeat repudiandae ea voluptatibus soluta corrupti. Animi nisi earum asperiores, quae, autem ab totam necessitatibus eum, obcaecati sequi officia cum soluta ut. Adipisci.
                  </p>

                  <a href="#contact" className={[baseStyle.btn, baseStyle.btnPrimary].join(' ')}>Let`s Talk</a>

               </div>
            </div>
         </section>
      </>
   )
}

export default About