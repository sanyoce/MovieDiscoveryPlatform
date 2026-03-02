import {homePage} from './pages/HomePage.js';
import {searchPage} from './pages/SearchPage.js';
import {MoviesShowsPage} from './pages/Movies & Shows.js';
import {supportPage} from './pages/Support.js';
import {descriptionPage} from './pages/DescriptionPage.js'

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

    const renderPage = routes[hash];

    main.append(await renderPage());
}

export function initRout(){
    window.addEventListener('hashchange', renderRout);
    window.addEventListener('load', renderRout);
}
