import React, { Suspense } from "react";

import { Canvas, useLoader, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function TheModel() {
  let mixer: THREE.AnimationMixer | null = null;
  const { scene, animations } = useLoader(GLTFLoader, "/mech_drone(1).glb");
  mixer = new THREE.AnimationMixer(scene);
  void mixer.clipAction(animations[0]).play();
  void mixer.clipAction(animations[1]).play();
  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });
  return <primitive object={scene} position={[0, 0, 0]} />;
}

export default function Model2() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense fallback={null}>
          <TheModel />
        </Suspense>
      </Canvas>
    </>
  );
}
