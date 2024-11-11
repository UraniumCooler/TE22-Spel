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
        if (this.game.input.keys.has("a")) {
            //console.log("pil a")
            this.speedX -= this.maxSpeedX
        } if (this.game.input.keys.has("d")) {
            //console.log("pil d")
            this.speedX += this.maxSpeedX
        } if (this.game.input.keys.has("w")) {
            //console.log("pil w")
            this.speedY -= this.maxSpeedY
        } if (this.game.input.keys.has("s")) {
            //console.log("pil s")
            this.speedY += this.maxSpeedY
        } 

        if (!this.game.input.keys.has("d") && !this.game.input.keys.has("a") && this.speedX !== 0) {
            if (this.speedX > 0) {
                this.speedX -= this.maxSpeedX/1.8
            } else {
                this.speedX += this.maxSpeedX/1.8
            }
        }
        if (!this.game.input.keys.has("w") && !this.game.input.keys.has("s") && this.speedY !== 0) {
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