import{getPoster,} from "../api/tmdb.js";

export async function singleFilmP(){
    const IMG_BASE = "https://image.tmdb.org/t/p/w780";
    function formatRuntime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;

      return `${hours}h ${mins}m`;
    }


    const posterData = await getPoster()


    const container = document.createElement('section')
    container.classList.add('singlePageFilm')
    container.innerHTML=`
        <div class='movie_info_banner'></div>
    `

    return container
}