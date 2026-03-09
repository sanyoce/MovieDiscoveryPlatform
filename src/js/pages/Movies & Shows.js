import { getGenres, getPoster, getPopular,getMovieDetails,getUpcoming  } from "../api/tmdb.js"
export  async function MoviesShowsPage() {
  const page = document.createElement('div')
  page.classList.add('movieAndShowPage')
  page.innerHTML = `
    <div class='movieBannerWrapper'></div>
  `;

return page;
}

