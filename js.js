/* variables: */
const edit = document.querySelector(".profile__edit");
let modal = document.querySelector(".popup");
const popClose = document.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");
let popupTitle = document.querySelector(".popup__title");
let popupName = document.querySelector(".popup__name");
let hearts = document.querySelectorAll(".elements__heart");



/* Eventlisteners */
edit.addEventListener("click", popupEdit);
popClose.addEventListener("click", popupEdit);
modal.addEventListener("submit", saveText);

for (const heart of hearts) {
  console.log(heart);
  heart.addEventListener("click", heartfelt);
}



/* functions */



function heartfelt(event) {
  /* when heart button is pressed toggle class for style */
  console.log(event);
  event.target.classList.toggle("elements__heart_clicked");
  return;
}

function saveText(e) {
  e.preventDefault();
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
