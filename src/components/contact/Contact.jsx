import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h3>Contact Me</h3>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h4>nasiem1610@gmail.com</h4>
            <a href='mailto:nasime1610@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h4>Nasiem Ayob</h4>
            <a href='https://m.me/nasiem.ayob' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h4>+27733134722</h4>
            <a href='https://api/whatsapp.com/send?phone=+277134722'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type='text' name='name' placeholder='Nasiem Ayob' required/>
          <input type='email' name='email' placeholder='nasiem1610@gmail.com' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
