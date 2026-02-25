import { getGenres, getPoster } from "../api/tmdb.js";
export  async function searchPage() {
    const main = document.createElement('div')
    main.classList.add('searchPage')
    main.innerHTML = `
        <div class='searchBlock'>
            <input/>
        </div>
        <div class='searchContainer'>

        </div>
        <div class='mainDefPage'>
        
        </div>
    `;
    // Логика дефолтного выведения фильмов
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

    // тут начинается логика поиска

    const input = main.querySelector('input')
    
    input.addEventListener(('input'), ()=>{
        const text = input.value.trim().toLowerCase()
        const searchContainerMain = main.querySelector('.searchContainer')
        
        searchContainerMain.innerHTML = ''
        if(!text){
            return searchContainerMain.innerHTML=``
        }
        const filteredTitles = posters
        .filter(postersDataF => postersDataF.original_title.toLowerCase().includes(text))
        filteredTitles.forEach(titles =>{
            const searchTitles = document.createElement('div')
            searchTitles.innerHTML = `
                <div class='searchImg'></div>
                <h1>${titles.original_title}</h1>
            `
        const searchTitlesImg = searchTitles.querySelector('.searchImg')
        const searchImgContainer = document.createElement('img')
        searchImgContainer.src = IMG_BASE + titles.poster_path
        searchTitlesImg.append(searchImgContainer)
        searchContainerMain.append(searchTitles)
        })
    })
    return main
}



