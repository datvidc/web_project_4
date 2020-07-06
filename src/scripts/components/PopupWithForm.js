// importing Popup class
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackFunc) {
    super(popupSelector);
    this._callbackFunc = callbackFunc;
    this._form = this._popupElement.querySelector('.popup__edit-form');
    this._title = this._form.querySelector('.popup_head');
    this._name = this._form.querySelector('.popup_detail');
  }

  _getInputValues() {
    const data = {
      titleValue: this._title.value,
      nameValue: this._name.value
    };
    return data;
  };


  setEventListeners() {

    // set eventListener on submit event
    this._form.addEventListener("submit", (evt) => {
      evt.stopPropagation();
      const inputValues = this._getInputValues();
      this._callbackFunc(inputValues.titleValue, inputValues.nameValue);
      this._popupElement.reset();
      this.close();
    });
    this._popupElement
      .querySelector(".popup__close")
      .addEventListener("click", () => {
        this.close();
      });
    // call parent setEventListeners()method.
    super.setEventListeners();



  }

  //it modifies the close() parent method in order to reset the form once the popup is closed.

  close() {
    super.close();
  }
}
