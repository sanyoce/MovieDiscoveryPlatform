import { getGenres, getPoster } from "../api/tmdb.js"
export  async function MoviesShowsPage() {
  const page = document.createElement('div')
  page.classList.add('movieAndShowPage')
  page.innerHTML = `
    <div class='movieBannerWrapper'></div>
  `;
  
const genresData = await getGenres();
const postersData = await getPoster();
console.log(genresData)
console.log(postersData)

let startIndexForBanner = 0
let stepForBanner = 1
const IMG_BASE = "https://image.tmdb.org/t/p/w780";

function renderBanner (startIndex, step){
  const movieBannerBlock = page.querySelector('.movieBannerWrapper')
  movieBannerBlock.innerHTML=``

  const renderBannerTest = postersData.results
  .slice(startIndexForBanner, startIndexForBanner + stepForBanner)
  .forEach(names =>{
    const movieBanner = document.createElement('div')
    movieBanner.classList.add('movieBannerSection')
    movieBanner.innerHTML = `
      <div class='movieBannerBackground' 
      style="background-image: url('${IMG_BASE + names.backdrop_path}');
      background-size: cover;
      background-position: center;
      height: 835px;">
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
    <div><h2>Our Genres</h2></div>
    <div class='spaceForGenres'></div>
  </div>

  <div class='genresBlock'>
    <div><h2>Popular Top 10 In Genres</h2></div>
    <div class='spaceForGenres'></div>
  </div>

  <div class='genresBlock'>
    <div><h2>Trending Now</h2></div>
    <div class='spaceForGenres'></div>
  </div>

  <div class='genresBlock'>
    <div><h2>New Releases</h2></div>
    <div class='spaceForGenres'></div>
  </div>

  <div class='genresBlock'>
    <div><h2>Must - Watch Movies</h2></div>
    <div class='spaceForGenres'></div>
  </div>
`;

page.append(ourGenresSection)

const ourGenresSectionSpaces = ourGenresSection.querySelector('.spaceForGenres')

const  homeCarouselSection = document.createElement('div')
homeCarouselSection.classList.add('moviesAndShowsCarousel')
let startIndex = 0
let step = 4

function renderCarousel(startIndex, step){
  homeCarouselSection.innerHTML=``
    const homeCarousel = document.createElement('div')
    homeCarousel.classList.add('homePageCarousel')
    homeCarousel.innerHTML=`
        <div class='headerCarousel'>
            <div class='headerCarouselInfo'>
              <h1>Explore our wide variety of categories</h1>
              <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
            </div>
                    
            <div class='headerCarouselBtn'>
              <button class='prev'><img src='./assets/icons/Vector 619 (1).svg'/></button>
              <button class='next'><img src='./assets/icons/Vector 619.svg''/></button>
            </div>
          </div>
          <div class='createCarousel'>
          </div>
        `
homeCarouselSection.append(homeCarousel)

const genres = genresData.genres.slice(startIndex, startIndex + step)

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
      <h2>${genre.name}</h2>
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


  return page
}  
