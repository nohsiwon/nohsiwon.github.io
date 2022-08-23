$(function () {

    $("#my").click(function () {
        $(".myBox").fadeToggle("fast")
    })

    // ---------------myBox---------------

    if ($(window).width() < 1024) {
        $("#lnb").click(function () {
            $(".lnbBox").fadeToggle("fast")
        })
    }

    // --------------lnbBox---------------

    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: 50
    });

    // ------------lnbAccordion------------

    $('.title').click(function () {
        $('.title').removeClass('active')
        $(this).addClass('active')
    });

    // ----------lnbAccordionTitle---------

    $('.mainVisual').slick({
        autoplaySpeed: 3000, autoplay: true, prevArrow: $('.visualPrev'),
        nextArrow: $('.visualNext'), dots: true
    });

    // ---------mainVisualSlide------------

    $('.small').slick({
        arrows: true, prevArrow: $('.smallPrev'),
        nextArrow: $('.smallNext'), dots: true
    })

    // ------------popularSlide------------

    $('.po1').click(function () {
        $('.po').removeClass('imgon')
        $(this).addClass('imgon')
        $('.text').removeClass('texton')
        $(this).children().addClass('texton')

        $('.big .img').finish().fadeOut(500)
        $('.big .img1').delay(500).fadeIn(1000)

        $('.sub').finish().fadeOut(500)
        $('.sub1').delay(500).fadeIn(1000)

        $('.price').finish().fadeOut(500)
        $('.price1').delay(500).fadeIn(1000)

        $('.choice').finish().fadeOut(500)
        $('.po1 .choice').delay(500).fadeIn(1000)
    })

    $('.po2').click(function () {
        $('.po').removeClass('imgon')
        $(this).addClass('imgon')
        $('.text').removeClass('texton')
        $(this).children().addClass('texton')

        $('.big .img').finish().fadeOut(500)
        $('.big .img2').delay(500).fadeIn(1000)

        $('.sub').finish().fadeOut(500)
        $('.sub2').delay(500).fadeIn(1000)

        $('.price').finish().fadeOut(500)
        $('.price2').delay(500).fadeIn(1000)

        $('.choice').finish().fadeOut(500)
        $('.po2 .choice').delay(500).fadeIn(1000)
    })

    $('.po3').click(function () {
        $('.po').removeClass('imgon')
        $(this).addClass('imgon')
        $('.text').removeClass('texton')
        $(this).children().addClass('texton')

        $('.big .img').finish().fadeOut(500)
        $('.big .img3').delay(500).fadeIn(1000)

        $('.sub').finish().fadeOut(500)
        $('.sub3').delay(500).fadeIn(1000)

        $('.price').finish().fadeOut(500)
        $('.price3').delay(500).fadeIn(1000)

        $('.choice').finish().fadeOut(500)
        $('.po3 .choice').delay(500).fadeIn(1000)
    })

    $('.po4').click(function () {
        $('.po').removeClass('imgon')
        $(this).addClass('imgon')
        $('.text').removeClass('texton')
        $(this).children().addClass('texton')

        $('.big .img').finish().fadeOut(500)
        $('.big .img4').delay(500).fadeIn(1000)

        $('.sub').finish().fadeOut(500)
        $('.sub4').delay(500).fadeIn(1000)

        $('.price').finish().fadeOut(500)
        $('.price4').delay(500).fadeIn(1000)

        $('.choice').finish().fadeOut(500)
        $('.po4 .choice').delay(500).fadeIn(1000)
    })

    $('.po5').click(function () {
        $('.po').removeClass('imgon')
        $(this).addClass('imgon')
        $('.text').removeClass('texton')
        $(this).children().addClass('texton')

        $('.big .img').finish().fadeOut(500)
        $('.big .img5').delay(500).fadeIn(1000)

        $('.sub').finish().fadeOut(500)
        $('.sub5').delay(500).fadeIn(1000)

        $('.price').finish().fadeOut(500)
        $('.price5').delay(500).fadeIn(1000)

        $('.choice').finish().fadeOut(500)
        $('.po5 .choice').delay(500).fadeIn(1000)
    })

    $('.po6').click(function () {
        $('.po').removeClass('imgon')
        $(this).addClass('imgon')
        $('.text').removeClass('texton')
        $(this).children().addClass('texton')

        $('.big .img').finish().fadeOut(500)
        $('.big .img6').delay(500).fadeIn(1000)

        $('.sub').finish().fadeOut(500)
        $('.sub6').delay(500).fadeIn(1000)

        $('.price').finish().fadeOut(500)
        $('.price6').delay(500).fadeIn(1000)

        $('.choice').finish().fadeOut(500)
        $('.po6 .choice').delay(500).fadeIn(1000)
    })

    $('.po7').click(function () {
        $('.po').removeClass('imgon')
        $(this).addClass('imgon')
        $('.text').removeClass('texton')
        $(this).children().addClass('texton')

        $('.big .img').finish().fadeOut(500)
        $('.big .img7').delay(500).fadeIn(1000)

        $('.sub').finish().fadeOut(500)
        $('.sub7').delay(500).fadeIn(1000)

        $('.price').finish().fadeOut(500)
        $('.price7').delay(500).fadeIn(1000)

        $('.choice').finish().fadeOut(500)
        $('.po7 .choice').delay(500).fadeIn(1000)
    })

    $('.po8').click(function () {
        $('.po').removeClass('imgon')
        $(this).addClass('imgon')
        $('.text').removeClass('texton')
        $(this).children().addClass('texton')

        $('.big .img').finish().fadeOut(500)
        $('.big .img8').delay(500).fadeIn(1000)

        $('.sub').finish().fadeOut(500)
        $('.sub8').delay(500).fadeIn(1000)

        $('.price').finish().fadeOut(500)
        $('.price8').delay(500).fadeIn(1000)

        $('.choice').finish().fadeOut(500)
        $('.po8 .choice').delay(500).fadeIn(1000)
    })

    // -----------popularEvent------------

    $('.slide').slick({
        autoplaySpeed: 3000, autoplay: true, slidesToShow: 3,
        prevArrow: $('.salePrev'), nextArrow: $('.saleNext'), dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    // ------------saleBoxSlide-----------

    $(function travel() {
        if ($(window).width() < 1024) {
            $(".b1").animate({ "opacity": "1" }, 2000, function () {
                $(".b1").animate({ "opacity": "0" }, 2000, function () {
                    $(".b2").animate({ "opacity": "1" }, 2000, function () {
                        $(".b2").animate({ "opacity": "0" }, 2000, function () {
                            $(".b3").animate({ "opacity": "1" }, 2000, function () {
                                $(".b3").animate({ "opacity": "0" }, 2000, function () {
                                    $(".b4").animate({ "opacity": "1" }, 2000, function () {
                                        $(".b4").animate({ "opacity": "0" }, 2000, travel)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    })

    // -----------travelBoxColor-----------

    $(function category() {
        if ($(window).width() < 1024) {
            $(".p1").animate({ "background-color": "#FEFFD8" }, 2000, function () {
                $(".p1").animate({ "background-color": "white" }, 2000, function () {
                    $(".p2").animate({ "background-color": "#FEFFD8" }, 2000, function () {
                        $(".p2").animate({ "background-color": "white" }, 2000, function () {
                            $(".p3").animate({ "background-color": "#FEFFD8" }, 2000, function () {
                                $(".p3").animate({ "background-color": "white" }, 2000, function () {
                                    $(".p4").animate({ "background-color": "#FEFFD8" }, 2000, function () {
                                        $(".p4").animate({ "background-color": "white" }, 2000, category)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    })

    // -------categoryBoxColor-----------

    $('.top').click(function () {

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000)
    });

    // --------------topBtn----------------

});//function