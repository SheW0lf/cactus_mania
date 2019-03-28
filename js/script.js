
const link = document.getElementsByClassName("navigation__link");
const checkbox = document.getElementById("nav-toggle");

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', e => {
        checkbox.checked = false;
    });
}

