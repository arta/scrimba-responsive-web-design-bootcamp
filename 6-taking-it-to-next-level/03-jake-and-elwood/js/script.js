const btnHeaderNavClose = document.querySelector('.btn-header-nav-close');
const btnHeaderNavOpen = document.querySelector('.btn-header-nav-open');
const headerNav = document.querySelector('.header-nav');

btnHeaderNavClose.addEventListener('click', () => {
    headerNav.classList.remove('header-nav-open');
});

btnHeaderNavOpen.addEventListener('click', () => {
    headerNav.classList.add('header-nav-open');
});
