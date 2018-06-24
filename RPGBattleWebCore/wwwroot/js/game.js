
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
        this.canvas.addEventListener("click", function (sender) {
            var xRect = Math.trunc(board.widthRects / (board.width / sender.offsetX))
            var yRect = Math.trunc(board.heightRects / (board.height/ sender.offsetY))
            //alert('x:' + xSquare + " y:" + ySquare)
            var context = this.getContext("2d")
            if (board.cells[xRect][yRect].selected) {
                context.fillStyle = 'white'
                context.fillRect((xRect * board.rectWidth) + 5, (yRect * board.rectHeight) + 5, board.rectWidth - 10, board.rectHeight - 10)
                board.cells[xRect][yRect].selected = false
            } else {
                context.fillStyle = 'blue'
                context.fillRect((xRect * board.rectWidth) + 5, (yRect * board.rectHeight) + 5, board.rectWidth - 10, board.rectHeight - 10)
                board.cells[xRect][yRect].selected = true
            }
            
        }, false)
    }

}
