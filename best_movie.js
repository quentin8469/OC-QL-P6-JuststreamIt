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
            let affichage_image_url = document.querySelector("#img0")
            affichage_image_url.src = movie.image_url
            document.querySelector(".titre").innerText = movie.title
            button.addEventListener("click", function () {
                displayModal(movie)
            })

        } catch (err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.log(err);
    });
