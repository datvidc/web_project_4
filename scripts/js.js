// Import modules:

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
/* ###############################################################
                variables:
############################################################### */
const edit = document.querySelector(".profile__edit");
const modal = document.querySelector(".popup__changetext");
const popClose = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");
const popupTitle = document.querySelector(".popup__title");
const popupName = document.querySelector(".popup__name");


const addCardBtn = document.querySelector(".popup__addcard");


const btnAddCard = document.querySelector(".profile__add");
const closeAddCard = document.querySelector(".popup__close_addcard");
const saveaddcard = document.querySelector(".popup__addcard");
const popupurl = document.querySelector(".popup__url");
const placename = document.querySelector(".popup__place");
const popEditForm = document.querySelector(".popup__edit-form_add");
const imgpop = document.querySelector(".popup__img");

const closeimg = document.querySelector(".popup__closeimg");
/* ############################################################
STARTUP CODE
############################################################### */

/* starting cards */
const initialCards = [{
    name: "Lake Louise",
    link: "./images/Lake-louise.png",
    alt: "Idylic picture of Lake Louise"
  },
  {
    name: "Yosemite Valley",
    link: "./images/yosemite.png",
    alt: "YoseMite Valley from a birds eye perspective- hovering over a lake"
  },
  {
    name: "Islands Brygge",
    link: "./images/islandsBrygge.png",
    alt: "Moody harbour picture - looking out on the sail boats"
  },
  {
    name: "Latemar",
    link: "./images/latemar.png",
    alt: "Latemar nature pic- nature Picture"
  },
  {
    name: "Strøget",
    link: "./images/stroeget.png",
    alt: "Largest European pedestrian shopping street, and one of the oldest- Strøget shot from birds eye view"
  },
  {
    name: "Copenhagen",
    link: "./images/Copenhagen.png",
    alt: "Rooftops of Copenhagen- moody- rainy - old but classic"
  }
];
//validation setting object
const enableValidation = {
  formSelector: ".popup__edit-form",
  inputSelector: ".popup__edit",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_invalid",
  inputErrorClass: "popup__edit_invalid",
  errorClass: "popup__edit_error"
};

/* ###################################################
              functions
####################################################### */

/* toogles invisibility in image popup -  */
function imgpopup() {
  imgpop.classList.toggle("popup_visible");
  escAndClick(imgpop);
}

/* Setting up the first 6 cards - although array can be longer */

initialCards.forEach((card) => {
  addNewCard(card.name, card.link);
});

function addNewCard(name, link) {
  const elementList = document.querySelector(".elements__list");
  const newCard = new Card(name, link, ".element__elem").addCard();
  elementList.append(newCard);
}

function addCard(event) {
  event.preventDefault();
  addcardtoggle();
  addNewCard(placename.value, popupurl.value);
  // Clear form after submit
  popEditForm.reset();

}


function saveText(event) {
  event.preventDefault();
  popupEdit();
  profileTitle.textContent = popupTitle.value;
  profileName.textContent = popupName.value;
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

function addcardtoggle() {
  if (addCardBtn.classList.contains("popup_visible")) {
    addCardBtn.classList.toggle("popup_visible");
  } else {
    addCardBtn.classList.toggle("popup_visible");
    escAndClick(addCardBtn);
  }
}

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
