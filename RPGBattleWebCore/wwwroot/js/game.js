
class Game {
    constructor(canvas, context, widthRects, heightRects) {
        this.canvas = canvas
        //this.canvas2d = canvas.getContext("2d")
        this.context = context
        this.board = new Board(canvas.width, canvas.height, widthRects, heightRects)
        this.onGameStart()
    }

    onGameStart() {
        drawBoard(this.board, this)
        this.setEventListeners()
    }

    setEventListeners() {
        var board = this.board
        var game = this
        this.canvas.addEventListener("click", function (sender) {
            //alert('x:' + xSquare + " y:" + ySquare)
            var context = this.getContext("2d")
            boardSelectListening(board, game, context, sender)
        }, false)
    }

    drawSpriteOnSqure(x, y, image) {
        var mockImage = new Image()
        mockImage.src = "/images/tsuchi.png"
        this.context.drawImage(mockImage, x + 5, y + 5, 40, 40)
    }

    drawSelect(xRect, yRect) {
        this.context.lineWidth = 2
        this.context.strokeStyle = 'blue'
        this.context.strokeRect((xRect * this.board.rectWidth) + 5, (yRect * this.board.rectHeight) + 5, this.board.rectWidth - 10, this.board.rectHeight - 10)
        this.board.cells[xRect][yRect].selected = true
        this.board.selecting = true
    }

    eraseSelect(xRect, yRect) {
        //left side
        this.context.clearRect((xRect * this.board.rectWidth) + 3, (yRect * this.board.rectHeight) + 2, 4, this.board.rectHeight - 5)
        //right side
        this.context.clearRect((xRect * this.board.rectWidth) + 43, (yRect * this.board.rectHeight) + 2, 4, this.board.rectHeight - 5)
        //top side
        this.context.clearRect((xRect * this.board.rectWidth) + 3, (yRect * this.board.rectHeight) + 2, this.board.rectHeight - 5, 4)
        //bottom side
        this.context.clearRect((xRect * this.board.rectWidth) + 3, (yRect * this.board.rectHeight) + 42, this.board.rectHeight - 5, 4)
    }

}

function boardSelectListening(board, game, context, sender) {
    var xRect = Math.trunc(board.widthRects / (board.width / sender.offsetX))
    var yRect = Math.trunc(board.heightRects / (board.height / sender.offsetY))
    if (board.cells[xRect][yRect].selected) {
        game.eraseSelect(xRect, yRect)
        //context.clearRect((xRect * board.rectWidth) + 2, (yRect * board.rectHeight) + 2, board.rectWidth - 5, board.rectHeight - 5)
        board.cells[xRect][yRect].selected = false
        board.selecting = false
    } else if (!board.selecting) {
        game.drawSelect(xRect, yRect)
        board.cells[xRect][yRect].selected = true
        board.selecting = true
    }
}
