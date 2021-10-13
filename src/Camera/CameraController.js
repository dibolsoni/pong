import {PerspectiveCamera} from "three";

export default class CameraController extends PerspectiveCamera {
    constructor(state = {fov: 75, aspect: 2, near: 0.1, far: 5}) {
        const {fov, aspect, near, far} = state;
        super(fov, aspect, near, far);
        this.default_values = state;
    }

    reset_state() {
        for (const key in this.default_values) {
            const value = this.default_values[key];
            this[key] = value;
        }
    }

    /**
     * type: int
     */
    move(coords = {x: 0, y: 0, z: 0}) {
        const old_pos = this.position
        for (const coord in coords) {
            if (Object.hasOwnProperty.call(old_pos, coord) && old_pos[coord] != coords[coord]) {
                const new_value = old_pos[coord] + coords[coord] 
                const method_name = "set" + coord.toUpperCase();
                this.position[method_name](new_value);
                this.updateProjectionMatrix();
            }
        }
    }

}
