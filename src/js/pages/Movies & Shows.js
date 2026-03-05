import { getGenres, getPoster, getPopular,getMovieDetails,getUpcoming  } from "../api/tmdb.js"
export  async function MoviesShowsPage() {
  const page = document.createElement('div')
  page.classList.add('movieAndShowPage')
  page.innerHTML = `
    <div class='movieBannerWrapper'></div>
  `;

const genresData = await getGenres();
const postersData = await getPoster();
const page1 = await getPoster(1)
const page2 = await getPoster(2)
const page3 = await getPoster(3)
const page4 = await getPoster(4)
const page5 = await getPoster(5)

const allMovies = [
  ...page1.results,
  ...page2.results,
  ...page3.results,
  ...page4.results,
  ...page5.results,
]


let startIndexForBanner = 0
let stepForBanner = 1
const IMG_BASE = "https://image.tmdb.org/t/p/w780";

function renderBanner (startIndex, step){
  const movieBannerBlock = page.querySelector('.movieBannerWrapper')
  movieBannerBlock.innerHTML=``

  const renderBannerTest = allMovies
  .slice(startIndexForBanner, startIndexForBanner + stepForBanner)
  .forEach(names =>{
    const movieBanner = document.createElement('div')
    movieBanner.classList.add('movieBannerSection')
    movieBanner.innerHTML = `
      <div class='movieBannerBackground' 
      style="background-image: url('${IMG_BASE + names.backdrop_path}');">
        <div class='movieBannerName'><h1>${names.original_title}</h1></div>
        <div class='movieBannerDescription'><p>${names.overview}</p></div>
        <div class='movieBannerBtns'>
          <button><img src='./assets/icons/Rectangle 511 (Stroke).svg'/><p>Play Now</p></button>
          <button><img src='./assets/icons/Vector (2).svg'/></button>
          <button><img src='./assets/icons/Vector (3).svg'/></button>
          <button><img src='./assets/icons/VEctor (4).svg'/></button>
        </div>
        <div class='prevNextBtns'>
          <button class='prevBtn'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='nextBtn'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>
    `;

    movieBannerBlock.append(movieBanner)
  })

  const prevBtn = movieBannerBlock.querySelector('.prevBtn')
  const nextBtn = movieBannerBlock.querySelector('.nextBtn')

  prevBtn.addEventListener('click', () => {
    startIndexForBanner = Math.max(0, startIndexForBanner - stepForBanner)
    renderBanner(startIndexForBanner, stepForBanner)
  })

  nextBtn.addEventListener('click', () => {
    startIndexForBanner = Math.min(genresData.genres.length - stepForBanner, startIndexForBanner + step)
    renderBanner(startIndexForBanner, stepForBanner)
  })

}
renderBanner(startIndexForBanner,stepForBanner)


const ourGenresSection = document.createElement('div')
ourGenresSection.classList.add('ourFilms')
ourGenresSection.innerHTML=`
  <div><p>Movies</p></div>

  <div class='genresBlock'>
    <div class='spaceForGenres'></div>
  </div>

  <div class='genresBlock'>
    <div class='spaceForPopularGenres'></div>
  </div>

  <div class='genresBlock'>
    <div class='spaceForTrending'></div>
  </div>

  <div class='genresBlock'>
    <div class='spaceForNewReleases'></div>
  </div>

  <div class='genresBlock'>
    <div class='spaceForMustWatch'></div>
  </div>
`;
page.append(ourGenresSection)
const ourGenresSectionSpaces = ourGenresSection.querySelector('.spaceForGenres')

const  homeCarouselSection = document.createElement('div')
homeCarouselSection.classList.add('moviesAndShowsCarousel')
let startIndex = 0
let step = 5
let anotherIndex = 0
let anotherStep = 4
let startIndexFotTrendind = 0
let stepForTrending = 4

function renderCarousel(startIndex, step){
  homeCarouselSection.innerHTML=``
    const homeCarousel = document.createElement('div')
    homeCarousel.classList.add('homePageCarousel')
    homeCarousel.innerHTML=`
        <div class='headerCarousel'>
            <div class='headerCarouselInfo'>
              <h2>Our Genres</h2>
            </div>
                    
            <div class='headerCarouselBtn'>
              <button class='prev'><img src='./assets/icons/Vector 619 (1).svg'/></button>
              <button class='next'><img src='./assets/icons/Vector 619.svg'/></button>
            </div>
          </div>
          <div class='createCarouselShowPage'>
          </div>
        `
homeCarouselSection.append(homeCarousel)

const genres = genresData.genres.slice(startIndex, startIndex + step)

genres.forEach(genre =>{
  const poster4Genre = postersData.results
  .filter(movie => movie.genre_ids?.includes(genre.id) && movie.poster_path)
  .slice(0,4)
  const containerCarousel = document.createElement('div')
  containerCarousel.classList.add('blockCarouselShowPage')
  containerCarousel.innerHTML = `
    <div class='carouselPosters'>
    </div>

    <div class = 'genreTxt'>
      <h2>${genre.name}</h2>
      <img src = './assets/icons/Vector 619.svg'/>
    </div>
  `;
  const carouselText = homeCarousel.querySelector('.createCarouselShowPage')
  carouselText.append(containerCarousel)

  poster4Genre.forEach(poster =>{
    const space4Posters = containerCarousel.querySelector('.carouselPosters')
    const posterImg = document.createElement('img')
    posterImg.src = IMG_BASE + poster.poster_path
    space4Posters.append(posterImg)
  })

})
  const prev = homeCarouselSection.querySelector('.prev')
  const next = homeCarouselSection.querySelector('.next')
  prev.addEventListener('click', () => {
    startIndex = Math.max(0, startIndex - step)
    renderCarousel(startIndex, step)
  })
  next.addEventListener('click', () => {
    startIndex = Math.min(genresData.genres.length - step, startIndex + step)
    renderCarousel(startIndex, step)
  })

}
renderCarousel(startIndex,step)
ourGenresSectionSpaces.append(homeCarouselSection)



const ourPopularGenresSection = ourGenresSection.querySelector('.spaceForPopularGenres')
const spaceForPopelarGenres = document.createElement('div')
spaceForPopelarGenres.classList.add('wrapperForPopelarGenres')

function renderPopularGenresCarousel(startIndexFotTrendind, stepForTrending){
  spaceForPopelarGenres.innerHTML=``
    const homeCarousel = document.createElement('div')
    homeCarousel.classList.add('homePageCarousel')
    homeCarousel.innerHTML=`
        <div class='headerCarousel'>
            <div class='headerCarouselInfo'>
              <h2>Popular Top 10 In Genres</h2>
            </div>
                    
            <div class='headerCarouselBtn'>
              <button class='prev'><img src='./assets/icons/Vector 619 (1).svg'/></button>
              <button class='next'><img src='./assets/icons/Vector 619.svg'/></button>
            </div>
          </div>
          <div class='createCarousel'>
          </div>
        `
spaceForPopelarGenres.append(homeCarousel)

const genres = genresData.genres.slice(startIndexFotTrendind, startIndexFotTrendind + stepForTrending)

genres.forEach(genre =>{
  const poster4Genre = postersData.results
  .filter(movie => movie.genre_ids?.includes(genre.id) && movie.poster_path)
  .slice(0,4)
  const containerCarousel = document.createElement('div')
  containerCarousel.classList.add('blockCarousel')
  containerCarousel.innerHTML = `
    <div class='carouselPosters'>
    </div>

    <div class = 'genreTxt'>
      <div>
      <p>Top 10 in</p>
      <h2>${genre.name}</h2>
      </div>
      <img src = './assets/icons/Vector 619.svg'/>
    </div>
  `;
  const carouselText = homeCarousel.querySelector('.createCarousel')
  carouselText.append(containerCarousel)

  poster4Genre.forEach(poster =>{
    const space4Posters = containerCarousel.querySelector('.carouselPosters')
    const posterImg = document.createElement('img')
    posterImg.src = IMG_BASE + poster.poster_path
    space4Posters.append(posterImg)
  })

})
  const prev = spaceForPopelarGenres.querySelector('.prev')
  const next = spaceForPopelarGenres.querySelector('.next')
  prev.addEventListener('click', () => {
    startIndexFotTrendind = Math.max(0, startIndexFotTrendind - stepForTrending)
    renderPopularGenresCarousel(startIndexFotTrendind, stepForTrending)
  })
  next.addEventListener('click', () => {
    startIndexFotTrendind = Math.min(genresData.genres.length - stepForTrending, startIndexFotTrendind + stepForTrending)
    renderPopularGenresCarousel(startIndexFotTrendind, stepForTrending)
  })

}
renderPopularGenresCarousel(startIndexFotTrendind,stepForTrending)
ourPopularGenresSection.append(spaceForPopelarGenres)







const spaceForTrendingNow = ourGenresSection.querySelector('.spaceForTrending')
const trendingNowSection = document.createElement('div')
trendingNowSection.classList.add('trendingNowSection')

function formatRuntime(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}h ${m}m`
}

async function trendingNowCarousel(startIndex, step){
  trendingNowSection.innerHTML=``
    const homeCarousel = document.createElement('div')
    homeCarousel.classList.add('homePageCarousel')
    homeCarousel.innerHTML=`
        <div class='headerCarousel'>
            <div class='headerCarouselInfo'>
              <h2>Trending Now</h2>
            </div>
                    
            <div class='headerCarouselBtn'>
              <button class='prev'><img src='./assets/icons/Vector 619 (1).svg'/></button>
              <button class='next'><img src='./assets/icons/Vector 619.svg'/></button>
            </div>
          </div>
          <div class='createCarousel'>
          </div>
        `
trendingNowSection.append(homeCarousel)
const findIdForTime = postersData.results[startIndex]
const timeFilm = await getMovieDetails(findIdForTime.id)
const genres = genresData.genres.slice(startIndex, startIndex + step)

genres.forEach(genre =>{
  const poster4Genre = postersData.results
  .filter(movie => movie.genre_ids?.includes(genre.id) && movie.poster_path)
  .slice(0,1)
  const containerCarousel = document.createElement('div')
  containerCarousel.classList.add('blockCarousel')
  containerCarousel.innerHTML = `
    <div class='carouselPosters'>
    </div>

    <div class = 'genreTxt'>
      <div>
      <p>${formatRuntime(timeFilm.runtime)}</p>
      <h2>${genre.name}</h2>
      </div>
      <img src = './assets/icons/Vector 619.svg'/>
    </div>
  `;
  const carouselText = homeCarousel.querySelector('.createCarousel')
  carouselText.append(containerCarousel)

  poster4Genre.forEach(poster =>{
    const space4Posters = containerCarousel.querySelector('.carouselPosters')
    const posterImg = document.createElement('img')
    posterImg.src = IMG_BASE + poster.poster_path
    space4Posters.append(posterImg)
  })

})
  const prev = trendingNowSection.querySelector('.prev')
  const next = trendingNowSection.querySelector('.next')
  prev.addEventListener('click', () => {
    startIndex = Math.max(0, startIndex - step)
    trendingNowCarousel(startIndex, step)
  })
  next.addEventListener('click', () => {
    startIndex = Math.min(genresData.genres.length - step, startIndex + step)
    trendingNowCarousel(startIndex, step)
  })

}
trendingNowCarousel(anotherIndex,anotherStep)
spaceForTrendingNow.append(trendingNowSection)

let indexForUpcoming = 0
const stepForUpcoming = 4
const spaceForUpcoming = ourGenresSection.querySelector('.spaceForNewReleases')
const upcomingSection = document.createElement('div')
upcomingSection.classList.add('upcomingBlock')

async function renderUpcoming(startIndexFotTrendind, stepForTrending){
  upcomingSection.innerHTML=``
    const homeCarousel = document.createElement('div')
    homeCarousel.classList.add('homePageCarousel')
    homeCarousel.innerHTML=`
        <div class='headerCarousel'>
            <div class='headerCarouselInfo'>
              <h2>Popular Top 10 In Genres</h2>
            </div>
                    
            <div class='headerCarouselBtn'>
              <button class='prev'><img src='./assets/icons/Vector 619 (1).svg'/></button>
              <button class='next'><img src='./assets/icons/Vector 619.svg'/></button>
            </div>
          </div>
          <div class='createCarousel'>
          </div>
        `
upcomingSection.append(homeCarousel)
const newReleases =await getUpcoming()
const genres = genresData.genres.slice(startIndexFotTrendind, startIndexFotTrendind + stepForTrending)


genres.forEach(genre =>{
  const filteredReleases = newReleases.results.filter(movie => movie.genre_ids?.includes(genre.id) && movie.poster_path)
  const poster4Genre = filteredReleases
  .filter(movie => movie.genre_ids?.includes(genre.id) && movie.poster_path)
  .slice(0,1)
  const containerCarousel = document.createElement('div')
  containerCarousel.classList.add('blockCarousel')
  containerCarousel.innerHTML = `
    <div class='carouselPosters'>
    </div>

    <div class = 'genreTxt'>
      <div>
      <p>${filteredReleases[0]?.release_date ?? 'Data is not defined'}</p>
      <h2>${genre.name}</h2>
      </div>
      <img src = './assets/icons/Vector 619.svg'/>
    </div>
  `;
  const carouselText = homeCarousel.querySelector('.createCarousel')
  carouselText.append(containerCarousel)

  poster4Genre.forEach(poster =>{
    const space4Posters = containerCarousel.querySelector('.carouselPosters')
    const posterImg = document.createElement('img')
    posterImg.src = IMG_BASE + poster.poster_path
    space4Posters.append(posterImg)
  })

})
  const prev = upcomingSection.querySelector('.prev')
  const next = upcomingSection.querySelector('.next')
  prev.addEventListener('click', () => {
    startIndexFotTrendind = Math.max(0, startIndexFotTrendind - stepForTrending)
    renderUpcoming(startIndexFotTrendind, stepForTrending)
  })
  next.addEventListener('click', () => {
    startIndexFotTrendind = Math.min(genresData.genres.length - stepForTrending, startIndexFotTrendind + stepForTrending)
    renderUpcoming(startIndexFotTrendind, stepForTrending)
  })

}
renderUpcoming(indexForUpcoming, stepForUpcoming)
spaceForUpcoming.append(upcomingSection)

return page
}  
