import WebGL from './src/WebGL';
import main from './src/main';
import './index.css';



if (WebGL.isWebGLAvailable()) {
    console.log('#WebGL# loaded');
    main();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.appendChild(warning);
}




