
const fantasy_url = "http://localhost:8000/api/v1/titles/?genre=Fantasy&sort_by=-imdb_score";
const horror_url = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score";
const mystery_url = "http://localhost:8000/api/v1/titles/?genre=Mystery&sort_by=-imdb_score";
const best_movies_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"


async function getCatMovies(url) {
    let movie = await fetch(url)
        .then(response => response.json())
        .then(response => { return response })
    let nextUrl = movie.next
    let nextMovie = await fetch(nextUrl)
        .then(response => response.json())
        .then(response => { return response })
    let finalTab = movie.results.concat(nextMovie.results)
    return finalTab
}

async function creatMoviesCat(list_movies, classeCat) {
    // recup le contenaire
    let moviesByCat = document.querySelector(`.carrousel.${classeCat}`)
    let div_movies = moviesByCat.querySelectorAll(".item")
    for (let [i, movie] of div_movies.entries()) {
        let affichage_image_url = movie.querySelector("img")
        affichage_image_url.src = list_movies[i].image_url
        let movie_infos = await getMovieInfo(list_movies[i].url)
        movie.addEventListener("click", function () {
            displayModal(movie_infos)
        })
    }
}

getCatMovies(best_movies_url)
    .then(resp => {
        creatMoviesCat(resp, "top-movies");
    })

getCatMovies(fantasy_url).then(resp => {
    creatMoviesCat(resp, "fantasy");
})

getCatMovies(horror_url).then(resp => {
    creatMoviesCat(resp, "horror");
})

getCatMovies(mystery_url).then(resp => {
    creatMoviesCat(resp, "mystery");
})
