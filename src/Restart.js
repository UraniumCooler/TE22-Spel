import GameObject from "./GameObject"

export default class Restart {
    constructor(game) {
        this.game = game
        this.keys = new Set()

        window.addEventListener("keydown", (e) => {
            this.keys.add(e.key)
           
            if (e.key === "r" && this.game.gameOver) {
                this.game.restart()
            }
        })

        window.addEventListener("keyup", (e) => {
            this.keys.delete(e.key)
        })
    }
}