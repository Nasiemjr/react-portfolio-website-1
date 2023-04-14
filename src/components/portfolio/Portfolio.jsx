import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

const data = [
  {
    id:1,
    image:IMG1,
    title: '3D Illustration',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id:2,
    image:IMG2,
    title: 'WIP',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id:3,
    image:IMG3,
    title: 'E for Evolute. 36 Days of Type. Day 05',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id:4,
    image:IMG4,
    title: 'Wildfire | Brand Refresh 2023',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id:5,
    image:IMG5,
    title: 'Spotify introduction design',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id:6,
    image:IMG6,
    title: '"e" for eureka concept #36daysoftype',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
  

]

  


export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                 <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github}className='btn'>Github</a>
                  <a href={demo} className='btn brn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
