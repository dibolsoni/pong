import CameraController from "./CameraController";


describe('a camera', () => {
    const camera = new CameraController();
    const defaults = {
        fov: 75,
        aspect: 2,
        near: 0.1,
        far: 5
    };
    it('initiates with default values', () => {
        for (const key in defaults) {
            if (Object.hasOwnProperty.call(camera, key)) {
                expect(camera[key]).toBe(defaults[key]);
                expect(camera[key] + 1).not.toBe(defaults[key]);
            }
        }
    });

    it('resets to defaults values', () => {
        camera.fov = 48;
        camera.reset_state();
        expect(camera.fov).toBe(defaults.fov);

    });


    it('moves', () => {
        const old_pos = camera.position.x;
        const expected = old_pos - 1;
        camera.move({x: -1,z: 10});
        expect(camera.position.x).toBe(expected);
        camera.move({x: 1});
        expect(camera.position.x).toBe(old_pos);
    });




});
