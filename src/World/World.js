import {immerable, produce} from "immer";

import CameraController from "./Camera/CameraController";
import GameScene from "./Scene/GameScene";
import Renderer from "./Render/Renderer";



const assert = console.assert;

/**
 * create a pong world
 * @param object
 *  @member dom: html canvas element
 */
class World {
    [immerable] = true
    constructor(state) {
        assert(state.canvas, "must have a html canvas element");
        this.state = state;
        this.state.entities = new Map();
        this.init();
    }
    
    init() {
        this.state = produce(this.state,
            draft => {draft.camera = new CameraController()});
        this.state = produce(this.state,
            draft => {draft.scene = new GameScene()});
        this.state = produce(this.state,
            draft => {draft.renderer = new Renderer()});
    }

    load() {}

    start() {}
    
    stop() {}

}

export default World;
