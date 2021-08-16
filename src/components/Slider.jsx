import React from "react";
import Feedbacks from "../data/feedbacks";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Parallax]);

const slidercells = (data, idx) => {
  return (
    <>
      <SwiperSlide key={`slider-${idx}`} className="feedback-carousel-slide">
        <div className="carousel-heading">{data.title}</div>
        <div className="carousel-body">{data.body}</div>
      </SwiperSlide>
    </>
  );
};

const Slider = () => {
  return (
    <>
      <Swiper navigation pagination parallax className="feedback-carousel">
        {Feedbacks.map(slidercells)}
      </Swiper>
    </>
  );
};

export default Slider;
