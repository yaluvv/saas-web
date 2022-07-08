const menu = document.querySelector('.nav');
const burgerMenu = document.querySelector('.menu-btn');
const openPopupLogin = document.querySelector('#open-login');
const openPopupStarted = document.querySelector('#open-started');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('#popup-close');


burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('nav_active');
    burgerMenu.classList.toggle('menu-btn_active')
})

openPopupLogin.addEventListener('click', () => {
    popup.classList.toggle('popup__open');
})
openPopupStarted.addEventListener('click', () => {
    popup.classList.toggle('popup__open');
})
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup__open')
})
