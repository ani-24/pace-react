const video = document.querySelectorAll(".video-embed");
video.forEach((vid) => {
  const vidWidth = vid.clientWidth;
  vid.clientHeight = (9 / 16) * vidWidth;
});

window.addEventListener("DOMContentLoaded", () => {
  const wame = document.querySelector(".wame");
  wame.classList.add("show");
});
