import World from './World/World';

function main(dom) {
    if (dom.tagName.toUpperCase() !== 'CANVAS')
        throw Error("can't initiate without a canvas");
    const canvas = dom;
    const world = new World(canvas);
}

export default main;
