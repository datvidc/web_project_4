/* import popup */
import Popup from "./Popup.js"

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

  }

  setEventListeners() {
    document.addEventListener("click", () => {
      super.close();
    })
    super.setEventListeners();
  }
  open(name, link) {
    const popEl = this._popupElement.querySelector(".popImg");
    const popTxt = this._popupElement.querySelector(".popup__imgtext");
    popEl.src = link;
    popEl.alt = name;
    popTxt.textContent = name;
    super.open();
  }
}

export default PopupWithImage;
