import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, speed)
        this.game = game

        this.speedX = 0
        this.maxSpeedX = 0.3
        this.speedY = 0
        this.maxSpeedY = 0.3
    }

    update(deltaTime) {
        if (this.game.input.keys.has("ArrowLeft")) {
            //console.log("pil vänster")
            this.speedX -= this.maxSpeedX
        } if (this.game.input.keys.has("ArrowRight")) {
            //console.log("pil höger")
            this.speedX += this.maxSpeedX
        } if (this.game.input.keys.has("ArrowUp")) {
            //console.log("pil up")
            this.speedY -= this.maxSpeedY
        } if (this.game.input.keys.has("ArrowDown")) {
            //console.log("pil ner")
            this.speedY += this.maxSpeedY
        } 

        if (!this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft") && this.speedX !== 0) {
            if (this.speedX > 0) {
                this.speedX -= this.maxSpeedX/1.8
            } else {
                this.speedX += this.maxSpeedX/1.8
            }
        }
        if (!this.game.input.keys.has("ArrowUp") && !this.game.input.keys.has("ArrowDown") && this.speedY !== 0) {
            if (this.speedY > 0) {
                this.speedY -= this.maxSpeedY/1.8
            } else {
                this.speedY += this.maxSpeedY/1.8
            }
        }
        if (this.x > this.game.enemy.x - this.width && this.x < this.game.enemy.x + this.game.enemy.width && this.y > this.game.enemy.y - this.height && this.y < this.game.enemy.y + this.game.enemy.height) {
            this.x = 0
            this.y = 0
            this.speedX = 0
            this.speedY = 0
        }

        if (this.y < 0) {
            this.y = 0.1
            this.speedY = 0
        } else if (this.y > this.game.height - this.height) {
            this.y = 429.9
            this.speedY = 0
        }
        if (this.x < 0) {
            this.x = 0.1
            this.speedX = 0
        } else if (this.x > this.game.width - this.width) {
            this.x = 803.9
            this.speedX = 0
        }

        this.x += this.speedX
        this.y += this.speedY
    }
}