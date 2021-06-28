
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
getCatMovies(best_movies_url).then(resp => {
    let image_url0 = resp[0].image_url
    let image_url1 = resp[1].image_url
    let image_url2 = resp[2].image_url
    let image_url3 = resp[3].image_url
    let image_url4 = resp[4].image_url
    let image_url5 = resp[5].image_url
    let image_url6 = resp[6].image_url
    let affichage_image_url0 = document.querySelector("#img1")
    let affichage_image_url1 = document.querySelector("#img2")
    let affichage_image_url2 = document.querySelector("#img3")
    let affichage_image_url3 = document.querySelector("#img4")
    let affichage_image_url4 = document.querySelector("#img5")
    let affichage_image_url5 = document.querySelector("#img6")
    let affichage_image_url6 = document.querySelector("#img7")
    affichage_image_url0.src = image_url0
    affichage_image_url1.src = image_url1
    affichage_image_url2.src = image_url2
    affichage_image_url3.src = image_url3
    affichage_image_url4.src = image_url4
    affichage_image_url5.src = image_url5
    affichage_image_url6.src = image_url6
})

getCatMovies(fantasy_url).then(resp => {
    let image_url0 = resp[0].image_url
    let image_url1 = resp[1].image_url
    let image_url2 = resp[2].image_url
    let image_url3 = resp[3].image_url
    let image_url4 = resp[4].image_url
    let image_url5 = resp[5].image_url
    let image_url6 = resp[6].image_url
    let affichage_image_url0 = document.querySelector("#img8")
    let affichage_image_url1 = document.querySelector("#img9")
    let affichage_image_url2 = document.querySelector("#img10")
    let affichage_image_url3 = document.querySelector("#img11")
    let affichage_image_url4 = document.querySelector("#img12")
    let affichage_image_url5 = document.querySelector("#img13")
    let affichage_image_url6 = document.querySelector("#img14")
    affichage_image_url0.src = image_url0
    affichage_image_url1.src = image_url1
    affichage_image_url2.src = image_url2
    affichage_image_url3.src = image_url3
    affichage_image_url4.src = image_url4
    affichage_image_url5.src = image_url5
    affichage_image_url6.src = image_url6
})

getCatMovies(horror_url).then(resp => {
    let image_url0 = resp[0].image_url
    let image_url1 = resp[1].image_url
    let image_url2 = resp[2].image_url
    let image_url3 = resp[3].image_url
    let image_url4 = resp[4].image_url
    let image_url5 = resp[5].image_url
    let image_url6 = resp[6].image_url
    let affichage_image_url0 = document.querySelector("#img15")
    let affichage_image_url1 = document.querySelector("#img16")
    let affichage_image_url2 = document.querySelector("#img17")
    let affichage_image_url3 = document.querySelector("#img18")
    let affichage_image_url4 = document.querySelector("#img19")
    let affichage_image_url5 = document.querySelector("#img20")
    let affichage_image_url6 = document.querySelector("#img21")
    affichage_image_url0.src = image_url0
    affichage_image_url1.src = image_url1
    affichage_image_url2.src = image_url2
    affichage_image_url3.src = image_url3
    affichage_image_url4.src = image_url4
    affichage_image_url5.src = image_url5
    affichage_image_url6.src = image_url6
})

getCatMovies(mystery_url).then(resp => {
    let image_url0 = resp[0].image_url
    let image_url1 = resp[1].image_url
    let image_url2 = resp[2].image_url
    let image_url3 = resp[3].image_url
    let image_url4 = resp[4].image_url
    let image_url5 = resp[5].image_url
    let image_url6 = resp[6].image_url
    let affichage_image_url0 = document.querySelector("#img22")
    let affichage_image_url1 = document.querySelector("#img23")
    let affichage_image_url2 = document.querySelector("#img24")
    let affichage_image_url3 = document.querySelector("#img25")
    let affichage_image_url4 = document.querySelector("#img26")
    let affichage_image_url5 = document.querySelector("#img27")
    let affichage_image_url6 = document.querySelector("#img28")
    affichage_image_url0.src = image_url0
    affichage_image_url1.src = image_url1
    affichage_image_url2.src = image_url2
    affichage_image_url3.src = image_url3
    affichage_image_url4.src = image_url4
    affichage_image_url5.src = image_url5
    affichage_image_url6.src = image_url6
})