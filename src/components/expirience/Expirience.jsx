import React from 'react'
import style from './Expirience.module.scss'
import baseStyle from '../../index.module.scss'
import { BsPatchCheckFill } from 'react-icons/bs'

function Expirience() {
   return (
      <section id='experience'>
         <h5>What Skills I Have</h5>
         <h2>My Experience</h2>

         <div className={[style.container, baseStyle.container].join(' ')}>

            <div className={style.experience__Frontend}>
               <h3>Frontend Development</h3>
               <div className={style.experience__content}>

                  <article className={style.experience__details}>
                     <BsPatchCheckFill className={style.eperience__icon} />
                     <div>
                        <h4>HTML</h4>
                        <small className={baseStyle.textLight}>Experienced</small>
                     </div>
                  </article>


                  <article className={style.experience__details}>
                     <BsPatchCheckFill className={style.eperience__icon} />
                     <div>
                        <h4>CSS</h4>
                        <small className={baseStyle.textLight}>Intermediate</small>
                     </div>
                  </article>

                  <article className={style.experience__details}>
                     <BsPatchCheckFill className={style.eperience__icon} />
                     <div>
                        <h4>JavaScript</h4>
                        <small className={baseStyle.textLight}>Experienced</small>
                     </div>
                  </article>

                  <article className={style.experience__details}>
                     <BsPatchCheckFill className={style.eperience__icon} />
                     <div>
                        <h4>Bootstrap</h4>
                        <small className={baseStyle.textLight}>Experienced</small>
                     </div>
                  </article>

                  <article className={style.experience__details}>
                     <BsPatchCheckFill className={style.eperience__icon} />
                     <div>
                        <h4>React JS</h4>
                        <small className={baseStyle.textLight}>Experienced</small>
                     </div>
                  </article>

               </div>
            </div>

            <div className={style.experience__Backend}>
               <h3>Backend Development</h3>
               <div className={style.experience__content}>

                  <article className={style.experience__details}>
                     <BsPatchCheckFill className={style.eperience__icon} />
                     <div>
                        <h4>Node JS</h4>
                        <small className={baseStyle.textLight}>Experienced</small>
                     </div>
                  </article>


                  <article className={style.experience__details}>
                     <BsPatchCheckFill className={style.eperience__icon} />
                     <div>
                        <h4>MongoDB</h4>
                        <small className={baseStyle.textLight}>Intermediate</small>
                     </div>
                  </article>

                  <article className={style.experience__details}>
                     <BsPatchCheckFill className={style.eperience__icon} />
                     <div>
                        <h4>MySQL</h4>
                        <small className={baseStyle.textLight}>Experienced</small>
                     </div>
                  </article>

               </div>
            </div>

         </div>
      </section >
   )
}

export default Expirience