/* variables: */
let edit = document.querySelector(".profile__edit");
let modal = document.querySelector(".popup");
let popClose = document.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");
let popupTitle = document.querySelector("#popup__title");
let popupName = document.querySelector("#popup__name");
let savebutton = document.querySelector(".popup__save");

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
  /* popupERR1 - for some reason neither conditions are true */
  console.log(modal.style.display);
  if (modal.style.display == "block") {
    modal.style.display = "none";

    return;
  } else {
    modal.style.display = "block";
    popupTitle.value = profileTitle.innerText;
    popupName.value = profileName.innerText;
    return;
    /*
    TODO:  make test of none specific and add an else clause with error code : popupERR1
    When I test specifically for none it works once and then breaks.
    it seems to be because style is applied inline- but
    ...this sucks.. maybe it should be done with classes instead
    but BEM doesnt like "is_visible" classes.addEventListener */
  }
}
