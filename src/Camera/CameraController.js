import { PerspectiveCamera, Vector3 } from "three";

export default class CameraController extends PerspectiveCamera {
    #default_values;
    constructor(state = { fov: 75, aspect: 2, near: 0.1, far: 5 }) {
        const { fov, aspect, near, far } = state;
        super(fov, aspect, near, far);
        this.default_values = state;
    }

    reset_state() {
        for (const key in this.default_values) {
            const value = this.default_values[key];
            this[key] = value;
        }
    }


    move_horizontal(velocity_seconds = 0.001) {
        const cur = this.position.x;
        this.position.setX(cur + velocity_seconds);
        this.updateProjectionMatrix();
    }

}
