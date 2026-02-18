console.count('homePage called');
import { getGenres, getPoster } from "../api/tmdb.js";

export async function homePage(){
    const div = document.createElement('div')
    div.classList.add('homePage')
    div.innerHTML = `
        <div>
            <div><img src='./assets/images/Abstract Design (1).svg'/></div>
        </div>

        <div class = 'homeAbout'>

            <H1>The Best Streaming Experience</H1>

            <p class = 'homeAboutTxt'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>

            <p class = 'homeAboutPhone'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.</p>

            <div class = 'homeAboutBtn'>
                <img src='./assets/icons/Icon.svg'>
                <p>Start Watching Now</p>
            </div>

        </div>
    `;
    const IMG_BASE = 'https://image.tmdb.org/t/p/w200';

    const genresData = await getGenres()
    const postersData = await getPoster()


    const genresSectionPage = document.createElement('section')
    genresSectionPage.classList.add('genresPage')
    genresSectionPage.innerHTML =`
    `;


    const genres = genresData.genres.slice(0, 4);
    const movies = postersData.results;


    genres.forEach(genre => {

        const genreBlock = document.createElement('div')
        genreBlock.classList.add('genreBlock')

        genreBlock.innerHTML = `
            <div class="posters"></div>

            <div class = 'genreTxt'>
                <h3>${genre.name}</h3>
                <img src = './assets/icons/Vector 619.svg'>
            </div>
        `;

        const genrePoster = genreBlock.querySelector('.posters')

        const moviesGenre = movies
            .filter(movie => movie.genre_ids?.includes(genre.id))
            .slice(0, 4)

        moviesGenre.forEach(movie => {
            if (!movie.poster_path) return

            const img = document.createElement('img')
            img.src = IMG_BASE + movie.poster_path
            img.alt = movie
            genrePoster.append(img)
        });

        genresSectionPage.append(genreBlock);
});




div.append(genresSectionPage)
return div
}



