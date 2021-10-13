import {BoxGeometry, MeshBasicMaterial, WebGLRenderer, Scene, Mesh} from 'three';
import CameraController from './Camera/CameraController';

function main(dom_element) {
    const canvas = dom_element || document.body;
    const renderer = new WebGLRenderer({canvas});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 


    const camera = new CameraController();
    camera.position.z = 2;

    const scene = new Scene();

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new MeshBasicMaterial({ color: 0x44aa88 });  // greenish blue

    const cube = new Mesh(geometry, material);
    scene.add(cube);

    function render(time) {
        time *= 0.001;  // convert time to seconds

        cube.rotation.x = time;
        cube.rotation.y = time;
        camera.move_left(time/60);

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

export default main;
