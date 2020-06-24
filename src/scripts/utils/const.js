/* ###############################################################
                variables:
############################################################### */
export const edit = document.querySelector(".profile__edit");
export const modal = document.querySelector(".popup__changetext");
export const popClose = document.querySelector(".popup__close");
export const profileName = document.querySelector(".profile__name");
export const profileTitle = document.querySelector(".profile__title");
export const popupTitle = document.querySelector(".popup__title");
export const popupName = document.querySelector(".popup__name");
export const addCardBtn = document.querySelector(".popup__addcard");
export const btnAddCard = document.querySelector(".profile__add");
export const closeAddCard = document.querySelector(".popup__close_addcard");
export const saveaddcard = document.querySelector(".popup__addcard");
export const popupurl = document.querySelector(".popup__url");
export const placename = document.querySelector(".popup__place");
export const popEditForm = document.querySelector(".popup__edit-form_add");
export const imgpop = document.querySelector(".popup__img");
export const closeimg = document.querySelector(".popup__closeimg");




/* ############################################################
STARTUP CODE
############################################################### */

/* starting cards */
export const initialCards = [{
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
export const enableValidation = {
  formSelector: ".popup__edit-form",
  inputSelector: ".popup__edit",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_invalid",
  inputErrorClass: "popup__edit_invalid",
  errorClass: "popup__edit_error"
};
