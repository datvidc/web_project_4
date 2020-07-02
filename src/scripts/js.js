/* ###############################################################
                Importing modules and utils
############################################################### */
import { initialCards, enableValidation, edit, modal, popClose, closeimg, imgpop, popEditForm, placename, popupurl, profileName, saveaddcard, profileTitle, popupTitle, closeAddCard, popupName, addCardBtn, btnAddCard, } from "./utils/const.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import "../pages/index.css";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";


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
/* ###################################################
              functions
####################################################### */

function escAndClick(pop) {
  // Popups close with click outside box
  pop.addEventListener('click', (evt) => {
    if (evt.target.classList.contains("popup")) {
      pop.classList.remove("popup_visible");

    }
  });

  window.addEventListener("keyup", (evt) => {
    if (evt.key === "Escape") {
      pop.classList.remove("popup_visible");
    }
  });
}

/* toogles invisibility in image popup -  */
function imgpopup() {
  imgpop.classList.toggle("popup_visible");
  escAndClick(imgpop);
}

function addNewCard(name, link) {
  const elementList = document.querySelector(".elements__list");
  const newCard = new Card(name, link, ".element__elem", () => {
    new PopupWithImage(".....").open();
  }).addCard();
  elementList.append(newCard);
}

function addcardtoggle() {
  if (addCardBtn.classList.contains("popup_visible")) {
    addCardBtn.classList.toggle("popup_visible");
  } else {
    addCardBtn.classList.toggle("popup_visible");
    escAndClick(addCardBtn);
  }
}

function addCard(event) {
  event.preventDefault();
  addcardtoggle();
  addNewCard(placename.value, popupurl.value);
  // Clear form after submit
  popEditForm.reset();

}

function popupEdit() {
  if (modal.classList.contains("popup_visible")) {
    modal.classList.toggle("popup_visible");

  } else {
    modal.classList.toggle("popup_visible");
    popupTitle.value = profileTitle.innerText;
    popupName.value = profileName.innerText;
    escAndClick(modal);
  }
}

function saveText(event) {
  event.preventDefault();
  popupEdit();
  profileTitle.textContent = popupTitle.value;
  profileName.textContent = popupName.value;
}

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
