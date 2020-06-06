export default class FormValidator {
  constructor(obj, form) {
    this._obj = obj;
    this._form = form;

  }

  _checkValidity(input) {
    //check if a form field is valid
    if (input.validity.valid) {
      const error = input.nextElementSibling;
      input.classList.remove(this._obj.inputErrorClass);
      error.classList.remove(this._obj.errorClass);
      error.textContent = "";

    } else {
      const error = input.nextElementSibling;
      input.classList.add(this._obj.inputErrorClass);
      error.textContent = this._obj.errorMessage;
      error.classList.add(this._obj.errorClass);
    }
  }

  _changeState(inputs, submitButton, inactiveButtonClass) {
    //Change the state of the buttons
    const isValid = inputs.some((input) => input.validity.valid);
    if (isValid) {
      submitButton.classList.remove(inactiveButtonClass);
    } else {
      submitButton.classList.add(inactiveButtonClass);
    }
  }

  _addingListeners() {
    //adding the needed listeners.
    const forms = Array.from(document.querySelectorAll(this._obj.formSelector));


    forms.forEach((form) => {
      form.addEventListener("submit", (evt) => {
        evt.preventDefault();
      })
      const inputs = Array.from(form.querySelectorAll(inputSelector));
      const submitButton = form.querySelector(this._obj.submitButtonSelector);

      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          this._checkValidity(input);
          this._changeState(input, this._obj.submitButton, this._obj.inactiveButtonClass);
        })
      })
    })



  }

  enableValidation() {
    //Code for enabling validation
    this._addingListeners();
  }



}
