const grid = [
    [0, 'B', 0, 0],
    [0, 0, 'B', 0],
    [0, 0, 'B', 'B'],
    [0, 0, 0, 0]
]

const countBomb = (grid, x, y) => {
    let count = 0

    if (grid[y][x - 1] && grid[y][x - 1] === 'B') {
        count++
    }

    if (grid[y][x + 1] && grid[y][x + 1] === 'B') {
        count++
    }

    if (grid[y + 1]) {
        if (grid[y + 1][x] && grid[y + 1][x] === 'B') {
            count++
        }

        if (grid[y + 1][x + 1] && grid[y + 1][x + 1] === 'B') {
            count++
        }

        if (grid[y + 1][x - 1] && grid[y + 1][x - 1] === 'B') {
            count++
        }
    }

    if (grid[y - 1]) {
        if (grid[y - 1][x] && grid[y - 1][x] === 'B') {
            count++
        }

        if (grid[y - 1][x - 1] && grid[y - 1][x - 1] === 'B') {
            count++
        }

        if (grid[y - 1][x + 1] && grid[y - 1][x + 1] === 'B') {
            count++
        }
    }

    return count
}

const generate = (grid) => grid.map((row, y) => row.map((el, x) => 'B' === el ? el : countBomb(grid, x, y)))
