import {Clock} from 'three';

const clock = new Clock();

class AnimationLoop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.update_items = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        const delta = clock.getDelta();
        for (const item in this.update_items){
            item.tick(delta);
        }
    }
}

export default AnimationLoop;