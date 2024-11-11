import GameObject from "./GameObject";

export default class Ball extends GameObject {
    constructor(x, y, width, height, color, speed) {
        super(x, y, width, height, color, speed)
    }

    draw (ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

