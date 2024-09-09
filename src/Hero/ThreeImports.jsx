import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const importModel = (name, scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    `public/Assets/${name}.gltf`,
    function (gltf) {
      gltf.scene.scale.set(30, 30, 30);
      scene.add(gltf.scene);

      const newMaterial = new THREE.MeshStandardMaterial({
        color: 0x212121,
        metalness: 0.4,
        roughness: 0.9,
      });

      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = newMaterial;
        }
      });

      // Use callback to return the loaded model
      callback(gltf.scene);
    },
    undefined,
    function (error) {
      console.error("An error happened", error);
    }
  );
};

export default importModel;
