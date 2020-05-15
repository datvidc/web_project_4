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
const popupModal = document.querySelectorAll(".popup");
const popupcontainer = document.querySelectorAll(".popup__container");

const addCardBtn = document.querySelector(".popup__addcard");


const btnAddCard = document.querySelector(".profile__add");
const closeAddCard = document.querySelector(".popup__close_addcard");
const saveaddcard = document.querySelector(".popup__addcard");
const popupurl = document.querySelector(".popup__url");
const placename = document.querySelector(".popup__place");
const popEditForm = document.querySelector(".popup__edit-form_add");
const imgpop = document.querySelector(".popup__img");
const pictpop = document.querySelector(".popup__image");
const closeimg = document.querySelector(".popup__closeimg");
const imgtext = document.querySelector(".popup__imgtext");
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

/* ###################################################################################
                    Eventlisteners
################################################################################ */


/* edit name- 1button- 2close 3submit on wholeform */
edit.addEventListener("click", popupEdit);
popClose.addEventListener("click", popupEdit);

modal.addEventListener("submit", function(event) {
  saveText(event);
});

/* add card- 1button- 2close 3submit on wholeform */
btnAddCard.addEventListener("click", addcardtoggle);
closeAddCard.addEventListener("click", addcardtoggle);
saveaddcard.addEventListener("submit", function(event) {
  addCard(event);
});

/* closebutton on imgpop */
closeimg.addEventListener("click", imgpopup);


/* ###################################################
              functions
####################################################### */

/* toogles invisibility in image popup -  */
function imgpopup() {
  imgpop.classList.toggle("popup_visible");
  escapePopup();
  closeOnClick();
}


/* Setting up the first 6 cards - although array can be longer */
initialCards.forEach((card) => {
  addNewCard(card.name, card.link, card.alt);
});

function addNewCard(name, link, alt) {
  const elementList = document.querySelector(".elements__list");
  const cloneElem = document.querySelector(".element__elem").content.querySelector(".elements__element");
  const cardclone = cloneElem.cloneNode(true);

  /* All elements from the card */
  cardclone.querySelector(".elements__text").textContent = name;
  cardclone.querySelector(".elements__image").src = link;
  cardclone.querySelector(".elements__image").alt = alt;

  elementList.append(cardclone);

  /* Setting up all event listeners for cards */
  const elementspic = cardclone.querySelector(".elements__image");
  const cardheart = cardclone.querySelector(".elements__heart");
  const cardtrash = cardclone.querySelector(".elements__trash");

  cardtrash.addEventListener("click", trashIt);
  cardheart.addEventListener("click", heartfelt);
  elementspic.addEventListener("click", picpop);

}



/* Event for click on picture */
function picpop(event) {
  pictpop.src = event.target.src;
  pictpop.alt = event.target.alt;
  const pictxt = event.target.nextElementSibling;

  imgtext.textContent = pictxt.querySelector(".elements__text").textContent;
  imgpopup();
}

function addCard() {
  event.preventDefault();

  addcardtoggle();

  const cardText = `Image of ${placename.value}`;
  addNewCard(placename.value, popupurl.value, cardText);
  // Clear form after submit
  popEditForm.reset();

}


function trashIt(event) {
  /* remove the node event target */
  event.target.parentElement.remove();

}

function heartfelt(event) {
  /* when heart button is pressed toggle class for style */
  event.target.classList.toggle("elements__heart_clicked");

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
  }
}
// kill popup with esc key
window.addEventListener('keyup', (e) => {
  if (e.keyCode == 27) {
    togglePopup(popup);
  }
});


const escapePopup = (e) => {
  const pop = document.querySelector("popup_visible");
  if (pop && e.code === "Escape") {
    pop.classList.toggle("popup_visible");
  }
};



function addcardtoggle() {
  addCardBtn.classList.toggle("popup_visible");
  if (addCardBtn.classList.contains("popup_visible")) {
    addCardBtn.onkeydown = escapePopup;
    addCardBtn.addEventListener("click", (evt) => {

      console.log(evt.currentTarget.classList);
      const myTarget = evt.currentTarget.classList;
      if (myTarget.contains('popup__container')) {

      } else {
        addcardtoggle();
      }
      popEditForm.reset();
    })

  }

}


function closepopups(popup) {
  popup.classList.toggle("popup_visible");

  // Popup closes with Esc key
  window.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) {
      closepopups(popup);
    }
  });

  // Popups close with overlay click
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closepopups(evt.target);
      evt.preventDefault();
    }
  });
}
}
