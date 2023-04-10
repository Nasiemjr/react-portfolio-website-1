import React from 'react'
import './about.css'
import  PHOTO from '../../assets/photo.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import STUDENT from '../../assets/student.jpg'
import ME from '../../assets/me.jpeg'




export const About = () => {
  return (
    <section>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PHOTO} alt='About image' width='381.523' height='381.523'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>


            <article className='about__card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
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

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>





    </section>
  )
}
