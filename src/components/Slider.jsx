import React from "react";
import Feedbacks from "../data/feedbacks";

const slidercells = (data) => {
  return (
    <>
      <div className="carousel-cell">
        <h3 className="carousel-heading">{data.title}</h3>
        <p className="carousel-body">{data.body}</p>
      </div>
    </>
  );
};

const Slider = () => {
  return (
    <>
      <div
        className="carousel"
        data-flickity='{"imagesLoaded": "true", "cellAlign": "left", "contain": "true"}'
      >
        {Feedbacks.map(slidercells)}
      </div>
    </>
  );
};

export default Slider;
