import React from "react";
import Header from "./Header";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="hero-heading">Why Learn English?</h1>
          <p className="hero-desc">
            English has become the leading international language. It has
            developed over the period of more than 1,400 years. English language
            has been updating itself with time from old English to modern
            English with institutions like PACE working sincerely. Modern
            English has been spreading around the world due to its flexibility
            and adaptability. English has become the leading language of
            international discourse and communication in many regions and
            professional contexts such as science, navigation and law.
          </p>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
};

export default Home;
