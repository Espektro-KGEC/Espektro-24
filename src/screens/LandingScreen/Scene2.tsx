/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: born2012 (https://sketchfab.com/born2012)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cyberpunk-city-1-14d2eaa145ee42938e004115871adf6c
Title: Cyberpunk City - #1
*/
import React, { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import {  useThree } from "react-three-fiber";
import { useControls } from "leva";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface CustomNodes {
  [key: string]: {
    geometry: any; // Replace 'any' with the actual type of geometry
  };
}

interface SceneProps {
  scale: number;
  className?: string;
  // Define props here if your component accepts any
}

const Scene2: React.FC<SceneProps> = (props) => {
  const { nodes, materials } = useGLTF("/scene.gltf") as unknown as {
    nodes: CustomNodes;
    materials: any;
  };

  const tl = gsap.timeline();
  const { camera, scene } = useThree();

  // // ----- used for getting the position for the shoes ----
  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  // 	cameraPosition: {
  // 		value: {
  // 			x: 6.05,
  // 			y: -0.80,
  // 			z: -4.35,
  // 		},
  // 		step: 0.05,
  // 	},
  // 	scenePosition: {
  // 		value: { x:   5.50, y: -1.55, z: -6.90 },
  // 		step: 0.05,
  // 	},

  // 	sceneRotation: {
  // 		value: { x: 0.08, y: -0.30, z: 0.03 },
  // 		step: 0.01,
  // 	},
  // });

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(camera.position, {
      x: 6.25,
      y: -0.50,
      z: -5.40,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(scene.position, {
        x: 5.5,
        y:-1.60,
        z: -6.90,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.rotation, {
        x: 0.08,
        y: -0.3,
        z: 0.03,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // component - BuyNow.tsx
      .to(camera.position, {
        x: 6.05,
        y: -0.85,
        z: -5.25,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 6.90,
        y: -1.55,
        z: -6.30,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: -0.12,
        y: -0.62,
        z: 0.03,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(camera.position, {
        x: 6.05,
        y: -0.2,
        z: -6.6,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 5.35,
        y: -1.55,
        z: -7.3,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.rotation, {
        x: -0.02,
        y: -1.52,
        z: 0.0,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, []);

  // useFrame(() => {
  // 	camera.position.x = cameraPosition.x;
  // 	camera.position.y = cameraPosition.y;
  // 	camera.position.z = cameraPosition.z;
  // 	scene.position.x = scenePosition.x;
  // 	scene.position.y = scenePosition.y;
  // 	scene.position.z = scenePosition.z;
  // 	scene.rotation.x = sceneRotation.x;
  // 	scene.rotation.y = sceneRotation.y;
  // 	scene.rotation.z = sceneRotation.z;
  // });


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.449}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.015}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Meshpart1Mtl} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Meshpart2Mtl} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.Meshpart3Mtl} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.Meshpart4Mtl} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.Meshpart5Mtl} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.Meshpart6Mtl} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.Meshpart7Mtl} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.Meshpart8Mtl} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.Meshpart9Mtl} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Meshpart11Mtl} />
            <mesh geometry={nodes.Object_14.geometry} material={materials.Meshpart12Mtl} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.Meshpart13Mtl} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Meshpart14Mtl} />
            <mesh geometry={nodes.Object_17.geometry} material={materials.Meshpart15Mtl} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.Meshpart16Mtl} />
            <mesh geometry={nodes.Object_19.geometry} material={materials.Meshpart17Mtl} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.Meshpart18Mtl} />
            <mesh geometry={nodes.Object_21.geometry} material={materials.Meshpart19Mtl} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.Meshpart20Mtl} />
            <mesh geometry={nodes.Object_23.geometry} material={materials.Meshpart21Mtl} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.Meshpart22Mtl} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.Meshpart23Mtl} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.Meshpart24Mtl} />
            <mesh geometry={nodes.Object_27.geometry} material={materials.Meshpart26Mtl} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.Meshpart27Mtl} />
            <mesh geometry={nodes.Object_29.geometry} material={materials.Meshpart28Mtl} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.Meshpart30Mtl} />
            <mesh geometry={nodes.Object_31.geometry} material={materials.Meshpart32Mtl} />
            <mesh geometry={nodes.Object_32.geometry} material={materials.Meshpart35Mtl} />
            <mesh geometry={nodes.Object_33.geometry} material={materials.Meshpart36Mtl} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Scene2;

useGLTF.preload("/scene.gltf");
