import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import textFont from "/assets/Fonts/helvetiker_regular.typeface.json";
import importModel from "./ThreeImports";

const Three = (refContainer) => {
  var king, queen, rook, rook2, bishop, bishop2, knight, knight2, pawn, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8;
  var text1, text2, text3, text4;

  var Height = 600;

  function initScene() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / Height, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    camera.lookAt(0, 0, 0);
    renderer.setSize(window.innerWidth, Height);
    scene.background = new THREE.Color(0x212121);

    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 6, 500, 0.8);
    light.position.set(0, 0, 0);
    scene.add(light);

    camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0x404040, 30);
    scene.add(ambientLight);

    function animate() {
      requestAnimationFrame(animate);

      if (king && queen && rook && rook2 && bishop && bishop2 && knight && knight2 && pawn && pawn2 && pawn3 && pawn4 && pawn5 && pawn6 && pawn7 && pawn8) {
        updateObjectPosition(king, { x: -2, y: 18, z: 3 }, 4750, 6, 0.009, -0.00001);
        updateObjectPosition(queen, { x: 2, y: -16, z: -1 }, 1500, -3, -0.005, 0.00001);
        updateObjectPosition(rook, { x: 3, y: 14, z: -3 }, 3200, 1, 0.001, -0.000005);
        updateObjectPosition(rook2, { x: -3, y: -20, z: 1 }, 4100, -10, -0.008, 0.000008);
        updateObjectPosition(bishop, { x: 1, y: 10, z: -2 }, 2300, 9, 0.004, -0.000007);
        updateObjectPosition(bishop2, { x: -1, y: 6, z: 2 }, 500, -1, 0.007, 0.000009);
        updateObjectPosition(knight, { x: 3, y: -14, z: -1 }, 3650, 4, -0.003, -0.000002);
        updateObjectPosition(knight2, { x: -1, y: 12, z: 0 }, 5800, -6, 0.01, 0.000004);
        updateObjectPosition(pawn, { x: 0, y: -18, z: -3 }, 2600, 7, -0.006, -0.000003);
        updateObjectPosition(pawn2, { x: 2, y: 16, z: 3 }, 3300, -5, 0.002, 0.000006);
        updateObjectPosition(pawn3, { x: -3, y: 20, z: 1 }, 600, 10, 0.008, -0.000009);
        updateObjectPosition(pawn4, { x: -2, y: -12, z: -1 }, 5500, -8, -0.007, 0.000007);
        updateObjectPosition(pawn5, { x: 1, y: 4, z: 2 }, 1200, 2, 0.005, -0.000008);
        updateObjectPosition(pawn6, { x: 3, y: -8, z: -3 }, 2950, -9, -0.001, 0.000005);
        updateObjectPosition(pawn7, { x: 1, y: 14, z: 3 }, 2200, 5, 0.006, -0.000004);
        updateObjectPosition(pawn8, { x: -1, y: -10, z: -2 }, 4450, -2, -0.002, 0.000002);
      }

      renderer.render(scene, camera);
    }
    animate();

    const loader = new FontLoader();

    PrintText("Hello, My name is Shawn!", { x: -12, y: 2, z: -5 }, loader, scene, 1);
    PrintText("I'm a student at Colorado School of Mines.", { x: -15, y: 0, z: -5 }, loader, scene, 2);
    PrintText("I have a passion for programming", { x: -13, y: -2, z: -5 }, loader, scene, 3);
    PrintText("and creating cool stuff!", { x: -11, y: -4, z: -5 }, loader, scene, 4);

    importModels(scene);
    window.addEventListener("resize", () => onWindowResize(camera, renderer), false);
  }

  function importModels(scene) {
    // Example of importing a model and setting position
    importModel("king", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      king = loadedModel;
    });

    importModel("queen", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      queen = loadedModel;
    });

    importModel("rook", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      rook = loadedModel;
    });

    importModel("rook", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      rook2 = loadedModel;
    });

    importModel("bishop", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      bishop = loadedModel;
    });

    importModel("bishop", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      bishop2 = loadedModel;
    });

    importModel("knight", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      knight = loadedModel;
    });

    importModel("knight", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      knight2 = loadedModel;
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      pawn = loadedModel;
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      pawn2 = loadedModel;
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      pawn3 = loadedModel;
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      pawn4 = loadedModel;
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      pawn5 = loadedModel;
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      pawn6 = loadedModel;
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      pawn7 = loadedModel;
    });

    importModel("pawn", scene, (loadedModel) => {
      loadedModel.position.z = 10;
      pawn8 = loadedModel;
    });
  }

  function updateObjectPosition(object, origin, delay, tiltY, xRot, zRot) {
    const radius = 15;
    const fps = 0.001;
    const hoverRadiusX = 5;
    const hoverRadiusZ = 5;

    object.rotation.x += xRot;
    object.rotation.z += zRot;

    object.position.y = Math.sin((Date.now() + delay) * fps) * 1;
    object.position.x = origin.x + radius * Math.cos((Date.now() + delay) * fps);
    object.position.z = origin.z - 15 + radius * Math.sin((Date.now() + delay) * fps);

    object.position.x += Math.cos((Date.now() + delay) * fps) * hoverRadiusX;
    object.position.y += tiltY * Math.sin((Date.now() + delay) * fps);
    object.position.z += Math.sin((Date.now() + delay) * fps) * hoverRadiusX;
  }

  function onWindowResize(camera, renderer) {
    camera.aspect = window.innerWidth / Height;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, Height);
    textMeshScale(window.innerWidth / 14000, 300 / window.innerWidth);
  }

  const textMeshScale = (scale, ydiff) => {
    text1.scale.set(scale, scale, scale);
    text1.position.y = 2 + ydiff;
    text1.position.x = -12 * (window.innerWidth / 1700);
    text2.scale.set(scale, scale, scale);
    text2.position.y = ydiff * 2;
    text2.position.x = -15 * (window.innerWidth / 1700);
    text3.scale.set(scale, scale, scale);
    text3.position.y = -2 + ydiff * 3;
    text3.position.x = -13 * (window.innerWidth / 1700);
    text4.scale.set(scale, scale, scale);
    text4.position.y = -4 + ydiff * 4;
    text4.position.x = -11 * (window.innerWidth / 1700);
  };

  const PrintText = (Text, Pos, loader, scene, num) => {
    loader.load("/Fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry(Text, {
        font: font,
        size: 10, // Increased size for better visibility and to handle bevels properly
        height: 2, // Adjusted for proportionality
        depth: 1, // Consistent depth
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.2, // Reduced to prevent overlap and distortion
        bevelSize: 0.2, // Reduced size
        bevelOffset: 0,
        bevelSegments: 5,
      });
      const textMaterial = new THREE.MeshStandardMaterial({ color: 0xe6e6e6 });
      const textMesh = new THREE.Mesh(geometry, textMaterial);
      scene.add(textMesh);
      const scale = window.innerWidth / 14000;
      const yDiff = 300 / window.innerWidth;
      textMesh.scale.set(scale, scale, scale);
      textMesh.position.set((Pos.x * window.innerWidth) / 1700, Pos.y + yDiff * num, Pos.z);
      if (num == 1) text1 = textMesh;
      if (num == 2) text2 = textMesh;
      if (num == 3) text3 = textMesh;
      if (num == 4) text4 = textMesh;
    });
  };

  initScene();
};

export default Three;
