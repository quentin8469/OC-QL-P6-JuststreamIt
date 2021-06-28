// Recup button and div.modale
let button = document.querySelector(".modaleshow"); // selection du bouton
let modal = document.querySelector(".modal"); // selection de la div
let closebutton = document.querySelector(".modalclose"); // selection du bouton
// add evement onclick at button
button.onclick = function () {
    modal.style.display = "block"
}
// evement: passer de cacher à visible
closebutton.onclick = function () {
    modal.style.display = "none"
}
// si click exterieur de la modale
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


