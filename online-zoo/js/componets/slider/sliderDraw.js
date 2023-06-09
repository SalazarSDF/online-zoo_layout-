import slidersMaker from "./slidersMaker";
const slider = document.querySelector(".animals-slider");

let sliderDraw = () => {
  const sliderContainer = document.querySelector(".animals-slider__container");
  if (!sliderContainer) return;
  sliderContainer.innerHTML = "";
  sliderContainer.appendChild(slidersMaker("left", "middle", "right"));
};

//if index.html sliderDraw
let indexPage = () => (slider ? true : false);
if (indexPage) sliderDraw();

export { sliderDraw };
