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

/* starting cards */
const startCards = new Section({
    items: initialCards,
    renderer: (item) => { // renderer accepts item passed from section class
      const newCard = addNewCard(item.name, item.link)
    }
  })
  //validation setting object
startCards.renderItems();

// new userinfo>
const userInfo = new UserInfo(".profile__name", ".profile__title");
/* ###################################################
              functions
####################################################### */











/* ###################################################################################
                    Eventlisteners
################################################################################ */


/* edit name- 1button- 2close 3submit on wholeform */
edit.addEventListener("click", popupEdit);
popClose.addEventListener("click", popupEdit);

modal.addEventListener("submit", (event) => {
  saveText(event);
});

/* add card- 1button- 2close 3submit on wholeform */
btnAddCard.addEventListener("click", addcardtoggle);
closeAddCard.addEventListener("click", addcardtoggle);
saveaddcard.addEventListener("submit", (event) => {
  addCard(event);
});

/* closebutton on imgpop */
closeimg.addEventListener("click", imgpopup);

new FormValidator(modal, enableValidation).enableValidation();
new FormValidator(imgpop, enableValidation).enableValidation();
