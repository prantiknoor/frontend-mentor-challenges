const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', (e) => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === "true") {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    } else {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }

});