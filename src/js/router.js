import {homePage} from './pages/HomePage.js';
import {searchPage} from './pages/SearchPage.js';
import {MoviesShowsPage} from './pages/Movies&Shows.js';
import {supportPage} from './pages/Support.js';
import {descriptionPage} from './pages/DescriptionPage.js'
import {singleFilmP} from './pages/movieSinglePage.js'

const routes = {
    '#/home': homePage,
    '#/search': searchPage,
    '#/favorites': MoviesShowsPage,
    '#/support': supportPage,
    '#/description':descriptionPage,
}

async function renderRout(){
    const main = document.getElementById('main');
    const hash = window.location.hash || '#/home';

    main.innerHTML = '';

    if (hash.startsWith('#/singleFilm/')) {
        const id = hash.split('/')[2];
        main.append(await singleFilmP(id));
        return;
    }

    const renderPage = routes[hash];

    if (!renderPage) {
        console.error('Route not found:', hash);
        return;
    }   

    main.append(await renderPage());
}

export function initRout(){
    window.addEventListener('hashchange', renderRout);
    window.addEventListener('load', renderRout);
}
