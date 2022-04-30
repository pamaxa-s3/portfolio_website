import React from 'react'
import baseStyle from '../../index.module.scss'
import style from './Services.module.scss'
import { BiCheck } from 'react-icons/bi'

function Services() {
   return (
      <section id='services'>
         <h5>What I Offer</h5>
         <h2>Services</h2>
         <div className={[style.container, baseStyle.container].join(' ')}>

            <article className={style.service}>
               <div className={style.service__head}>
                  <h3>UX/UI Design</h3>
               </div>

               <ul className={style.service__list}>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
               </ul>

            </article>

            <article className={style.service}>
               <div className={style.service__head}>
                  <h3>Web Development</h3>
               </div>

               <ul className={style.service__list}>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
               </ul>

            </article>

            <article className={style.service}>
               <div className={style.service__head}>
                  <h3>Content Creater</h3>
               </div>

               <ul className={style.service__list}>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className={style.service__list_icon} />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </li>
               </ul>

            </article>

         </div >
      </section >
   )
}

export default Services