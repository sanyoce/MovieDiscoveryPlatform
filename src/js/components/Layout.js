import {Header} from './Header.js';

export function layout(){
    const root = document.createElement('div')
    root.id = 'root';

    const main = document.createElement('main')
    main.id = 'main';

    const footer = document.createElement('footer')
    footer.innerHTML = `

        <div class='containerFooterLinks'>

            <div class='footerLinks'>
                <h2>Home</h2>
                <a>Categories</a>
                <a>Devices</a>
                <a>Pricing</a>
                <a>FAQ</a>
            </div>

            <div class='footerLinks'>
                <h2>Movies</h2>
                <a>Gernes</a>
                <a>Trending</a>
                <a>New Release</a>
                <a>Popular</a>
            </div>

            <div class='footerLinks'>
                <h2>Shows</h2>
                <a>Gernes</a>
                <a>Trending</a>
                <a>New Release</a>
                <a>Popular</a>
            </div>

            <div class='footerLinks'>
                <h2>Support</h2>
                <a>Contact Us</a>
            </div>

            <div class='footerLinks'>
                <h2>Subscription</h2>
                <a>Plans</a>
                <a>Features</a>
            </div>

            <div class='footerContact'>

                <div>
                    <p>Connect With Us</p>
                </div>

                <div class='footerIcons'>
                    <div><img src='./assets/icons/Button.svg' alt="#"/></div>
                    <div><img src='./assets/icons/Button (1).svg' alt="#"/></div>
                    <div><img src='./assets/icons/Button (2).svg' alt="#"/></div>
                </div>

            </div>

        </div>

        <div class='footerPolicy'>

            <div>
                <p>@2023 streamvib, All Rights Reserved</p>
            </div>

            <div class = 'footerPolicyTerms'>
                <a>Terms of Use</a>
                <a>Privacy Policy</a>
                <a>Cookie Policy</a>
            </div>

        </div>

    `;
    
    root.append(Header(),main,footer)
    return root
}