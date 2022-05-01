import React from 'react'
import style from './Portfolio.module.scss'
import baseStyle from '../../index.module.scss'
import IMG1 from '../../assets/images/portfolio/portfolio3.jpg'
import IMG2 from '../../assets/images/portfolio/portfolio4.jpg'
import IMG3 from '../../assets/images/portfolio/portfolio5.png'
import IMG4 from '../../assets/images/portfolio/portfolio6.jpg'

const data = [
   {
      id: 1,
      image: IMG1,
      title: 'Crypto Curency Dashboard & Financial Visualization',
      github: 'https://github.com/pamaxa-s3/',
      demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
   },
   {
      id: 2,
      image: IMG2,
      title: 'Crypto Curency Dashboard & Financial Visualization',
      github: 'https://github.com/pamaxa-s3/',
      demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
   },
   {
      id: 3,
      image: IMG3,
      title: 'Crypto Curency Dashboard & Financial Visualization',
      github: 'https://github.com/pamaxa-s3/',
      demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
   },
   {
      id: 4,
      image: IMG4,
      title: 'Crypto Curency Dashboard & Financial Visualization',
      github: 'https://github.com/pamaxa-s3/',
      demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
   },
]

function Portfolio() {
   return (
      <section id='portfolio'>
         <h5>My Recent Work</h5>
         <h2>Portfolio</h2>
         <div className={[style.container, baseStyle.container].join(' ')}>

            {data.map(({ id, image, title, github, demo }) => {
               return (
                  <article key={id} className={style.portfolio__item}>
                     <div className={style.portfolio__item_image}>
                        <img src={image} alt="project" />
                     </div>
                     <h3>{title}</h3>
                     <div className={style.portfolio__item_cta}>
                        <a href={github} className={baseStyle.btn} target='blank'>GitHub</a>
                        <a href={demo} className={[baseStyle.btn, baseStyle.btnPrimary].join(' ')} target='blank'>Live DEMO</a>
                     </div>
                  </article>
               )
            })}


         </div>
      </section>
   )
}

export default Portfolio