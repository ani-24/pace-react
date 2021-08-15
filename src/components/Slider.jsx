import React from "react";
import Feedbacks from "../data/feedbacks";
import Swiper from "swiper";

const slidercells = (data) => {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  return (
    <>
      <div className="swiper-slide">
        <div className="section-heading">{data.title}</div>
        <p className="carousel-body">{data.body}</p>
      </div>
    </>
  );
};

const Slider = () => {
  return (
    <>
      <div class="swiper-container">
        <div class="swiper-wrapper">{Feedbacks.map(slidercells)}</div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    </>
  );
};

export default Slider;
