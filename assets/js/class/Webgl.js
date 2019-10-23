import OrbitControls from 'three-orbitcontrols';
import * as THREE from 'three';
import TrackballControls from 'three-trackballcontrols';


export default class Webgl {

    constructor(elementToBindTo) {

        this.canvas = elementToBindTo;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;


    }

    initGL(){
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            autoClear: true
        });

        this.geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10); //TODO Testeur a retirer
        this.material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true}); //TODO Testeur a retirer
        this.cube = new THREE.Mesh(this.geometry, this.material); //TODO Testeur a retirer
        this.scene.add(this.cube); //TODO Testeur a retirer

    }

    render() {
        this.cube.rotation.x += 0.01; //TODO Testeur a retirer
        this.cube.rotation.y += 0.01; //TODO Testeur a retirer
        this.renderer.render(this.scene, this.camera);
    }

    resizeDisplayGL() {
        this.recalcAspectRatio();
        this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight, false);
        this.updateCamera();
    }
    recalcAspectRatio() {
        this.aspectRatio = (this.canvas.offsetHeight === 0) ? 1 : this.canvas.offsetWidth / this.canvas.offsetHeight;
    }
    updateCamera() {

        this.camera.aspect = this.aspectRatio;
        this.camera.updateProjectionMatrix();
    }
}