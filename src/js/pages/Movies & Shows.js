import { getGenres, getPoster, getPopular,getMovieDetails,getUpcoming  } from "../api/tmdb.js"
export  async function MoviesShowsPage() {
  const page = document.createElement('div')
  page.classList.add('movieAndShowPage')
  page.innerHTML = `
    <div class='movieBannerWrapper'></div>
  `;

const IMG_BASE = "https://image.tmdb.org/t/p/w780";
const genresData = await getGenres();
const postersData = await getPoster();

let startIndexForBanner = 0
let stepForBanner = 1

function renderBanner (startIndex, step){
const movieBannerBlock = page.querySelector('.movieBannerWrapper')
movieBannerBlock.innerHTML=``

  const renderBannerTest = postersData.results
  .slice(startIndex, startIndex + step)
  .forEach(names =>{
    const movieBanner = document.createElement('div')
    movieBanner.classList.add('movieBannerSection')
    movieBanner.innerHTML = `
      <div class='movieBannerBackground' 
      style="background-image: url('${IMG_BASE + names.backdrop_path}');
      background-size: cover;
      background-position: center;">
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
    return page
})

const prevBtn = movieBannerBlock.querySelector('.prevBtn')
const nextBtn = movieBannerBlock.querySelector('.nextBtn')
prevBtn.addEventListener('click', () => {
  startIndex = Math.max(0, startIndex - step)
  renderBanner(startIndex, step)
})
nextBtn.addEventListener('click', () => {
  startIndex = Math.min(genresData.genres.length - step, startIndex + step)
  renderBanner(startIndex, step)
})
}renderBanner(startIndexForBanner,stepForBanner)

const carouselSection = document.createElement('div')
carouselSection.classList.add('carouselSection')
carouselSection.innerHTML = `
  <div class='carouselSectionWrapper'>
    <div class='borderElem'>Movies</div>
    <div class='ourGenres'> </div>
    <div class='popularTopTen'> </div>
    <div class='trendingNow'> </div>
    <div class='newReleases'> </div>
    <div class='mustMovies'> </div>
  </div>
`
page.append(carouselSection)
const spaceForFirstElem = carouselSection.querySelector('.ourGenres')

const homeCarousel = document.createElement('div')
  homeCarousel.classList.add('ourGenres')
  homeCarousel.innerHTML = `
    <div class='homeCarouselHeader'>
      <div class='homeCarouselHeaderText'>
        <h1>OurGenres</h1>
      </div>
      <div class='homeCarouselHeaderBtns'>
        <button type="button" class='left'><img src='./assets/icons/Vector 619 (1).svg'></button>
        <button type="button" class='right'><img src='./assets/icons/Vector 619.svg'></button>
      </div>
    </div>

    <div class='spaceForHomeCarousel'>
    </div>
    `
spaceForFirstElem.append(homeCarousel)
const spaceForCarousel = homeCarousel.querySelector('.spaceForHomeCarousel')
let startIndexForHomeCarousel = 0
const stepForHomeCarousel = 5

    function renderHomeCarousel(startIndex,step){
        const htmlForHomeCarousel = genresData.genres
        .slice(startIndex,startIndex + step)
        .map(g =>{
            const postersForHomeCarousel = postersData.results
            .filter(movies => movies.genre_ids.includes(g.id))
            .slice(0,4)
            .map(m =>{
                return `
                    <div class='moviePosters'>
                        <img src='${IMG_BASE + m.poster_path}'>
                    </div>
                `
            }).join('')

        return `
            <div class='homeCarouselCardBlock'>
                <div class='spaceForPosters'>
                    ${postersForHomeCarousel}
                </div>
                <div class='spaceForGenres'>
                    <p>${g.name}</p>
                    <img src='./assets/icons/Vector 619.svg'>
                </div>
            </div>
        `
        }).join('')
        spaceForCarousel.innerHTML = htmlForHomeCarousel

    }
    renderHomeCarousel(startIndexForHomeCarousel,stepForHomeCarousel)
    const prevBtn = homeCarousel.querySelector('.left')
    const nextBtn = homeCarousel.querySelector('.right')
    prevBtn.addEventListener('click', () => {
        if(startIndexForHomeCarousel > 0) {
            startIndexForHomeCarousel -= stepForHomeCarousel
            renderHomeCarousel(startIndexForHomeCarousel,stepForHomeCarousel)
        }
    })
    nextBtn.addEventListener('click', () => {
        if (startIndexForHomeCarousel + stepForHomeCarousel < genresData.genres.length) {
            startIndexForHomeCarousel += stepForHomeCarousel
            renderHomeCarousel(startIndexForHomeCarousel,stepForHomeCarousel)
        }
    })

const spaceForSecondElem = carouselSection.querySelector('.popularTopTen')
const htmlForPopular = genresData.genres
.slice(0,4)
.map(g =>{
  
})


return page;
}

