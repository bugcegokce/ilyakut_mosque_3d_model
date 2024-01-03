import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { OBJLoader } from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/OBJLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new OBJLoader();
loader.load(
    'obj/iilyakut_cami_obj.obj',
    (object) => {
        scene.add(object);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
        console.error('Error loading the OBJ model', error);
    }
);

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
