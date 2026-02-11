export function Header(){
    const header = document.createElement('header')
    header.innerHTML = `
    <div class = 'headerLogo'>
        <a>
            <img src='./assets/icons/Logo.svg' alt="logo"/>
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
            <img src='./assets/icons/Vector.svg' alt="#"/>
        </div>

        <div class = 'buttonNotification'>
            <img src='./assets/icons/Vector (1).svg' alt="#"/>
        </div>
    </div>

    <div class='burger'>☰</div>
    `;
    return header
}   

document.addEventListener('DOMContentLoaded', () => {
    const clickOnNav = document.querySelectorAll('.navLinks')

    clickOnNav.forEach((link) => {
        link.addEventListener('click', () => {
            clickOnNav.forEach((item) => {
                item.classList.remove('headerLinksClick')
            })

            link.classList.add('headerLinksClick')
        })
    })
});
