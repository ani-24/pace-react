import React from "react";
import Header from "../components/Header";
import { DemoVideo } from "../data/Video-data";
import GetVidFromId from "../components/Vidfromlink";
import popup from "../components/Modal-popup";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import JumpToTop from "../components/Jump-to-top";
import Wame from "../components/Wame";

const getVideos = (video, idx) => {
  const showVideo = () => {
    popup(GetVidFromId(video.link));
  };
  return (
    <>
      <div className="video-container item" key={idx}>
        <div className="video-poster" onClick={showVideo}>
          <div className="play-icon">
            <i className="fas fa-play-circle"></i>
          </div>
          <img src={video.poster} alt="" />
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
          <img src="./img/pratap_manish.png" alt="Pratap Manish" />
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
        {DemoVideo.map(getVideos)}
      </section>
    </>
  );
};

const Feedback = () => {
  return (
    <>
      <section className="feedback">
        <div className="section-heading">
          <h1>Feedback from Students</h1>
          <Slider />
        </div>
      </section>
    </>
  );
};

const Home = () => {
  const removeScroll = () => {
    if (document.body.classList.contains("unscroll")) {
      document.body.classList.remove("unscroll");
    }
  };
  return (
    <>
      {removeScroll}
      <Header />
      <HeroSection />
      <Showcase />
      <Feedback />
      <Footer />
      <JumpToTop />
      <Wame />
    </>
  );
};

export default Home;
