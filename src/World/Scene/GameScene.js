import {Color, Scene} from "three";

class GameScene extends Scene{
    constructor() {
        super();
        this.background = new Color('cyan');
    }
}

export default GameScene;
