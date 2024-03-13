import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../../hooks/useFetch";
import { Verify } from "../verify/verify";
import { ThreeDotIcon } from "../Icons/ThreeDotIcon";

export const SmallSlider = ({ title }) => {
    const { data, loading } = useFetch("posts");
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
  };
  return (
    <div className="small-slider">
      <h3>{title}</h3>

        {
            !loading ? (
                <Slider {...settings}>
                    {
                data?.map((item)=> (
                    <figure key={item.id} className="slide">
                        <img src={item.images || item.avatar} alt="" />
                        <ThreeDotIcon />
                        <figcaption><span>{item.name}</span> <Verify accountType={item.accountType} /></figcaption>
                        <div className="img-overlay"></div>
                    </figure>
                ))
}
                </Slider>
            ) : ( 
                    <div className="slide-skeleton">
                        <div className="slide skeleton"></div>
                        <div className="slide skeleton"></div>
                        <div className="slide skeleton"></div>
                        <div className="slide skeleton"></div>
                        <div className="slide skeleton"></div>
                        <div className="slide skeleton"></div>
                    </div>
            )
        }
      
    </div>
  );
};
