import GameObject from "./GameObject.js"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        console.log("Ny instans av game", this.width)
        this.x = 0
        this.box = new GameObject(0, 0, 200, 200, "purple", 0.1)
        this.box2 = new GameObject(654, 280, 200, 200, "pink", -0.1)
    }
    update(deltaTime) {
        this.box.update(deltaTime)
        this.box2.update(deltaTime)
    }

    draw(ctx) {
        this.box.draw(ctx)
        this.box2.draw(ctx)
    }
}