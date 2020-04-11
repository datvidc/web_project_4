/* variables: */
const edit = document.querySelector(".profile__edit");
let modal = document.querySelector(".popup");
const popClose = document.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");
let popupTitle = document.querySelector(".popup__title");
let popupName = document.querySelector(".popup__name");
const savebutton = document.querySelector(".popup__save");

/* Eventlisteners */
edit.addEventListener("click", popupEdit);
popClose.addEventListener("click", popupEdit);
savebutton.addEventListener("click", saveText);

/* functions */

function saveText() {
  profileTitle.innerHTML = popupTitle.value;
  profileName.textContent = popupName.value;
  popupEdit();
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
