import { PerspectiveCamera, Vector3 } from "three";

export default class CameraController extends PerspectiveCamera{
    constructor(fov=75, aspect=2, near=0.1, far=5){
        super(fov, aspect, near, far);
        this.state = {fov, aspect, near, far};
    }

    reset_state() {
        this.state = {
            fov: 75,
            aspect: 2,
            near: 0.1,
            far: 5,
        };
    }


    move_left(velocity_seconds = 0.001){
        const cur = this.position.x;
        this.position.setX(cur - velocity_seconds);
        this.updateProjectionMatrix();
    }

}
