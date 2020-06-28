class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setEventListeners() {
    /* adds a click event listener to the close icon of the popup */
  }

  _handleEscClose() {
    /* logic for closing the popup by pressing the Esc key. */
    this.close();
  }

  open() {
    this._popupElement.classList.add("popup_is-open");
    //add event listener for Esc
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_is-open");
    //add event listener for Esc
    document.removeEventListener("keyup", this._handleEscClose);
  }

}




/*PopupWithForm extens class popup */



export default Popup;
