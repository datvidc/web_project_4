// importing Popup class
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackFunc, buttonText) {
    super(popupSelector);
    this._callbackFunc = callbackFunc;

    this._form = this._popupElement.querySelector('.popup__edit-form');

    this._buttonText = buttonText;
    this._button = this._form.querySelector(".popup__save");
  }

  _getInputValues() {
    return Object.fromEntries(new FormData(this._form));
  }



  setEventListeners() {

    // set eventListener on submit event
    this._form.addEventListener("submit", (evt) => {
      this._button.textContent = this._buttonText;
      evt.preventDefault();

      const data = this._getInputValues();
      this._callbackFunc(data);
      evt.stopPropagation();
      this.close();

    });


    // call parent setEventListeners()method.
    super.setEventListeners();

  }

  resetForm() {
    this._form.reset();
  };


}
