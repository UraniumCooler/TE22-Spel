import GameObject from "./GameObject";

export default class Wall extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, 0, game)
        this.x = Math.random() * (game.canvas.width - this.width)
        this.y = Math.random() * (game.canvas.height - this.height)

        this.image = new Image()
        this.image.src = "src/assets/Bord v2.png"
    }

    update (deltaTime) {
        if (this.x <=280 && this.y <=100) {
            this.x = Math.random() * (this.game.canvas.width - this.width)
            this.y = Math.random() * (this.game.canvas.height - this.height)
        }
    }        

    draw (ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

        ctx.drawImage(this.image,
            0,
            0,
            268,
            60,
            this.x,
            this.y,
            this.width,
            this.height )
        }
    
    checkCollision(other) {
        return (
            this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.y + this.height > other.y
        );
    }
}
