document.addEventListener('DOMContentLoaded', () => {

    let hoverShop = document.querySelectorAll('.hoverShop')
    let hoverShopOff = document.querySelectorAll('.hoverShopOff')
    let hoverShopOn = document.querySelectorAll('.hoverShopOn')
    let hoverHeartOff = document.querySelectorAll('.hoverHeartOff')
    let hoverHeartOn = document.querySelectorAll('.hoverHeartOn')

    // hoverShop

    let rank = document.querySelectorAll('.rank')
    let productImgBox = document.querySelectorAll('.productImgBox')
    let rankImg = document.querySelectorAll('.rankImg')

    //rankBox

    let header = document.querySelector('.header')
    let all = document.querySelector('.all')
    let fullDownMenuBox = document.querySelector('.fullDownMenuBox')
    let gnb = document.querySelector('.gnb')

    //header

    let searchBack = document.querySelector('.searchBack')
    let searchInput = document.querySelector('.searchInput')
    let searchBtn = document.querySelector('.searchBtn')

    //headerSearch

    let shoppingBox = document.querySelector('.shoppingBox')
    let shoppingBtn = document.querySelector('.shoppingBtn')
    let closeBtn = document.querySelector('.closeBtn')
    let opacity = 0

    //headerShopping

    let fixedImg = document.querySelectorAll('.fixedImg')
    let fixedOff = document.querySelectorAll('.fixedOff')
    let fixedOn = document.querySelectorAll('.fixedOn')

    //fixedHover

    let fixMove = document.querySelectorAll('.fixMove')

    //fixedMove

    for (let shop = 0; shop < hoverShop.length; shop++) {
        hoverShopOff[shop].addEventListener('click', () => {
            hoverShopOff[shop].style.display = 'none'
            hoverShopOn[shop].style.display = 'block'
        })
        hoverShopOn[shop].addEventListener('click', () => {
            hoverShopOff[shop].style.display = 'block'
            hoverShopOn[shop].style.display = 'none'
        })
        hoverHeartOff[shop].addEventListener('click', () => {
            hoverHeartOff[shop].style.display = 'none'
            hoverHeartOn[shop].style.display = 'block'
        })
        hoverHeartOn[shop].addEventListener('click', () => {
            hoverHeartOff[shop].style.display = 'block'
            hoverHeartOn[shop].style.display = 'none'
        })
    }

    for (let r = 0; r < rank.length; r++) {
        rank[r].addEventListener('mouseover', () => {
            for (let pi = 0; pi < productImgBox.length; pi++) {
                productImgBox[pi].style.height = '0px'
                productImgBox[pi].style.marginTop = '0px'
            }
            productImgBox[r].style.height = '94px'
            productImgBox[r].style.marginTop = '15px'

            for (let ri = 0; ri < rankImg.length; ri++) {
                rankImg[ri].style.display = 'none'
            }
            rankImg[r].style.display = 'flex'
        })
    }

    //hoverShop

    gnb.addEventListener('mouseover', () => {
        fullDownMenuBox.style.height = '350px'
    })
    all.addEventListener('mouseover', () => {
        fullDownMenuBox.style.height = '0px'
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY == 0) {
            header.style.backgroundColor = 'white'
            header.style.color = 'black'
            fullDownMenuBox.style.backgroundColor = 'white'
            searchBack.style.backgroundColor = 'white'
            searchBack.style.color = 'black'
            searchInput.style.backgroundColor = 'white'
            searchInput.style.border = '2px solid black'
            searchInput.style.color = 'black'
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
            header.style.color = 'white'
            fullDownMenuBox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
            searchBack.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
            searchBack.style.color = 'white'
            searchInput.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
            searchInput.style.border = '2px solid white'
            searchInput.style.color = 'white'
        }
    })

    //header

    searchBtn.addEventListener('click', () => {
        searchBack.classList.toggle('searchBackOpen')
        fullDownMenuBox.style.height = '0px'
    })

    //headerSearch

    shoppingBtn.addEventListener('click', function () {
        shoppingBox.style.display = 'block'

        let fadeIn = setInterval(function () {
            if (opacity < 1) {
                shoppingBox.style.opacity = opacity
                opacity += 0.1
            } else {
                clearInterval(fadeIn)
            }
        }, 20)
    })
    closeBtn.addEventListener('click', function () {
        let fadeOut = setInterval(function () {
            if (opacity > 0) {
                shoppingBox.style.opacity = opacity
                opacity -= 0.1
            } else {
                shoppingBox.style.display = 'none'
                clearInterval(fadeOut)
            }
        }, 20)
    })

    //headerShopping

    for (let fixed = 0; fixed < fixedImg.length; fixed++) {
        fixedImg[fixed].addEventListener('mouseover', () => {
            fixedOff[fixed].style.display = 'none'
            fixedOn[fixed].style.display = 'block'
        })
        fixedImg[fixed].addEventListener('mouseout', () => {
            fixedOff[fixed].style.display = 'block'
            fixedOn[fixed].style.display = 'none'
        })
    }

    //fixedHover

    fixedImg[0].addEventListener('click', () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    })

    //fixedMove

    let play = document.querySelector('.play')
    let stop = document.querySelector('.stop')

    const swiper1 = new Swiper('.visualMainBox', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination"
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })

    play.addEventListener('click', () => {
        swiper1.autoplay.start();
        play.style.display = 'none'
        stop.style.display = 'block'
    })
    stop.addEventListener('click', () => {
        swiper1.autoplay.stop();
        stop.style.display = 'none'
        play.style.display = 'block'
    })

    const swiper2 = new Swiper('.sunBox', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })
    const swiper3 = new Swiper('.glassBox', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })

    let move1 = document.querySelector('.move1')
    let move2 = document.querySelector('.move2')
    let move3 = document.querySelector('.move3')
    let move4 = document.querySelector('.move4')
    let move6 = document.querySelector('.move6')
    let move7 = document.querySelector('.move7')
    let move8 = document.querySelector('.move8')
    let move9 = document.querySelector('.move9')

    window.addEventListener('load', () => {
        let movething = -252
        let i = 0

        let dd = setInterval(function () {
            i++

            if (i == 1) {
                move1.style.right = movething + 'px'
            }
            if (i == 2) {
                move2.style.right = movething + 'px'
            }
            if (i == 3) {
                move3.style.bottom = movething + 'px'
            }
            if (i == 4) {
                move6.style.bottom = movething + 'px'
            }
            if (i == 5) {
                move9.style.left = movething + 'px'
            }
            if (i == 6) {
                move8.style.left = movething + 'px'
            }
            if (i == 7) {
                move7.style.top = movething + 'px'
            }
            if (i == 8) {
                move4.style.top = movething + 'px'
                movething += -252
                i = 0
            }
            if (movething == -2016) {
                movething = 0
            }

        }, 1000)
    })
})