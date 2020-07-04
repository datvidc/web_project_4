export default class Card {
  constructor(text, link, template, handleCardClick) {
    //link and text are private
    this._text = text;
    this._link = link;
    this._template = template; //this is the HTML template
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
      return document
        .querySelector(this._template)
        .content
        .querySelector(".elements__element")
        .cloneNode(true);

    }
    // TODO : perform all the necessary actions for getting the markup here

  _addTrash() {
    const cardTrash = this._newCard.querySelector(".elements__trash");
    cardTrash.addEventListener("click", (event) => {
      /* remove the element */
      this._newCard.remove();
    });

  }
  _addHeart() {
    //addding some heart
    const cardHeart = this._newCard.querySelector(".elements__heart");
    cardHeart.addEventListener("click", (event) => {
      /* when heart button is pressed toggle class for style */
      cardHeart.classList.toggle("elements__heart_clicked");
    });

  }
  _addEvents() {
    // copy code for making event listeners and adding them to the newly created card.
    /* Setting up all event listeners for cards */
    const elementsPic = this._newCard.querySelector(".elements__image");

    elementsPic.addEventListener("click", (event) => {
      const pictpop = document.querySelector(".popup__image");
      const imgtext = document.querySelector(".popup__imgtext");
      const imgpop = document.querySelector(".popup__img");
      pictpop.src = event.target.src;
      pictpop.alt = event.target.alt;
      const pictxt = event.target.nextElementSibling;

      imgtext.textContent = pictxt.querySelector(".elements__text").textContent;

      imgpop.classList.toggle("popup_visible");

      imgpop.addEventListener('click', (evt) => {
        if (evt.target.classList.contains("popup")) {
          imgpop.classList.remove("popup_visible");
        }
      });

      imgpop.addEventListener("click", () => this._handleCardClick(this._text, this._link));

      window.addEventListener("keyup", (evt) => {
        if (evt.key === "Escape") {
          imgpop.classList.remove("popup_visible");
        }
      });


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
    this._newCard.querySelector(".elements__image").src = this._link;
    this._newCard.querySelector(".elements__image").alt = this._text;

    return this._newCard;
  }
}
