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

function displayModal(movie) {
    //affichage dans html
    document.querySelector("#actors").innerText = movie.actors
    document.querySelector("#genres").innerText = movie.directors
    document.querySelector("#genres").innerText = movie.genres
    document.querySelector("#imdb").innerText = movie.imdb_score
    document.querySelector("#title").innerText = movie.title
    document.querySelector("#rated").innerText = movie.votes
    document.querySelector("#date").innerText = movie.year
    document.querySelector("#time").innerText = movie.duration
    document.querySelector("#resum").innerText = movie.long_description
    document.querySelector("#country").innerText = movie.countries

    modal.style.display = "block"

}
