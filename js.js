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
const hearts = document.querySelectorAll(".elements__heart");
const trashCan = document.querySelectorAll(".elements__trash");
const addcardbtn = document.querySelector(".popup__addcard");
const addcardplace = document.querySelector(".popup__place");
const addcardurl = document.querySelector(".popup__url");
const btnaddcard = document.querySelector(".profile__add");
const closeaddcard = document.querySelector(".popup__close_addcard");
const saveaddcard = document.querySelector(".popup__addcard");
const popupurl = document.querySelector(".popup__url");
const placename = document.querySelector(".popup__place");
const pics = document.querySelectorAll(".elements__image");
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
    link: "./images/pankaj-patel-SCgrYErvpbE-unsplash.png",
    alt: "Moody harbour picture - looking out on the sail boats"
  },
  {
    name: "Latemar",
    link: "./images/latemar.png",
    alt: "Latemar nature pic- nature Picture"
  },
  {
    name: "Strøget",
    link: "./images/ava-coploff-gwdvXz80J2I-unsplash (1).png",
    alt: "Largest European pedestrian shopping street, and one of the oldest- Strøget shot from birds eye view"
  },
  {
    name: "Copenhagen",
    link: "./images/dan-magatti-HHu2gyoW0B0-unsplash (1).png",
    alt: "Rooftops of Copenhagen- moody- rainy - old but classic"
  }
];

/* ###################################################################################
                    Eventlisteners
################################################################################ */


/* edit name- 1button- 2close 3submit on wholeform */
edit.addEventListener("click", popupEdit);
popClose.addEventListener("click", popupEdit);
modal.addEventListener("submit", saveText);

/* add card- 1button- 2close 3submit on wholeform */
btnaddcard.addEventListener("click", addcardtoggle);
closeaddcard.addEventListener("click", addcardtoggle);
saveaddcard.addEventListener("submit", addcard);

/* closebutton on imgpop */
closeimg.addEventListener("click", imgpopup);

/* listen for enterkey on imagepopup enterKey is apparently no 13 (I used inspect, but google seems to agree
  ? it works anyway.  */
addcardbtn.addEventListener("keypress", function(evt) {
  if (evt.keyCode === 13) {
    addcard();
  }
})

/* ###################################################
              functions
####################################################### */

/* toogles invisibility in image popup */
function imgpopup() {
  imgpop.classList.toggle("popup_invisible");
}
/* image popup controls image url */
function imagepop(evt) {
  imgpopup();
  console.log(evt);
}

/* Setting up the first 6 cards - although array can be longer */
initialCards.forEach((card) => {
  addnewcard(card);
});

function addnewcard(card) {
  const elementList = document.querySelector(".elements__list");
  const cloneElem = document.querySelector(".element__elem").content.querySelector(".elements__element");
  const cardclone = cloneElem.cloneNode(true);

  /* All elements from the card */
  cardclone.querySelector(".elements__text").textContent = card.name;
  cardclone.querySelector(".elements__image").src = card.link;
  cardclone.querySelector(".elements__image").alt = card.alt;

  elementList.append(cardclone);
  addcardlisteners(elementList.lastElementChild);
}

/* Setting up all event listeners for cards */
function addcardlisteners(node) {
  const elementspic = node.querySelector(".elements__image");
  const cardheart = node.querySelector(".elements__heart");
  const cardtrash = node.querySelector(".elements__trash");

  cardtrash.addEventListener("click", trashIt);
  cardheart.addEventListener("click", heartfelt);
  elementspic.addEventListener("click", picpop);
}

/* Event for click on picture */
function picpop(event) {
  pictpop.src = event.target.src;
  pictpop.alt = event.target.alt;
  const pictxt = event.target.nextElementSibling;
  const text = pictxt.querySelector(".elements__text").textContent;
  imgtext.textContent = text;
  imgpopup();
}

function addcard() {
  event.preventDefault();
  addcardtoggle();
  console.log("Addcard fired");
  const cardurl = popupurl.value;
  const cardtitle = placename.value;
  const alt = "image of " + cardtitle;
  const card = [{}];
  card.name = cardtitle;
  card.link = cardurl;
  card.alt = alt;
  addnewcard(card);
  addFormClear()
  return;
}

function addcardtoggle() {
  addcardbtn.classList.toggle("popup_invisible");
}

function trashIt(event) {
  /* remove the node event target */
  event.target.parentElement.remove();
  console.log("doing stuff a1");
  return;
}

function heartfelt(event) {
  /* when heart button is pressed toggle class for style */
  event.target.classList.toggle("elements__heart_clicked");
  return;
}

function saveText(event) {
  event.preventDefault();
  popupEdit();
  profileTitle.innerHTML = popupTitle.value;
  profileName.textContent = popupName.value;

  return;
}

function popupEdit() {
  if (modal.classList.contains("popup_invisible")) {
    modal.classList.toggle("popup_invisible");
    popupTitle.value = profileTitle.innerText;
    popupName.value = profileName.innerText;
    return;
  } else {
    modal.classList.toggle("popup_invisible");

    return;
  }
}

// Clear form after submit
function addFormClear() {
  popupurl.value = "Image link";
  placename.value = "Title";
}
