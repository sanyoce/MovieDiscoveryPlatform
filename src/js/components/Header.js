export function Header(){
    const header = document.createElement('header')
    header.innerHTML = `
    <div class = 'navLogo'>
        <a>
            <img/>
        </a>
    </div>

    <div class = 'headerLinks'>
        <a href="#/home" class = 'navLinks'>HOME</a>
        <a href="#/search" class = 'navLinks'>SEARCH</a>
        <a href="#/favorites" class = 'navLinks'>FAVORITES</a>
        <a href="#/details" class = 'navLinks'>DETAILS</a>
    </div>

    <div class = 'navButtons'>
        <div class = 'buttonSearch'>
            <img/>
        </div>

        <div class = 'buttonNotification'>
            <img/>
        </div>
    </div>
    `;
    return header
}   