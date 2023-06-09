const cardsWrapperMaker = (left, middle, right) => {
  let cardsWrappers = [];
  if (left) {
    const leftCardsWrapper = document.createElement("div");

    leftCardsWrapper.classList.add(
      "animals-slider__cards",
      "cards",
      "cards__left"
    );
    cardsWrappers.push({ left: leftCardsWrapper });
  }
  if (middle) {
    const middleCardsWrapper = document.createElement("div");
    middleCardsWrapper.classList.add(
      "animals-slider__cards",
      "cards",
      "cards__middle"
    );
    cardsWrappers.push({ middle: middleCardsWrapper });
  }
  if (right) {
    const rightCardsWrapper = document.createElement("div");
    rightCardsWrapper.classList.add(
      "animals-slider__cards",
      "cards",
      "cards__right"
    );
    cardsWrappers.push({ right: rightCardsWrapper });
  }
  return cardsWrappers;
};

export default cardsWrapperMaker;
