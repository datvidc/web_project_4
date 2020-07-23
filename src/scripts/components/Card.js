import Api from "./Api.js";
import { deleteConfirm } from "../js.js";

export default class Card {
  constructor(text, link, template, handleCardClick, id, likes, owner, ownerID, handleRemoveCard) {
    //link and text are private
    this._text = text;
    this._link = link;
    this._template = template; //this is the HTML template
    this._handleCardClick = handleCardClick;
    this._id = id;
    this._likes = likes;
    this._owner = owner;
    this._handleRemoveCard = handleRemoveCard;
    this._ownerID = ownerID;
  }



  _getTemplate() {
      if (this._owner == 1) {

        const doc = document
          .querySelector(this._template)
          .content
          .querySelector(".elements__element")
          .cloneNode(true);

        if (this._likes.length > 0) {
          const liketxt = doc.querySelector(".elements__heart_likes");
          liketxt.textContent = this._likes.length;
          this._likes.forEach((like) => {
            if (like._id == this._ownerID) {
              console.log("you have liked this card");
              const cardHeart = doc.querySelector(".elements__heart");
              cardHeart.classList.add("elements__heart_clicked");
            }
          })

        } else {};

        return doc;
      } else {
        const doc = document.querySelector(this._template)
          .content
          .querySelector(".elements__element")
          .cloneNode(true);
        const trash = doc.querySelector(".elements__trash");
        trash.parentNode.removeChild(trash);

        if (this._likes.length > 0) {
          const likes = doc.querySelector(".elements__heart_likes");
          likes.textContent = this._likes.length;
          this._likes.forEach((like) => {
            if (like._id == this._ownerID) {
              console.log("you have liked this card");
              const cardHeart = doc.querySelector(".elements__heart");
              cardHeart.classList.add("elements__heart_clicked");
            }
          })
        }
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
      //instead of removing the element-open the popup.

      this._handleRemoveCard(this._id);
      console.log("attempt");


      /* remove the element */
      /*  this._newCard.remove(); */
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
    if (this._owner == 1) {
      this._addTrash();
    } else {};
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
