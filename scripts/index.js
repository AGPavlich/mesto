
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

function submitCardForm(event) {
    event.preventDefault();
    const link = cardInputLink.value;
    const name = cardInputName.value;
    renderCard(name, link)
    cardForm.reset();
    closePopup(popupCard);
}

function submitProfileForm(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function editProfile() {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openPopupPreview(name, link) {
    previewPhoto.src = link
    previewPhoto.alt = name
    previewName.textContent = name;
    openPopup(popupPreview);
}

popupCard.addEventListener('submit', submitCardForm);
formProfile.addEventListener('submit', submitProfileForm);

buttonOpenPopupProfile.addEventListener('click', editProfile);
buttonOpenPopupCard.addEventListener('click', () => { openPopup(popupCard); });

buttonClosePopupProfile.addEventListener('click', () => { closePopup(popupProfile) });
buttonClosePopupCard.addEventListener('click', () => { closePopup(popupCard) });
buttonClosePopupPreview.addEventListener('click', () => { closePopup(popupPreview) });