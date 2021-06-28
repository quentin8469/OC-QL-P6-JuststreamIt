const best_movie = fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score");

async function getMovieInfo(url) {
    let movie = await fetch(url)
        .then(response => response.json())
        .then(response => { return response })
    return movie
}




best_movie
    .then(async (datamovie) => {
        let response = await datamovie.json();
        try {
            let url_movie = response.results[0].url
            let movie = await getMovieInfo(url_movie)
            //modif du DOM avec les datas du film
            let affichage_actors = document.querySelector("#actors")
            let affichage_directors = document.querySelector("#real")
            let affichage_genres = document.querySelector("#genres")
            let affichage_imdb_score = document.querySelector("#imdb")
            let affichage_title = document.querySelector("#title")
            let affichage_votes = document.querySelector("#rated")
            let affichage_year = document.querySelector("#date")
            let affichage_big_title = document.querySelector(".titre")
            let affichage_duration = document.querySelector("#time")
            let affichage_long_description = document.querySelector("#resum")
            let affichage_countries = document.querySelector("#country")
            let affichage_image_url = document.getElementById("img0");
            //affichage dans html
            affichage_actors.innerText = movie.actors
            affichage_directors.innerText = movie.directors
            affichage_genres.innerText = movie.genres
            affichage_imdb_score.innerText = movie.imdb_score
            affichage_title.innerText = movie.title
            affichage_votes.innerText = movie.votes
            affichage_year.innerText = movie.year
            affichage_big_title.innerText = movie.title
            affichage_duration.innerText = movie.duration
            affichage_long_description.innerText = movie.long_description
            affichage_countries.innerText = movie.countries
            affichage_image_url.src = movie.image_url
        } catch (err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.log(err);
    });
