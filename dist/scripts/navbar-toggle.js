const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar-list');
navbarToggler.addEventListener('click', ()=>{
    navbar.classList.toggle('show-nav');
})