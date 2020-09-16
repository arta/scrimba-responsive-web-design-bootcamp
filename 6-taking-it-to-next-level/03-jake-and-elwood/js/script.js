const get = elementID => document.querySelector(elementID)

// Verb, if present, first to:
//  a) prompt action
//  b) distinguish from a state (class) name

const btnOpenNavHeader  = get('.btn--open-nav-header')
const btnCloseNavHeader = get('.btn--close-nav-header')
const navHeader         = get('.nav-header')

btnOpenNavHeader.addEventListener('click', () =>
    navHeader.classList.add('nav-header--open')
)

btnCloseNavHeader.addEventListener('click', () =>
    navHeader.classList.remove('nav-header--open')
)

