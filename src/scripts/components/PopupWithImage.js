/* PopupWithImage extends class Popup . make sepperate component*/
import Popup from ".Popup.js"
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(_popupElement);

  }

  _open() {
    this._popupElement.querySelector(".popup_image").src = link;
    this._popupElement.querySelector(".popup_caption").textContent = name;

    super._open();
  }
}

export default PopupWithImage;
