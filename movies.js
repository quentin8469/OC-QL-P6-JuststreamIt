// je me connecte à l'api
const url = 'http://localhost:8000/api/v1/titles/'
// je recupere la promesse
async function getMovies(url) {

    let movies = await fetch(url)
        .then(resp => resp.json())
        .then(resp => { return resp })
    return movies.results
}
// je recupere les dicos de chaque films
getMovies(url).then(resp => {
    for (let movie of resp) {
        console.log(movie.title)
    }
})


// creation d'une fonction best movie?
    // recupere les infos du meilleur film
        // url du meilleurs film
        //"imdb_score": "9.6" + "votes": 961

// creation d'un fonction all best movies???
    // recupere les infos des meilleurs film de chaque categorie
        // url des meilleurs films de chaqus categories
            //"imdb_score": "9.6"

// creation d'une fonction pour les categorie??? 
    // recupere les infos des  films d'une  categorie
        //url = Fantasy
        //url = Horror
        //url = Mystery