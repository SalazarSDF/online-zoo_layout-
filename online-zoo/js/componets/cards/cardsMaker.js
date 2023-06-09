import cardsTempalate from "./cardsTemplate";
let cardsMaker = () => {
  let cards = [];
  cardsTempalate.forEach((templateCard) => {
    let card = document.createElement("div");
    // add classes for card
    templateCard.classes.forEach((templateCardClass) => {
      card.classList.add(templateCardClass);
    });

    // figure
    let figure = document.createElement("figure");
    figure.classList.add("card__shape");

    // add img to figure
    let image = new Image();
    image.classList.add("card__img");
    image.src = templateCard.img;
    image.alt = templateCard["caption-1"];
    figure.appendChild(image);

    // add figcaption caption-1
    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("card__caption-1");
    figcaption.textContent = templateCard["caption-1"];
    figure.appendChild(figcaption);

    // add figcaption caption-2
    let figcaption2 = document.createElement("figcaption");
    figcaption2.classList.add("card__caption-2");
    figcaption2.textContent = templateCard["caption-2"];
    figure.appendChild(figcaption2);
    card.appendChild(figure);

    cards.push(card);
  });

  return cards;
};
export default cardsMaker;
