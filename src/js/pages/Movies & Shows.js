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
const upcomingData = await getUpcoming()
console.log(upcomingData)
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
    <div class='popularTopTen'>
      <div class='popularHeader'>
        <p>Popular Top 10 In Genres</p>
        <div class='homeCarouselHeaderBtns'>
          <button class='prevForPopular'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='nextForPopular'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>
      <div class='popularTopTenSpace'></div>
    </div>
    <div class='trendingNow'>
      <div class='trendingNowHeader'>
        <p>Trending Now</p>
        <div class='homeCarouselHeaderBtns'>
          <button class='prevForTrending'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='nextForTrending'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>
      <div class='spaceForTrending'></div>
    </div>
    <div class='newReleases'>
      <div class='releasesHeader'>
        <div class='releasesHeaderInfo'>
          <p>New Releases</p>
        </div>
        <div class='homeCarouselHeaderBtns'>
          <button class='prevForReleases'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='nextForReleases'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>

      <div class='spaceForReleases'></div>
    </div>
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

const spaceForSecondElem = carouselSection.querySelector('.popularTopTenSpace')
let index_for_popular = 0
const step_for_popular = 4
function popularCarousel(index,step){
  const htmlForPopular = genresData.genres
.slice(index,index + step)
.map(g =>{
  const posterForPopular = postersData.results
  .filter(movies => movies.genre_ids.includes(g.id))
  .sort((a,b) => a.popularity - b.popularity)
  .slice(0,4)
  .map(img =>{
    return`
      <div class='moviePosters'><img src='${IMG_BASE + img.poster_path}'></div>
    `
  }).join('')

  return`
    <div class='homeCarouselCardBlock'>
      <div class='posterForPopular'>
        ${posterForPopular}
      </div>
      <div class='spaceForGenres'>
        <div class='topTenInfo'>
          <p>Top 10 in</p>
          <p>${g.name}</p>
        </div>
        <img src='./assets/icons/Vector 619.svg'>
      </div>
    </div>
  `
}).join('')
spaceForSecondElem.innerHTML = htmlForPopular
}
popularCarousel(index_for_popular,step_for_popular)
const prevBtnPopular = carouselSection.querySelector('.prevForPopular')
const nextBtnPopular = carouselSection.querySelector('.nextForPopular')
prevBtnPopular.addEventListener('click', () => {
  index_for_popular = Math.max(0, index_for_popular - step_for_popular)
  popularCarousel(index_for_popular, step_for_popular)
})
nextBtnPopular.addEventListener('click', () => {
  index_for_popular = Math.min(postersData.results.length - step_for_popular, index_for_popular + step_for_popular)
  popularCarousel(index_for_popular, step_for_popular)
})


function getTrending(){
  if(window.innerWidth <= 400){
    return 2
  }
  return 5
}
let start_index_trending = 0
let step_trending = getTrending()
console.log('window width:', window.innerWidth)
console.log('step:', getTrending())

async function  trendingNow (start_index_trending,step_trending){
function formatRuntime(minutes) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60

    return `${hours}h ${mins}m`
}

const getMovieDetailsTest = postersData.results

const movies_with_details = await Promise.all(
  getMovieDetailsTest.map(async(m) =>{
    const details = await getMovieDetails(m.id)
    return{
      ...m,
      runtime: details.runtime
    }
  })
)

const trendingNowSection = carouselSection.querySelector('.spaceForTrending')
const htmlForTrending = movies_with_details
.slice(start_index_trending,step_trending + start_index_trending)
.map(elem =>{
  return`
  <div class ='trendingWrapper'>
      <img  class='moviePostersTrending' src='${IMG_BASE + elem.poster_path}'/>
      <div class='trendingCardInfo'>
        <div class='trendingTime'>
          <img src='./assets/icons/Subtract.svg'/>
          <p>${formatRuntime(elem.runtime)}</p>
        </div>
        <div class='trendingWatches'>
          <img src='./assets/icons/Union.svg'/>
          <p>${elem.vote_count}</p>
        </div>
      </div>
  </div>
    
  `
}).join('')
trendingNowSection.innerHTML = htmlForTrending
}
trendingNow(start_index_trending,step_trending)
const prevBtnTrending = carouselSection.querySelector('.prevForTrending')
const nextBtnTrending = carouselSection.querySelector('.nextForTrending')
window.addEventListener('resize', () => {
  step_trending = getTrending()
  trendingNow(start_index_trending, step_trending)
})
prevBtnTrending.addEventListener('click', () => {
  start_index_trending = Math.max(0, start_index_trending - step_trending)
  trendingNow(start_index_trending, step_trending)
})
nextBtnTrending.addEventListener('click', () => {
  start_index_trending = Math.min(postersData.results.length - step_trending, start_index_trending + step_trending)
  trendingNow(start_index_trending, step_trending)
})



let index_for_releases = 0
let step_for_releases = 5

function releasesCarousel (index,step){
  function formatReleaseDate(dateString) {
  const date = new Date(dateString)

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
  const spaceForReleases = carouselSection.querySelector('.spaceForReleases')
  const htmlForReleases = upcomingData.results
  .slice(index,step + index)
  .map(elem =>{
    return`
      <div class='releasessWrapper'>
        <img src='${IMG_BASE + elem.poster_path}'/>
        <p>Released at ${formatReleaseDate(elem.release_date)}</p>
      </div>
    `
  }).join('')
  spaceForReleases.innerHTML = htmlForReleases
}
const prevBtnReleases = carouselSection.querySelector('.prevForReleases')
const nextBtnReleases = carouselSection.querySelector('.nextForReleases')
releasesCarousel(index_for_releases,step_for_releases)

prevBtnReleases.addEventListener('click', () => {
  index_for_releases = Math.max(0, index_for_releases - step_for_releases)
  releasesCarousel(index_for_releases, step_for_releases)
})
nextBtnReleases.addEventListener('click', () => {
  index_for_releases = Math.min(upcomingData.results.length - step_for_releases, index_for_releases + step_for_releases)
  releasesCarousel(index_for_releases, step_for_releases)
})







return page;
}

