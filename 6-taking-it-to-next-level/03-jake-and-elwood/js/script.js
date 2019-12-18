// Verb, if present, first to:
// prompt action
// distinguish from a state (class) name

const btnOpenHeaderNav = document.querySelector('.btn--open-header-nav');
const btnCloseHeaderNav = document.querySelector('.btn--close-header-nav');
const headerNav = document.querySelector('.header-nav');

btnOpenHeaderNav.addEventListener('click', () => {
    headerNav.classList.add('header-nav--open');
});

btnCloseHeaderNav.addEventListener('click', () => {
    headerNav.classList.remove('header-nav--open');
});

