import React from 'react'
const Header = () => {
  return (
    <div>
         <header class="main-header clearfix">
            <div class="main-header__top">
                <div class="container">
                    <div class="main-header__top-inner">
                        <div class="main-header__top-address">
                            <ul class="list-unstyled main-header__top-address-list">
                                <li>
                                    <i class="icon">
                                        <span class="icon-pin"></span>
                                    </i>
                                    <div class="text">
                                        <p>30 Commercial Road Fratton, UK</p>
                                    </div>
                                </li>
                                <li>
                                    <i class="icon">
                                        <span class="icon-email"></span>
                                    </i>
                                    <div class="text">
                                        <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="main-header__top-right">
                            <div class="main-header__top-menu-box">
                                <ul class="list-unstyled main-header__top-menu">
                                    <li><a href="make-a-claim-death.html">Make a claim</a></li>
                                    <li><a href="faq.html"> FAQs</a></li>
                                    <li><a href="about.html">About</a></li>
                                </ul>
                            </div>
                            <div class="main-header__top-social-box">
                                <div class="main-header__top-social">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="main-menu clearfix">
                <div class="main-menu__wrapper clearfix">
                    <div class="container">
                        <div class="main-menu__wrapper-inner clearfix">
                            <div class="main-menu__left">
                                <div class="main-menu__logo">
                                    <a href="index.html">
                                        <img src="/img/logo_ipsum.svg" alt=""/>
                                    </a>
                                </div>
                                <div class="main-menu__main-menu-box">
                                    <div class="main-menu__main-menu-box-inner">
                                        <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                                        <ul class="main-menu__list">
                                            <li
                                                class="current megamenu">
                                                <a href="index.html">Home</a>
                                                
                                            </li>
                                            <li class="dropdown">
                                                <a href="#">Pages</a>
                                                
                                            </li>
                                            <li class="dropdown">
                                                <a href="#">Insurance </a>
                                                
                                            </li>
                                            <li class="dropdown">
                                                <a href="products.html">Shop</a>
                                                
                                            </li>
                                            <li class="dropdown">
                                                <a href="#">News</a>
                                                
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="main-menu__main-menu-box-search-get-quote-btn">
                                        <div class="main-menu__main-menu-box-search">
                                            <a href="#"
                                                class="main-menu__search search-toggler icon-magnifying-glass"></a>
                                            <a href="cart.html"
                                                class="main-menu__cart insur-two-icon-shopping-cart"></a>
                                        </div>
                                        <div class="main-menu__main-menu-box-get-quote-btn-box">
                                            <a href="contact.html"
                                                class="thm-btn main-menu__main-menu-box-get-quote-btn">Get a Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="main-menu__right">
                                <div class="main-menu__call">
                                    <div class="main-menu__call-icon">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div class="main-menu__call-content">
                                        <a href="tel:9200368090">+92 (003) 68-090</a>
                                        <p>Call to Our Experts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div class="stricky-header stricked-menu main-menu">
            <div class="sticky-header__content"></div>
        </div>
        <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>

        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

            <div class="logo-box">
                <a href="index.html" aria-label="logo image"><img src="/img/logo_ipsum.svg" alt=""/></a>
            </div>

            <div class="mobile-nav__container"></div>

            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:needhelp@packageName__.com">needhelp@whycespace.com</a>
                </li>
                <li>
                    <i class="fa fa-phone-alt"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul>
            <div class="mobile-nav__top">
                <div class="mobile-nav__social">
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-facebook-square"></a>
                    <a href="#" class="fab fa-pinterest-p"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div>
            </div>



        </div>

    </div>


    
    </div>
  )
}

export default Header