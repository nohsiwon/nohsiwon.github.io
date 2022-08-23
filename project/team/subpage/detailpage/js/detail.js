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

    let accodian = document.querySelectorAll('.accodian')
    let accodianDetail = document.querySelectorAll('.accodianDetail')

    let shoppingBox = document.querySelector('.shoppingBox')
    let shoppingBtn = document.querySelector('.shoppingBtn')
    let closeBtn = document.querySelector('.closeBtn')

    let fixedImg = document.querySelectorAll('.fixedImg')

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

    let arrow = document.querySelectorAll('.arrow')

    for (let i = 0; i < accodian.length; i++) {
        accodian[i].addEventListener('click', function () {
            arrow[i].classList.toggle('arrowReverse')
            accodianDetail[i].classList.toggle('accodianHeight')

        })
    }

    let opacity = 0

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

    fixedImg[0].addEventListener('click', () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    })
})