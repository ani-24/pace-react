import React from "react";
import Header from "./Header";
import VideoData from "./Demo-video-data";

const getVideos = (video, idx) => {
  return (
    <>
      <div className="video-container">
        <div className="video-poster">
          <img key={idx} src={video.poster} alt="" />
        </div>
        <div className="video-description">
          <p>{video.desc}</p>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-img">
          <img src="./img/knowledge.svg" alt="Learn English" />
        </div>
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

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="section-heading">
          <h1>Demo Lectures</h1>
        </div>
        {VideoData.map(getVideos)}
      </section>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Showcase />
    </>
  );
};

export default Home;
