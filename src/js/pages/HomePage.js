import { getGenres, getPoster } from "../api/tmdb.js";
const IMG_BASE = "https://image.tmdb.org/t/p/w500"

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

    const genre =  await getGenres()
    const movies = await getPoster()
    console.log(genre)
    const homeCarousel = document.createElement('div')
    homeCarousel.classList.add('homeCarouselSection')
    homeCarousel.innerHTML = `
        <div class='homeCarouselHeader'>
            <div class='homeCarouselHeaderText'>
                <h1>Explore our wide variety of categories</h1>
                <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
            </div>
            <div class='homeCarouselHeaderBtns'>
                <button type="button" class='left'><img src='./assets/icons/Vector 619 (1).svg'></button>
                <button type="button" class='right'><img src='./assets/icons/Vector 619.svg'></button>
            </div>
        </div>

        <div class='spaceForHomeCarousel'>
        </div>
    `
    main.append(homeCarousel)
    const spaceForCarousel = homeCarousel.querySelector('.spaceForHomeCarousel')
     function pageSize() {
    if (window.innerWidth <= 500) {
      return 2;
    }
    return 4;
    }
    let startIndexForHomeCarousel = 0
    const stepForHomeCarousel = pageSize()

    function renderHomeCarousel(startIndex,step){
        const htmlForHomeCarousel = genre.genres
        .slice(startIndex,startIndex + step)
        .map(g =>{
            const postersForHomeCarousel = movies.results
            .filter(movies => movies.genre_ids.includes(g.id))
            .slice(0,4)
            .map(m =>{
                return `
                    <div class='moviePosters'>
                        <img src='${IMG_BASE + m.poster_path}'>
                    </div>
                `
            }).join('')

        return `
            <div class='homeCarouselCardBlock'>
                <div class='spaceForPosters'>
                    ${postersForHomeCarousel}
                </div>
                <div class='spaceForGenres'>
                    <p>${g.name}</p>
                    <img src='./assets/icons/Vector 619.svg'>
                </div>
            </div>
        `
        }).join('')
        spaceForCarousel.innerHTML = htmlForHomeCarousel

    }
    renderHomeCarousel(startIndexForHomeCarousel,stepForHomeCarousel)

    const prevBtn = homeCarousel.querySelector('.left')
    const nextBtn = homeCarousel.querySelector('.right')
    prevBtn.addEventListener('click', () => {
        if(startIndexForHomeCarousel > 0) {
            startIndexForHomeCarousel -= stepForHomeCarousel
            renderHomeCarousel(startIndexForHomeCarousel,stepForHomeCarousel)
        }
    })

    nextBtn.addEventListener('click', () => {
        if (startIndexForHomeCarousel + stepForHomeCarousel < genre.genres.length) {
            startIndexForHomeCarousel += stepForHomeCarousel
            renderHomeCarousel(startIndexForHomeCarousel,stepForHomeCarousel)
        }
    })

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

        <div class='home_questions_first'>
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
                    <div class = 'homeQuestionNumber'><p>02</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>How much does StreamVibe cost?</p>
                        
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
                    <div class = 'homeQuestionNumber'><p>03</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What content is available on StreamVibe?</p>
                        
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
                    <div class = 'homeQuestionNumber'><p>04</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>How can I watch StreamVibe?</p>
                        
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

        <div class='home_questions_second'>
            <div class = 'homeQuestion'>
                <div class='homeQuestionWrapper'>
                    <div class = 'homeQuestionNumber'><p>05</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>How do I sign up for StreamVibe?</p>
                        
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
                    <div class = 'homeQuestionNumber'><p>06</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What is the StreamVibe free trial?</p>
                        
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
                    <div class = 'homeQuestionNumber'><p>07</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>How do I contact StreamVibe customer support?</p>
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
                    <div class = 'homeQuestionNumber'><p>08</p></div>

                    <div class = 'homeQuestionTxt'>
                        <p>What are the StreamVibe payment methods?</p>
                        
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
                    <p>Enjoy an extensive library of movies and shows, featuring a range of content, including recently</p>
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

    costSwitchBtns.addEventListener(('click'), (e)=>{
        if(e.target.closest('.subscribePlanBtnsOne')){
            monthYearlyCostBtn2.classList.remove('subscribeBtnActive')
            monthYearlyCostBtn1.classList.add('subscribeBtnActive')
            howMuch4Month.forEach((elem)=>{
            elem.classList.remove('whoIsHidden')
            })
            howMuch4Year.forEach((elem)=>{
            elem.classList.add('whoIsHidden')
            })
        }else{
            monthYearlyCostBtn1.classList.remove('subscribeBtnActive')
            monthYearlyCostBtn2.classList.add('subscribeBtnActive')
             howMuch4Year.forEach((elem)=>{
             elem.classList.remove('whoIsHidden')   
             }) 
            howMuch4Month.forEach((elem)=>{
             elem.classList.add('whoIsHidden')   
             }) 
        }
    })

    const lastBannerHome = document.createElement('div')
    lastBannerHome.classList.add('lastBannerHome')
    lastBannerHome.innerHTML=`
    <div class='wrapper_last_banner'>
            <div class='last_banner_txt'>
                <h1>Start your free trial today!</h1>
                <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>
            <button class='last_banner_btn'>Start a Free Trail</button>
        </div>
    `
    main.append(lastBannerHome)
    return main;
}
