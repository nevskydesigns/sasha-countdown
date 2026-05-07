// const countdownEl = document.querySelector('.countdown');
const Days = document.querySelector('.days')
const Hours = document.querySelector('.hours')
const Minutes = document.querySelector('.minutes')
const Seconds = document.querySelector('.seconds')

const btn = document.querySelector('.btn-present');

// Назначение даты отсчета
let targetDate = new Date('May 15 2026 00:00:00').getTime()

function timer() {
    const currentDate = new Date().getTime()
    const distance = targetDate - currentDate

    const days = Math.floor(distance / 1000 / 60 / 60 / 24)
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24
    const minutes = Math.floor(distance / 1000 / 60) % 60
    const seconds = Math.floor(distance / 1000) % 60

    Days.innerHTML = days
    Hours.innerHTML = hours
    Minutes.innerHTML = minutes
    Seconds.innerHTML = seconds

    btn.addEventListener('click', () => {
        if (distance < 0) {
    
        }
        else {
            btn.textContent = 'Ай-яй-яй. Кто-то жмет раньше времени'
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            sleep(2300).then(() => {
                btn.textContent = 'Получить подарок 🎁'
            })
        }
    })

    if (distance < 0) {
        clearInterval(timer)
        Days.innerHTML = '0'
        Hours.innerHTML = '0'
        Minutes.innerHTML = '0'
        Seconds.innerHTML = '0'

        const title = document.querySelector('.title')
        title.textContent = 'С днём рождения, Саша!!!'
        const image = document.querySelector('.image')
        image.classList.add('hidden')
        const video = document.querySelector('.video')
        video.classList.remove('hidden')
        // video.autoplay = true
        // video.setAttribute('playsinline', '')
        // btn.setAttribute('href', 'https://music.yandex.com/users/y4ndex3ide/playlists/1010?utm_medium=copy_link')

        const train = document.querySelector('.train')
        train.style.animationName = 'train-moving'
        
        const countdownItem = document.querySelectorAll('.countdown-item')
        countdownItem.forEach((change) => {
            change.style.visibility = 'hidden'
        })


        
        // const candle = document.querySelector('.candle')
        // candle.style.animationName = 'candle-moving'
        
        // const image = document.querySelector('.image')
        // const video = document.createElement('VIDEO')
        // video.setAttribute('src', 'img/hbday-enhypen.mp4')
        // video.setAttribute('width', 400)
        // video.setAttribute('autoplay', 'autoplay')
        // video.setAttribute('class', 'video')
        // image.outerHTML = video.outerHTML
        
        if (document.getElementsByClassName("balloon").length < 140) {
            createBalloon()
        sleep(1800).then (() => {
            createBalloon()
        });
        sleep(2400).then (() => {
            createBalloon()
        });
        sleep(2800).then (() => {
            createBalloon()
        });
        sleep(3200).then (() => {
            createBalloon()
        });
        // sleep(3600).then (() => {
        //     createBalloon()
        // });
        // sleep(4000).then (() => {
        //     createBalloon()
        // });
        }

        if (Seconds.textContent === '0') {
            document.querySelector('.body__container').style.animationName = 'body-change'
            document.querySelector('.balloon-launch').style.animationName = 'balloon-btn'

            // if (window.innerWidth < 400) {
            //     train.setAttribute('src', 'img/candles-train-mobile.gif')
            // }
            
            if (playCount === 0) {
                playCount++
                document.querySelector('.video').play()
                document.querySelector('.video').setAttribute('playsinline', '')

                btn.textContent = 'Включить звук 🔊'

                // const countdown = document.querySelector('.countdown')
                const balloonYears = document.querySelector('.balloon-years')
                let btnClicks = 0
                btn.addEventListener('click', () => {
                    btnClicks++
                    video.muted = false
                    btn.textContent = 'Получить подарок 🎁'
                    btn.style.textDecoration = 'underline'
                    if (btnClicks > 1) {
                        btn.setAttribute('href', 'https://music.yandex.com/users/y4ndex3ide/playlists/1010?utm_medium=copy_link')
                    }
                })
                balloonYears.src = 'img/icon-balloon.png'
                balloonYears.style.display = 'block'
                // countdown.appendChild(balloonYears)

                document.querySelector('.btns-wrap').style.marginTop = '30px'
            }
        }
    }
}

let playCount = 0

setInterval(timer, 1000)

const balloonBtn = document.querySelector('.balloon-launch')
const balloonsList = ['img/pink-balloon.png', 'img/silver-balloon.png']
// 'img/2-rosegold-edit.png', 'img/0-rosegold-edit.png'

function getRandomBalloon() {
    return Math.floor(Math.random() * balloonsList.length)
}

function generateBalloon() {
    let randomBalloon = ''
    for (let i = 0; i < balloonsList.length; i++) {
        randomBalloon = balloonsList[getRandomBalloon()]
    }
    return randomBalloon
}


balloonBtn.addEventListener('click', () => {
    createBalloon()
})

function createBalloon() {
    let balloonImg = new Image (150, 322)
    balloonImg.src = generateBalloon()
    balloonImg.setAttribute('class', 'balloon')
    balloonImg.style.left = Math.floor(Math.random() * window.innerWidth) - 40 + 'px'
    document.body.appendChild(balloonImg)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// document.body.addEventListener('click', () => {
//     let balloonImg = new Image (200, 250)
//     balloonImg.src = generateBalloon()
//     balloonImg.setAttribute('class', 'balloon')
//     document.body.appendChild(balloonImg)
// })
