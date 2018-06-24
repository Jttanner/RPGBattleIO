class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Tile {
    constructor(x, y) {
        this.selected = false
        this.x = x
        this.y = y
    }
}

class Board {
    constructor(width, height, widthRects, heightRects) {
        this.widthRects = widthRects
        this.heightRects = heightRects
        this.width = width
        this.height = height
        this.rectWidth = width / widthRects
        this.rectHeight = height / heightRects
        var tilesFirstDim = []
        for (var i = 0; i < widthRects; ++i) {
            var tilesSecondDim = []
            for (var j = 0; j < heightRects; ++j) {
                //this.cells[i][j] = new Tile()
                tilesSecondDim[j] = new Tile(i, j)
            }
            tilesFirstDim[i] = tilesSecondDim
        }
        this.cells = tilesFirstDim
    }
}

function drawLine(startPoint, endPoint, context) {
    context.beginPath()  //TODO: test location for this
    context.moveTo(startPoint.x, startPoint.y)
    context.lineTo(endPoint.x, endPoint.y)
    context.stroke()
}

function drawBoard(board, game) {
    var squareWidth = 50
    for (var i = 0; i <= board.widthRects; ++i) {
        var startVert = new Point(i * squareWidth, 0)
        var endVert = new Point(i * squareWidth, board.height)
        drawLine(startVert, endVert, game.context)
    }
    for (var i = 0; i <= board.heightRects; ++i) {
        var startHoriz = new Point(0, i * squareWidth)
        var endHoriz = new Point(board.width, i * squareWidth)
        drawLine(startHoriz, endHoriz, game.context)
    }
}