
const link = document.getElementsByClassName("navigation__link");
const checkbox = document.getElementById("nav-toggle");

//added an event listener on all navigation links. Once clicked, closes the nav menu.
for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', e => {
        checkbox.checked = false;
    });
}

