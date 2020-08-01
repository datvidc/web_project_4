// importing Popup class
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackFunc, buttonText) {
    super(popupSelector);
    this._callbackFunc = callbackFunc;

    this._form = this._popupElement.querySelector('.popup__edit-form');
    this._title = this._form.querySelector('.popup_head');
    this._name = this._form.querySelector('.popup_detail');
    this._buttonText = buttonText;
    this._button = this._form.querySelector(".popup__save");
  }

  _getInputValues() {
    return this._form.elements;
  };

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

    this._popupElement
      .querySelector(".popup__close")
      .addEventListener("click", () => {
        this.close();
      });
    // call parent setEventListeners()method.
    super.setEventListeners();

  }
  resetForm() {
    console.log(this._form);
    this._form.reset();
  };
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
    /* this._form.removeEventListener("submit", this._listenOnForm.bind(this)); */
  }
}
