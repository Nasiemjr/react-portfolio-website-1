import React from 'react'
import './about.css'
import  PHOTO from '../../assets/photo.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'




export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className="container about_container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={PHOTO} alt='photo'/>
        </div>

        <div className="about__content">
          <article className="about__cards">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className="about__cards">
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>50+ Clients Worldwide</small>
          </article>

          <article className="about__cards">
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed Projects</small>
          </article>
        </div>

        <p>
          Highly motivated and skilled computer science graduate with an honours degree from the
          University of Witwatersrand. Experienced in customer support and software development, with a
          particular focus on developing solutions that meet clients' unique needs. Strong understanding of
          the development process and the importance of collaboration, communication, and attention to
          detail. Seeking a challenging and rewarding software development role where I can apply my skills
          and knowledge to drive innovation and growth.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's talk</a>

      </div>
    </div>


    </section>
  )
}
