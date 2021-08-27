import React from "react";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import VideoGallery from "./pages/Video-gallery";
import ImageGallery from "./pages/Image-gallery";
import About from "./pages/About";
import Error from "./pages/404error";
import { Switch, Route } from "react-router-dom";

const removeUnscroll = () => {
  if (document.body.classList.contains("unscroll")) {
    document.body.classList.remove("unscroll");
  }
};

const CoursesPage = () => {
  removeUnscroll();
  return (
    <>
      <Courses />
    </>
  );
};

const HomePage = () => {
  removeUnscroll();
  return (
    <>
      <Home />
    </>
  );
};

const VideoGalleryPage = () => {
  removeUnscroll();
  return (
    <>
      <VideoGallery />
    </>
  );
};

const ImageGalleryPage = () => {
  removeUnscroll();
  return (
    <>
      <ImageGallery />
    </>
  );
};

const AboutPage = () => {
  removeUnscroll();
  return (
    <>
      <About />
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/courses">
        <CoursesPage />
      </Route>
      <Route path="/video-gallery">
        <VideoGalleryPage />
      </Route>
      <Route path="/image-gallery">
        <ImageGalleryPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
};

export default App;
