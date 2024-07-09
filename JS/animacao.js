const navbar_btt = document.getElementsByClassName("navbar_button")[0];
const navbar_links = document.getElementsByClassName("navbar_links")[0];
const navbar = document.getElementsByClassName("navbar")[0];

function toggle_menu(event){

    if(event.type == 'touchstart') event.preventDefault();

    navbar_links.classList.toggle('active');
    navbar.classList.toggle('active');
}

navbar_btt.addEventListener('click', toggle_menu);
navbar_btt.addEventListener('touchstart', toggle_menu);