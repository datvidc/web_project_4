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
import UserInfo from "../scripts/components/UserInfo.js"


/* ############################################################
STARTUP CODE
############################################################### */
// new userinfo>
const userInfo = new UserInfo(".profile__name", ".profile__title");
// Image popup / click on image
const imgPopup = new PopupWithImage(".popup__img");
imgPopup.setEventListeners();

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
  //validation setting object
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

new FormValidator(modal, enableValidation).enableValidation();
new FormValidator(imgpop, enableValidation).enableValidation();
