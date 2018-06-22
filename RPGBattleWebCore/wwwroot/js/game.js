
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
            context.fillRect(xRect * board.rectWidth, yRect * board.rectHeight, board.rectWidth, board.rectHeight)
        }, false)
    }

}
