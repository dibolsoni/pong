import {PerspectiveCamera} from "three";


export default class CameraController extends PerspectiveCamera {
    constructor(state = {fov: 75, aspect: 2, near: 0.1, far: 5}) {
        const {fov, aspect, near, far} = state;
        super(fov, aspect, near, far);
        this.state = state;
    }

    reset_state() {
        for (const key in this.state) {
            const value = this.state[key];
            this[key] = value;
        }
    }

    /**
     * move to a x,y,z position
     * @param object
     *  @member x: int 
     *  @member y: int
     *  @member z: int
     */
    move(coords) {
        if (coords.x !== this.position.x)
            this.position.x += coords.x;
        if (coords.y !== this.position.y)
            this.position.y += coords.y;
        if (coords.z !== this.position.z)
            this.position.z += coords.z;
    }

}
