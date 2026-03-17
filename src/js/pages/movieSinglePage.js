import{getPoster, getMovieDetails} from "../api/tmdb.js";

export async function singleFilmP(id){
    const IMG_BASE = "https://image.tmdb.org/t/p/w780";

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
      return "★".repeat(fullStars) + "☆".repeat(emptyStars);
    }

    const movie = await getMovieDetails(id)
    console.log(movie)

    const spookenLang = movie.spoken_languages.map(lang =>{
        return`
            <p>${lang.english_name}</p>
        `
    }).join('')

    const container = document.createElement('section')
    container.classList.add('singlePageFilm')
    container.innerHTML=`
        <div class='movie_info_banner'></div>
        <div class='movie_description'>
            <div class='descrip_cast_reviews'>
                <div class='descrip_wrapper'>
                    <p>Description</p>
                    <p>${movie.overview}</p>
                </div>
                <div class='cast_carousel_wrapper'>
                    <div class='cast_carousel_header'>
                        <p>Cast</p>
                        <div>
                            <button><img src='assets/icons/Vector 619 (1).svg'/></button>
                            <button><img src='assets/icons/Vector 619.svg'/></button>
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
                        <button><img src='assets/icons/Vector 619 (1).svg'/></button>
                        <button><img src='assets/icons/Vector 619.svg'/></button>
                    </div>
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
                            <div>
                                <p>IMDb</p>
                                <div class='movie_stars'>
                                    <p>${formatStars(movie.vote_average)}</p>
                                    <span>${Math.round(movie.vote_count / 1000)}K</span>
                                </div>
                                
                            </div>
                            <div>
                                <p>StreamVibe</p>
                                <div class='movie_stars'>
                                    <p>${formatStars(movie.vote_average)}</p>
                                    <span>${Math.round(movie.vote_count / 1000)}K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div> 
            </div>
        </div>
    `


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