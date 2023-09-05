class Mouse {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    setX(x) {
        this.x = x
        return this
    }
    setY(y) {
        this.y = y
        return this
    }

    getX() {
        return this.x
    }
    getY() {
        return this.y
    }
}

var mouse = null
var count = null
var positionArray = []

const handleMouseMove = (e) => {
    if (mouse === null) {
        mouse = new Mouse(e.clientX, e.clientY)
    }
    mouse.setX(e.clientX).setY(e.clientY)
}

document.addEventListener('mousemove', handleMouseMove);

const savePosition = () => {
    positionArray.push({
        x: mouse.getX(),
        y: mouse.getY()
    })
}

const countdown = () => {
    document.getElementById('countdown').innerHTML = count
    count -= 1
    const idCount = setInterval(() => {
        document.getElementById('countdown').innerHTML = count
        count -= 1
    }, 800)

    return idCount
}

const handleLaunchClick = () => {
    positionArray = []
    count = 3

    const idCount = countdown()

    setTimeout(() => {
        clearInterval(idCount)
        document.getElementById('countdown').innerHTML = 'RECORDING !'
        const id = setInterval(savePosition, 50)

        setTimeout(() => {
            clearInterval(id)
            document.getElementById('countdown').innerHTML = 'DONE !'
        }, 5000)

    }, 3000)

}

const clone = (index, target) => {
    target.animate([{
        top: positionArray[index].y + 'px',
        left: positionArray[index].x + 'px'
    }], {
        duration: 1000, // ??
    })

    return index += 1
}

const handleCloneClick = () => {
    let index = 0
    let target = document.createElement('div')
    target.classList.add('target')
    target.style.top = positionArray[index].y + 'px'
    target.style.left = positionArray[index].x + 'px'
    document.body.appendChild(target)

    const id = setInterval(() => {
        index = clone(index, target)
    }, 50)

    setTimeout(() => {
        clearInterval(id)
        document.body.removeChild(target)
    }, 5000)
}

launch.addEventListener('click', handleLaunchClick)
document.getElementById('clone').addEventListener('click', handleCloneClick)
