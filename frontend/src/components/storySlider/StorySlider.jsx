import React from 'react'
import "./style.scss"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '../../images/square/square-1.jpg'
import Image2 from '../../images/square/square-2.jpg'
import Image3 from '../../images/square/square-3.jpg'
import Image4 from '../../images/square/square-4.jpg'
import Image5 from '../../images/square/square-5.jpg'
import Image6 from '../../images/square/square-6.jpg'
import Image7 from '../../images/square/square-7.jpg'
import Image8 from '../../images/square/square-8.jpg'
import Image9 from '../../images/square/square-9.jpg'
import Image10 from '../../images/square/square-10.jpg'

export const StorySlider = () => {
  return (
    <div className='story-slider'>
        <Swiper
      spaceBetween={10}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image1} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image2} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image3} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image4} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image5} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image6} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image7} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image8} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image9} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide">
                    <div className="border"><img src={Image10} alt="" /></div>
                    <span>Title</span>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
