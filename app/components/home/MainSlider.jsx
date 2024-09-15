import React from 'react'
import Slider from '../Slider';


const MainSlider = () => {
 
  return (
    <div>

        <section class="main-slider clearfix">
            <div class="swiper-container thm-swiper__slider" data-swiper-options="{&quot;slidesPerView&quot;: 1, &quot;loop&quot;: true,
                &quot;effect&quot;: &quot;fade&quot;,
                &quot;pagination&quot;: {
                &quot;el&quot;: &quot;#main-slider-pagination&quot;,
                &quot;type&quot;: &quot;bullets&quot;,
                &quot;clickable&quot;: true
                },
                &quot;navigation&quot;: {
                &quot;nextEl&quot;: &quot;#main-slider__swiper-button-next&quot;,
                &quot;prevEl&quot;: &quot;#main-slider__swiper-button-prev&quot;
                },
                &quot;autoplay&quot;: {
                &quot;delay&quot;: 5000
                }}">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="image-layer" style={{backgroundImage: "url(/img/main-slider-1-1.jpg)"}}></div>


                        <div class="main-slider-shape-1 float-bob-x">
                            <img src="/img/main-slider-shape-1.png" alt="" />
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="main-slider__content">
                                        <h2 class="main-slider__title">Insurance <br/> for the better <br/> family
                                            <span>life.</span>
                                        </h2>
                                        <p class="main-slider__text">Phasellus condimentum laoreet turpis, ut tincid
                                            sodales <br/> in. Integer leo arcu, mollis sit amet tempor.</p>
                                        <div class="main-slider__btn-box">
                                            <a href="about.html" class="thm-btn main-slider__btn">Let’s Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="image-layer" style={{backgroundImage: "url(/img/main-slider-1-2.jpg);"}}></div>


                        <div class="main-slider-shape-1 float-bob-x">
                            <img src="/img/main-slider-shape-1.png" alt="" />
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="main-slider__content">
                                        <h2 class="main-slider__title">Insurance <br/> for the better <br/> family
                                            <span>life.</span>
                                        </h2>
                                        <p class="main-slider__text">Phasellus condimentum laoreet turpis, ut tincid
                                            sodales <br/> in. Integer leo arcu, mollis sit amet tempor.</p>
                                        <div class="main-slider__btn-box">
                                            <a href="about.html" class="thm-btn main-slider__btn">Let’s Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="image-layer" style={{backgroundImage: "url(/img/main-slider-1-3.jpg)"}}></div>


                        <div class="main-slider-shape-1 float-bob-x">
                            <img src="/img/main-slider-shape-1.png" alt=""/>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="main-slider__content">
                                        <h2 class="main-slider__title">Insurance <br/> for the better <br/> family
                                            <span>life.</span>
                                        </h2>
                                        <p class="main-slider__text">Phasellus condimentum laoreet turpis, ut tincid
                                            sodales <br/> in. Integer leo arcu, mollis sit amet tempor.</p>
                                        <div class="main-slider__btn-box">
                                            <a href="about.html" class="thm-btn main-slider__btn">Let’s Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="main-slider__nav">
                    <div class="swiper-button-prev" id="main-slider__swiper-button-next">
                        <i class="icon-right-arrow"></i>
                    </div>
                    <div class="swiper-button-next" id="main-slider__swiper-button-prev">
                        <i class="icon-right-arrow1"></i>
                    </div>
                </div>

            </div>
        </section>
        
    </div>
  )
}

export default MainSlider;