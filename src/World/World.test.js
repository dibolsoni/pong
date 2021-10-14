/**
 * @jest-environment jsdom
 */

import World from './World';


const mockRenderer = jest.fn();
jest.mock('./Render/Renderer.js', () => {
    return jest.fn().mockImplementation(() => {
        return {renderer: mockRenderer()}
    })
});


describe('World', () => {
    let world;
    beforeEach(() => {
        const canvas = document.createElement('canvas');
        const state = {canvas};
        world = new World(state);
    })

    afterEach(() => {
        world = null;
    });
    it('must init', () => {
        const canvas = document.createElement('canvas');
        expect(new World({canvas})).toBeTruthy();
    });

    it('must have a camera', () => {
        expect(world.state.camera.type).toBe("PerspectiveCamera");
    });

    it('must have a scene', () => {
        expect(world.state.scene.type).toBe("Scene");
    });

    //jest jsdom cant handle WebGLContext 
    it('must have a renderer', () => {
        expect(mockRenderer).toHaveBeenCalled();
    });

});
