// import Ball from "./Ball.js"
// import GameObject from "./GameObject.js"
import Restart from "./Restart.js"
import Player from "./Player.js"
// import Player2 from "./Player2.js"
import Enemy  from "./Enemy.js"
import Wall from "./Wall.js"
import Background from "./Background.js"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.canvas = { width: 854, height: 480 }
        this.Restart = new Restart(this)
        this.Background = new Background(0,0,854,480,"blue", 0, this)
        this.player = new Player(0, 0, 50, 50, "green", 0, this)
        this.wall = new Wall(0, 0, 280, 100, "transparent", 0, this)
        this.wall2 = new Wall(0,0, 280, 100, "transparent", 0, this)
        this.wall3 = new Wall(0,0, 280, 100, "transparent", 0, this)
        //this.player2 = new Player2(804, 430, 50, 50, "blue", 0, this)
        this.enemy = new Enemy (754, 380, 100, 100, "red", 1, this)

        this.startTime = Date.now()
        this.elapsedTime = 0
        console.log("Ny instans av game", this.width)
        this.x = 0
        this.gameOverImage = new Image()
        this.gameOverImage.src = "./assets/spookyAaahJumpScare.png"
        this.gameOver = false
        /*this.box = new GameObject(0, 0, 240, 240, "purple", 0.1)
        this.box2 = new GameObject(614, 240, 240, 240, "pink", -0.1)
        this.ball = new Ball (120, 360, 100, 100, "red", 0.1)
        this.ball2 = new Ball (739, 120, 100, 100, "blue", -0.1)
        */
    }
    update(deltaTime) {
        /*
        this.box.update(deltaTime)
        this.box2.update(deltaTime)
        this.ball.update(deltaTime)
        this.ball2.update(deltaTime)
        */
        this.elapsedTime = Math.floor((Date.now()-this.startTime) / 1000)
        //this.player2.update(deltaTime)
        if (!this.gameOver) {
            this.player.update(deltaTime)
            this.enemy.update(deltaTime)
        }
    }

    draw(ctx) {
        /*
        this.box.draw(ctx)
        this.box2.draw(ctx)
        this.ball.draw(ctx)
        this.ball2.draw(ctx)
        */
        this.Background.draw(ctx)
        this.player.draw(ctx)
        //this.player2.draw(ctx)
        this.enemy.draw(ctx)
        this.wall.draw(ctx)
        this.wall2.draw(ctx)
        this.wall3.draw(ctx)

        if (this.gameOver) {
            this.drawGameOver(ctx)
        }

        ctx.fillStyle = "white"
        ctx.font = "20px Arial"
        ctx.fillText(`Time: ${this.elapsedTime}s`, 10, 20)
    }

    drawGameOver(ctx) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        ctx.drawImage(this.gameOverImage,
            this.canvas.width / 2 - this.gameOverImage.width / 2,
            this.canvas.height / 2 - this.gameOverImage.height / 2
        )

        ctx.fillStyle = "black"
        ctx.font = "20px Arial"
        ctx.fillText("Press R to Restart", this.canvas.width / 2 - 100, this.canvas.height / 2 + 100)
    }

    restart() {
        this.gameOver = false
        this.player = new Player(0, 0, 50, 50, "green", 0, this)
        this.startTime = Date.now()
        this.elapsedTime = 0
    }
}