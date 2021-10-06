import {PerspectiveCamera, BoxGeometry, MeshBasicMaterial, WebGLRenderer, Scene, Mesh} from 'three';


function main(dom_element) {
    const dom = dom_element || document.body;
    const renderer = new WebGLRenderer();

    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
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

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    dom.appendChild(renderer.domElement);

}

main();