export function descriptionPage() {
    const page = document.createElement('div')
    page.classList.add('desPage')
    page.innerHTML = `
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

    const costSwitchBtns = page.querySelector(".subscribePlanBtns");
    const monthYearlyCostBtn1 = page.querySelector(".subscribePlanBtnsOne",);
    const monthYearlyCostBtn2 = page.querySelector(".subscribePlanBtnsTwo",);
    const howMuch4Month = page.querySelectorAll(".subscribePlan4Month",);
    const howMuch4Year = page.querySelectorAll(".subscribePlan4Year",);

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

    const formSection = document.createElement('div')
    formSection.innerHTML =`
        <section class="plansSection">
        <div class="plansWrapper">
            <h1>Compare our plans and find the right one for you</h1>
            <p class="plansText">
                StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium.
                Compare the features of each plan and choose the one that's right for you.
            </p>

            <div class="plansTableWrapper">
                <table class="plansTable">
                    <thead>
                        <tr>
                            <th>Features</th>
                            <th>Basic</th>
                            <th>
                                <div class="standardPlan">
                                    <span>Standard</span>
                                    <span class="popularBadge">Popular</span>
                                </div>
                            </th>
                            <th>Premium</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Price</td>
                            <td>$9.99/Month</td>
                            <td>$12.99/Month</td>
                            <td>$14.99/Month</td>
                        </tr>

                        <tr>
                            <td>Content</td>
                            <td>
                                Access to a wide selection of movies and shows, including some new releases.
                            </td>
                            <td>
                                Access to a wider selection of movies and shows, including most new releases and exclusive content.
                            </td>
                            <td>
                                Access to a widest selection of movies and shows, including all new releases and Offline Viewing.
                            </td>
                        </tr>

                        <tr>
                            <td>Devices</td>
                            <td>Watch on one device simultaneously</td>
                            <td>Watch on Two device simultaneously</td>
                            <td>Watch on Four device simultaneously</td>
                        </tr>

                        <tr>
                            <td>Free Trial</td>
                            <td>7 Days</td>
                            <td>7 Days</td>
                            <td>7 Days</td>
                        </tr>

                        <tr>
                            <td>Cancel Anytime</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>

                        <tr>
                            <td>HDR</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>

                        <tr>
                            <td>Dolby Atmos</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>

                        <tr>
                            <td>Ad - Free</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>

                        <tr>
                            <td>Offline Viewing</td>
                            <td>No</td>
                            <td>Yes, for select titles.</td>
                            <td>Yes, for all titles.</td>
                        </tr>

                        <tr>
                            <td>Family Sharing</td>
                            <td>No</td>
                            <td>Yes, up to 5 family members.</td>
                            <td>Yes, up to 6 family members.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    `
    page.append(formSection)

    const lastBannerdes = document.createElement('div')
    lastBannerdes.classList.add('lastBannerDes')
    lastBannerdes.innerHTML=`
    <div class='wrapper_last_banner'>
            <div class='last_banner_txt'>
                <h1>Start your free trial today!</h1>
                <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>
            <button class='last_banner_btn'>Start a Free Trail</button>
        </div>
    `
    page.append(lastBannerdes)
    return page
}