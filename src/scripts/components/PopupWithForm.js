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
    console.log(this._form.elements);
    return data;
  };

  _listenOnForm(evt) {
    console.log("listenonform");
    evt.preventDefault();
    const inputValues = this._getInputValues();
    if (inputValues) {
      this._callbackFunc(inputValues.titleValue, inputValues.nameValue);
      this.close();
      evt.stopPropagation();
      this._form.reset();
    } else {}
  }

  setEventListeners() {

    // set eventListener on submit event
    this._form.addEventListener("submit", this._listenOnForm.bind(this));

    this._popupElement
      .querySelector(".popup__close")
      .addEventListener("click", () => {
        this.close();
      });
    // call parent setEventListeners()method.
    super.setEventListeners();

  }

  open(id = false) {
      if (id) {

        this._form.addEventListener("submit", this._callbackFunc(id));
        this.close();

      } else {
        super.open();
      }
    }
    //it modifies the close() parent method in order to reset the form once the popup is closed.
  close() {
    super.close();
    this._form.removeEventListener("submit", this._listenOnForm.bind(this));
  }
}
