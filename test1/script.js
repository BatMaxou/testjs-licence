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

var mouse = new Mouse(0,0)
var positionArray = [
    { x: 16, y: 343 },
    { x: 581, y: 148 },
    { x: 522, y: 133 },
    { x: 725, y: 311 },
    { x: 479, y: 295 },
    { x: 726, y: 314 },
    { x: 454, y: 445 }, 
    { x: 669, y: 254 },
    { x: 546, y: 498 }
]
var count = null

const handleMouseMove = (e) => {
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
    const idCount = setInterval(()=>{
        document.getElementById('countdown').innerHTML = count
        count -= 1
    }, 800)
    return idCount
}

const handleLaunchClick = () => {
    positionArray = []
    count = 3
    const idCount = countdown()
    setTimeout(()=> {
        clearInterval(idCount)
        const id = setInterval(savePosition, 100)
        setTimeout(()=> {
            clearInterval(id)
            document.getElementById('countdown').innerHTML = 'DONE !'
        }, 5000)
    }, 3000)
    
}

const clone = (index, target) => {
    target.style.top = positionArray[index].y + 'px'
    target.style.left = positionArray[index].x + 'px'
    return index += 1
}

const handleCloneClick = () => {
    let index = 0
    let target = document.createElement('div')
    target.classList.add('target')
    document.body.appendChild(target)

    const id = setInterval(()=>{
        index = clone(index, target)

    }, 100)
    setTimeout(()=> {
        clearInterval(id)
    }, 5000)
}

launch.addEventListener('click', handleLaunchClick)
document.getElementById('clone').addEventListener('click', handleCloneClick)
