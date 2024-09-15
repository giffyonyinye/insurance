import React from 'react'

const GetInsurance = () => {
  return (
    <div>
        <section class="get-insurance">
            <div class="get-insurance-bg" style={{backgroundImage: "url(/img/get-insurance-bg.png)"}}></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="get-insurance__left">
                            <div class="get-insurance__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="/img/get-insurance-img-1.png" alt=""/>
                            </div>
                            <div class="get-insurance__author">
                                <p>Aleesha Rose</p>
                            </div>
                            <div class="get-insurance__circle"></div>
                            <div class="get-insurance__shape-1 float-bob-x">
                                <img src="/img/get-insurance-shape-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="get-insurance__right">
                            <div class="section-title text-left">
                                <div class="section-sub-title-box">
                                    <p class="section-sub-title">Free quote</p>
                                    <div class="section-title-shape-1">
                                        <img src="/img/section-title-shape-1.png" alt=""/>
                                    </div>
                                    <div class="section-title-shape-2">
                                        <img src="/img/section-title-shape-2.png" alt=""/>
                                    </div>
                                </div>
                                <h2 class="section-title__title">Get an insurance quote <br/> to get started!</h2>
                            </div>
                            <div class="get-insurance__tab">
                                <div class="get-insurance__tab-box tabs-box">
                                    <ul class="tab-buttons clearfix list-unstyled">
                                        <li data-tab="#home2" class="tab-btn active-btn"><span>Home</span></li>
                                        <li data-tab="#vehicles" class="tab-btn"><span>Vehicles</span></li>
                                        <li data-tab="#health" class="tab-btn"><span>health</span></li>
                                        <li data-tab="#life" class="tab-btn"><span>Life</span></li>
                                    </ul>
                                    <div class="tabs-content">

                                        <div class="tab active-tab" id="home2">
                                            <div class="get-insurance__content">
                                                <form class="get-insurance__form">
                                                    <div class="get-insurance__content-box">
                                                        <div class="get-insurance__input-box">
                                                            <input type="text" placeholder="Full name" name="name"/>
                                                        </div>
                                                        <div class="get-insurance__input-box">
                                                            <input type="email" placeholder="Email address"
                                                                name="email"/>
                                                        </div>
                                                        <div class="get-insurance__input-box">
                                                            <select class="selectpicker"
                                                                aria-label="Default select example">
                                                                <option selected="">Select type of insurance</option>
                                                                <option value="1">Car insurance</option>
                                                                <option value="2">Life insurance</option>
                                                                <option value="3">Home insurance</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="get-insurance__progress">
                                                        <div class="get-insurance__progress-single">
                                                            <h4 class="get-insurance__progress-title">Limits of Balance:
                                                            </h4>
                                                            <div class="get-insurance__progress-range">
                                                                <input type="text" class="balance-range-slider"
                                                                    data-hide-min-max="true" data-step="100"
                                                                    data-from="70000" data-min="0" data-max="90000"
                                                                    value=""/>
                                                                <div class="get-insurance__balance-box">
                                                                    <p class="get-insurance__balance">$<span></span></p>
                                                                </div>
                                                                <input type="hidden"
                                                                    class="get-insurance__balance__input"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="thm-btn get-insurance__btn">Get a Quote
                                                        Now</button>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="tab" id="vehicles">
                                            <div class="get-insurance__content">
                                                <form class="get-insurance__form">
                                                    <div class="get-insurance__content-box">
                                                        <div class="get-insurance__input-box">
                                                            <input type="text" placeholder="Full name" name="name"/>
                                                        </div>
                                                        <div class="get-insurance__input-box">
                                                            <input type="email" placeholder="Email address"
                                                                name="email"/>
                                                        </div>
                                                        <div class="get-insurance__input-box">
                                                            <select class="selectpicker"
                                                                aria-label="Default select example">
                                                                <option selected="">Select type of insurance</option>
                                                                <option value="1">Car insurance</option>
                                                                <option value="2">Life insurance</option>
                                                                <option value="3">Home insurance</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="get-insurance__progress">
                                                        <div class="get-insurance__progress-single">
                                                            <h4 class="get-insurance__progress-title">Limits of Balance:
                                                            </h4>
                                                            <div class="get-insurance__progress-range">
                                                                <input type="text" class="balance-range-slider"
                                                                    data-hide-min-max="true" data-step="100"
                                                                    data-from="70000" data-min="0" data-max="90000"
                                                                    value=""/>
                                                                <div class="get-insurance__balance-box">
                                                                    <p class="get-insurance__balance">$<span></span></p>
                                                                </div>
                                                                <input type="hidden"
                                                                    class="get-insurance__balance__input"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="thm-btn get-insurance__btn">Get a Quote
                                                        Now</button>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="tab" id="health">
                                            <div class="get-insurance__content">
                                                <form class="get-insurance__form">
                                                    <div class="get-insurance__content-box">
                                                        <div class="get-insurance__input-box">
                                                            <input type="text" placeholder="Full name" name="name"/>
                                                        </div>
                                                        <div class="get-insurance__input-box">
                                                            <input type="email" placeholder="Email address"
                                                                name="email"/>
                                                        </div>
                                                        <div class="get-insurance__input-box">
                                                            <select class="selectpicker"
                                                                aria-label="Default select example">
                                                                <option selected="">Select type of insurance</option>
                                                                <option value="1">Car insurance</option>
                                                                <option value="2">Life insurance</option>
                                                                <option value="3">Home insurance</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="get-insurance__progress">
                                                        <div class="get-insurance__progress-single">
                                                            <h4 class="get-insurance__progress-title">Limits of Balance:
                                                            </h4>
                                                            <div class="get-insurance__progress-range">
                                                                <input type="text" class="balance-range-slider"
                                                                    data-hide-min-max="true" data-step="100"
                                                                    data-from="70000" data-min="0" data-max="90000"
                                                                    value=""/>
                                                                <div class="get-insurance__balance-box">
                                                                    <p class="get-insurance__balance">$<span></span></p>
                                                                </div>
                                                                <input type="hidden"
                                                                    class="get-insurance__balance__input"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="thm-btn get-insurance__btn">Get a Quote
                                                        Now</button>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="tab" id="life">
                                            <div class="get-insurance__content">
                                                <form class="get-insurance__form">
                                                    <div class="get-insurance__content-box">
                                                        <div class="get-insurance__input-box">
                                                            <input type="text" placeholder="Full name" name="name"/>
                                                        </div>
                                                        <div class="get-insurance__input-box">
                                                            <input type="email" placeholder="Email address"
                                                                name="email"/>
                                                        </div>
                                                        <div class="get-insurance__input-box">
                                                            <select class="selectpicker"
                                                                aria-label="Default select example">
                                                                <option selected="">Select service</option>
                                                                <option value="1">service One</option>
                                                                <option value="2">service Two</option>
                                                                <option value="3">service Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="get-insurance__progress">
                                                        <div class="get-insurance__progress-single">
                                                            <h4 class="get-insurance__progress-title">Limits of Balance:
                                                            </h4>
                                                            <div class="get-insurance__progress-range">
                                                                <input type="text" class="balance-range-slider"
                                                                    data-hide-min-max="true" data-step="100"
                                                                    data-from="70000" data-min="0" data-max="90000"
                                                                    value=""/>
                                                                <div class="get-insurance__balance-box">
                                                                    <p class="get-insurance__balance">$<span></span></p>
                                                                </div>
                                                                <input type="hidden"
                                                                    class="get-insurance__balance__input"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="thm-btn get-insurance__btn">Get a Quote
                                                        Now</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default GetInsurance