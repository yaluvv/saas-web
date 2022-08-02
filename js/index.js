const menu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link')
let lengthLinks = navLinks.length
const burgerMenu = document.querySelector('.menu-btn')

const popupBtn = document.querySelectorAll('.popup-btn')
const popupOverlay = document.querySelector('.popup__container')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('#popup-close')


const body = document.body


burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('nav_active')
    burgerMenu.classList.toggle('menu-btn_active')
})

popupBtn.forEach(btn => btn.addEventListener('click', () => {
    popup.classList.toggle('popup__open')
}))
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup__open')
})

navLinks.forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('nav_active');
    burgerMenu.classList.remove('menu-btn_active')
}))

popup.addEventListener('click', (e) => {
    if (e.target == popupOverlay) {
        popup.classList.remove('popup__open')
    }
})

function navActive(el) {
    for (let i = 0; i < lengthLinks; i++) {
        navLinks[i].classList.remove("nav__link_active")
    }

    el.classList.add("nav__link_active")
}

for (let i = 0; i < lengthLinks; i++) {
    navLinks[i].addEventListener("click", function () {
        navActive(this);
    })
}


