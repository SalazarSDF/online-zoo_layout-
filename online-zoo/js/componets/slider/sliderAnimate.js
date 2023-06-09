import slidersMaker from "./slidersMaker";

// МНЕ СТЫДНО ЗА ЭТО Я ПЕРЕДЕЛАЮ ((((())))) МНЕ СТЫДНО ЗА ЭТО Я ПЕРЕДЕЛАЮ
const sliderAnimate = (reDraw) => {
  const sliderContainer = document.querySelector(".animals-slider__container");
  if (!sliderContainer) return;
  reDraw = reDraw ? true : false;
  if (reDraw) {
    const newSliders = slidersMaker("left", null, "right");
    const leftSlider = newSliders.firstChild;
    const rightSlider = newSliders.lastChild;
    const middleSlider = document.querySelector(".cards__middle");
    sliderContainer.insertBefore(leftSlider, middleSlider);
    sliderContainer.appendChild(rightSlider);
  }
  const btnRight = document.querySelector(".animals-slider__btn--right");
  const btnLeft = document.querySelector(".animals-slider__btn--left");
  btnRight.addEventListener("click", animateRight);
  btnLeft.addEventListener("click", animateLeft);
};

const animateLeft = () => {
  const middleCards = document.querySelector(".cards__middle");
  const rightCards = document.querySelector(".cards__right");
  const leftCards = document.querySelector(".cards__left");
  const btnRight = document.querySelector(".animals-slider__btn--right");
  const btnLeft = document.querySelector(".animals-slider__btn--left");
  btnLeft.removeEventListener("click", animateLeft);
  btnRight.removeEventListener("click", animateRight);
  rightCards.classList.remove("cards__right");
  rightCards.classList.add("cards__middle");
  middleCards.classList.remove("cards__middle");
  middleCards.classList.add("cards__left");
  middleCards.addEventListener("transitionend", (e) => {
    if (e.target.classList[1] !== "cards") return;
    middleCards.remove();
    leftCards.remove();
    sliderAnimate(true);
  });
};

const animateRight = () => {
  const middleCards = document.querySelector(".cards__middle");
  const rightCards = document.querySelector(".cards__right");
  const leftCards = document.querySelector(".cards__left");
  const btnRight = document.querySelector(".animals-slider__btn--right");
  const btnLeft = document.querySelector(".animals-slider__btn--left");
  btnRight.removeEventListener("click", animateRight);
  btnLeft.removeEventListener("click", animateLeft);
  leftCards.classList.remove("cards__left");
  leftCards.classList.add("cards__middle");
  middleCards.classList.remove("cards__middle");
  middleCards.classList.add("cards__right");
  middleCards.addEventListener("transitionend", (e) => {
    if (e.target.classList[1] !== "cards") return;
    middleCards.remove();
    rightCards.remove();
    sliderAnimate(true);
  });
};

const slider = document.querySelector(".animals-slider");
//if index.html sliderDraw
let indexPage = () => (slider ? true : false);
if (indexPage()) sliderAnimate();
