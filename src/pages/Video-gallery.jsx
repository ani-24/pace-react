import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GalleryVideo } from "../data/Video-data";
import popup from "../components/Modal-popup";
import GetVidFromId from "../components/Vidfromlink";
import JumpToTop from "../components/Jump-to-top";

const getVideos = (video, idx) => {
  const showVideo = () => {
    popup(GetVidFromId(video.link));
  };
  return (
    <>
      <div className="item" key={idx}>
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

const VideoGallery = () => {
  return (
    <>
      <Header />
      <div className="video-gallery">{GalleryVideo.map(getVideos)}</div>
      <Footer />
      <JumpToTop />
    </>
  );
};

export default VideoGallery;
