import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const pawn = new URL("/assets/pawn.gltf", import.meta.url).href;
const bishop = new URL("/assets/bishop.gltf", import.meta.url).href;
const rook = new URL("/assets/rook.gltf", import.meta.url).href;
const knight = new URL("/assets/knight.gltf", import.meta.url).href;
const queen = new URL("/assets/queen.gltf", import.meta.url).href;
const king = new URL("/assets/king.gltf", import.meta.url).href;

const importModel = (name, scene, callback) => {
  const loader = new GLTFLoader();

  let url;
  switch (name) {
    case "pawn":
      url = pawn;
      break;
    case "bishop":
      url = bishop;
      break;
    case "rook":
      url = rook;
      break;
    case "knight":
      url = knight;
      break;
    case "queen":
      url = queen;
      break;
    case "king":
      url = king;
      break;
    default:
      console.error("Unknown model name:", name);
      return;
  }

  loader.load(
    url,
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

      callback(gltf.scene);
    },
    undefined,
    function (error) {
      console.error("An error happened during model loading:", error);
    }
  );
};

export default importModel;
