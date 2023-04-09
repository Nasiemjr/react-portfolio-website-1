import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'



export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://www.linkedin.com/in/nasiemjr' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Nasiemjr' target='_blank'><FaGithub/></a>
        <a href='http://dribbble.com' target='_blank'><FiDribbble/></a>
    </div>
  )
 }
