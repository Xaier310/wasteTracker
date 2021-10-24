import React from "react"
import { Component } from "react";
import ReactDOM from "react-dom";
// import * as THREE from './ThreeRequiredModules/three.module.js';
// import { OrbitControls } from './ThreeRequiredModules/OrbitControls.js';
// import Stats from './ThreeRequiredModules/stats.module';
import * as THREE from 'three/build/three.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

// import earthcloud from "./"
// import earthcloud from "./"
// import earthcloud from "./"
// import earthcloud from "./"


// const Globe=()=>{
class Globe extends Component{
componentDidMount() {
// global variables
let scene;
let camera;
let renderer;
const canvas = document.querySelector('.webgl');

// scene setup
scene = new THREE.Scene();

// camera setup
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
scene.add(camera);

// renderer setup
renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);

// orbit control setup
const controls = new OrbitControls(camera, renderer.domElement);

// earth geometry
const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);

// earth material
const earthMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: new THREE.TextureLoader().load('.texture/earthmap1k.jpg'),
    bumpMap: new THREE.TextureLoader().load('.texture/earthbump.jpg'),
    bumpScale: 0.3
});

// earth mesh
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// cloud Geometry
// const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);

// cloud metarial
// const cloudMetarial = new THREE.MeshPhongMaterial({
//     map: new THREE.TextureLoader().load('./.texture/earthCloud.png'),
//     transparent: true,
// });

// cloud mesh
// const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
// scene.add(cloudMesh);

// galaxy geometry
// const starGeometry = new THREE.SphereGeometry(80, 64, 64);

// galaxy material
// const starMaterial = new THREE.MeshBasicMaterial({
//     map : new THREE.TextureLoader().load('.texture/galaxy.png'),
//     side: THREE.BackSide
// });

// galaxy mesh
// const starMesh = new THREE.Mesh(starGeometry, starMaterial);
// scene.add(starMesh);

// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(5, 3, 5);
scene.add(pointLight);

// point light helper
// const Helper = new THREE.PointLightHelper(pointLight);
// scene.add(Helper);

// handling resizing
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     plzRender();
// }, false);

// current fps
// const stats = Stats();
// document.body.appendChild(stats.dom);

// let mouseX=0;
// let mouseY=0;
// let targetX=0;
// let targetY=0;
// const windowX=window.innerWidth/2;
// const windowY=window.innerHeight/2;

// window.addEventListener("mousemove",onMouseMove);

// function onMouseMove(event){
// mouseX = (event.clientX - windowX);
// mouseX = (event.clientY - windowY);
// }



// spinning animation
const animate = () => {
    requestAnimationFrame(animate);
    // starMesh.rotation.y -= 0.002;
    earthMesh.rotation.y -= 0.0015;
    // cloudMesh.rotation.y -= 0.001;
    // targetX = mouseX * 0.005;
    // targetY = mouseY * 0.005;
    // earthMesh.rotation.y += 0.5 * (targetX - earthMesh.rotation.y);
    // earthMesh.rotation.x += 0.05 * (targetY - earthMesh.rotation.x);
    // earthMesh.rotation.z += -0.05 * (targetY - earthMesh.rotation.x);

    // cloudMesh.rotation.y += 0.5 * (targetX - earthMesh.rotation.y);
    // cloudMesh.rotation.x += 0.05 * (targetY - earthMesh.rotation.x);
    // cloudMesh.rotation.z += -0.05 * (targetY - earthMesh.rotation.x);
    // controls.update();
    plzRender();
    // stats.update();
};

// rendering
const plzRender = () => {
    renderer.render(scene, camera);
}

animate();
}
render (){
    return (
        <canvas class="webgl"></canvas>
        )
}  
}
// }
export default Globe;
