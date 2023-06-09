import { sliderDraw } from "./componets/slider/sliderDraw";
import { popUpListeners } from "./componets/viewsScroll/reviewPopUp";

(function () {
  const slider = document.querySelector(".animals-slider");
  const reviews = document.querySelectorAll(".review");
  if (!slider && !reviews) return;
  window.addEventListener("resize", resizeThrottler, false);
  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        sliderDraw();
        popUpListeners();
        // The actualResizeHandler will execute at a rate of 15fps
      }, 100);
    }
  }
})();
