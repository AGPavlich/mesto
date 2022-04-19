const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupOpenCard = document.querySelector('.popup_type_add-card');
const popupPreview = document.querySelector('.popup_type_preview');
const openBtnPopupProfile = document.querySelector('.profile__edit-button');
const openBtnPopupCard = document.querySelector('.profile__add-button');
const closeBtnPopupProfile = document.querySelector('.popup__close-button_edit-profile');
const closeBtnPopupCard = document.querySelector('.popup__close-button_add-card');
const closeBtnPopupPreview = document.querySelector('.popup__close-button_preview');
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const formProfile = popupEditProfile.querySelector('.popup__form_type_edit-profile');
const cardsList = document.querySelector('.elements_type_list');
const cardForm = document.querySelector('.popup__form_type_add-card');
const template = document.querySelector('.element-template');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

cardForm.addEventListener('submit', addCard);

function renderCards(cardTitleValue, cardLinkValue) {

    const card = template.content.firstElementChild.cloneNode(true);

    const cardTitle = card.querySelector('.element__title').textContent = cardTitleValue;
    const fotoLink = card.querySelector('.element__img').src = cardLinkValue;
    const fotoAlt = card.querySelector('.element__img').alt = cardTitleValue;

    card.querySelector('.element__like').addEventListener('click', like);
    card.querySelector('.element__remove').addEventListener('click', removeCard);

    closeBtnPopupPreview.addEventListener('click', function () {
        removePopup(popupPreview);
    });

    cardsList.prepend(card);
    removePopup(popupOpenCard);
}

function openPopupPreview(event) {
    popupPreview.querySelector('.popup__image').src = event.currentTarget.src;
    console.log(popupPreview)
    popupPreview.querySelector('.popup__preview-title').textContent = event.currentTarget.alt;
    console.log(event.target)
    popupPreview.classList.add('popup_opened');

}

function addCard(event) {
    event.preventDefault();
    const newCardTitle = event.currentTarget.querySelector('.popup__input_type_title').value;
    const newCardlink = event.currentTarget.querySelector('.popup__input_type_link').value;
    renderCards(newCardTitle, newCardlink);
    event.currentTarget.reset();
}

function like(event) {
    event.target.classList.toggle('element__like_type_active');
}


function removeCard(event) {
    const card = event.currentTarget.closest('.element');
    card.remove();
}

initialCards.forEach(function (item) {
    console.log(item.name, item.link);
    renderCards(item.name, item.link);

})

let elementPhoto = document.querySelectorAll('.element__img');
elementPhoto.forEach(function (item) {
    item.addEventListener('click', openPopupPreview);
})

function openPopup(popupOpen) {
    if (popupOpen === popupEditProfile) {
        popupOpen.classList.add('popup_opened');

        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
    if (popupOpen === popupOpenCard) {
        popupOpen.classList.add('popup_opened');
    }

    if (popupOpen === popupPreview) {
        popupOpen.classList.add('popup_opened');
    }

}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value; //
    profileJob.textContent = jobInput.value;
    removePopup(popupEditProfile);
}

function removePopup(popupClose) {
    popupClose.classList.remove('popup_opened');
}

openBtnPopupProfile.addEventListener('click', function () {
    openPopup(popupEditProfile);
});

openBtnPopupCard.addEventListener('click', function () {
    openPopup(popupOpenCard);
});

closeBtnPopupProfile.addEventListener('click', function () {
    removePopup(popupEditProfile);
});

closeBtnPopupCard.addEventListener('click', function () {
    removePopup(popupOpenCard);
});

formProfile.addEventListener('submit', formSubmitHandler);