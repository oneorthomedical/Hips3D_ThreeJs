import Webgl from './class/Webgl';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';

const app = new Webgl(document.getElementById('view3D'));
const resizeWindow = () => app.resizeDisplayGL();
const render = () => {
    requestAnimationFrame(render);
    app.render();
};
window.addEventListener('resize', resizeWindow, true);
document.addEventListener('mousedown', (e)=> { e.preventDefault();}, false);
app.initGL();
app.resizeDisplayGL();
//app.initContent();
render();

