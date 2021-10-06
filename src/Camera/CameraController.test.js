import CameraController from "./CameraController";


describe('testing a camera', () => {
    const camera = new CameraController();
    const defaults = {
        fov: 75,
        aspect: 2,
        near: 0.1,
        far: 5
    };
    it('initiate with default values', () => {
        for (const key in defaults) {
            if (Object.hasOwnProperty.call(defaults, key)) {
                expect(camera[key]).toBe(defaults[key]);
                expect(camera[key] + 1).not.toBe(defaults[key]);
            }
        }
    });

    it('left moves', () => {
        const old_pos = camera.position.x;
        const expected = old_pos - 1;
        camera.move_left(1);
        expect(camera.position.x).toBe(expected);
    })

});