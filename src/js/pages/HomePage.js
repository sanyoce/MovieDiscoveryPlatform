import { getGenres, getPoster } from "../api/tmdb.js";

export async function homePage() {
    const main = document.createElement("div");
    main.classList.add("homePage");
    main.innerHTML = `

        <div class = 'homeImg'><img src='./assets/images/Abstract Design (1).svg'/></div>
        
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

    const IMG_BASE = "https://image.tmdb.org/t/p/w200";

    const genresData = await getGenres();
    const postersData = await getPoster();

    const  homeCarouselSection = document.createElement('div')
    homeCarouselSection.classList.add('homeCarousel')

    let startIndex = 0
    let step = 4

    function renderCarousel(startIndex, step){
        homeCarouselSection.innerHTML=``

        const homeCarousel = document.createElement('div')
        homeCarousel.classList.add('homePageCarousel')
        homeCarousel.innerHTML=`
            <div class='headerCarousel'>
                <div class='headerCarouselInfo'>
                    <h1>Explore our wide variety of categories</h1>
                    <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
                    
                <div class='headerCarouselBtn'>
                    <button class='prev'><img src='./assets/icons/Vector 619 (1).svg'/></button>
                    <button class='next'><img src='./assets/icons/Vector (2).svg'/></button>
                 </div>
            </div>
            <div class='createCarousel'>
            
            </div>
        `

        homeCarouselSection.append(homeCarousel)

        const genres = genresData.genres.slice(startIndex, startIndex + step)

        genres.forEach(genre =>{
             const poster4Genre = postersData.results
            .filter(movie => movie.genre_ids?.includes(genre.id) && movie.poster_path)
            .slice(0,4)
            const containerCarousel = document.createElement('div')
            containerCarousel.classList.add('blockCarousel')
            containerCarousel.innerHTML = `
                <div class='carouselPosters'>

                </div>

                <div class = 'genreTxt'>
                    <h2>${genre.name}</h2>
                    <img src = './assets/icons/Vector 619.svg'/>
                </div>
            `
            const carouselText = homeCarousel.querySelector('.createCarousel')
            carouselText.append(containerCarousel)

            poster4Genre.forEach(poster =>{
                const space4Posters = containerCarousel.querySelector('.carouselPosters')
                const posterImg = document.createElement('img')
                posterImg.src = IMG_BASE + poster.poster_path
                space4Posters.append(posterImg)
            })

        })

        const prevBtn = homeCarouselSection.querySelector('.prev')
        const nextBtn = homeCarouselSection.querySelector('.next')

        prevBtn.addEventListener('click', () => {
            startIndex = Math.max(0, startIndex - step)
            renderCarousel(startIndex, step)
        })

        nextBtn.addEventListener('click', () => {
            startIndex = Math.min(genresData.genres.length - step, startIndex + step)
            renderCarousel(startIndex, step)
        })

    }
    renderCarousel(startIndex,step)

   
    
    main.append(homeCarouselSection)
   



















    const deviceSection = document.createElement("div");
    deviceSection.classList.add("deviceSectionBlock");
    deviceSection.innerHTML = `
        <div class = 'deviceSectionInfo'>
            <h2>We Provide you streaming experience across various devices.</h2>
            <p class = 'deviceNotHiddenInfo'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            <p class = 'deviceHiddenInfo'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.</p>
        </div>

        <div class = 'deviceSectionCards'>

            <div class = 'deviceSectionCard'>
                <div>
                    <div class = 'deviceIcons'><img src = './assets/icons/Frame.svg'></div>
                    <h3>Smartphones</h3>
                </div>

                <div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
            </div>

            <div class = 'deviceSectionCard'>
                <div>
                    <div class = 'deviceIcons'><img src = './assets/icons/Frame (1).svg'></div>
                    <h3>Tablet</h3>
                </div>

                <div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
            </div>

            <div class = 'deviceSectionCard'>
                <div>
                    <div class = 'deviceIcons'><img src = './assets/icons/Frame (2).svg'></div>
                    <h3>Smart</h3>
                </div>

                <div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
            </div>

            <div class = 'deviceSectionCard'>
                <div>
                    <div class = 'deviceIcons'><img src = './assets/icons/Frame (3).svg'></div>
                    <h3>Laptops </h3>
                </div>

                <div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
            </div>

            <div class = 'deviceSectionCard'>
                <div>
                    <div class = 'deviceIcons'><img src = './assets/icons/Frame (4).svg'></div>
                    <h3>Gaming Consoles</h3>
                </div>

                <div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
            </div>

            <div class = 'deviceSectionCard'>
                <div>
                    <div class = 'deviceIcons'><img src = './assets/icons/Frame (5).svg'></div>
                    <h3>VR Headsets </h3>
                </div>

                <div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
            </div>

        </div>
    `;

    main.append(deviceSection);

    const homeQuestion = document.createElement("div");
    homeQuestion.classList.add("homeQuestionBlock");
    homeQuestion.innerHTML = `

        <div class = 'homeQuestionHeader'>

            <div class = 'homeQuestionHeaderInfo'>
                <h1>Frequently Asked Questions</h1>
                <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </div>
            
            <div class = 'homeQuestionHeaderBtn'>
                <a>Ask a Question</a>
            </div>

        </div>
        
        <div class = 'homeQuestions'>

            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>01</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is StreamVibe?</p>
                        
                    </div>

                    <div class = 'homeQuestionTxtBtn'>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
                <div>
                    <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
            </div>

            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>01</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is StreamVibe?</p>
                        
                    </div>

                    <div class = 'homeQuestionTxtBtn'>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
                <div>
                    <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
            </div>

            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>01</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is StreamVibe?</p>
                        
                    </div>

                    <div class = 'homeQuestionTxtBtn'>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
                <div>
                    <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
            </div>

            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>01</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is StreamVibe?</p>
                        
                    </div>

                    <div class = 'homeQuestionTxtBtn'>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
                <div>
                    <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
            </div>

            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>01</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is StreamVibe?</p>
                        
                    </div>

                    <div class = 'homeQuestionTxtBtn'>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
                <div>
                    <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
            </div>

            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>01</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is StreamVibe?</p>
                        
                    </div>

                    <div class = 'homeQuestionTxtBtn'>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
                <div>
                    <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
            </div>

            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>01</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is StreamVibe?</p>
                    </div>

                    <div class = 'homeQuestionTxtBtn'>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
                <div>
                    <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
            </div>

            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>01</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is StreamVibe?</p>
                        
                    </div>

                    <div class = 'homeQuestionTxtBtn'>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
                <div>
                    <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
            </div>

        </div>
    `;

    main.append(homeQuestion);

    const homeQuestionsOpen = homeQuestion.querySelectorAll(".homeQuestion");
    const homeTxtHidden = homeQuestion.querySelectorAll(".homeQuestionTxtHidden");
    homeQuestionsOpen.forEach((btn) => {
        btn.addEventListener("click", () => {
        btn.classList.toggle("open");
        });
    });

    homeQuestionsOpen.forEach((btn) => {
        btn.addEventListener("click", () => {
        const question = btn.closest(".homeQuestion");
        const hiddenText = question.querySelector(".homeQuestionTxtHidden");
        hiddenText.classList.toggle("open");
        });
    });

    const subscribeCostPlanPage = document.createElement("div");
    subscribeCostPlanPage.classList.add("subscribePlan");
    subscribeCostPlanPage.innerHTML = `
        <div class = 'subscribePlanHeader'>

            <div class = 'subscribePlanInfo'>
                <h1>Choose the plan that's right for you</h1>
                <p>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>

            <div class = 'subscribePlanBtns'>

                <div class = 'subscribePlanBtnsOne subscribeBtnActive'>
                    <p>Monthly</p>
                </div>

                <div class = 'subscribePlanBtnsTwo'>
                    <p>Yearly</p>
                </div>

            </div>

        </div>

        <div class = 'subscribePlanCards'>

            <div class = 'subscribePlanCard'>

                <div class = 'subscribePlanCardInfo'>
                    <h2>Basic Plan</h2>
                    <p>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                </div>

                <div class = 'subscribePlanCost'>

                    <div class = 'subscribePlan4Month'>
                        <p>$9.99</p>
                        <p>/month</p>
                    </div>

                    <div class = 'subscribePlan4Year whoIsHidden'>
                        <p>$100</p>
                        <p>/year</p>
                    </div>

                </div>

                <div class = 'subscribePlanCardBtns'>
                    <div><p>Start Free Trial</p></div>
                    <div><p>Choose Plan</p></div>
                </div>

            </div>

            <div class = 'subscribePlanCard'>

                <div class = 'subscribePlanCardInfo'>
                    <h2>Standard Plan</h2>
                    <p>Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                </div>

                <div>

                    <div class = 'subscribePlan4Month'>
                        <p>$12.99</p>
                        <p>/month</p>
                    </div>

                    <div class = 'subscribePlan4Year whoIsHidden'>
                        <p>$120</p>
                        <p>/year</p>
                    </div>

                </div>

                <div class = 'subscribePlanCardBtns'>
                    <div><p>Start Free Trial</p></div>
                    <div><p>Choose Plan</p></div>
                </div>

            </div>

            <div class = 'subscribePlanCard'>

                <div class = 'subscribePlanCardInfo'>
                    <h2>Premium Plan</h2>
                    <p>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                </div>

                <div>

                    <div class = 'subscribePlan4Month'>
                        <p>$14.99</p>
                        <p>/month</p>
                    </div>

                    <div class = 'subscribePlan4Year whoIsHidden'>
                        <p>$150</p>
                        <p>/year</p>
                    </div>

                </div>

                <div class = 'subscribePlanCardBtns'>
                    <div><p>Start Free Trial</p></div>
                    <div><p>Choose Plan</p></div>
                </div>

            </div>

        </div>
    `;

    main.append(subscribeCostPlanPage);

    const costSwitchBtns =
        subscribeCostPlanPage.querySelector(".subscribePlanBtns");
    const monthYearlyCostBtn1 = subscribeCostPlanPage.querySelector(
        ".subscribePlanBtnsOne",
    );
    const monthYearlyCostBtn2 = subscribeCostPlanPage.querySelector(
        ".subscribePlanBtnsTwo",
    );
    const howMuch4Month = subscribeCostPlanPage.querySelectorAll(
        ".subscribePlan4Month",
    );
    const howMuch4Year = subscribeCostPlanPage.querySelectorAll(
        ".subscribePlan4Year",
    );

    return main;
}
