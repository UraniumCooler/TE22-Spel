import GameObject from "./GameObject";

export default class Enemy extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, speed)
        this.game = game
        this.diffX
        this.diffY
    }

    update(deltaTime) {
        this.diffX = Math.floor(this.game.player.x - this.x);
        this.diffY = Math.floor(this.game.player.y - this.y);
        if (this.diffX > 25) {
            this.x += this.speed
        } else if (this.diffX < 25) {
            this.x -= this.speed
        } else if (this.diffX == 25) {
            
        }
        if (this.diffY > 25) {
            this.y += this.speed
        } else if (this.diffY < 25) {
            this.y -= this.speed
        } else if (this.diffY == 25) {
            
        }

    }
}