const formNew = {
    form: '.popup__form[name="profile"]'
}

function enableValidation(config) {
    //1. Найти форму в документе
    const form = document.querySelector(config.form);
    //2. Установить слушатель сабмита.
    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('input',)
}

function handleFormSubmit(event) {
    event.preventDefault();
    // 1. Определить валидность
    const form = event.currentTarget;
    const isValid = form.checkValidity();

    //2. Вывести Алерт
    if (isValid) {
        alert('OK')
        //3. Если форма валидна, то сбросить её.
        form.resrt();
    } else {
        alert('errore')
    }
}

function handleFormInput(event) {
    const input = event.target;
    const form = event.currentTarget;

    //1. Установить кастомные тексты ошибок.

    //2. Показать ошибки в контейнере под каждым полем.
    //3. Включить или отключить кнопку отправки формы.
}

function setCustomError(input) {
    const validity = input.validity;

    input.setCustomValidity(''); 
    
}


enableValidation(formNew);
