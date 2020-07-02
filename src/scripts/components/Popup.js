class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setEventListeners() {
    /* adds a click event listener to the close icon of the popup */
    this._popupElement.addEventListener("click", (evt) => {
      this.close();
      evt.stopPropagation();
    });
  }

  _handleEscClose(evt) {
    /* logic for closing the popup by pressing the Esc key. */
    if (evt.key === "Escape") {
      this.close();
      evt.stopPropagation();
    }

  }

  open() {
    this._popupElement.classList.add("popup_visible");
    //add event listener for Esc
    document.addEventListener("keyup", this._handleEscClose(evt));
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    //add event listener for Esc
    document.removeEventListener("keyup", this._handleEscClose(evt));
  }

}


export default Popup;
