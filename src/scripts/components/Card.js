import Api from "./Api.js";

export default class Card {
  constructor(text, link, template, handleCardClick, id, owner) {
    //link and text are private
    this._text = text;
    this._link = link;
    this._template = template; //this is the HTML template
    this._handleCardClick = handleCardClick;
    this._id = id;
    this._owner = owner;
  }
  _getTemplate() {
      if (this._owner == 1) {

        return document
          .querySelector(this._template)
          .content
          .querySelector(".elements__element")
          .cloneNode(true);
      } else {
        const doc = document.querySelector(this._template)
          .content
          .querySelector(".elements__element")
          .cloneNode(true);
        const trash = doc.querySelector(".elements__trash");
        trash.parentNode.removeChild(trash);
        return doc;
      }
    }
    // TODO : perform all the necessary actions for getting the markup here

  _addHeart() {
    //addding some heart
    const cardHeart = this._newCard.querySelector(".elements__heart");
    cardHeart.addEventListener("click", () => {
      /* when heart button is pressed toggle class for style */
      cardHeart.classList.toggle("elements__heart_clicked");
    });

  }
  _addTrash() {
    const cardTrash = this._newCard.querySelector(".elements__trash");
    cardTrash.addEventListener("click", () => {
      /* remove the element */
      this._newCard.remove();
      // remove from API
    });
  }

  _addEvents() {
    const elementsPic = this._newCard.querySelector(".elements__image");

    elementsPic.addEventListener('click', (event) => {
      this._handleCardClick(this._text, this._link);
      event.stopPropagation();
    });
  }
  addCard() {
    //code for returning fully ready card - with listeners
    this._newCard = this._getTemplate(); //Create new card

    //cleanup - apparently later in the document instructions are that click on trash should give popup. this may not be needed,. cleanup before review.
    /*  if (this._owner == 1) {
      this._addTrash();
    } else {}; */
    this._addEvents(); //add Listeners to new card
    this._addHeart(); //add heart listener

    //adding the title and url etc.
    this._newCard.querySelector(".elements__text").textContent = this._text;
    const elementsImage = this._newCard.querySelector(".elements__image");
    elementsImage.src = this._link;
    elementsImage.alt = this._text;
    elementsImage.id = this._id;

    return this._newCard;
  }
}
