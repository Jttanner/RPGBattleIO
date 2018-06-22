class Point {
    constructor(x, y) {
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
        this.cells = [widthRects][heightRects] //0,0 is top left
    }
}

function drawLine(startPoint, endPoint, context) {
    context.beginPath()  //TODO: test location for this
    context.moveTo(startPoint.x, startPoint.y)
    context.lineTo(endPoint.x, endPoint.y)
    context.stroke()
}

function drawBoard(board, game) {
    for (var i = 0; i <= board.widthRects; ++i) {
        var startVert = new Point(i * 100, 0)
        var endVert = new Point(i * 100, board.height)
        drawLine(startVert, endVert, game.context)
    }
    for (var i = 0; i <= board.heightRects; ++i) {
        var startHoriz = new Point(0, i * 100)
        var endHoriz = new Point(board.width, i * 100)
        drawLine(startHoriz, endHoriz, game.context)
    }
}