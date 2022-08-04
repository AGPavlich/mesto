const formNew = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(formNew.inputErrorClass);
    errorElement.classList.add(formNew.errorClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(formNew.inputErrorClass);
    errorElement.classList.remove(formNew.errorClass);
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some(input => !input.validity.valid)
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(formNew.inputSelector));
    const buttonElement = formElement.querySelector(formNew.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);

    } else {
        hideInputError(formElement, inputElement);
    }
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(formNew.inactiveButtonClass);
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(formNew.inactiveButtonClass);
    }
};
const hideInputErrors = (formElement, inputList) => {
    inputList.forEach(inputElement => hideInputError(formElement, inputElement));
}

const enableValidation = (formElement) => {
    const formList = Array.from(document.querySelectorAll(formElement.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement);
    });
};

enableValidation(formNew);


