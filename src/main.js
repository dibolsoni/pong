import World from './World/World';
import {enableMapSet} from "immer"
import * as dat from 'dat.gui';


function main() {
    enableMapSet() //eslint-disable-line no-eval
    const gui = new dat.GUI();
    const canvas = document.querySelector('canvas.webgl', gui);
    const world = new World({canvas});
    world.start();
}

export default main;
