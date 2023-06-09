import wrapperCloseImg from "../../../assets/png/x_popup.png";

const popUpListeners = () => {
  const reviews = document.querySelectorAll(".review");
  if (!reviews.length) return;
  const userWidth = document.body.clientWidth;
  if (userWidth > 980) return;
  reviews.forEach((review) => {
    review.addEventListener("click", showPopUp);
  });
};

const makePopUp = (review) => {
  const popUp = document.createElement("div");
  popUp.classList.add("popup");
  popUp.addEventListener("click", closePopUp);

  const wrapperCloseIcon = new Image();
  wrapperCloseIcon.src = wrapperCloseImg;
  wrapperCloseIcon.alt = "close wrapper";
  wrapperCloseIcon.classList.add("popup__close");
  popUp.appendChild(wrapperCloseIcon);

  review.classList.add("popup__rewiew");
  popUp.appendChild(review);
  return popUp;
};

const showPopUp = (e) => {
  const body = document.querySelector("body");
  const review = e.target;
  const popUpReview = review.cloneNode(true);
  //change text to show not only 2 lines when popedUp
  popUpReview.lastElementChild.style.display = "block";
  const popUp = makePopUp(popUpReview);
  body.appendChild(popUp);
  setTimeout(() => popUp.classList.add("popup--active"), 10);
};

const closePopUp = (e) => {
  if (e.target.classList[0] === "review") return;
  const popUp = document.querySelector(".popup");
  popUp.classList.remove("popup--active");
  setTimeout(() => popUp.remove(), 1000);
};

popUpListeners();

export { popUpListeners };
