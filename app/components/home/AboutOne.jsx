import React from 'react'

const AboutOne = () => {
  return (
    <div>
          <section class="about-one">
            <div class="about-one-bg wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms"
                style={{backgroundImage: "url(/img/about-one-bg.png)"}}></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="about-one__left">
                            <div class="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div class="about-one__img">
                                    <img src="/img/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div class="about-one__img-two">
                                    <img src="/img/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div class="about-one__experience">
                                    <h2 class="about-one__experience-year">30</h2>
                                    <p class="about-one__experience-text">Years of <br/> Experience</p>
                                </div>
                                <div class="about-one__shape-1">
                                    <img src="/img/about-one-shape-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="about-one__right">
                            <div class="section-title text-left">
                                <div class="section-sub-title-box">
                                    <p class="section-sub-title">About company</p>
                                    <div class="section-title-shape-1">
                                        <img src="/img/section-title-shape-1.png" alt=""/>
                                    </div>
                                    <div class="section-title-shape-2">
                                        <img src="/img/section-title-shape-2.png" alt=""/>
                                    </div>
                                </div>
                                <h2 class="section-title__title">We provide the best insurance policy</h2>
                            </div>
                            <p class="about-one__text-1">Duis aute irure dolor in reprehenderit in velit esse cillum
                                dolore eu nulla pariatur.</p>
                            <ul class="list-unstyled about-one__points">
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="text">
                                        <p>Refresing to get such a personal touch.</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="text">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="text">
                                        <p>Velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </li>
                            </ul>
                            <p class="about-one__text-2">Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt ipsum.</p>
                            <div class="about-one__btn-call">
                                <div class="about-one__btn-box">
                                    <a href="about.html" class="thm-btn about-one__btn">Discover More</a>
                                </div>
                                <div class="about-one__call">
                                    <div class="about-one__call-icon">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div class="about-one__call-content">
                                        <a href="tel:9200368090">+92 (003) 68-090</a>
                                        <p>Call to Our Experts</p>
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

export default AboutOne