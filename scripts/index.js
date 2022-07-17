
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
const formProfile = popupProfile.querySelector('.popup__form_type_edit-profile');
const cardForm = popupCard.querySelector('.popup__form_type_add-card');
const template = cardsList.querySelector('.element-template');
const previewClose = popupPreview.querySelector('.popup__close-button_preview');
const previewPhoto = popupPreview.querySelector('.popup__image')

function createCard(name, link) {
    const cardTemplate = template.content.querySelector('.element').cloneNode(true);
    const card = cardTemplate.querySelector('.element__img');
    card.src = link;
    card.alt = name;
    cardTemplate.querySelector('.element__title').textContent = name;
    cardTemplate.querySelector('.element__like').addEventListener('click', like);
    cardTemplate.querySelector('.element__remove').addEventListener('click', removeCard);
    card.addEventListener('click', () => openPopupPreview(name, link));
    return cardTemplate;
}

function renderCards(name, link) {
    const cardElement = createCard(name, link);
    cardsList.prepend(cardElement)
}

initialCards.forEach(function (item) {
    renderCards(item.name, item.link);
})

function like(event) {
    event.target.classList.toggle('element__like_type_active');
}

function removeCard(event) {
    const card = event.currentTarget.closest('.element');
    card.remove();
}

function cardFormSubmit(event) {
    event.preventDefault();
    const link = popupCard.querySelector('.popup__input_type_link').value;
    const name = popupCard.querySelector('.popup__input_type_title').value;
    renderCards(name, link)
    cardForm.reset();
    closePopup(popupCard);
}

function profileFormSubmit(event) {
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

function openPopup(popupName) {
    popupName.classList.add('popup_opened');
}

function closePopup(popupName) {
    popupName.classList.remove('popup_opened');
}

function openPopupPreview(name, link) {
    previewPhoto.src = link
    previewPhoto.alt = name
    popupPreview.querySelector('.popup__preview-title').textContent = name;

    openPopup(popupPreview);
}

popupCard.addEventListener('submit', cardFormSubmit);
formProfile.addEventListener('submit', profileFormSubmit);

buttonOpenPopupProfile.addEventListener('click', editProfile);
buttonOpenPopupCard.addEventListener('click', () => { openPopup(popupCard); });

buttonClosePopupProfile.addEventListener('click', () => { closePopup(popupProfile) });
buttonClosePopupCard.addEventListener('click', () => { closePopup(popupCard) });
previewClose.addEventListener('click', () => { closePopup(popupPreview) });