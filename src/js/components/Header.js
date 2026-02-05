export function Header(){
    const header = document.createElement('header')
    header.innerHTML = `
    <div class = 'navLogo'>
        <a>
            <img src='./assets/icons/Logo.svg' alt="logo"/>
        </a>
    </div>

    <div class = 'headerLinks'>
        <div class = 'linkWrap'>
            <a href="#/home" class = 'navLinks'>HOME</a>
        </div>
        <div class = 'linkWrap'>
            <a href="#/search" class = 'navLinks'>SEARCH</a>
        </div>
        <div class = 'linkWrap'>
            <a href="#/favorites" class = 'navLinks'>FAVORITES</a>
        </div>
        <div class = 'linkWrap'>
            <a href="#/details" class = 'navLinks'>DETAILS</a>
        </div>
    </div>

    <div class = 'navButtons'>
        <div class = 'buttonSearch'>
            <img src='./assets/icons/Vector.svg' alt="#"/>
        </div>

        <div class = 'buttonNotification'>
            <img src='./assets/icons/Vector (1).svg' alt="#"/>
        </div>
    </div>
    `;
    return header
}   