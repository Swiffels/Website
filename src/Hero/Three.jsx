import * as THREE from "three";
import importModel from "./ThreeImports";

const Three = (refContainer) => {
  function initScene() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.background = new THREE.Color(0x212121);

    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 6, 500, 0.8);
    light.position.set(0, 0, 0);
    scene.add(light);

    camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0x404040, 30);
    scene.add(ambientLight);

    importModels(scene);
    setupAnimation(scene, camera, renderer);
    window.addEventListener("resize", () => onWindowResize(camera, renderer), false);
  }

  function importModels(scene) {
    // Example of importing a model and setting position
    importModel("king", scene, (loadedModel) => {
      loadedModel.position.x = -6;
      scene.add(loadedModel);
    });

    importModel("queen", scene, (loadedModel) => {
      loadedModel.position.x = -4;
      scene.add(loadedModel);
    });

    importModel("rook", scene, (loadedModel) => {
      loadedModel.position.x = -2;
      scene.add(loadedModel);
    });

    importModel("bishop", scene, (loadedModel) => {
      loadedModel.position.x = 2;
      scene.add(loadedModel);
    });

    importModel("knight", scene, (loadedModel) => {
      loadedModel.position.x = 4;
      scene.add(loadedModel);
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.x = 6;
      scene.add(loadedModel);
    });
  }

  function setupAnimation(scene, camera, renderer) {
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }

  function onWindowResize(camera, renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  initScene();
};

export default Three;
