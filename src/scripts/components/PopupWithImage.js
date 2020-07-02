/* import popup */
import Popup from "./Popup.js"
/* PopupWithImage extends class Popup . */
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

  }

  open() {
    this._popupElement.querySelector(".popup_image").src = link;
    this._popupElement.querySelector(".popup_image").alt = name;
    this._popupElement.querySelector(".popup_caption").textContent = name;
    super._open();
  }
}

export default PopupWithImage;
