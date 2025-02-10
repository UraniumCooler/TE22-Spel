import GameObject from "./GameObject";

export default class Enemy extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, speed)
        this.game = game
        this.diffX
        this.diffY
        this.player1DiffX = 0
        this.player1DiffY = 0
        this.player2DiffX = 0
        this.player2DiffY = 0
        this.player1Distance = 0
        this.player2Distance = 0
        this.player2Sum
        this.player1Sum
        this.targetPlayer

        this.image = new Image()
        this.image.src = "./src/assets/pixil-frame-0 (min).png"
    }

    update(deltaTime) {
        this.player1DiffX = this.x + this.game.player.x;
        this.player1DiffY = this.y + this.game.player.y;
        //this.player2DiffX = this.x + this.game.player2.x;
        //this.player2DiffY = this.y + this.game.player2.y;
        this.player1Sum = (this.player1DiffX * this.player1DiffX) + (this.player1DiffY * this.player1DiffY)
        //this.player2Sum = (this.player2DiffX * this.player2DiffX) + (this.player2DiffY * this.player2DiffY)
        this.player1Distance = Math.sqrt(this.player1Sum)
        //this.player2Distance = Math.sqrt(this.player2Sum)

        if (this.player1Distance > this.player2Distance) {
            this.targetPlayer = this.game.player
        } else if (this.player1Distance < this.player2Distance) {
            this.targetPlayer = this.game.player2
        } else {
            this.targetPlayer = this.game.player2
        }
        
        this.diffX = Math.floor(this.targetPlayer.x - this.x);
        this.diffY = Math.floor(this.targetPlayer.y - this.y);
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

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}