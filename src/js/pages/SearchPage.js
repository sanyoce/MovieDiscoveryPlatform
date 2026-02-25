import { getGenres, getPoster } from "../api/tmdb.js";
export  async function searchPage() {
    const main = document.createElement('div')
    main.classList.add('searchPage')
    main.innerHTML = `
        <div class='searchBlock'>
            <input/>
        </div>
        <div class='mainDefPage'>
        
        </div>
    `;
    
    const IMG_BASE = 'https://image.tmdb.org/t/p/w200';
    const postersData = await getPoster()
    const posters = postersData.results
    .slice(0,20)
    console.log(posters)

    posters.forEach(poster =>{
        const defaultPosters = document.createElement('div')
        defaultPosters.classList.add('defaultFilms')
        defaultPosters.innerHTML = `
        <div>
            <div class='filmPoster'>
            
            </div>

            <div class='filmName'>
                <h2>${poster.original_title}</h2>
            </div>
            <div class='rateFilm'>
                <p>${poster.vote_average}</p>
                <img src = './assets/icons/Vector 619.svg'>
            </div>
        </div>
    `; 
    const testPosters = defaultPosters.querySelector('.filmPoster')
    const posterImg = document.createElement('img')
    posterImg.src = IMG_BASE + poster.poster_path
    posterImg.alt = poster
    testPosters.append(posterImg)

    const mainDefFilms = main.querySelector('.mainDefPage')
    mainDefFilms.append(defaultPosters)
    })

    // const input = main.querySelector('input')
    return main
}



