var car1 = document.getElementById('car1')
var car2 = document.getElementById('car2')

var lightRed = document.getElementById('red')
var lightYellow = document.getElementById('yellow')
var lightGreen = document.getElementById('green')

function start() {
    setTimeout(() => {
        lightRed.style.backgroundColor = 'red'
    }, 1000);

    setTimeout(() => {
        lightYellow.style.backgroundColor = 'yellow'
    }, 2000);

    setTimeout(() => {
        lightGreen.style.backgroundColor = 'green'
        isRunning = true
    }, 3000);
}

var isRunning = false;

var car1X = 0
var car2X = 0

var fuel1 = 150
var fuel2 = 150

document.addEventListener('keydown', handleKeyDown)
const MOVE_STEP = 10

function handleKeyDown(e) {
    if (isRunning) {
        switch (e['key']) {
            case 'ArrowRight':
                moveCar('car1', MOVE_STEP)
                break;
            case 'ArrowLeft':
                moveCar('car1', -MOVE_STEP)
                break;
            case 'd':
                moveCar('car2', MOVE_STEP)
                break;
            case 'a':
                moveCar('car2', -MOVE_STEP)
                break;
        }
    }

}

function moveCar(car, step) {
    if (car == 'car1') {
        car1X += step
        car1.style.marginLeft = car1X + 'px'
        fuel1 -= 2
    }
    if (car == 'car2') {
        car2X += step
        car2.style.marginLeft = car2X + 'px'
        fuel2 -= 2
    }

    updateXang()
}

function updateXang() {
    var xang1 = document.getElementById('xang1')
    var xang2 = document.getElementById('xang2')

    xang1.style.width = fuel1 + 'px'
    xang2.style.width = fuel2 + 'px'
}