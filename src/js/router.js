// import { layout } from './components/Layout.js';
import {homePage} from './pages/HomePage.js';
import {searchPage} from './pages/SearchPage.js';
import {favoritePage} from './pages/FavoritesPage.js';
import {detailPage} from './pages/DetailPage.js';

const routes = {
    '#/home': homePage,
    '#/search': searchPage,
    '#/favorites': favoritePage,
    '#/details': detailPage,
}

function renderRout(){
    const main = document.getElementById('main');
    const hash = window.location.hash || '#/home';

    main.innerHTML = '';

    const renderPage = routes[hash];

    main.append(renderPage());
}

export function initRout(){
    window.addEventListener('hashchange', renderRout);
    window.addEventListener('load', renderRout);

    renderRout()
}