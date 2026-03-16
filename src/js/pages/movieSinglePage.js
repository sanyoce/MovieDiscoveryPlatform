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

    const movie = await getMovieDetails(id)
    console.log(movie.backdrop_path)

    const container = document.createElement('section')
    container.classList.add('singlePageFilm')
    container.innerHTML=`
        <div class='movie_info_banner'></div>
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