const btnHeaderNavClose = document.querySelector('.btn-header-nav-close');
const headerNav = document.querySelector('.header-nav');

btnHeaderNavClose.addEventListener('click', () => {
    headerNav.classList.remove('header-nav-open');
})