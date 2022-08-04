const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupCard = document.querySelector('.popup_type_add-card');
const popupPreview = document.querySelector('.popup_type_preview');
const cardsList = document.querySelector('.elements_type_list');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button_edit-profile');
const buttonClosePopupCard = popupCard.querySelector('.popup__close-button_add-card');
const buttonClosePopupPreview = popupPreview.querySelector('.popup__close-button_preview');
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_description');
const cardInputLink = popupCard.querySelector('.popup__input_type_link');
const cardInputName = popupCard.querySelector('.popup__input_type_title');
const previewName = popupPreview.querySelector('.popup__preview-title');
const formProfile = popupProfile.querySelector('.popup__form_type_edit-profile');
const cardForm = popupCard.querySelector('.popup__form_type_add-card');
const templateCard = cardsList.querySelector('.element-template');
const previewPhoto = popupPreview.querySelector('.popup__image')

function createCard(name, link) {
    const newCard = templateCard.content.querySelector('.element').cloneNode(true);
    const cardImg = newCard.querySelector('.element__img');
    cardImg.src = link;
    cardImg.alt = name;
    newCard.querySelector('.element__title').textContent = name;
    newCard.querySelector('.element__like').addEventListener('click', like);
    newCard.querySelector('.element__remove').addEventListener('click', removeCard);
    cardImg.addEventListener('click', () => openPopupPreview(name, link));
    return newCard;
}

function renderCard(name, link) {
    const cardElement = createCard(name, link);
    cardsList.prepend(cardElement)
}

initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
})

function like(event) {
    event.target.classList.toggle('element__like_type_active');
}

function removeCard(event) {
    const card = event.currentTarget.closest('.element');
    card.remove();
}

function handleCardFormSubmit(event) {
    event.preventDefault();
    const inputList = Array.from(cardForm.querySelectorAll('.popup__input'));
    const buttonElement = cardForm.querySelector('.popup__button');

    const link = cardInputLink.value;
    const name = cardInputName.value;
    renderCard(name, link)
    cardForm.reset();
    toggleButtonState(inputList, buttonElement)
    closePopup(popupCard);
}

function handleProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function editProfile() {
    openPopup(popupProfile);  
    const inputList = Array.from(formProfile.querySelectorAll('.popup__input'));
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    hideInputErrors(formProfile, inputList)
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscape);
    document.addEventListener('mousedown', closeOverlayClick);

}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscape);
    document.removeEventListener('click', closeOverlayClick);
}

function closeEscape(event) {
    const activePopup = document.querySelector('.popup_opened');
    if (activePopup && event.key === 'Escape') {
        closePopup(activePopup);
    }
}

function closeOverlayClick(event) {
    const activePopup = document.querySelector('.popup_opened');
    if (activePopup && event.target === activePopup) {
        closePopup(activePopup);
    }
}

function openPopupPreview(name, link) {
    previewPhoto.src = link
    previewPhoto.alt = name
    previewName.textContent = name;
    openPopup(popupPreview);
}



popupCard.addEventListener('submit', handleCardFormSubmit);
formProfile.addEventListener('submit', handleProfileFormSubmit);
buttonOpenPopupProfile.addEventListener('click', editProfile);
buttonOpenPopupCard.addEventListener('click', () => { openPopup(popupCard); });
buttonClosePopupProfile.addEventListener('click', () => { closePopup(popupProfile) });
buttonClosePopupCard.addEventListener('click', () => { closePopup(popupCard) });
buttonClosePopupPreview.addEventListener('click', () => { closePopup(popupPreview) });