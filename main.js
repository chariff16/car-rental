let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navBar.classList.remove('active');
}