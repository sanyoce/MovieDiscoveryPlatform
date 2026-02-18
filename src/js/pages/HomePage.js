import { getGenres, getPoster } from "../api/tmdb.js";

export async function homePage(){
    const div = document.createElement('div')
    div.classList.add('homePage')
    div.innerHTML = `

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
const IMG_BASE = 'https://image.tmdb.org/t/p/w200';

const genresData = await getGenres()
const postersData = await getPoster()


const genresSectionPage = document.createElement('section')
genresSectionPage.classList.add('genresPage')
genresSectionPage.innerHTML =`
`;


const genres = genresData.genres.slice(0, 5);
const movies = postersData.results;


genres.forEach(genre => {

    const genreBlock = document.createElement('div')
    genreBlock.classList.add('genreBlock')

    genreBlock.innerHTML = `
        <div class="posters"></div>

        <div class = 'genreTxt'>
            <h3>${genre.name}</h3>
            <img src = './assets/icons/Vector 619.svg'>
        </div>
    `;

    const genrePoster = genreBlock.querySelector('.posters')

    const moviesGenre = movies
        .filter(movie => movie.genre_ids?.includes(genre.id))
        .slice(0, 4)

    moviesGenre.forEach(movie => {
        if (!movie.poster_path) return

        const img = document.createElement('img')
        img.src = IMG_BASE + movie.poster_path
        img.alt = movie
        genrePoster.append(img)
    });

genresSectionPage.append(genreBlock);
});


const deviceSection = document.createElement('div')
deviceSection.classList.add('deviceSectionBlock')
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
`

const homeQuestion = document.createElement('div')
homeQuestion.classList.add('homeQuestionBlock')
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
            <div class = 'homeQuestionNumber'><p>01</p></div>

            <div class = 'homeQuestionTxt'>
                <p>What is StreamVibe?</p>
                <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>

            <div class = 'homeQuestionTxtBtn'>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class = 'homeQuestion'>
            <div class = 'homeQuestionNumber'><p>02</p></div>

            <div class = 'homeQuestionTxt'>
                <p>How much does StreamVibe cost?</p>
                <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>

            <div class = 'homeQuestionTxtBtn '>
                <span></span><span></span>
            </div>
        </div>

        <div class = 'homeQuestion'>
            <div class = 'homeQuestionNumber'><p>03</p></div>

            <div class = 'homeQuestionTxt'>
                <p>What content is available on StreamVibe?</p>
                <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>

            <div class = 'homeQuestionTxtBtn '>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class = 'homeQuestion'>
            <div class = 'homeQuestionNumber'><p>04</p></div>

            <div class = 'homeQuestionTxt'>
                <p>How can I watch StreamVibe?</p>
                <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>

            <div class = 'homeQuestionTxtBtn'>
                <span></span><span></span>
            </div>
        </div>

        <div class = 'homeQuestion'>
            <div class = 'homeQuestionNumber'><p>05</p></div>

            <div class = 'homeQuestionTxt'>
                <p>How do I sign up for StreamVibe?</p>
                <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>

            <div class = 'homeQuestionTxtBtn '>
                <span></span><span></span>
            </div>
        </div>

        <div class = 'homeQuestion'>
            <div class = 'homeQuestionNumber'><p>06</p></div>

            <div class = 'homeQuestionTxt'>
                <p>What is the StreamVibe free trial?</p>
                <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>

            <div class = 'homeQuestionTxtBtn'>
                <span></span><span></span>
            </div>
        </div>

        <div class = 'homeQuestion'>
            <div class = 'homeQuestionNumber'><p>07</p></div>

            <div class = 'homeQuestionTxt'>
                <p>How do I contact StreamVibe customer support?</p>
                <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>

            <div class = 'homeQuestionTxtBtn'>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class = 'homeQuestion'>
            <div class = 'homeQuestionNumber'><p>08</p></div>

            <div class = 'homeQuestionTxt'>
                <p>What are the StreamVibe payment methods?</p>
                <p class = 'homeQuestionTxtHidden'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>

            <div class = 'homeQuestionTxtBtn'>
                <span></span>
                <span></span>
            </div>
        </div>

    </div>
`

div.append(genresSectionPage)
div.append(deviceSection)
div.append(homeQuestion)


    const homeQuestionsOpen = homeQuestion.querySelectorAll('.homeQuestionTxtBtn')
    const homeTxtHidden = homeQuestion.querySelectorAll('.homeQuestionTxtHidden')
    homeQuestionsOpen.forEach((btn) =>{
        btn.addEventListener('click', () =>{
            btn.classList.toggle('open');
            homeTxtHidden.toggle('open')
        })
    })

    homeQuestionsOpen.forEach((btn) => {
    btn.addEventListener('click', () => {
    const question = btn.closest('.homeQuestion');
    const hiddenText = question.querySelector('.homeQuestionTxtHidden');

    hiddenText.classList.toggle('open');
  });
});


return div
}



    

