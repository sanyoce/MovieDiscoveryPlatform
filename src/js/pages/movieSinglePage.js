import{getPoster, getMovieDetails,getCredits,getReviews} from "../api/tmdb.js";

export async function singleFilmP(id){
    const IMG_BASE = "https://image.tmdb.org/t/p/w780";

    function adaptiveCast(){
        if(window.innerWidth <= 600){
            return 4
        }return 8
    }

    function formatRuntime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;

      return `${hours}h ${mins}m`;
    }

    function formatReleaseDate(dateString) {
      const date = new Date(dateString);

      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }

    function formatYear(dateString) {
      const date = new Date(dateString);

      return date.toLocaleDateString("en-GB", {
        year: "numeric",
      });
    }

    function formatStars(rate) {
      const newRate = Math.round(rate / 2);
      const fullStars = newRate;
      const emptyStars = 5 - fullStars;
      return "<img src='assets/icons/Shape.svg'/>".repeat(fullStars) + "<img src='assets/icons/Shape (1).svg'/>".repeat(emptyStars);
    }

    const movie = await getMovieDetails(id)
    console.log(movie)
    const movieCast = await getCredits(id)
    console.log(movieCast)
    const movieReviews = await getReviews(id)
    console.log(movieReviews)
    const director = movieCast.crew.filter(pers => pers.job === "Director")
    console.log(director)
    const musicDirector = movieCast.crew.filter(pers => pers.job === "Original Music Composer")

    const spookenLang = movie.spoken_languages.map(lang =>{
        return`
            <p>${lang.english_name}</p>
        `
    }).join('')

    const gernes = movie.genres.map(g =>{
        return`
            <p>${g.name}</p>
        `
    }).join('')

    const container = document.createElement('section')
    container.classList.add('singlePageFilm')
    container.innerHTML=`
        <div class='movie_info_banner'></div>
        <div class='movie_description'>
                <div class='descrip_wrapper'>
                    <p>Description</p>
                    <p>${movie.overview}</p>
                </div>
                <div class='cast_carousel_wrapper'>
                    <div class='cast_carousel_header'>
                        <p>Cast</p>
                        <div>
                            <button class='castPrev'><img src='assets/icons/Vector 619 (1).svg'/></button>
                            <button class='castNext'><img src='assets/icons/Vector 619.svg'/></button>
                        </div>
                    </div>
                    <div class='cast_carousel_space'></div>
                </div>

                <div class='reviews_carousel_wrapper'>
                    <div class='reviews_carousel_header'>
                        <p>Reviews</p>
                        <button>
                            <img src='assets/icons/plus (5).svg'/>
                            <p>Add Your Review</p>
                        </button>
                    </div>
                    <div class='reviews_carousel_space'></div>
                    <div class='reviews_carousel_buttons'>
                        <button class='reviewPrev'><img src='assets/icons/Vector 619 (1).svg'/></button>
                        <button class='reviewNext'><img src='assets/icons/Vector 619.svg'/></button>
                    </div>
                </div>
            
            <div class='movie_info'>
                <div class='movie_info_content'>
                    <div class='movie_info_content_head'>
                        <img src='assets/icons/Vector (5).svg'/>
                        <p>Released Year</p>
                    </div>
                    <p>${formatYear(movie.release_date)}</p>
                </div>
                <div>
                    <div class='movie_info_content'>
                        <div class='movie_info_content_head'>
                            <img src='assets/icons/Vector (6).svg'/>
                            <p>Available Languages</p>
                        </div>
                        <div class='movielanguages'>
                            ${spookenLang}
                        </div>
                    </div>
                </div>
                <div>
                    <div class='movie_info_content'>
                        <div class='movie_info_content_head'>
                            <img src='assets/icons/Star 5.svg'/>
                            <p>Ratings</p>
                        </div>
                        <div class='movieRatings'>
                            <div class='rate'>
                                <p>IMDb</p>
                                <div class='movie_stars'>
                                    <p>${formatStars(movie.vote_average)}</p>
                                    <span>${Math.round(movie.vote_count / 1000)}K</span>
                                </div>
                                
                            </div>
                            <div class='rate'>
                                <p>StreamVibe</p>
                                <div class='movie_stars'>
                                    <p>${formatStars(movie.vote_average)}</p>
                                    <span>${Math.round(movie.vote_count / 1000)}K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class='movie_info_content'>
                        <div class='movie_info_content_head'>
                            <img src='assets/icons/Vector (7).svg'/>
                            <p>Gernes</p>
                        </div>
                        <div class='movie_gernes'>
                            ${gernes}
                        </div>
                    </div>
                </div>
                <div>
                    <div class='movie_info_content'>
                        <div class='movie_info_content_head'>
                            <p>Director</p>
                        </div>
                        <div class='movieDirector'>
                            <div class='directorProfile'><img src='${IMG_BASE + director[0].profile_path}'/></div>
                            <div class='directorAbout'>
                                <p>${director[0].original_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class='movie_info_content'>
                        <div class='movie_info_content_head'>
                            <p>Music</p>
                        </div>
                        <div class='movieDirector'>
                            <div class='directorProfile'><img src='${IMG_BASE + musicDirector[0].profile_path}'/></div>
                            <div class='directorAbout'>
                                <p>${musicDirector[0].original_name}</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    `

    const space_for_cast_carousel = container.querySelector('.cast_carousel_space')
    const space_for_reviews_carousel = container.querySelector('.reviews_carousel_space')

    let index_for_cast = 0
    let step_for_cast = adaptiveCast()

    function renderCast(index_for_cast, step_for_cast){
        space_for_cast_carousel.innerHTML = movieCast.cast
        .slice(index_for_cast,index_for_cast + step_for_cast)
        .map(elem =>{
            return`
                <div class='castImg'>
                    <img src='${IMG_BASE + elem.profile_path}'/>
                </div>
            `
        }).join('')
    }
    const prevCast = container.querySelector('.castPrev')
    const prevNext = container.querySelector('.castNext')
    renderCast(index_for_cast,step_for_cast)
    prevCast.addEventListener("click", () => {
    index_for_cast = Math.max(
      0,
      index_for_cast - step_for_cast,
    );
    renderCast(index_for_cast, step_for_cast);
    });
    prevNext.addEventListener("click", () => {
    index_for_cast = Math.min(
      movieCast.cast.length - step_for_cast,
      index_for_cast + step_for_cast,
    );
    renderCast(index_for_cast, step_for_cast);
    });

    function adaptiveReviews(){
        if(window.innerWidth <= 600){
            return 1
        }return 2
    }

    let index_for_review = 0
    let step_for_review = adaptiveReviews()
    function renderReviews(index,step){
        space_for_reviews_carousel.innerHTML = movieReviews.results
        .slice(index,index + step)
        .map(elem =>{
            return`
                <div class='reviewWrapper'>
                    <div class='reviewer'>
                        <p>${elem.author}</p>
                        <div>RAITING</div>
                    </div>
                    <div class='reviewContent'>
                        <p>${elem.content}</p>
                    </div>
                </div>
            `
        }).join('')
    }
    const prevRev = container.querySelector('.reviewPrev')
    const nextRev = container.querySelector('.reviewNext')
    renderReviews(index_for_review,step_for_review)
    prevRev.addEventListener("click", () => {
    index_for_review = Math.max(
      0,
      index_for_review - step_for_review,
    );
    renderReviews(index_for_review, step_for_review);
    });
    nextRev.addEventListener("click", () => {
    index_for_review = Math.min(
      movieReviews.results.length - step_for_review,
      index_for_review + step_for_review,
    );
    renderReviews(index_for_review, step_for_review);
    });

    const html_for_movie_banner = container.querySelector('.movie_info_banner')
    html_for_movie_banner.innerHTML = `
        <div class='singleMovieBannerWrapper'
        style="
        background-image: url('${IMG_BASE + movie.backdrop_path}');
        background-size: cover;
        background-position: center;"
        >
            <div class='single_movie_banner_info'>
                <div class='single_movie_banner_text'>
                    <h1>${movie.title}</h1>
                    <p>${movie.overview}</p>
                </div>
                <div class='single_movie_btns'>
                    <div class='single_movie_playBtn'>
                        <img src='./assets/icons/Icon.svg'/>
                        <p>Play Now</p>
                    </div>
                    <div class='single_movie_otherBtns'>
                        <div><img src='./assets/icons/Vector (2).svg'/></div>
                        <div><img src='./assets/icons/Vector (3).svg'/></div>
                        <div><img src='./assets/icons/Vector (4).svg'/></div>
                    </div>
                </div>
            </div>
        </div>
    `;
            
    


    return container
}