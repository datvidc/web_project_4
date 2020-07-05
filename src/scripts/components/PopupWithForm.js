// importing Popup class
import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackFunc) {
    super(popupSelector);
    this._callbackFunc = callbackFunc;
    this._form = this._popupElement.querySelector('.popup__edit-form');
    this._name = this._form.querySelector('.popup__name');
    this._title = this._form.querySelector('.popup__title');
  }

  getInputValues() {
    return {
      titleValue: this._title.value,
      nameValue: this._name.value
    }
  }

  setEventListeners() {
    // first set eventListener on close button
    this._form.addEventListener("click", (evt) => {
      this.close();
      evt.stopPropagation();
    });
    // then call parent setEventListeners()method.
    super.setEventListeners();

  }

  //it modifies the close() parent method in order to reset the form once the popup is closed.

  close() {

    this._form.reset();
    super.close();
  }
}
