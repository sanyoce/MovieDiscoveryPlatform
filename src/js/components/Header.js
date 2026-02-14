export function Header(){
    const header = document.createElement('header')
    header.innerHTML = `
    <div class = 'headerWrapper'>

        <div class = 'headerLogo'>
            <a>
                <img src='./assets/icons/Logo.svg' alt="logo"/>
            </a>
        </div>

        <div class = 'headerLinks'>
            <a href="#/home" class = 'navLinks headerLinksClick'>HOME</a>
            <a href="#/search" class = 'navLinks'>SEARCH</a>
            <a href="#/favorites" class = 'navLinks'>FAVORITES</a>
            <a href="#/details" class = 'navLinks'>DETAILS</a>
        </div>

        <div class = 'headerButtons'>

            <div class = 'buttonSearch'>
                <img src='./assets/icons/Vector.svg' alt="#"/>
            </div>

            <div class = 'buttonNotification'>
                <img src='./assets/icons/Vector (1).svg' alt="#"/>
            </div>

        </div>

        <div class='burger'>
            <span></span><span></span><span></span>
        </div>

    </div>
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

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.headerWrapper')
    
    const burger = document.querySelector('.burger')

    burger.addEventListener('click', () =>{
        menu.classList.toggle('open')
    })
        
    
});
