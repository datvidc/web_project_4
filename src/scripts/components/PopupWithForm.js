// importing Popup class
import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackFunc) {
    super(popupSelector);
    this._callbackFunc = callbackFunc;
    this._form = this._popupElement.querySelector('.popup__edit-form');
    this._name = this._form.querySelector('.popup_head');
    this._title = this._form.querySelector('.popup_detail');
  }

  _getInputValues() {
    return {
      titleValue: this._title.value,
      nameValue: this._name.value
    }
  }

  setEventListeners() {
    // call parent setEventListeners()method.
    super.setEventListeners();

    // set eventListener on close button
    this._form.addEventListener("submit", (evt) => {
      evt.stopPropagation();
      const inputValues = this._getInputValues();
      this._callbackFunc(inputValues.titleValue, inputValues.nameValue);
      this_form.reset();

    });


  }

  //it modifies the close() parent method in order to reset the form once the popup is closed.

  close() {

    this._form.reset();
    super.close();
  }
}
