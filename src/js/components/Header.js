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
            <a href="#/home" class = 'navLinks headerLinksClick'>Home</a>
            <a href="#/favorites" class = 'navLinks'>Movies & Shows</a>
            <a href="#/support" class = 'navLinks'>Support</a>
            <a href="#/description" class = 'navLinks'>Description Page</a>
        </div>

        <div class = 'headerButtons'>

            <div class = 'buttonSearch'>
                <a href="#/search" class='returnSearch'><img src='./assets/icons/Vector.svg' alt="#"/></a>
                <a href="#/home" class='returnMain hideThisElem'><img src='./assets/icons/Vector (Stroke).svg'/></a>
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

document.addEventListener('DOMContentLoaded', () =>{
    const searchPage = document.querySelector('.returnSearch')
    const homePage = document.querySelector('.returnMain')

    searchPage.addEventListener(('click'), () =>{
        searchPage.classList.toggle('hideThisElem')
        homePage.classList.toggle('hideThisElem')
    })
    homePage.addEventListener(('click'), () =>{
        homePage.classList.toggle('hideThisElem')
        searchPage.classList.toggle('hideThisElem')
    })
})



