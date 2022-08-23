document.addEventListener('DOMContentLoaded', () => {

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

    let more = document.querySelector('.more')
    let de = document.querySelector('.de')
    let img = document.querySelectorAll('.productBox .img')
    let textBox = document.querySelectorAll('.textBox')
    let hover = document.querySelectorAll('.hover')

    let allBtn = document.querySelector('.allBtn')
    let catBtn = document.querySelector('.catBtn')
    let tintBtn = document.querySelector('.tintBtn')
    let circleBtn = document.querySelector('.circleBtn')
    let squareBtn = document.querySelector('.squareBtn')

    let allNav = document.querySelector('.allNav')
    let catNav = document.querySelector('.catNav')
    let tintNav = document.querySelector('.tintNav')
    let circleNav = document.querySelector('.circleNav')
    let squareNav = document.querySelector('.squareNav')
    let navs = document.querySelectorAll('.navs')

    let product = document.querySelectorAll('.product')
    let tint = document.querySelectorAll('.tint')
    let circle = document.querySelectorAll('.circle')
    let square = document.querySelectorAll('.square')
    let cat = document.querySelectorAll('.cat')
    let scroll = document.querySelectorAll('.scroll')

    let open = document.querySelectorAll('.open')
    let close = document.querySelectorAll('.close')
    let btnBox = document.querySelectorAll('.btnBox')

    let color1 = document.querySelectorAll('.color div:nth-child(1)')
    let color2 = document.querySelectorAll('.color div:nth-child(2)')
    let color3 = document.querySelectorAll('.color div:nth-child(3)')
    let color4 = document.querySelectorAll('.color div:nth-child(4)')
    let color5 = document.querySelectorAll('.color div:nth-child(5)')

    let imgs = document.querySelectorAll('.imgs')
    let imgs1 = document.querySelectorAll('.imgs div:nth-child(1)')
    let imgs2 = document.querySelectorAll('.imgs div:nth-child(2)')
    let imgs3 = document.querySelectorAll('.imgs div:nth-child(3)')
    let imgs4 = document.querySelectorAll('.imgs div:nth-child(4)')
    let imgs5 = document.querySelectorAll('.imgs div:nth-child(5)')

    let fixedImg = document.querySelectorAll('.fixedImg')

    let shopOff = document.querySelectorAll('.shopOff')
    let shopOn = document.querySelectorAll('.shopOn')

    let heartOff = document.querySelectorAll('.heartOff')
    let heartOn = document.querySelectorAll('.heartOn')
    let fixedNum = document.querySelector('.fixedNum')
    let h = 0


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

    for (let co1 = 0; co1 < color1.length; co1++) {

        color1[co1].addEventListener('mouseenter', () => {
            imgs1[co1].style.display = 'block'
            imgs2[co1].style.display = 'none'
            imgs3[co1].style.display = 'none'
            imgs4[co1].style.display = 'none'
            imgs5[co1].style.display = 'none'
        })
    }
    for (let co2 = 0; co2 < color2.length; co2++) {
        color2[co2].addEventListener('mouseenter', () => {
            imgs1[co2].style.display = 'none'
            imgs2[co2].style.display = 'block'
            imgs3[co2].style.display = 'none'
            imgs4[co2].style.display = 'none'
            imgs5[co2].style.display = 'none'
        })
    }
    for (let co3 = 0; co3 < color3.length; co3++) {
        color3[co3].addEventListener('mouseenter', () => {
            imgs1[co3].style.display = 'none'
            imgs2[co3].style.display = 'none'
            imgs3[co3].style.display = 'block'
            imgs4[co3].style.display = 'none'
            imgs5[co3].style.display = 'none'
        })
    }
    for (let co4 = 0; co4 < color4.length; co4++) {
        color4[co4].addEventListener('mouseenter', () => {
            imgs1[co4].style.display = 'none'
            imgs2[co4].style.display = 'none'
            imgs3[co4].style.display = 'none'
            imgs4[co4].style.display = 'block'
            imgs5[co4].style.display = 'none'
        })
    }
    for (let co5 = 0; co5 < color5.length; co5++) {
        color5[co5].addEventListener('mouseenter', () => {
            imgs1[co5].style.display = 'none'
            imgs2[co5].style.display = 'none'
            imgs3[co5].style.display = 'none'
            imgs4[co5].style.display = 'none'
            imgs5[co5].style.display = 'block'
        })
    }

    more.addEventListener('click', () => {
        more.style.display = 'none'
        de.style.display = 'block'
        for (let i = 0; i < img.length; i++) {
            textBox[i].style.display = 'none'
            img[i].style.width = '220.6666px'
            img[i].style.height = '220.6666px'
            imgs[i].style.width = '220.6666px'
            imgs[i].style.height = '220.6666px'
            hover[i].style.display = 'block'
        }
    })
    de.addEventListener('click', () => {
        more.style.display = 'block'
        de.style.display = 'none'
        for (let i = 0; i < img.length; i++) {
            textBox[i].style.display = 'flex'
            img[i].style.width = '338px'
            img[i].style.height = '338px'
            imgs[i].style.width = '338px'
            imgs[i].style.height = '338px'
            hover[i].style.display = 'none'
        }
    })

    allBtn.addEventListener('click', () => {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.display = "block"
        }
        let fadeIn = setInterval(function () {
            if (opacity < 1) {
                for (let i = 0; i < scroll.length; i++) {
                    scroll[i].style.opacity = opacity2
                } opacity2 += 0.1
            } else {
                clearInterval(fadeIn)
            }
        }, 50)
        for (let i = 0; i < product.length; i++) {
            product[i].style.display = 'block'
        }
        for (let s = 0; s < scroll.length; s++) {
            scroll[s].style.display = 'none'
        }
        for (let n = 0; n < navs.length; n++) {
            navs[n].style.display = 'none'
        }

        allNav.style.display = 'block'
    })

    catBtn.addEventListener('click', () => {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.display = "block"
        }


        let fadeIn = setInterval(function () {
            if (opacity < 1) {
                for (let i = 0; i < scroll.length; i++) {
                    scroll[i].style.opacity = opacity2
                } opacity2 += 0.1
            } else {
                clearInterval(fadeIn)
            }
        }, 50)
        for (let i = 0; i < product.length; i++) {
            product[i].style.display = 'none'

        }
        for (let s = 0; s < cat.length; s++) {
            cat[s].style.display = 'block'
        }
        for (let n = 0; n < navs.length; n++) {
            navs[n].style.display = 'none'
        }
        catNav.style.display = 'block'
    })
    tintBtn.addEventListener('click', () => {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.display = "block"
        }
        let fadeIn = setInterval(function () {
            if (opacity < 1) {
                for (let i = 0; i < scroll.length; i++) {
                    scroll[i].style.opacity = opacity2
                } opacity2 += 0.1
            } else {
                clearInterval(fadeIn)
            }
        }, 50)
        for (let i = 0; i < product.length; i++) {
            product[i].style.display = 'none'
        }
        for (let s = 0; s < tint.length; s++) {
            tint[s].style.display = 'block'
        }
        for (let n = 0; n < navs.length; n++) {
            navs[n].style.display = 'none'
        }

        tintNav.style.display = 'block'
    })
    circleBtn.addEventListener('click', () => {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.display = "block"
        }
        let fadeIn = setInterval(function () {
            if (opacity < 1) {
                for (let i = 0; i < scroll.length; i++) {
                    scroll[i].style.opacity = opacity2
                } opacity2 += 0.1
            } else {
                clearInterval(fadeIn)
            }
        }, 50)
        for (let i = 0; i < product.length; i++) {
            product[i].style.display = 'none'
        }
        for (let s = 0; s < circle.length; s++) {
            circle[s].style.display = 'block'
        }
        for (let n = 0; n < navs.length; n++) {
            navs[n].style.display = 'none'
        }
        circleNav.style.display = 'block'
    })
    squareBtn.addEventListener('click', () => {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.display = "block"
        }
        let fadeIn = setInterval(function () {
            if (opacity < 1) {
                for (let i = 0; i < scroll.length; i++) {
                    scroll[i].style.opacity = opacity2
                } opacity2 += 0.1
            } else {
                clearInterval(fadeIn)
            }
        }, 50)
        for (let i = 0; i < product.length; i++) {
            product[i].style.display = 'none'
        }
        for (let s = 0; s < square.length; s++) {
            square[s].style.display = 'block'
        }
        for (let n = 0; n < navs.length; n++) {
            navs[n].style.display = 'none'
        }

        squareNav.style.display = 'block'
    })

    let opacity2 = 0

    window.addEventListener('scroll', () => {


        if (window.scrollY > 3000) {
            for (let i = 0; i < scroll.length; i++) {
                scroll[i].style.display = "block"
            }


            let fadeIn = setInterval(function () {
                if (opacity < 1) {
                    for (let i = 0; i < scroll.length; i++) {
                        scroll[i].style.opacity = opacity2
                    } opacity2 += 0.1
                } else {
                    clearInterval(fadeIn)
                }
            }, 50)
        }


        if (document.body.scrollHeight < 3000) {
            if (window.scrollY > 1500) {
                for (let i = 0; i < scroll.length; i++) {
                    scroll[i].style.display = "block"
                }


                let fadeIn = setInterval(function () {
                    if (opacity < 1) {
                        for (let i = 0; i < scroll.length; i++) {
                            scroll[i].style.opacity = opacity2
                        } opacity2 += 0.1
                    } else {
                        clearInterval(fadeIn)
                    }
                }, 50)
            }
        }



    })

    for (let op = 0; op < open.length; op++) {
        open[op].addEventListener('click', () => {
            btnBox[op].style.maxWidth = '100px'
            open[op].style.display = 'none'
        })
    }

    for (let cl = 0; cl < close.length; cl++) {
        close[cl].addEventListener('click', () => {
            btnBox[cl].style.maxWidth = '0'
            open[cl].style.display = 'block'
        })
    }

    fixedImg[0].addEventListener('click', () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    })

    for (let shopof = 0; shopof < shopOff.length; shopof++) {
        shopOff[shopof].addEventListener('click', () => {
            shopOn[shopof].style.display = 'block'
            shopOff[shopof].style.display = 'none'
        })
        shopOn[shopof].addEventListener('click', () => {
            shopOn[shopof].style.display = 'none'
            shopOff[shopof].style.display = 'block'
        })

        heartOff[shopof].addEventListener('click', () => {
            heartOff[shopof].style.display = 'none'
            heartOn[shopof].style.display = 'block'
            heartOn[shopof].classList.add('clickHeart')
            h++
            fixedNum.innerHTML = h
            console.log(h)
        })
        heartOn[shopof].addEventListener('click', () => {
            heartOff[shopof].style.display = 'block'
            heartOn[shopof].style.display = 'none'
            heartOn[shopof].classList.remove('clickHeart')
            h--
            fixedNum.innerHTML = "<div>" + h + "<div>"
        })
    }

})
