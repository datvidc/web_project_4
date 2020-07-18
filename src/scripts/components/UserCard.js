import Card from './Card';

export default class UserCard extends Card {
  constructor(text, link, template, handleCardClick, id) {
    super((text, link, template, handleCardClick, id));
    this._template = template;
  }

  _getTemplate() {
      const doc = document.querySelector(this._template)
        .content
        .querySelector(".elements__element")
        .cloneNode(true);

      return doc;



    }
    // TODO : perform all the necessary actions for getting the markup here

  _addTrash() {
    const cardTrash = this._newCard.querySelector(".elements__trash");
    cardTrash.addEventListener("click", () => {
      /* remove the element */
      this._newCard.remove();
    });

  }
  _addHeart() {
    //addding some heart
    const cardHeart = this._newCard.querySelector(".elements__heart");
    cardHeart.addEventListener("click", () => {
      /* when heart button is pressed toggle class for style */
      cardHeart.classList.toggle("elements__heart_clicked");
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
    this._addEvents(); //add Listeners to new card
    this._addHeart(); //add heart listener
    this._addTrash(); //a trashy listener...all about those housewives of NJ


    //adding the title and url etc.
    this._newCard.querySelector(".elements__text").textContent = this._text;
    const elementsImage = this._newCard.querySelector(".elements__image");
    elementsImage.src = this._link;
    elementsImage.alt = this._text;
    elementsImage.id = this._id;

    return this._newCard;
  }
}
