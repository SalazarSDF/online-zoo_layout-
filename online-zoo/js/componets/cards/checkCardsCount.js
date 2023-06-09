const checkCardsCount = () => {
  let userWidth = document.body.clientWidth;
  if (userWidth >= 1000) {
    return 6;
  } else {
    //userWidth < 1000
    return 4;
  }
};

export default checkCardsCount;
