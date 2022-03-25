
let formElement = document.querySelector('.popup');

let openPopup = document.querySelector('.profile__edit-btn');
let closePopup = document.querySelector('.popup__close');

let saveBtn = formElement.querySelector('.popup__save');

let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__subtitle');

let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_description');

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    formElement.classList.remove('popup__opened');
}

formElement.addEventListener('submit', formSubmitHandler);

function remPopup() {
    formElement.classList.remove('popup__opened');
}

formElement.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        remPopup();
    }
})

openPopup.addEventListener('click', function () {
    formElement.classList.add('popup__opened');
});
closePopup.addEventListener('click', remPopup);