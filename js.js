/* STARTUP CODE */

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

/* Setting up the first 6 cards - although array can be longer */
initialCards.forEach((card) => {
  addElem(card.link, card.name, card.alt);


});


/* GENERAL STUFF */
/* variables: */
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



/* Eventlisteners */
/* edit name- 1button- 2close 3submit on wholeform */
edit.addEventListener("click", popupEdit);
popClose.addEventListener("click", popupEdit);
modal.addEventListener("submit", saveText);

/* add card- 1button- 2close 3submit on wholeform */
btnaddcard.addEventListener("click", addcardtoggle);
closeaddcard.addEventListener("click", addcardtoggle);
saveaddcard.addEventListener("submit", addcard);

for (const heart of hearts) {
  /*  console.log(heart); */
  heart.addEventListener("click", heartfelt);
}

for (const trash of trashCan) {
  trash.addEventListener("click", trashIt);
}


/* functions */
function addElem(imgUrl, placeName, altText) {
  const cloneElem = document.querySelector("#element__elem").content;
  const elementList = document.querySelector(".elements__list");

  const elem2Add = cloneElem.cloneNode(true);
  elem2Add.querySelector(".elements__image").src = imgUrl;
  elem2Add.querySelector(".elements__image").alt = altText;
  elem2Add.querySelector(".elements__text").textContent = placeName;

  elementList.append(elem2Add);
}

function addcard() {
  event.preventDefault();
  addcardtoggle();
  console.log("Addcard fired");
  /*const cardurl = popupurl.innerText;
   const cardtitle = placename.innerText;
   const alt = "image of " + cardtitle;
   console.log(cardurl);
   console.log(cardtitle);
   console.log(alt);
   /* addElem(cardurl, cardtitle, alt); */
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
  console.log(event);
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
