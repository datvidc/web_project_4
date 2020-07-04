// importing Popup class
import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmission) {
    this.popupSelector = popupSelector;
    this.formSubmission = formSubmission;
    this._form = this._popupElement.querySelector(popupSelector);
  }

  getInputValues() {

  }

  setEventListeners() {
    // first set eventListener on close button

    // then call parent setEventListeners()method.
    super.setEventListeners();

  }

  //it modifies the close() parent method in order to reset the form once the popup is closed.
}
