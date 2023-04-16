import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.avif'
import AVTR2 from '../../assets/avatar2.avif'
import AVTR3 from '../../assets/avatar3.avif'
import AVTR4 from '../../assets/avatar4.avif'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Jack Russel',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et nisi ratione cum laboriosam distinctio voluptatibus nulla sequi. Fuga alias molestiae ratione maxime obcaecati officia quis maiores sit nemo animi!'
  },
  {
    avatar: AVTR2,
    name: 'Kevin Peterson',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et nisi ratione cum laboriosam distinctio voluptatibus nulla sequi. Fuga alias molestiae ratione maxime obcaecati officia quis maiores sit nemo animi!'
  },
  {
    avatar: AVTR3,
    name: 'Sydney White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et nisi ratione cum laboriosam distinctio voluptatibus nulla sequi. Fuga alias molestiae ratione maxime obcaecati officia quis maiores sit nemo animi!'
  },
  {
    avatar: AVTR4,
    name: 'Michael Austin',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et nisi ratione cum laboriosam distinctio voluptatibus nulla sequi. Fuga alias molestiae ratione maxime obcaecati officia quis maiores sit nemo animi!'
  }
]

export const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        loop={true}
        pagination={true}
        modules={[Pagination]}  className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
