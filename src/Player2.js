import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, speed)
        this.game = game
        this.otherPlayer = game.player
        this.overlapX
        this.overlapY

        this.image = new Image()
        this.image.src = "./assets/DinoSprites - doux.png"

        this.sWidth = 100
        this.frameX = 0
        this.maxFrameX = 24
        this.timer = 0
        this.fps = 20
        this.interval = 1000 / this.fps

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

        if (this.otherPlayer) {
            this.collisions(this.otherPlayer)
        }

        

        if (this.x > this.game.enemy.x - this.width && this.x < this.game.enemy.x + this.game.enemy.width && this.y > this.game.enemy.y - this.height && this.y < this.game.enemy.y + this.game.enemy.height) {
            this.x = 0
            this.y = 0
            this.speedX = 0
            this.speedY = 0
        }

        this.borderCollision()        

        this.x += this.speedX
        this.y += this.speedY

        if (this.timer > this.interval) {
            this.frameX++
            this.timer = 0
        } else {
            this.timer += deltaTime
        }
        if (this.frameX >= this.maxFrameX) {
            this.frameX = 0
          }
    }

    collisions (otherPlayer) {
        if (this.x < otherPlayer.x + otherPlayer.width && 
            this.x + this.width > otherPlayer.x &&
            this.y < otherPlayer.y + otherPlayer.height && 
            this.y + this.height > otherPlayer.y) {

                const overlapX = Math.min(this.x + this.width - otherPlayer.x, otherPlayer.x + otherPlayer.width - this.x)
                const overlapY = Math.min(this.t + this.height - otherPlayer.t, otherPlayer.t + otherPlayer.height - this.t)

                if (overlapX < overlapY) {
                    if (this.speedX > 0) {
                        this.x = otherPlayer.x - this.width
                    } else {
                        this.x = otherPlayer.x + otherPlayer.width
                    }
                    this.speedX *= -1
                } else {
                    if (this.speedY > 0) {
                        this.y = otherPlayer.y - this.height
                    } else {
                        this.y = otherPlayer.y + otherPlayer.height
                    }
                    this.speedY *= -1
                }
            }
    }

    borderCollision () {
        if (this.y < -8) {
            this.y = -7.9
            this.speedY *= -0.5
        } else if (this.y > this.game.height - this.height) {
            this.y = 429.9
            this.speedY *= -0.5
        }
        if (this.x < 0) {
            this.x = 0.1
            this.speedX *= -0.5
        } else if (this.x > this.game.width - this.width) {
            this.x = 803.9
            this.speedX *= -0.5
        }

        if (this.y < -8) {
            this.y = -7.9
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
    }

    draw(ctx) {
    
    ctx.drawImage(this.image,
        0,
        0,
        21,
        21,
        this.x,
        this.y,
        this.width,
        this.height )
    }
}
   