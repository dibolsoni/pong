import World from './World/World';
import * as dat from 'dat.gui';


function main() {
    const gui = new dat.GUI();
    const canvas = document.querySelector('canvas.webgl', gui);
    const world = new World({canvas});
    world.start();
}

export default main;
