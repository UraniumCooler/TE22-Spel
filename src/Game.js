import Ball from "./Ball.js"
import GameObject from "./GameObject.js"
import Input from "./Input.js"
import Player from "./Player.js"
import Player2 from "./Player2.js"
import Enemy  from "./Enemy.js"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 50, 50, "green", 0, this)
        this.player2 = new Player2(804, 430, 50, 50, "blue", 0, this)
        this.enemy = new Enemy (754, 380, 100, 100, "red", 0.8, this)
        console.log("Ny instans av game", this.width)
        this.x = 0
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
        this.player.update(deltaTime)
        this.player2.update(deltaTime)
        this.enemy.update(deltaTime)
    }

    draw(ctx) {
        /*
        this.box.draw(ctx)
        this.box2.draw(ctx)
        this.ball.draw(ctx)
        this.ball2.draw(ctx)
        */
        this.player.draw(ctx)
        this.player2.draw(ctx)
        this.enemy.draw(ctx)
    }
}