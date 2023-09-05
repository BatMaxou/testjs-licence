const grid = [
    [0, 'B', 0, 0],
    [0, 0, 'B', 0],
    [0, 0, 'B', 'B'],
    [0, 0, 0, 0]
]

const generate = (grid) => {
    grid.forEach((row, y) => {
        row.forEach((el, x) => {
            if ('B' !== el) {
                let count = 0
                console.log(row);
            }
        })
    })
}

generate(grid)