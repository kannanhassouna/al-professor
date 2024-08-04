window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);

  // handle responsiveness
  if (window.innerWidth <= 980) {
    document.body.classList.add("is-mobile");
  }
};

window.addEventListener("resize", () => {
  console.log("resizing ");
  console.log(window.innerWidth);
  if (window.innerWidth <= 980) {
    document.body.classList.add("is-mobile");
  } else {
    document.body.classList.remove("is-mobile");
  }
});
