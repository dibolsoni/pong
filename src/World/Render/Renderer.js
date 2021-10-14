import {WebGLRenderer} from "three";

class Renderer extends WebGLRenderer{
    constructor(canvas) {
        super({canvas: canvas, antialias: true})
        this.physicallyCorrectLights = true;
    }
}

export default Renderer;
