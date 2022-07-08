const menu = document.querySelector('.nav');
const burgerMenu = document.querySelector('.menu-btn');


burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('nav_active');
    burgerMenu.classList.toggle('menu-btn_active')
})