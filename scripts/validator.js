const checkInputValidation = (form, input, rest) => {
  if (input.validity.valid) {
    hideErrorMessage(form, input, rest);
  } else {
    showErrorMessage(form, input, rest);
  }
}

const toggleButtonState = (inputs, submitButton, { inactiveButtonClass }) => {
  const isValid = inputs.every((input) => input.validity.valid);

  if (isValid) {
    submitButton.classlist.remove(inactiveButtonClass);
  } else {
    submitButton.classlist.add(inactiveButtonClass);
  }
}

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    })
    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const submitButton = form.querySelectorAll(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidation(form, input, rest);
        toggleButtonState(inputs, submitButton, rest);
      })
    })
  })
}


enableValidation({
  formSelector: ".popup__edit-form",
  inputSelector: ".popup__edit",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__error-input",
  errorClass: "popup__error_visible"
});