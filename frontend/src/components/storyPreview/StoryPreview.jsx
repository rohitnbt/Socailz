import React from 'react'
import Slider from "react-slick";

export const StoryPreview = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 10000,
        cssEase: "linear"
      };
  return (
    <div className='story-preview'>
        <div>
            <div className="slider-container slider">
                <Slider {...settings}>
                    <div>
                    <div className="slide">
                        <img src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    </div>
                    <div>
                    <div className="slide">
                        <img src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}
