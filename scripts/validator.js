const checkInputValidation = (form, input, rest) => {
  if (input.validity.valid) {
    hideErrorMessage(form, input, rest);
  } else {
    showErrorMessage(form, input, input.validationMessage, rest);
  }
}

const showErrorMessage = (form, input, errorMessage, { inputErrorClass, errorClass }) => {
  const error = input.nextElementSibling;
  input.classList.add(inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(errorClass);
};

const hideErrorMessage = (form, input, { inputErrorClass, errorClass }) => {
  const error = input.nextElementSibling;
  input.classList.remove(inputErrorClass);
  error.classList.remove(errorClass);
  error.textContent = "";
};


const toggleButtonState = (inputs, submitButton, { inactiveButtonClass }) => {
  const isValid = inputs.some((input) => input.validity.valid);
  if (isValid) {
    submitButton.classList.remove(inactiveButtonClass);

  } else {
    submitButton.classList.add(inactiveButtonClass);

  }
}

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    })
    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const submitButton = form.querySelector(submitButtonSelector);

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
  inactiveButtonClass: "popup__save_invalid",
  inputErrorClass: "popup__edit_invalid",
  errorClass: "popup__edit_error"
});
