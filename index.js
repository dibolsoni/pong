import WebGL from './src/WebGL';
import main from './src/main';
import * as dat from 'dat.gui';
import './index.css';



if (WebGL.isWebGLAvailable()) {
    console.log('#WebGL# loaded');
    const gui = new dat.GUI();
    const dom = document.querySelector('canvas.webgl', gui);
    main(dom);
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.appendChild(warning);
}




