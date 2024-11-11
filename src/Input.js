export default class Input {
    constructor(game) {
        this.game = game
        this.keys = new Set()
        this.mousex = 0
        this.mousey = 0

        window.addEventListener("keydown", (event) => {
            this.keys.add(event.key)
            console.log(event.key)
        })

        window.addEventListener("keyup", (event) => {
            this.keys.delete(event.key)
        })

        /*window.addEventListener("mousemove", (event) => {
            this.mousex = event.clientX
            this.mousey = event.clientY
            console.log(event.clientX)
            console.log(event.clientY)
        })
        */
    }
}