const video = document.querySelectorAll(".video-embed");
video.forEach((vid) => {
  const vidWidth = vid.clientWidth;
  vid.clientHeight = (9 / 16) * vidWidth;
});
