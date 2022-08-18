const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})


board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})



function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
    
   
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
board.innerHTML = `<h1>Cчет:<span class = "primary">${score}</span></h1>`

}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60) 
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size) 
    const y = getRandomNumber(0, height- size)
    circle.classList.add('circle')
    const colors = [ '#cb05f6','#0debf4' ,'#d601ee','#011cee', '#90f3f9', '#1eee01','#f9f290', '#f9f290', '#f990c4', '#90f3f9']

    circle.style.background = colors[getRandomNumber(0, colors.length-1)]
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)

}

 