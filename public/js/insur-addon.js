(function ($) {
    "use strict";

    var WidgetDefaultHandler = function ($scope) {

        if ($scope.find('select.nice-select').length) {
            $scope.find('select.nice-select').niceSelect();
        }
        if ($scope.find(".wow").length) {
            var wow = new WOW({
                boxClass: "wow", // animated element css class (default is wow)
                animateClass: "animated", // animation css class (default is animated)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        if ($scope.find(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
                e.preventDefault();
                var target = $($(this).attr("data-tab"));

                if ($(target).is(":visible")) {
                    return false;
                } else {
                    target
                        .parents(".tabs-box")
                        .find(".tab-buttons")
                        .find(".tab-btn")
                        .removeClass("active-btn");
                    $(this).addClass("active-btn");
                    target
                        .parents(".tabs-box")
                        .find(".tabs-content")
                        .find(".tab")
                        .fadeOut(0);
                    target
                        .parents(".tabs-box")
                        .find(".tabs-content")
                        .find(".tab")
                        .removeClass("active-tab");
                    $(target).fadeIn(300);
                    $(target).addClass("active-tab");
                }
            });
        }


        if ($scope.find(".circle-progress").length) {
            $(".circle-progress").appear(function () {
                let circleProgress = $(".circle-progress");
                circleProgress.each(function () {
                    let progress = $(this);
                    let progressOptions = progress.data("options");
                    progress.circleProgress(progressOptions);
                });
            });
        }

        // News Two Carousel
        if ($scope.find(".blog-two__carousel").length) {
            var blogCarousel = $(".blog-two__carousel");
            var nextBtn = $(".blog-two__carousel__custom-nav .left-btn");
            var prevBtn = $(".blog-two__carousel__custom-nav .right-btn");
            blogCarousel.owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                dots: false,
                autoplayTimeout: 10000,
                navText: [
                    '<span class="icon-left-arrow"></span>',
                    '<span class="icon-right-arrow"></span>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    992: {
                        items: 3
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
            nextBtn.on("click", function (e) {
                e.preventDefault();
                blogCarousel.trigger("next.owl.carousel", [500]);
            });
            prevBtn.on("click", function (e) {
                e.preventDefault();
                blogCarousel.trigger("prev.owl.carousel", [500]);
            });
        }

        if ($scope.find(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,

                fixedContentPos: false
            });
        }

        if ($scope.find(".img-popup").length) {
            var groups = {};
            $(".img-popup").each(function () {
                var id = parseInt($(this).attr("data-group"), 10);

                if (!groups[id]) {
                    groups[id] = [];
                }

                groups[id].push(this);
            });

            $.each(groups, function () {
                $(this).magnificPopup({
                    type: "image",
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    gallery: {
                        enabled: true
                    }
                });
            });
        }

        // Popular Causes Progress Bar
        if ($scope.find(".count-bar").length) {
            $(".count-bar").appear(
                function () {
                    var el = $(this);
                    var percent = el.data("percent");
                    $(el).css("width", percent).addClass("counted");
                }, {
                    accY: -50
                }
            );
        }

        //Fact Counter + Text Count
        if ($scope.find(".count-box").length) {
            $(".count-box").appear(
                function () {
                    var $t = $(this),
                        n = $t.find(".count-text").attr("data-stop"),
                        r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                    if (!$t.hasClass("counted")) {
                        $t.addClass("counted");
                        $({
                            countNum: $t.find(".count-text").text()
                        }).animate({
                            countNum: n
                        }, {
                            duration: r,
                            easing: "linear",
                            step: function () {
                                $t.find(".count-text").text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $t.find(".count-text").text(this.countNum);
                            }
                        });
                    }
                }, {
                    accY: 0
                }
            );
        }

        //Jquery Knob animation
        if ($scope.find(".dial").length) {
            $(".dial").appear(
                function () {
                    var elm = $(this);
                    var color = elm.attr("data-fgColor");
                    var perc = elm.attr("value");
                    var thickness = elm.attr("data-thickness");

                    elm.knob({
                        value: 0,
                        min: 0,
                        max: 100,
                        skin: "tron",
                        readOnly: true,
                        thickness: thickness,
                        dynamicDraw: true,
                        displayInput: false
                    });

                    $({
                        value: 0
                    }).animate({
                        value: perc
                    }, {
                        duration: 2000,
                        easing: "swing",
                        progress: function () {
                            elm.val(Math.ceil(this.value)).trigger("change");
                        }
                    });
                }, {
                    accY: 0
                }
            );
        }

        if ($scope.find(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
                $(this).appear(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            });
        }

        let thmSwiperSliders = $scope.find(".thm-swiper__slider");
        if (thmSwiperSliders.length) {
            thmSwiperSliders.each(function () {
                let elm = $(this);
                let options = elm.data('swiper-options');
                let thmSwiperSlider = new Swiper(elm, "object" === typeof options ? options : JSON.parse(options));
            });
        }

        let thmOwlCarousels = $scope.find(".thm-owl__carousel");
        if (thmOwlCarousels.length) {
            thmOwlCarousels.each(function () {
                let elm = $(this);
                let options = elm.data('owl-options');
                let thmOwlCarousel = elm.owlCarousel("object" === typeof options ? options : JSON.parse(options));
            });
        }

        let thmOwlNavCarousels = $scope.find(".thm-owl__carousel--custom-nav");
        if (thmOwlNavCarousels.length) {
            thmOwlNavCarousels.each(function () {
                let elm = $(this);
                let owlNavPrev = elm.data('owl-nav-prev');
                let owlNavNext = elm.data('owl-nav-next');
                $(owlNavPrev).on("click", function (e) {
                    elm.trigger('prev.owl.carousel');
                    e.preventDefault();
                })

                $(owlNavNext).on("click", function (e) {
                    elm.trigger('next.owl.carousel');
                    e.preventDefault();
                })
            });
        }

        // Accrodion
        if ($scope.find(".accrodion-grp").length) {
            var accrodionGrp = $(".accrodion-grp");
            accrodionGrp.each(function () {
                var accrodionName = $(this).data("grp-name");
                var Self = $(this);
                var accordion = Self.find(".accrodion");
                Self.addClass(accrodionName);
                Self.find(".accrodion .accrodion-content").hide();
                Self.find(".accrodion.active").find(".accrodion-content").show();
                accordion.each(function () {
                    $(this)
                        .find(".accrodion-title")
                        .on("click", function () {
                            if ($(this).parent().hasClass("active") === false) {
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .removeClass("active");
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .find(".accrodion-content")
                                    .slideUp();
                                $(this).parent().addClass("active");
                                $(this).parent().find(".accrodion-content").slideDown();
                            }
                        });
                });
            });
        }

        if ($scope.find(".listing-details__contact-info-phone").length) {
            $(".listing-details__contact-info-phone").on("click", function (e) {
                e.preventDefault();
                var textElement = $(this).find(".text h5");
                var mainText = textElement.data("number");
                var toggleText = textElement.data("toggle-number");
                if (textElement.text() == mainText) {
                    textElement.text(toggleText);
                } else {
                    textElement.text(mainText);
                }
            });
        }


        if ($scope.find(".listing-top__map-show-hide").length) {
            $(".listing-top__map-show-hide").on("click", function () {
                $(this).toggleClass("hidden");
                var textElement = $(this).find(".listing-top__map-show-hide-text span");
                if (textElement.text() == textElement.data("text")) {
                    textElement.text(textElement.data("toggle-text"));
                } else {
                    textElement.text(textElement.data("text"));
                }
                $(".listing__map").toggleClass("hidden");
                $(".listing__content").toggleClass("hidden");
            });
        }



        if ($scope.find(".banner-bg-slide").length) {
            $(".banner-bg-slide").each(function () {
                var Self = $(this);
                var bgSlideOptions = Self.data("options");
                var bannerTwoSlides = Self.vegas(bgSlideOptions);
            });
        }

        let thmOwlRangeCarousels = $(".thm-owl__carousel--range");
        if (thmOwlRangeCarousels.length) {
            thmOwlRangeCarousels.each(function () {
                let elm = $(this);
                let options = elm.data("owl-options");
                let range = elm.parent().find('.thm-owl__carousel--range__input');


                elm.on('initialized.owl.carousel', function (event) {
                    let itemCount = event.item.count;
                    let size = event.page.size;
                    let dragLength = 100 / (itemCount / size);
                    range.find('input').ionRangeSlider({
                        type: "single",
                        min: size,
                        max: itemCount - (size - 1),
                        keyboard: true,
                        step: 1,
                        onChange: function (data) {
                            let owlTo = data.from - 1;
                            elm.trigger('to.owl.carousel', [owlTo, 500, true]);
                        }
                    });


                    range.find('.irs-bar').css('width', dragLength + "%")
                    range.find('.irs-handle.single').css('left', dragLength + "%")
                    range.find('.irs-single').css('left', dragLength + "%")
                    // range.find('.irs-handle.single').css('width', dragLength + "%")
                });


                elm.owlCarousel(
                    "object" === typeof options ? options : JSON.parse(options)
                );

                elm.on('changed.owl.carousel', function (event) {
                    var itemCount = event.item.count;
                    var size = event.page.size;
                    var curItem = event.item.index + 1;
                    var dragLength = 100 / (itemCount / curItem);
                    range.find("input").data("ionRangeSlider").update({
                        from: curItem
                    });
                    range.find('.irs-bar').css('width', dragLength + "%");
                    range.find('.irs-handle.single').css('left', dragLength + "%");
                    range.find('.irs-single').css('left', dragLength + "%");
                    // range.find('.irs-handle.single').css('width', dragLength + "%");
                });

                elm.on('resized.owl.carousel', function (event) {
                    var itemCount = event.item.count;
                    var size = event.page.size;
                    var curItem = event.item.index + 1;
                    var dragLength = 100 / (itemCount / curItem);
                    range.find("input").data("ionRangeSlider").update({
                        max: itemCount - (size - 1),
                        from: curItem
                    });
                    range.find('.irs-bar').css('width', dragLength + "%");
                    range.find('.irs-handle.single').css('left', dragLength + "%");
                    range.find('.irs-single').css('left', dragLength + "%");
                    // range.find('.irs-handle.single').css('width', dragLength + "%");
                });

            });
        }

    };


    var WidgetTeamHandler = function ($scope) {
        // Team One Carousel
        if ($scope.find(".team-one__carousel").length) {
            $(".team-one__carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                dots: true,
                autoplayTimeout: 10000,
                navText: [
                    '<span class="icon-left-arrow"></span>',
                    '<span class="icon-right-arrow"></span>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }
    };

    var WidgetPriceHandler = function ($scope) {
        if ($scope.find(".pricing-tabs").length) {
            //Pricing Tabs
            if ($(".pricing-tabs").length) {
                $(".pricing-tabs .tab-btns .tab-btn").on("click", function (e) {
                    e.preventDefault();
                    var target = $($(this).attr("data-tab"));

                    if ($(target).hasClass("actve-tab")) {
                        return false;
                    } else {
                        $(".pricing-tabs .tab-btns .tab-btn").removeClass("active-btn");
                        $(this).addClass("active-btn");
                        $(".pricing-tabs .pr-content .pr-tab").removeClass("active-tab");
                        $(target).addClass("active-tab");
                    }
                });
            }
        }
    };


    var WidgetPortfolioHandler = function ($scope) {
        // ===Portfolio===
        if ($scope.find(".masonary-layout").length) {
            $(".masonary-layout").isotope({
                layoutMode: "masonry"
            });
        }

        if ($scope.find(".post-filter").length) {
            $(".post-filter li")
                .children(".filter-text")
                .on("click", function () {
                    var Self = $(this);
                    var selector = Self.parent().attr("data-filter");
                    $(".post-filter li").removeClass("active");
                    Self.parent().addClass("active");
                    $(".filter-layout").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: "linear",
                            queue: false
                        }
                    });
                    return false;
                });
        }

        if ($(".post-filter.has-dynamic-filters-counter").length) {
            // var allItem = $('.single-filter-item').length;
            var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
                "li"
            );
            activeFilterItem.each(function () {
                var filterElement = $(this).data("filter");
                var count = $(".filter-layout").find(filterElement).length;
                $(this)
                    .children(".filter-text")
                    .append('<span class="count">(' + count + ")</span>");
            });
        }

        // Project Two Carousel
        if ($scope.find(".project-two__carousel").length) {
            $(".project-two__carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                dots: true,
                autoplayTimeout: 10000,
                navText: [
                    '<span class="icon-left-arrow"></span>',
                    '<span class="icon-right-arrow"></span>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }
    };

    // mailchimp form
    if ($(".mc-form").length) {
        $(".mc-form").each(function () {
            var Self = $(this);
            var mcURL = Self.data("url");
            var mcResp = Self.parent().find(".mc-form__response");

            Self.ajaxChimp({
                url: mcURL,
                callback: function (resp) {
                    // appending response
                    mcResp.append(function () {
                        return '<p class="mc-message">' + resp.msg + "</p>";
                    });
                    // making things based on response
                    if (resp.result === "success") {
                        // Do stuff
                        Self.removeClass("errored").addClass("successed");
                        mcResp.removeClass("errored").addClass("successed");
                        Self.find("input").val("");

                        mcResp.find("p").fadeOut(10000);
                    }
                    if (resp.result === "error") {
                        Self.removeClass("successed").addClass("errored");
                        mcResp.removeClass("successed").addClass("errored");
                        Self.find("input").val("");

                        mcResp.find("p").fadeOut(10000);
                    }
                }
            });
        });
    }

    var WidgetContactHandler = function ($scope) {
        if ($(".get-insurance__progress-range").length) {
            $(".get-insurance__progress-range").each(function () {
                let balanceTag = $(this).find(".get-insurance__balance span");
                let balanceInput = $(this).find(".get-insurance__balance__input");
                $(this).find(".balance-range-slider").ionRangeSlider({
                    onStart: function (data) {
                        balanceTag.html(data.from);
                        balanceInput.prop("value", data.from);
                    },
                    onChange: function (data) {
                        balanceTag.html(data.from);
                        balanceInput.prop("value", data.from);
                    }
                });
            });
        }

        if ($(".range-slider-price").length) {
            var priceRange = document.getElementById("range-slider-price");

            noUiSlider.create(priceRange, {
                start: [30, 150],
                limit: 200,
                behaviour: "drag",
                connect: true,
                range: {
                    min: 10,
                    max: 200
                }
            });

            var limitFieldMin = document.getElementById("min-value-rangeslider");
            var limitFieldMax = document.getElementById("max-value-rangeslider");

            priceRange.noUiSlider.on("update", function (values, handle) {
                (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
            });
        }
    };



    //elementor front start
    $(window).on("elementor/frontend/init", function () {
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/widget",
            WidgetDefaultHandler
        );


        elementorFrontend.hooks.addAction(
            "frontend/element_ready/insur-team.default",
            WidgetTeamHandler
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/insur-pricing.default",
            WidgetPriceHandler
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/insur-portfolio.default",
            WidgetPortfolioHandler
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/insur-contact-form.default",
            WidgetContactHandler
        );
    });

    // login
    $("#insur-login").submit(function (event) {

        event.preventDefault();

        var login = 'action=signup_paragon&param=login&' + $(this).serialize();
        $.ajax({
            type: "POST",
            url: insur_login_object.ajaxurl,
            data: login,
            beforeSend: function () {
                // setting a timeout
                $(".login-result").addClass('loading');
            },
            success: function (data) {
                $(".login-result").removeClass('loading');
                if (data.status == 2) {
                    $(".login-result").removeClass('alert alert-warning');
                    $(".login-result").html(data.message).addClass('alert alert-success');
                    window.location.href = insur_login_object.login_redirect_url;
                } else if (data.status == 1) {
                    $(".login-result").html(data.message).addClass('alert alert-warning');
                } else {
                    $(".login-result").html(insur_login_object.message).addClass('alert alert-warning');
                }
            }
        });
    }); //end login


    // register
    $("#insur-registration").submit(function (event) {

        event.preventDefault();

        var signupForm = 'action=signup_paragon&param=register&' + $(this).serialize();
        $.ajax({
            type: "POST",
            url: insur_login_object.ajaxurl,
            data: signupForm,
            beforeSend: function () {
                // setting a timeout
                $(".registration-result").addClass('loading');
            },
            success: function (data) {
                $(".registration-result").removeClass('loading');
                if (data.status == 2) {
                    $(".registration-result").removeClass('alert alert-warning');
                    $(".registration-result").html(data.message).addClass('alert alert-success');
                    window.location.href = insur_login_object.registration_redirect_url;
                } else {
                    $(".registration-result").html(data.message).addClass('alert alert-warning');
                }
            }
        });
    }); //end register

    if ($(".is-new-menu").length) {
        let isNewMenuLink = $(".is-new-menu");
        isNewMenuLink.each(function () {
            let self = $(this);
            self.children("a").prepend(function () {
                return "<span>NEW</span>";
            });
        });
    }

})(jQuery);