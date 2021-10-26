import CameraController from "./Camera/CameraController";
import GameScene from "./Scene/GameScene";
import Renderer from "./Render/Renderer";
import AnimationLoop from "./Animation/AnimationLoop";



const assert = console.assert;

/**
 * create a pong world
 * @param object
 *  @member dom: html canvas element
 */
class World {
    constructor(state) {
        assert(state.canvas, "must have a html canvas element");
        this.state = state;
        this.state.entities = new Map();
        this.init();
    }

    init() {
        this.state.camera = new CameraController();
        this.state.scene = new GameScene();
        this.state.renderer = new Renderer(this.state.canvas);
        this.state.loop = new AnimationLoop(this.state.camera, this.state.scene, this.state.renderer)
    }

    load() { }

    start() {this.state.loop.start(); }

    stop() { this.state.loop.stop(); }

}

export default World;
