export function supportPage() {
    const page = document.createElement('div')
    page.classList.add('supportWrapper')
    page.innerHTML = `
        <div class='welcomeSupport'>
            <div class='welcoming'>
                <h1>Welcome to our <br> support page!</h1>
                <p>We're here to help you with any problems you may be having <br> with our product.</p>
                <img src='./assets/images/Sub Container.svg'/>
            </div>
            <div class='supportForm'>
                <section class="contactSection">
                    <div class="contactWrapper">
                        <form class="contactForm">
                            <div class="contactRow">
                                <div class="inputWrapper">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Enter First Name">
                                </div>

                                <div class="inputWrapper">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Enter Last Name">
                                </div>
                            </div>

                            <div class="contactRow">
                                <div class="inputWrapper">
                                    <label>Email</label>
                                    <input type="email" placeholder="Enter your Email">
                                </div>

                                <div class="inputWrapper">
                                    <label>Phone Number</label>

                                    <div class="phoneInputWrapper">
                                        <div class="flagSelect">
                                            <img src="https://flagcdn.com/w40/in.png" alt="flag">
                                            <span>⌄</span>
                                        </div>

                                        <input type="text" placeholder="Enter Phone Number">
                                    </div>
                                </div>
                            </div>

                            <div class="inputWrapper fullWidth">
                                <label>Message</label>
                                <textarea placeholder="Enter your Message"></textarea>
                            </div>

                            <div class="formBottom">
                                <label class="checkboxWrapper">
                                    <input type="checkbox">
                                    <span>I agree with Terms of Use and Privacy Policy</span>
                                </label>

                                <button type="submit" class="sendBtn">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    `;


    const questions = document.createElement('div')
    questions.classList.add('questionSupport')
    questions.innerHTML=`
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
    `
    page.append(questions)

    const homeQuestionsOpen = questions.querySelectorAll(".homeQuestion");
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

    const lastBanner = document.createElement('div')
    lastBanner.innerHTML=`
        <div class='wrapper_last_banner'>
            <div class='last_banner_txt'>
                <h1>Start your free trial today!</h1>
                <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>
            <button class='last_banner_btn'>Start a Free Trail</button>
        </div>
    `

    page.append(lastBanner)
    return page
}