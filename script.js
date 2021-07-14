const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const aboutMenu = document.querySelector('#aboutme-page');
    const projectMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contactme-page');
    let scrollPos = window.scrollY

    if (window.innerWidth > 960 && scrollPos < 600) {
        aboutMenu.classList.add('highlight')
        projectMenu.classList.add('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        projectMenu.classList.add('highlight')
        contactMenu.classList.add('highlight')
        return
    }

    if ((element && window.innerWidth < 960 && scrollPos < 600) || element) {
        element.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('.is-active')
        menuLinks.classList.remove('active')
    }
};

menuLinks.addEventListener('click', hideMobileMenu)