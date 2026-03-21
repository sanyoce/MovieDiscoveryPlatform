import {
  getGenres,
  getPoster,
  getMovieDetails,
  getUpcoming,
  getRated,
  getShowGenres,
  getShowPopular,
  getRatedShow,
  getShowDetails,
  getUpcomingShow,
} from "../api/tmdb.js";
export async function MoviesShowsPage() {
  const page = document.createElement("div");
  page.classList.add("movieAndShowPage");
  page.innerHTML = `
    <div class='movieBannerWrapper'></div>
  `;

  const IMG_BASE = "https://image.tmdb.org/t/p/w780";
  const genresData = await getGenres();
  const postersData = await getPoster();
  const upcomingData = await getUpcoming();
  let startIndexForBanner = 0;
  let stepForBanner = 1;

  function renderBanner(startIndex, step) {
    const movieBannerBlock = page.querySelector(".movieBannerWrapper");
    movieBannerBlock.innerHTML = ``;

    const renderBannerTest = postersData.results
      .slice(startIndex, startIndex + step)
      .forEach((names) => {
        const movieBanner = document.createElement("div");
        movieBanner.classList.add("movieBannerSection");
        movieBanner.innerHTML = `
          <div class='movieBannerBackground' 
          style="background-image: url('${IMG_BASE + names.backdrop_path}');
          background-size: cover;
          background-position: center;">
            <div class='movieBannerName'><h1>${names.original_title}</h1></div>
            <div class='movieBannerDescription'><p>${names.overview}</p></div>
            <div class='movieBannerBtns'>
              <button class='redBtn'><img src='./assets/icons/Rectangle 511 (Stroke).svg'/><p>Play Now</p></button>
              <div class='movie_banner_bnt_wrapper'>
                <button><img src='./assets/icons/Vector (2).svg'/></button>
                <button><img src='./assets/icons/Vector (3).svg'/></button>
                <button><img src='./assets/icons/VEctor (4).svg'/></button>
              </div>
            </div>
            <div class='prevNextBtns'>
              <button class='prevBtn'><img src='./assets/icons/Vector 619 (1).svg'/></button>
              <button class='nextBtn'><img src='./assets/icons/Vector 619.svg'/></button>
            </div>
          </div>
        `;
        movieBannerBlock.append(movieBanner);
        return page;
      });

    const prevBtn = movieBannerBlock.querySelector(".prevBtn");
    const nextBtn = movieBannerBlock.querySelector(".nextBtn");
    prevBtn.addEventListener("click", () => {
      startIndex = Math.max(0, startIndex - step);
      renderBanner(startIndex, step);
    });
    nextBtn.addEventListener("click", () => {
      startIndex = Math.min(genresData.genres.length - step, startIndex + step);
      renderBanner(startIndex, step);
    });
  }
  renderBanner(startIndexForBanner, stepForBanner);

  const movie_show_change = document.createElement("div");
  movie_show_change.classList.add("movieShowBtn");
  movie_show_change.innerHTML = `
  <div class='movieShowBtnWrapper'>
    <button class='movieBtn btnActive'>Movies</button>
    <button class='showBtn'>Shows</button>
  </div>
`;

  page.append(movie_show_change);

  const carouselSection = document.createElement("div");
  carouselSection.classList.add("carouselSection");
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
    <div class='mustMovies'> 
      <div class='ratedHeader'>
        <p>Must - Watch Movies</p>
        <div class='homeCarouselHeaderBtns'>
          <button class='prevForRated'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='nextForRated'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>
      <div class='spaceForRated'></div>
    </div>
  </div>
`;
  page.append(carouselSection);
  const spaceForFirstElem = carouselSection.querySelector(".ourGenres");

  const homeCarousel = document.createElement("div");
  homeCarousel.classList.add("ourGenres");
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
    `;
  spaceForFirstElem.append(homeCarousel);
  const spaceForCarousel = homeCarousel.querySelector(".spaceForHomeCarousel");
  let startIndexForHomeCarousel = 0;
  const stepForHomeCarousel = getTrending();

  function renderHomeCarousel(startIndex, step) {
    spaceForCarousel.innerHTML = genresData.genres
      .slice(startIndex, startIndex + step)
      .map((g) => {
        const postersForHomeCarousel = postersData.results
          .filter((movies) => movies.genre_ids.includes(g.id))
          .slice(0, 4)
          .map((m) => {
            return `
              <div class='moviePosters'>
                <img src='${IMG_BASE + m.poster_path}'>
              </div>
            `;
          })
          .join("");

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
      `;
      })
      .join("");
  }
  renderHomeCarousel(startIndexForHomeCarousel, stepForHomeCarousel);
  const prevBtn = homeCarousel.querySelector(".left");
  const nextBtn = homeCarousel.querySelector(".right");
  prevBtn.addEventListener("click", () => {
    if (startIndexForHomeCarousel > 0) {
      startIndexForHomeCarousel -= stepForHomeCarousel;
      renderHomeCarousel(startIndexForHomeCarousel, stepForHomeCarousel);
    }
  });
  nextBtn.addEventListener("click", () => {
    if (
      startIndexForHomeCarousel + stepForHomeCarousel <
      genresData.genres.length
    ) {
      startIndexForHomeCarousel += stepForHomeCarousel;
      renderHomeCarousel(startIndexForHomeCarousel, stepForHomeCarousel);
    }
  });

  const spaceForSecondElem = carouselSection.querySelector(
    ".popularTopTenSpace",
  );
  function getPopular() {
    if (window.innerWidth <= 600) {
      return 2;
    }
    return 4;
  }
  let index_for_popular = 0;
  const step_for_popular = getPopular();
  function popularCarousel(index, step) {
    spaceForSecondElem.innerHTML = genresData.genres
      .slice(index, index + step)
      .map((g) => {
        const posterForPopular = postersData.results
          .filter((movies) => movies.genre_ids.includes(g.id))
          .sort((a, b) => a.popularity - b.popularity)
          .slice(0, 4)
          .map((img) => {
            return `
              <div class='moviePosters'><img src='${IMG_BASE + img.poster_path}'></div>
            `;
          })
          .join("");

        return `
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
        `;
      })
      .join("");
  }
  popularCarousel(index_for_popular, step_for_popular);
  const prevBtnPopular = carouselSection.querySelector(".prevForPopular");
  const nextBtnPopular = carouselSection.querySelector(".nextForPopular");
  prevBtnPopular.addEventListener("click", () => {
    index_for_popular = Math.max(0, index_for_popular - step_for_popular);
    popularCarousel(index_for_popular, step_for_popular);
  });
  nextBtnPopular.addEventListener("click", () => {
    index_for_popular = Math.min(
      postersData.results.length - step_for_popular,
      index_for_popular + step_for_popular,
    );
    popularCarousel(index_for_popular, step_for_popular);
  });

  function getTrending() {
    if (window.innerWidth <= 600) {
      return 2;
    }
    return 5;
  }
  let start_index_trending = 0;
  let step_trending = getTrending();

  async function trendingNow(start_index_trending, step_trending) {
    function formatRuntime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;

      return `${hours}h ${mins}m`;
    }

    const getMovieDetailsTest = postersData.results;

    const movies_with_details = await Promise.all(
      getMovieDetailsTest.map(async (m) => {
        const details = await getMovieDetails(m.id);
        return {
          ...m,
          runtime: details.runtime,
        };
      }),
    );

    const trendingNowSection = carouselSection.querySelector(".spaceForTrending");
    trendingNowSection.innerHTML = movies_with_details
      .slice(start_index_trending, step_trending + start_index_trending)
      .map((elem) => {
        return `
          <div class ='trendingWrapper' data-id='${elem.id}'>
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
        `;
      })
      .join("");
  }
  trendingNow(start_index_trending, step_trending);
  const prevBtnTrending = carouselSection.querySelector(".prevForTrending");
  const nextBtnTrending = carouselSection.querySelector(".nextForTrending");
  window.addEventListener("resize", () => {
    step_trending = getTrending();
    trendingNow(start_index_trending, step_trending);
  });
  prevBtnTrending.addEventListener("click", () => {
    start_index_trending = Math.max(0, start_index_trending - step_trending);
    trendingNow(start_index_trending, step_trending);
  });
  nextBtnTrending.addEventListener("click", () => {
    start_index_trending = Math.min(
      postersData.results.length - step_trending,
      start_index_trending + step_trending,
    );
    trendingNow(start_index_trending, step_trending);
  });
  
  const link_trending_film = carouselSection.querySelector('.spaceForTrending')
  link_trending_film.addEventListener(('click'), (e)=>{
    const card = e.target.closest('.trendingWrapper')
    if(!card) return
    const id = card.dataset.id
    location.hash = `#/singleFilm/${id}`
  })



  let index_for_releases = 0;
  let step_for_releases = getTrending();

  function releasesCarousel(index, step) {
    function formatReleaseDate(dateString) {
      const date = new Date(dateString);

      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
    const spaceForReleases = carouselSection.querySelector(".spaceForReleases");
    spaceForReleases.innerHTML = upcomingData.results
      .slice(index, step + index)
      .map((elem) => {
        return `
          <div class='releasessWrapper' data-id='${elem.id}'>
            <img src='${IMG_BASE + elem.poster_path}'/>
            <p>Released at ${formatReleaseDate(elem.release_date)}</p>
          </div>
        `;
      })
      .join("");
  }
  const prevBtnReleases = carouselSection.querySelector(".prevForReleases");
  const nextBtnReleases = carouselSection.querySelector(".nextForReleases");
  releasesCarousel(index_for_releases, step_for_releases);

  prevBtnReleases.addEventListener("click", () => {
    index_for_releases = Math.max(0, index_for_releases - step_for_releases);
    releasesCarousel(index_for_releases, step_for_releases);
  });
  nextBtnReleases.addEventListener("click", () => {
    index_for_releases = Math.min(
      upcomingData.results.length - step_for_releases,
      index_for_releases + step_for_releases,
    );
    releasesCarousel(index_for_releases, step_for_releases);
  });

  const link_new_releases_film = carouselSection.querySelector('.spaceForReleases')
  link_new_releases_film.addEventListener(('click'), (e)=>{
    const card = e.target.closest('.releasessWrapper')
    if(!card)return
    const id = card.dataset.id
    location.hash = `#/singleFilm/${id}`
  })

  let index_for_rated = 0;
  let step_for_rated = getPopular();
  const ratedMovies = await getRated();

  const space_for_trend = carouselSection.querySelector(".spaceForRated");

  async function renderTopRated(index_for_rated, step_for_rated) {
    function formatRuntime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;

      return `${hours}h ${mins}m`;
    }

    const getRated = ratedMovies.results;

    const rated_with_details = await Promise.all(
      getRated.map(async (m) => {
        const details = await getMovieDetails(m.id);
        return {
          ...m,
          runtime: details.runtime,
        };
      }),
    );

    function formatStars(rate) {
      const newRate = Math.round(rate / 2);
      const fullStars = newRate;
      const emptyStars = 5 - fullStars;
      return "<img src='assets/icons/Shape.svg'/>".repeat(fullStars) + "<img src='assets/icons/Shape (1).svg'/>".repeat(emptyStars);
    }

    space_for_trend.innerHTML = rated_with_details
      .slice(index_for_rated, index_for_rated + step_for_rated)
      .map((m) => {
        return `
          <div class='ratedWrapper' data-id='${m.id}'>
            <div class='ratedImg'><img src='${IMG_BASE + m.poster_path}'/></div>
                <div class='ratedInfo'>
                  <div class='trendingTime'>
                    <img src='./assets/icons/Subtract.svg'/>
                    <p>${formatRuntime(m.runtime)}</p>
                  </div>
                  <div>
                    <div class='ratedStars'>
                      <p>${formatStars(m.vote_average)}
                      <span>${Math.round(m.vote_count / 1000)}K</span>
                      </p>
                      
                    </div>
                  </div>
              </div>
          </div>
        `;
      })
      .join("");
  }

  const prevBtnRated = carouselSection.querySelector(".prevForRated");
  const nextBtnRated = carouselSection.querySelector(".nextForRated");
  renderTopRated(index_for_rated, step_for_rated);

  prevBtnRated.addEventListener("click", () => {
    index_for_rated = Math.max(0, index_for_rated - step_for_rated);
    renderTopRated(index_for_rated, step_for_rated);
  });
  nextBtnRated.addEventListener("click", () => {
    index_for_rated = Math.min(
      upcomingData.results.length - step_for_rated,
      index_for_rated + step_for_rated,
    );
    renderTopRated(index_for_rated, step_for_rated);
  });

  const link_must_film = carouselSection.querySelector('.spaceForRated')
  link_must_film.addEventListener(('click'), (e)=>{
    const card = e.target.closest('.ratedWrapper')
    if(!card)return
    const id = card.dataset.id
    location.hash = `#/singleFilm/${id}`
  })

  const showCarouselSection = document.createElement("div");
  showCarouselSection.classList.add("showSection");
  showCarouselSection.innerHTML = `
  <div class='carouselSectionWrapperShow hideThis'>
    <div class='borderElem'>Shows</div>
    <div class='ourGenres'>
      <div class='genresHeader'>
        <p>Our Genres</p>
        <div class='homeCarouselHeaderBtns'>
          <button class='SprevForGenres'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='SnextForGenres'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>
      <div class='showGenresSpace'></div>
    </div>

    <div class='popularTopTen'>
      <div class='popularHeader'>
        <p>Popular Top 10 In Genres</p>
        <div class='homeCarouselHeaderBtns'>
          <button class='SprevForPopular'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='SnextForPopular'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>
      <div class='popularTopTenSpace'></div>
    </div>

    <div class='trendingNow'>
      <div class='trendingNowHeader'>
        <p>Trending Show Now</p>
        <div class='homeCarouselHeaderBtns'>
          <button class='SprevForTrending'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='SnextForTrending'><img src='./assets/icons/Vector 619.svg'/></button>
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
          <button class='SprevForReleases'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='SnextForReleases'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>

      <div class='spaceForReleases'></div>
    </div>

    <div class='mustMovies'> 
      <div class='ratedHeader'>
        <p>Must - Watch Shows</p>
        <div class='homeCarouselHeaderBtns'>
          <button class='SprevForRated'><img src='./assets/icons/Vector 619 (1).svg'/></button>
          <button class='SnextForRated'><img src='./assets/icons/Vector 619.svg'/></button>
        </div>
      </div>
      <div class='spaceForRated'></div>
    </div>

  </div>
`;
  page.append(showCarouselSection);
  const showGenresData = await getShowGenres();
  const showPopularData = await getShowPopular();

  const firstShowC = showCarouselSection.querySelector(".showGenresSpace");
  let Sindex_for_genres = 0;
  let Sstep_for_genres = getTrending();
  function renderGenresShow(index, step) {
    firstShowC.innerHTML = showGenresData.genres
      .slice(index, index + step)
      .map((g) => {
        const showPosters = showPopularData.results
          .filter((show) => show.genre_ids.includes(g.id))
          .slice(0, 4)
          .map((img) => {
            return `
      <div class='moviePosters'>
        <img src='${IMG_BASE + img.poster_path}'>
      </div>
    `;
          })
          .join("");

        return `
    <div class='homeCarouselCardBlock'>
      <div class='spaceForPosters'>
        ${showPosters}
      </div>
      <div class='spaceForGenres'>
        <p>${g.name}</p>
        <img src='./assets/icons/Vector 619.svg'>
      </div>
    </div>
  `;
      })
      .join("");
  }
  const prevShowGenre = showCarouselSection.querySelector(".SprevForGenres");
  const nextShowGenre = showCarouselSection.querySelector(".SnextForGenres");
  renderGenresShow(Sindex_for_genres, Sstep_for_genres);

  prevShowGenre.addEventListener("click", () => {
    Sindex_for_genres = Math.max(0, Sindex_for_genres - Sstep_for_genres);
    renderGenresShow(Sindex_for_genres, Sstep_for_genres);
  });
  nextShowGenre.addEventListener("click", () => {
    Sindex_for_genres = Math.min(
      upcomingData.results.length - Sstep_for_genres,
      Sindex_for_genres + Sstep_for_genres,
    );
    renderGenresShow(Sindex_for_genres, Sstep_for_genres);
  });

  const secondShowC = showCarouselSection.querySelector(".popularTopTenSpace");
  let index_for_popular_genre = 0;
  let step_for_popular_genre = getPopular();
  function renderPopularShow(index, step) {
    secondShowC.innerHTML = showGenresData.genres
      .slice(index, index + step)
      .map((g) => {
        const posterForPopular = showPopularData.results
          .filter((movies) => movies.genre_ids.includes(g.id))
          .sort((a, b) => a.popularity - b.popularity)
          .slice(0, 4)
          .map((img) => {
            return `
        <div class='moviePosters'><img src='${IMG_BASE + img.poster_path}'></div>
      `;
          })
          .join("");

        return `
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
    `;
      })
      .join("");
  }

  renderPopularShow(index_for_popular_genre, step_for_popular_genre);
  const prevForPopularGenre =
    showCarouselSection.querySelector(".SprevForPopular");
  const nextForPopularGenre =
    showCarouselSection.querySelector(".SnextForPopular");
  prevForPopularGenre.addEventListener("click", () => {
    index_for_popular_genre = Math.max(
      0,
      index_for_popular_genre - step_for_popular_genre,
    );
    renderPopularShow(index_for_popular_genre, step_for_popular_genre);
  });
  nextForPopularGenre.addEventListener("click", () => {
    index_for_popular_genre = Math.min(
      postersData.results.length - step_for_popular_genre,
      index_for_popular_genre + step_for_popular_genre,
    );
    renderPopularShow(index_for_popular_genre, step_for_popular_genre);
  });

  const rated_show_data = await getRatedShow();
  const rated_show_with_details = await Promise.all(
    rated_show_data.results.map(async (m) => {
      const details = await getShowDetails(m.id);
      return {
        ...m,
        runtime: details.episode_run_time?.[0] || 0,
        episodes: details.number_of_episodes,
        seasons: details.number_of_seasons,
      };
    }),
  );
  const ThirdShowC = showCarouselSection.querySelector(".spaceForTrending");
  let index_for_rated_show = 0;
  let step_for_rated_show = getPopular();

  function render_trending_show(index, step) {
    function formatRuntime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins}m`;
    }

    ThirdShowC.innerHTML = rated_show_with_details
      .slice(index, step + index)
      .map((elem) => {
        return `
      <div class ='trendingWrapper'>
        <img  class='moviePostersTrending' src='${IMG_BASE + elem.poster_path}'/>
        <div class='trendingCardInfo'>
          <div class='trendingTime'>
            <img src='./assets/icons/Subtract.svg'/>
            <p>${formatRuntime(elem.runtime * elem.episodes)}</p>
          </div>
          <div class='trendingWatches'>
            <img src='./assets/icons/Union (1).svg'/>
            <p>${elem.seasons}</p>
            <p>Seasons</p>
          </div>
        </div>
      </div>
    `;
      })
      .join("");
  }
  const prevForRatedShow =
    showCarouselSection.querySelector(".SprevForTrending");
  const nextForRatedShow =
    showCarouselSection.querySelector(".SnextForTrending");
  render_trending_show(index_for_rated_show, step_for_rated_show);
  prevForRatedShow.addEventListener("click", () => {
    index_for_rated_show = Math.max(
      0,
      index_for_rated_show - step_for_rated_show,
    );
    render_trending_show(index_for_rated_show, step_for_rated_show);
  });
  nextForRatedShow.addEventListener("click", () => {
    index_for_rated_show = Math.min(
      postersData.results.length - step_for_rated_show,
      index_for_rated_show + step_for_rated_show,
    );
    render_trending_show(index_for_rated_show, step_for_rated_show);
  });

  const fourthShowC = showCarouselSection.querySelector(".spaceForReleases");
  const upcoming_show_data = await getUpcomingShow();
  let index_for_upcoming_show = 0;
  let step_for_upcoming_show = getPopular();
  function render_releases_shows(index, step) {
    function formatReleaseDate(dateString) {
      const date = new Date(dateString);

      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
    fourthShowC.innerHTML = upcoming_show_data.results
      .slice(index, step + index)
      .map((elem) => {
        return `
       <div class='releasessWrapper'>
        <img src='${IMG_BASE + elem.poster_path}'/>
        <p>Released at ${formatReleaseDate(elem.first_air_date)}</p>
      </div>
    `;
      })
      .join("");
  }
  render_releases_shows(index_for_upcoming_show, step_for_upcoming_show);
  const prevForReleasesShow =
    showCarouselSection.querySelector(".SprevForReleases");
  const nextForReleasesShow =
    showCarouselSection.querySelector(".SnextForReleases");
  prevForReleasesShow.addEventListener("click", () => {
    index_for_upcoming_show = Math.max(
      0,
      index_for_upcoming_show - step_for_upcoming_show,
    );
    render_releases_shows(index_for_upcoming_show, step_for_upcoming_show);
  });
  nextForReleasesShow.addEventListener("click", () => {
    index_for_upcoming_show = Math.min(
      postersData.results.length - step_for_upcoming_show,
      index_for_upcoming_show + step_for_upcoming_show,
    );
    render_releases_shows(index_for_upcoming_show, step_for_upcoming_show);
  });

  const fifthShowC = showCarouselSection.querySelector(".spaceForRated");
  let index_for_must_show = 0;
  let step_for_must_show = getPopular();

  function render_must_shows(index, step) {
    function formatRuntime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins}m`;
    }

    function formatStars(rate) {
      const newRate = Math.round(rate / 2);
      const fullStars = newRate;
      const emptyStars = 5 - fullStars;
      return "<img src='assets/icons/Shape.svg'/>".repeat(fullStars) + "<img src='assets/icons/Shape (1).svg'/>".repeat(emptyStars);
    }

    fifthShowC.innerHTML = rated_show_with_details
      .slice(index, step + index)
      .map((elem) => {
        return `
    <div class='ratedWrapper'>
      <div class='ratedImg'><img src='${IMG_BASE + elem.poster_path}'/></div>
          <div class='ratedInfo'>
            <div class='trendingTime'>
              <img src='./assets/icons/Subtract.svg'/>
              <p>${formatRuntime(elem.runtime * elem.episodes)}</p>
            </div>
            <div>
              <div class='ratedStars'>
                <p>${formatStars(elem.vote_average)}
                <span>${Math.round(elem.vote_count / 1000)}K</span>
                </p>
                
              </div>
            </div>
        </div>
    </div>
    `;
      });
  }
  render_must_shows(index_for_must_show, step_for_must_show);
  const prevForMustShow = showCarouselSection.querySelector(".SprevForRated");
  const nextForMustShow = showCarouselSection.querySelector(".SnextForRated");
  prevForMustShow.addEventListener("click", () => {
    index_for_must_show = Math.max(0, index_for_must_show - step_for_must_show);
    render_must_shows(index_for_must_show, step_for_must_show);
  });
  nextForMustShow.addEventListener("click", () => {
    index_for_must_show = Math.min(
      postersData.results.length - step_for_must_show,
      index_for_must_show + step_for_must_show,
    );
    render_must_shows(index_for_must_show, step_for_must_show);
  });

const movieBtn = movie_show_change.querySelector('.movieBtn')
const showBtn = movie_show_change.querySelector('.showBtn')
const movieShowBtn = movie_show_change.querySelector('.movieShowBtnWrapper')
const movieBlock = carouselSection.querySelector('.carouselSectionWrapper')
const showBlock = showCarouselSection.querySelector('.carouselSectionWrapperShow')

console.log(movieBtn)
console.log(showBtn)
console.log(movieBlock)
console.log(showBlock)

movieShowBtn.addEventListener(('click'),(e) =>{
  if(e.target.closest('.movieBtn')){
    movieBtn.classList.add('btnActive')
    showBtn.classList.remove('btnActive')
    movieBlock.classList.remove('hideThis')
    showBlock.classList.add('hideThis')
  }else{
    movieBtn.classList.remove('btnActive')
    showBtn.classList.add('btnActive')
    movieBlock.classList.add('hideThis')
    showBlock.classList.remove('hideThis')
  }
})



  return page;
}
