import React from "react";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import VideoGallery from "./pages/Video-gallery";
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

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/courses">
        <Courses />
      </Route>
      <Route path="/video-gallery">
        <VideoGalleryPage />
      </Route>
    </Switch>
  );
};

export default App;
