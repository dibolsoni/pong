import GameScene from "../GameScene";
import Ball from "../../entities/Ball/Ball";
import Human from "../../entities/Paddle/Player/Human/Human


class ScenePlaying extends GameScene {
    constructor() {
        super();
        this.playerOne = new Human('red'); 
        this.playerTwo = new Human('blue');
        this.ball = new Ball();
    }
}



