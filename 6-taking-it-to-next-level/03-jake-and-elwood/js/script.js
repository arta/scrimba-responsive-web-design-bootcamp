// Verb, if present, first to:
// prompt action
// distinguish from a state (class) name

const btnOpenNavHeader = document.querySelector('.btn--open-nav-header')
const btnCloseNavHeader = document.querySelector('.btn--close-nav-header')
const navHeader = document.querySelector('.nav-header')

btnOpenNavHeader.addEventListener('click', () =>
    navHeader.classList.add('nav-header--open')
)

btnCloseNavHeader.addEventListener('click', () =>
    navHeader.classList.remove('nav-header--open')
)

