import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, speed)

        this.image = new Image()
        this.image.src = "./assets/Map.png"
    
    }

    draw(ctx) {
    
        ctx.drawImage(this.image,
            0,
            0,
            375,
            200,
            this.x,
            this.y,
            this.width,
            this.height )
        }
    }