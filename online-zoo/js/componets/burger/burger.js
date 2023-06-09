const burgerMaker = () => {
  let navigationList = document.querySelector(".navigation__list");
  const cloneNavList = navigationList.cloneNode(true);
  cloneNavList.classList.remove("header__navigation__list");
  cloneNavList.classList.add("burger__navigation__list");

  const navigation = document.querySelector(".burger__navigation");
  navigation.appendChild(cloneNavList);
};

const burgerListener = () => {
  const burgerIconBox = document.querySelector(".burger-icon__box");
  const burgerWrapper = document.querySelector(".burger__wrapper");
  burgerIconBox.addEventListener("click", drawBurger);
  burgerWrapper.addEventListener("click", removeBurger);
};

const removeBurger = (e) => {
  if (e.target.classList[0] === "burger__wrapper") {
    drawBurger();
  }
};

const drawBurger = () => {
  let burgerIcon = document.querySelector(".burger-icon");
  let burger = document.querySelector(".burger__wrapper");
  let nav = document.querySelector(".burger__navigation");
  burgerIcon.classList.toggle("--active");
  burger.classList.toggle("--active");
  nav.classList.toggle("--active");
};

burgerMaker();
burgerListener();
