
let formElement = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit-btn');
let closePopup = document.querySelector('.popup__close');
let saveBtn = formElement.querySelector('.popup__save');
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__subtitle');
let formProfile = formElement.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');

function opPopup() {
    formElement.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    formElement.classList.remove('popup_opened');
}

function remPopup() {
    formElement.classList.remove('popup_opened');
}

openPopup.addEventListener('click', opPopup);
formProfile.addEventListener('submit', formSubmitHandler);
closePopup.addEventListener('click', remPopup);