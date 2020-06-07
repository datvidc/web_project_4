export default class FormValidator {
  constructor(form, { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._form = form;
  }

  _checkInputValidation(input) {
    if (input.validity.valid) {
      this._hideErrorMessage(input);
    } else {
      this._showErrorMessage(this._form, input, input.validationMessage);
    }
  }


  _showErrorMessage(form, input, errorMessage) {
    const error = input.nextElementSibling;
    input.classList.add(this._inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._errorClass);
  }

  _hideErrorMessage(input) {
    const error = input.nextElementSibling;
    input.classList.remove(this._inputErrorClass);
    error.classList.remove(this._errorClass);
    error.textContent = "";
  }

  _toggleButtonState(inputs, submitButton) {
    const isValid = inputs.every((input) => input.validity.valid);
    if (isValid) {
      submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      submitButton.classList.add(this._inactiveButtonClass);
    }
  }

  enableValidation() {

    const forms = Array.from(document.querySelectorAll(this._formSelector));
    forms.forEach((form) => {
      form.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      const inputs = Array.from(form.querySelectorAll(this._inputSelector));
      const submitButton = form.querySelector(this._submitButtonSelector);
      this._toggleButtonState(inputs, submitButton);

      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          this._checkInputValidation(input);
          this._toggleButtonState(inputs, submitButton);
        });
      });
    });
  }
}
