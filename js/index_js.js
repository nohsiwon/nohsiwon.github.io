document.addEventListener('DOMContentLoaded', function () {
    const intro = document.querySelector('.intro')
    const sun = document.querySelector('.sun')
    const cloud1 = document.querySelector('.cloud_01')
    const cloud2 = document.querySelector('.cloud_02')
    const cloud3 = document.querySelector('.cloud_03')
    window.addEventListener('load', () => {
        setTimeout(function () {
            introstart()
            introstop()
            springstart()
            springstop()
            summerstart()
            summerstop()
            fallstart()
            fallstop()
            winterstart()
            winterstop()
        }, 500)
    })
    window.addEventListener('click', () => {
        setTimeout(function () {
            introstart()
            introstop()
            springstart()
            springstop()
            summerstart()
            summerstop()
            fallstart()
            fallstop()
            winterstart()
            winterstop()
        }, 500)
    })
    window.addEventListener('wheel', () => {
        setTimeout(function () {
            introstart()
            introstop()
            springstart()
            springstop()
            summerstart()
            summerstop()
            fallstart()
            fallstop()
            winterstart()
            winterstop()
        }, 500)
    })

    let introOnce = 0
    let introcount = 0
    let introfinish = 4

    function introstart() {
        if (introfinish == 4) {
            if (intro.classList.contains('active')) {
                introOnce += 1
                if (introOnce == 1) {
                    introcount = 0
                    sunScale()
                    cloudMove1()
                    cloudMove2()
                    cloudMove3()
                }
            }
        }
    }

    function introstop() {
        if (!intro.classList.contains('active')) {
            introcount = 1
            introOnce = 0
        }

    }


    function sunScale() {
        if (introcount == 0) {
            introfinish = 0
            sun.classList.add('sunScale')
            setTimeout(function () {
                sun.classList.remove('sunScale')
                setTimeout(function () {
                    introfinish += 1
                    sunScale()
                    introauto()
                }, 2000)
            }, 2000)
        }
    }

    function cloudMove1() {
        if (introcount == 0) {
            introfinish = 0
            cloud1.classList.add('cloudMove1')
            setTimeout(function () {
                cloud1.classList.remove('cloudMove1')
                setTimeout(function () {
                    introfinish += 1
                    cloudMove1()
                    introauto()
                }, 3000)
            }, 3000)
        }
    }
    function cloudMove2() {
        if (introcount == 0) {
            introfinish = 0
            cloud2.classList.add('cloudMove2')
            setTimeout(function () {
                cloud2.classList.remove('cloudMove2')
                setTimeout(function () {
                    introfinish += 1
                    cloudMove2()
                    introauto()
                }, 2000)
            }, 2000)
        }
    }

    function cloudMove3() {
        if (introcount == 0) {
            introfinish = 0
            cloud3.classList.add('cloudMove3')
            setTimeout(function () {
                cloud3.classList.remove('cloudMove3')
                setTimeout(function () {
                    introfinish += 1
                    cloudMove3()
                    introauto()
                }, 4000)
            }, 4000)
        }
    }

    function introauto() {
        if (introfinish == 4) {
            introstart()
        }
    }
    // intro

    const spring = document.querySelector('.spring')
    const springC = document.querySelector('.spring_c')
    const springF1 = document.querySelector('.spring_f01')
    const springF2 = document.querySelector('.spring_f02')
    const springF3 = document.querySelector('.spring_f03')
    const springF4 = document.querySelector('.spring_f04')
    const springF5 = document.querySelector('.spring_f05')
    const springF6 = document.querySelector('.spring_f06')
    const springF7 = document.querySelector('.spring_f07')
    const springF8 = document.querySelector('.spring_f08')
    const springF9 = document.querySelector('.spring_f09')
    const springF10 = document.querySelector('.spring_f10')

    let springOnce = 0
    let springcount = 0
    let springfinish = 11

    function springstart() {
        if (springfinish == 11) {
            if (spring.classList.contains('active')) {
                springOnce += 1
                if (springOnce == 1) {
                    springcount = 0
                    springCMove()
                    springFMove1()
                    springFMove2()
                    springFMove3()
                    springFMove4()
                    springFMove5()
                    springFMove6()
                    springFMove7()
                    springFMove8()
                    springFMove9()
                    springFMove10()
                }
            }
        }
    }

    function springstop() {
        if (!spring.classList.contains('active')) {
            springcount = 1
            springOnce = 0
        }
    }

    function springCMove() {
        if (springcount == 0) {
            springfinish = 0
            springC.classList.add('springMove')
            springC.classList.remove('rotate')
            setTimeout(function () {
                springC.classList.remove('springMove')
                springC.classList.add('rotate')
                setTimeout(function () {
                    springfinish += 1
                    springCMove()
                    springauto()
                }, 9000)
            }, 7000)
        }
    }


    function springFMove1() {
        if (springcount == 0) {
            springfinish = 0
            springF1.classList.add('springLeft1')
            setTimeout(function () {
                springF1.classList.remove('springLeft1')
                setTimeout(function () {
                    springfinish += 1
                    springFMove1()
                    springauto()
                }, 1000)
            }, 7000)
        }

    }
    function springFMove2() {
        if (springcount == 0) {
            springfinish = 0
            springF2.classList.add('springLeft2')
            setTimeout(function () {
                springF2.classList.remove('springLeft2')
                setTimeout(function () {
                    springfinish += 1
                    springFMove2()
                    springauto()
                }, 1000)
            }, 4000)
        }

    }
    function springFMove3() {
        if (springcount == 0) {
            springfinish = 0
            springF3.classList.add('springLeft3')
            setTimeout(function () {
                springF3.classList.remove('springLeft3')
                setTimeout(function () {
                    springfinish += 1
                    springFMove3()
                    springauto()
                }, 1000)
            }, 12000)
        }

    }
    function springFMove4() {
        if (springcount == 0) {
            springfinish = 0
            springF4.classList.add('springLeft4')
            setTimeout(function () {
                springF4.classList.remove('springLeft4')
                setTimeout(function () {
                    springfinish += 1
                    springFMove4()
                    springauto()
                }, 1000)
            }, 15000)
        }

    }
    function springFMove5() {
        if (springcount == 0) {
            springfinish = 0
            springF5.classList.add('springLeft5')
            setTimeout(function () {
                springF5.classList.remove('springLeft5')
                setTimeout(function () {
                    springfinish += 1
                    springFMove5()
                    springauto()
                }, 1000)
            }, 9000)

        }
    }
    function springFMove6() {
        if (springcount == 0) {
            springfinish = 0
            springF6.classList.add('springLeft6')
            setTimeout(function () {
                springF6.classList.remove('springLeft6')
                setTimeout(function () {
                    springfinish += 1
                    springFMove6()
                    springauto()
                }, 1000)
            }, 6000)

        }
    }
    function springFMove7() {
        if (springcount == 0) {
            springfinish = 0
            springF7.classList.add('springLeft7')
            setTimeout(function () {
                springF7.classList.remove('springLeft7')
                setTimeout(function () {
                    springfinish += 1
                    springFMove7()
                    springauto()
                }, 1000)
            }, 12000)

        }
    }
    function springFMove8() {
        if (springcount == 0) {
            springfinish = 0
            springF8.classList.add('springLeft8')
            setTimeout(function () {
                springF8.classList.remove('springLeft8')
                setTimeout(function () {
                    springfinish += 1
                    springFMove8()
                    springauto()
                }, 1000)
            }, 7000)

        }
    }
    function springFMove9() {
        if (springcount == 0) {
            springfinish = 0
            springF9.classList.add('springLeft9')
            setTimeout(function () {
                springF9.classList.remove('springLeft9')
                setTimeout(function () {
                    springfinish += 1
                    springFMove9()
                    springauto()
                }, 1000)
            }, 5000)
        }

    }
    function springFMove10() {
        if (springcount == 0) {
            springfinish = 0
            springF10.classList.add('springLeft10')
            setTimeout(function () {
                springF10.classList.remove('springLeft10')
                setTimeout(function () {
                    springfinish += 1
                    springFMove10()
                    springauto()
                }, 1000)
            }, 10000)
        }
    }

    function springauto() {
        if (springfinish == 11) {
            springstart()
        }
    }

    // spring

    const summer = document.querySelector('.summer')
    const summerWater1 = document.querySelectorAll('.water1')
    const summerWater2 = document.querySelectorAll('.water2')
    const summerWater3 = document.querySelectorAll('.water3')
    const summerC1 = document.querySelector('.summer_c1')
    const summerC2 = document.querySelector('.summer_c2')
    const summerC3 = document.querySelector('.summer_c3')
    const waters = document.querySelectorAll('.waters1')

    let summerOnce = 0
    let summercount = 0
    let summerfinish = 12

    function summerstart() {
        if (summerfinish == 12) {
            if (summer.classList.contains('active')) {
                summerOnce += 1
                if (summerOnce == 1) {
                    summercount = 0
                    summerCMove1()
                    summerCMove2()
                    summerCMove3()
                    waterDrop1()
                    waterDrop2()
                    waterDrop3()
                    watersMove()
                }
            }
        }
    }

    function summerstop() {
        if (!summer.classList.contains('active')) {
            summercount = 1
            summerOnce = 0
        }
    }


    function summerCMove1() {
        if (summercount == 0) {
            summerfinish = 0
            summerC1.classList.add('summerMove1')
            summerC1.classList.remove('rotate1')
            setTimeout(function () {
                summerC1.classList.remove('summerMove1')
                summerC1.classList.add('rotate1')
                setTimeout(function () {
                    summerfinish += 1
                    summerCMove1()
                    summerauto()
                }, 12000)
            }, 11000)
        }
    }

    function summerCMove2() {
        if (summercount == 0) {
            summerfinish = 0
            summerC2.classList.add('summerMove2')
            summerC2.classList.remove('rotate2')
            setTimeout(function () {
                summerC2.classList.remove('summerMove2')
                summerC2.classList.add('rotate2')
                setTimeout(function () {
                    summerfinish += 1
                    summerCMove2()
                    summerauto()
                }, 9000)
            }, 8000)
        }
    }
    function summerCMove3() {
        if (summercount == 0) {
            summerfinish = 0
            summerC3.classList.add('summerMove3')
            summerC3.classList.remove('rotate2')
            setTimeout(function () {
                summerC3.classList.remove('summerMove3')
                summerC3.classList.add('rotate2')
                setTimeout(function () {
                    summerfinish += 1
                    summerCMove3()
                    summerauto()
                }, 14000)
            }, 13000)
        }
    }

    function waterDrop1() {
        if (summercount == 0) {
            summerfinish = 0
            for (let i = 0; i < summerWater1.length; i++) {
                summerWater1[i].classList.add('waterUp1')
                setTimeout(function () {
                    summerWater1[i].classList.remove('waterUp1')
                    setTimeout(function () {
                        summerfinish += 1
                        waterDrop1()
                        summerauto()
                    }, 100)
                }, 10000)
            }
        }
    }
    function waterDrop2() {
        if (summercount == 0) {
            summerfinish = 0
            for (let i = 0; i < summerWater2.length; i++) {
                summerWater2[i].classList.add('waterUp2')
                setTimeout(function () {
                    summerWater2[i].classList.remove('waterUp2')
                    setTimeout(function () {
                        summerfinish += 1
                        waterDrop2()
                        summerauto()
                    }, 100)
                }, 7000)
            }
        }
    }
    function waterDrop3() {
        if (summercount == 0) {
            summerfinish = 0
            for (let i = 0; i < summerWater3.length; i++) {
                summerWater3[i].classList.add('waterUp3')
                setTimeout(function () {
                    summerWater3[i].classList.remove('waterUp3')
                    setTimeout(function () {
                        summerfinish += 1
                        waterDrop3()
                        summerauto()
                    }, 100)
                }, 12000)
            }
        }
    }

    function watersMove() {
        for (let i = 0; i < waters.length; i++) {
            waters[i].classList.remove('waters2')
        }
    }


    function summerauto() {
        if (summerfinish == 12) {
            summerstart()
        }
    }

    // summer

    var swiper = new Swiper(".projectSlide", {

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        loop: true
    });

    // fall_slide

    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    const fallC = document.querySelector('.fall_c')

    const fall = document.querySelector('.fall')
    const fall1 = document.querySelector('.fall_1')
    const fall2 = document.querySelector('.fall_2')
    const fall3 = document.querySelector('.fall_3')
    const fall4 = document.querySelector('.fall_4')
    const fall5 = document.querySelector('.fall_5')
    const fall6 = document.querySelector('.fall_6')
    const fall7 = document.querySelector('.fall_7')
    const fall8 = document.querySelector('.fall_8')

    let fallOnce = 0
    let fallcount = 0
    let fallfinish = 8

    function fallstart() {
        if (fallfinish == 8) {
            if (fall.classList.contains('active')) {
                fallOnce += 1
                if (fallOnce == 1) {
                    fallcount = 0
                    letleft1()
                    letleft2()
                    letleft3()
                    letleft4()
                    letleft5()
                    letleft6()
                    letleft7()
                    letleft8()
                }
            }
        }
    }


    function fallstop() {
        if (!fall.classList.contains('active')) {
            fallcount = 1
            fallOnce = 0
        }
    }

    prev.addEventListener('click', () => {
        fallC.classList.add('rotate')
        setTimeout(function () {
            fallC.classList.remove('rotate')
        }, 500)
    })
    next.addEventListener('click', () => {
        fallC.classList.add('rotate2')
        setTimeout(function () {
            fallC.classList.remove('rotate2')
        }, 500)
    })

    function letleft1() {
        if (fallcount == 0) {
            fallfinish = 0
            fall1.classList.add('left1')
            setTimeout(function () {
                letright1()
            }, 6000)
        }
    }
    function letright1() {
        fall1.classList.add('right1')
        setTimeout(function () {
            fall1.classList.remove('left1')
            fall1.classList.remove('right1')
            setTimeout(function () {
                fallfinish += 1
                letleft1()
                fallauto()
            }, 100)
        }, 7000)
    }
    function letleft2() {
        if (fallcount == 0) {
            fallfinish = 0
            fall2.classList.add('left2')
            setTimeout(function () {
                letright2()
            }, 6000)
        }
    }
    function letright2() {
        fall2.classList.add('right2')
        setTimeout(function () {
            fall2.classList.remove('left2')
            fall2.classList.remove('right2')
            setTimeout(function () {
                fallfinish += 1
                letleft2()
                fallauto()
            }, 100)
        }, 6000)
    }
    function letleft3() {
        if (fallcount == 0) {
            fallfinish = 0
            fall3.classList.add('left3')
            setTimeout(function () {
                letright3()
            }, 9000)
        }
    }
    function letright3() {
        fall3.classList.add('right3')
        setTimeout(function () {
            fall3.classList.remove('left3')
            fall3.classList.remove('right3')
            setTimeout(function () {
                fallfinish += 1
                letleft3()
                fallauto()
            }, 100)
        }, 9000)
    }
    function letleft4() {
        if (fallcount == 0) {
            fallfinish = 0
            fall4.classList.add('left4')
            setTimeout(function () {
                letright4()
            }, 3500)
        }
    }
    function letright4() {
        fall4.classList.add('right4')
        setTimeout(function () {
            fall4.classList.remove('left4')
            fall4.classList.remove('right4')
            setTimeout(function () {
                fallfinish += 1
                letleft4()
                fallauto()
            }, 100)
        }, 3500)
    }
    function letleft5() {
        if (fallcount == 0) {
            fallfinish = 0
            fall5.classList.add('left5')
            setTimeout(function () {
                letright5()
            }, 5000)
        }
    }
    function letright5() {
        fall5.classList.add('right5')
        setTimeout(function () {
            fall5.classList.remove('left5')
            fall5.classList.remove('right5')
            setTimeout(function () {
                fallfinish += 1
                letleft5()
                fallauto()
            }, 100)
        }, 5000)
    }
    function letleft6() {
        if (fallcount == 0) {
            fallfinish = 0
            fall6.classList.add('left6')
            setTimeout(function () {
                letright6()
            }, 10000)
        }
    }
    function letright6() {
        fall6.classList.add('right6')
        setTimeout(function () {
            fall6.classList.remove('left6')
            fall6.classList.remove('right6')
            setTimeout(function () {
                fallfinish += 1
                letleft6()
                fallauto()
            }, 100)
        }, 10000)
    }
    function letleft7() {
        if (fallcount == 0) {
            fallfinish = 0
            fall7.classList.add('left7')
            setTimeout(function () {
                letright7()
            }, 3000)
        }
    }
    function letright7() {
        fall7.classList.add('right7')
        setTimeout(function () {
            fall7.classList.remove('left7')
            fall7.classList.remove('right7')
            setTimeout(function () {
                fallfinish += 1
                letleft7()
                fallauto()
            }, 100)
        }, 3000)
    }

    function letleft8() {
        if (fallcount == 0) {
            fallfinish = 0
            fall8.classList.add('left8')
            setTimeout(function () {
                letright8()
            }, 7500)
        }
    }
    function letright8() {
        fall8.classList.add('right8')
        setTimeout(function () {
            fall8.classList.remove('left8')
            fall8.classList.remove('right8')
            setTimeout(function () {
                fallfinish += 1
                letleft8()
                fallauto()
            }, 100)
        }, 7500)
    }

    function fallauto() {
        if (fallfinish == 8) {
            fallstart()
        }
    }

    // fall

    const winter = document.querySelector('.winter')
    const winterC = document.querySelector('.winter_c')
    const winterSnow1 = document.querySelectorAll('.winterSnow1')
    const winterSnow2 = document.querySelectorAll('.winterSnow2')
    const winterSnow3 = document.querySelectorAll('.winterSnow3')
    const up = document.querySelector('.up')

    let winterOnce = 0
    let wintercount = 0
    let winterfinish = 9
    let winterDance = 0

    let upstop = 0
    let upHeight = 0

    function winterstart() {
        if (winterfinish == 9) {
            if (winter.classList.contains('active')) {
                winterOnce += 1
                if (winterOnce == 1) {
                    wintercount = 0
                    snow1()
                    snow2()
                    snow3()
                }
            }
        }
        if (winter.classList.contains('active')) {
            winterDance += 1
            if (winterDance == 1) {
                dance1()
            }
        }
    }



    function winterstop() {
        if (!winter.classList.contains('active')) {
            wintercount = 1
            winterOnce = 0
            winterDance = 0
            upHeight = 0
        }
    }

    function up1() {
        if (upstop == 0) {
            upHeight += 3
            up.style.height = upHeight + 'px'
            if (upHeight >= 30) {
                upstop = 1
            }
        }
    }
    function snow1() {
        if (wintercount == 0) {
            winterfinish = 0
            for (let i = 0; i < winterSnow1.length; i++) {
                winterSnow1[i].classList.add('down1')
                setTimeout(function () {
                    winterSnow1[i].classList.remove('down1')
                    setTimeout(function () {
                        winterfinish += 1
                        snow1()
                        winterauto()
                    }, 100)
                }, 12000)
            }
            setTimeout(function () {
                up1()
            }, 12000)
        }
    }
    function snow2() {
        if (wintercount == 0) {
            winterfinish = 0
            for (let i = 0; i < winterSnow2.length; i++) {
                winterSnow2[i].classList.add('down2')
                setTimeout(function () {
                    winterSnow2[i].classList.remove('down2')
                    setTimeout(function () {
                        winterfinish += 1
                        snow2()
                        winterauto()
                    }, 100)
                }, 7000)
            }
            setTimeout(function () {
                up1()
            }, 7000)
        }
    }
    function snow3() {
        if (wintercount == 0) {
            winterfinish = 0
            for (let i = 0; i < winterSnow3.length; i++) {
                winterSnow3[i].classList.add('down3')
                setTimeout(function () {
                    winterSnow3[i].classList.remove('down3')
                    setTimeout(function () {
                        winterfinish += 1
                        snow3()
                        winterauto()
                    }, 100)
                }, 10000)
            }
            setTimeout(function () {
                up1()
            }, 10000)
        }
    }

    function winterauto() {
        if (winterfinish == 9) {
            winterstart()
        }
    }

    //winter snow down

    function dance1() {
        if (winter.classList.contains('active')) {
            winterC.classList.add('dance')
            setTimeout(() => {
                dance2()
            }, 800)
        }
    }
    function dance2() {
        winterC.classList.remove('dance')
        setTimeout(() => {
            dance1()
        }, 800)
    }

    // winter_c move

})
