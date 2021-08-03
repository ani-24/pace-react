const popup = (el) => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.setAttribute(
    "style",
    "position: fixed; top: 0; left: 0; height: 100vh; width: 100%; top: 0; left: 0; background: rgba(0, 0, 0, 0.7); z-index: 100;"
  );
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = el;
  modal.setAttribute(
    "style",
    "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; z-index: 101;"
  );
  document.body.classList.add("unscroll");
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  overlay.addEventListener("click", () => {
    document.body.removeChild(overlay);
    document.body.removeChild(modal);
    document.body.classList.remove("unscroll");
  });
  console.log("something");
};

export default popup;
