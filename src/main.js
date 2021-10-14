import World from './World/World';
import {enableMapSet} from "immer"

enableMapSet()

function main(dom) {
    if (dom.tagName.toUpperCase() !== 'CANVAS')
        throw Error("can't initiate without a canvas");
    const canvas = dom;
    const world = new World(canvas);
    world.start();
}

export default main;
