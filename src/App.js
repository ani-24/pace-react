import React from "react";
import Home from "./pages/Home";
import VideoGallery from "./pages/Video-gallery";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

const removeUnscroll = () => {
  if (document.body.classList.contains("unscroll")) {
    document.body.classList.remove("unscroll");
  }
};

const Courses = () => {
  removeUnscroll();
  return (
    <>
      <Header />
      <h1>This is courses Page</h1>
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
