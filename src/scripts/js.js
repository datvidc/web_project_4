/* ###############################################################
                Importing modules and utils
############################################################### */
import { initialCards, enableValidation, edit, modal, popClose, closeimg, imgpop, popEditForm, placename, popupurl, profileName, saveaddcard, profileTitle, popupTitle, closeAddCard, popupName, addCardBtn, btnAddCard, } from "./utils/const.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import "../pages/index.css";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { secretToken, secretGroup } from "../../secret.js";
import Api from "./components/Api.js";

/* ############################################################
STARTUP CODE
############################################################### */

const api = new Api('https://around.nomoreparties.co/v1/', {
  headers: {
    authorization: secretToken,
  }
});

api.getInitialCards()
  .then((result) => {

    const cardsfromServer = result;
    console.log(cardsfromServer);
    const serverCards = new Section({
      items: cardsfromServer,
      renderer: (item) => { // renderer accepts item passed from section class
        const handleCardClick = (itemName, itemLink) => {
          imgPopup.open(itemName, itemLink);
        };
        const newCard = new Card(item.name, item.link, '.element__elem', handleCardClick).addCard();
        startCards.addItem(newCard);
      }
    }, '.elements__list')
    serverCards.renderItems();



  })
  .catch((err) => {
    console.log(err); // log the error to the console
  });


const userInfo = new UserInfo(".profile__name", ".profile__title", ".profile__avatar");
// Image popup / click on image
const imgPopup = new PopupWithImage(".popup__img");
imgPopup.setEventListeners();

//setuser info
api.getUser()
  .then(res => {
    console.log(res);
    userInfo.setUserInfo(res.name, res.about);
    userInfo.setUserID(res.avatar, res._id);
  })
  .catch((err) => {
    console.log(err);
  });



// profile popup

const handleProfileChange = (name, title) => {

  userInfo.setUserInfo(name, title);
}

const profilePopup = new PopupWithForm(".popup__changetext", handleProfileChange);
profilePopup.setEventListeners();

// addCard popup
const handleAddCard = (imageTitle, imageLink) => {
  const handleCardClick = (imageTitle, imageLink) => {
    imagePopup.open(imageTitle, imageLink);
  };

  const newCard = new Card(imageTitle, imageLink, '.element__elem', handleCardClick).addCard();
  startCards.addItem(newCard);
}


const addCardPop = new PopupWithForm(".popup__addcard", handleAddCard);
addCardPop.setEventListeners();


/* starting cards */
const startCards = new Section({
  items: initialCards,
  renderer: (item) => { // renderer accepts item passed from section class
    const handleCardClick = (itemName, itemLink) => {
      imgPopup.open(itemName, itemLink);
    };
    const newCard = new Card(item.name, item.link, '.element__elem', handleCardClick).addCard();
    startCards.addItem(newCard);
  }
}, '.elements__list')

startCards.renderItems();

/* ###################################################################################
                    Eventlisteners
################################################################################ */




edit.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  popupTitle.value = data.titel;
  popupName.value = data.name;
  profilePopup.open();
});

btnAddCard.addEventListener("click", () => {
  addCardPop.open();
});

//validation setting object
new FormValidator(modal, enableValidation).enableValidation();
new FormValidator(imgpop, enableValidation).enableValidation();
