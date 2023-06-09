//import { cardsMaker } from "../cards/cardsMaker";
import cardsMaker from "../cards/cardsMaker";
import shuffle from "../../shuffle";
import checkCardsCount from "../cards/checkCardsCount";
import cardsWrapperMaker from "../cards/cardsWrapperMaker";

const slidersMaker = (left, middle, right) => {
  const allWrappers = cardsWrapperMaker(left, middle, right);
  let allWrappersFragment = document.createDocumentFragment();

  //// add random cards in wrappers
  allWrappers.forEach((wrapper) => {
    wrapper = Object.values(wrapper)[0];
    let cards = [...shuffle(cardsMaker())];
    let wrapperFragment = document.createDocumentFragment();
    let howManyCards = checkCardsCount();
    for (let i = 0; i < howManyCards; i++) {
      wrapperFragment.appendChild(cards[i]);
    }
    //add wrapperFragment to wrapper
    wrapper.appendChild(wrapperFragment);
    //add wrapper with cards to allWrappersFragment
    allWrappersFragment.appendChild(wrapper);
  });

  return allWrappersFragment;
};

export default slidersMaker;
