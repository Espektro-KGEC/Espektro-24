import React, { Suspense, useRef } from "react";
import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import Preloadpage from "./Preloadanim";
import { OrbitControls,useCursor } from '@react-three/drei/OrbitControls';
import "./styles.module.scss"


interface ModelProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

function Model(props: ModelProps): JSX.Element {
  
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF('/untitled.gltf') as { nodes: any, materials: any, animations: any };
  useAnimations(animations, group.current!);
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]} />
              <group name="������002_25" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.material_3} />
              </group>
              <group name="������003_26" position={[-0.123, 0.003, 0.105]} scale={[1, 1, 0.409]}>
                <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.material_3} />
              </group>
              <group name="������004_27" position={[-0.533, 0.003, 0.174]} scale={[1, 1, 0.93]}>
                <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.material_3} position={[0, 0, 0.999]} />
              </group>
              <group name="������005_28" position={[0.503, 0.011, 1.453]} scale={[1, 1, 0.749]}>
                <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.material_3} />
              </group>
              <group name="������006_29" position={[-1.415, 0.003, 1.3]} scale={[1, 1, 1.449]}>
                <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.material_3} position={[0, 0.003, 0.641]} />
              </group>
              <group name="������007_30" position={[-1.962, 0.003, 1.875]} scale={[1, 1, 0.636]}>
                <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.material_3} position={[-0.259, 0, 1.461]} />
              </group>
              <group name="������008_31" position={[0.5, 0.011, 1.463]} scale={[1, 1, 0.887]}>
                <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.material_3} />
              </group>
              <group name="������009_32" position={[0.5, 0.011, 1.462]} scale={[1, 1, 0.787]}>
                <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.material_3} />
              </group>
              <group name="������010_33" position={[2.154, 0.003, 0.827]} scale={[1, 1, 0.619]}>
                <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.material_3} position={[-4.733, -0.118, 2.598]} />
              </group>
              <group name="������011_34" position={[1.744, 0.003, 1.896]} scale={[1, 1, 0.846]} />
              <group name="������012_35" position={[1.046, 0.011, -1.09]} scale={[1, 1, 0.913]} />
              <group name="������013_36" position={[-0.212, 0.003, -0.32]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.183]} />
              <group name="������014_37" position={[-0.157, 0.003, 0.205]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.272]} />
              <group name="������015_38" position={[1.046, 0.011, -1.09]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.303]} />
              <group name="������016_39" position={[-0.354, 0.003, 1.038]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.251]}>
                <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.material_3} position={[0.027, -0.121, -5.933]} />
              </group>
              <group name="������017_40" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.material_3} position={[-0.18, -0.121, -6.179]} />
              </group>
              <group name="������018_41" position={[0.126, 0.003, 1.758]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.147]}>
                <mesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials.material_3} position={[-0.903, -0.121, -6.468]} />
              </group>
              <group name="������019_42" position={[1.173, 0.003, 2.222]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.235]}>
                <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.material_3} position={[-1.115, -0.121, -6.234]} />
              </group>
              <group name="������020_43" position={[0.34, 0.003, -2.711]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.094]}>
                <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.material_3} />
              </group>
              <group name="������021_44" position={[1.265, 0.003, -2.173]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.473]}>
                <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.material_3} position={[0.132, -0.121, -5.387]} />
              </group>
              <group name="������022_45" position={[0.185, 0.003, -1.743]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.045]}>
                <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.material_3} position={[0, -0.121, -7.1]} />
              </group>
              <group name="������023_46" position={[0.144, 0.003, -1.487]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.067]} />
              <group name="������024_47" position={[0.244, 0.003, -0.937]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.111]} />
              <group name="������028_51" position={[-0.783, 0.003, -12.44]} scale={[1, 1, 0.58]} />
              <group name="������031_54" position={[-1.799, 0.003, -10.599]} scale={[1, 1, 0.245]} />
              <group name="������035_58" position={[1.494, 0.003, -11.245]} scale={[1, 1, 0.941]} />
              <group name="������039_62" position={[1.17, 0.003, -11.502]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 0.847]} />
              <group name="������040_63" position={[0.509, 0.003, -11.102]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 0.824]} />
              <group name="������041_76" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="������042_64" position={[1.564, 0.003, -10.382]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 0.967]}>
                <mesh name="Object_148" geometry={nodes.Object_148.geometry} material={materials.material_3} />
              </group>
              <group name="������043_65" position={[1.453, 0.003, -9.918]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 0.925]}>
                <mesh name="Object_150" geometry={nodes.Object_150.geometry} material={materials.material_3} />
              </group>
              <group name="������050_80" position={[-12.51, 0.003, -1.995]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.717]}>
                <mesh name="Object_187" geometry={nodes.Object_187.geometry} material={materials.material_3} />
              </group>
              <group name="������051_81" position={[-11.965, 0.003, -2.796]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.564]}>
                <mesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.material_3} />
              </group>
              <group name="������054_84" position={[-10.673, 0.003, -2.961]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.749]}>
                <mesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials.material_3} />
              </group>
              <group name="������055_85" position={[-10.126, 0.003, -4.777]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.245]} />
              <group name="������073_103" position={[-8.628, 0.003, -6.543]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.717]}>
                <mesh name="Object_233" geometry={nodes.Object_233.geometry} material={materials.material_3} />
              </group>
              <group name="������074_104" position={[-8.083, 0.003, -7.344]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.564]}>
                <mesh name="Object_235" geometry={nodes.Object_235.geometry} material={materials.material_3} />
              </group>
              <group name="������075_105" position={[-7.673, 0.003, -7.938]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.58]}>
                <mesh name="Object_237" geometry={nodes.Object_237.geometry} material={materials.material_3} />
              </group>
              <group name="������076_106" position={[-7.338, 0.003, -7.272]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 1.199]} />
              <group name="������077_107" position={[-6.791, 0.003, -7.509]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.749]}>
                <mesh name="Object_241" geometry={nodes.Object_241.geometry} material={materials.material_3} />
              </group>
              <group name="������093_124" position={[1.137, 0.003, -9.049]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 0.489]}>
                <mesh name="Object_275" geometry={nodes.Object_275.geometry} material={materials.material_3} />
              </group>
              <group name="������094_125" position={[3.239, 0.003, -9.578]} rotation={[-Math.PI, 1.005, -Math.PI]} scale={[1, 1, 0.385]}>
                <mesh name="Object_277" geometry={nodes.Object_277.geometry} material={materials.material_3} />
              </group>
              <group name="������095_126" position={[-0.934, 0.003, -9.494]} rotation={[0, 1.069, 0]} scale={[1, 1, 0.385]}>
                <mesh name="Object_279" geometry={nodes.Object_279.geometry} material={materials.material_3} />
              </group>
              <group name="������096_127" position={[-2.339, 0.003, -11.625]} scale={[1, 1, 0.749]} />
              <group name="������098_128" position={[-10.663, 0.003, -0.709]} rotation={[-Math.PI, 0.419, -Math.PI]} scale={[1, 1, 1.199]}>
                <mesh name="Object_283" geometry={nodes.Object_283.geometry} material={materials.material_3} />
              </group>
              <group name="������_123" position={[-2.287, -0.009, -6.352]} scale={24.478}>
                <mesh name="Object_273" geometry={nodes.Object_273.geometry} material={materials['.002']} position={[0.393, 0.045, 0.27]} />
              </group>
              <group name="������_129" position={[1.879, -0.003, 1.899]} />
              <group name="������_13" position={[0.617, -0.002, 0.388]} rotation={[0, -Math.PI / 2, 0]} scale={0.936}>
                <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.material} position={[2.401, 0, 0.003]} />
              </group>
              <group name="���������001_1" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material} position={[0.163, 0.009, -0.858]} />
              </group>
              <group name="���������002_3" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.material} position={[-4.542, -0.137, -0.618]} />
              </group>
              <group name="���������003_2" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.material} position={[8.645, 1.11, 1.086]} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.logos} position={[-0.403, 0.003, -3.04]} />
              </group>
              <group name="���������004_5" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.material} position={[2.933, 0.007, -0.748]} />
                <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.red_light} position={[-1.432, 0.004, 0]} />
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.logos} position={[2.623, 0.007, -0.542]} />
              </group>
              <group name="���������005_6" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.material} position={[-8.704, -0.193, 0.078]} />
              </group>
              <group name="���������006_7" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.material} position={[-1.57, 0.005, -0.465]} />
              </group>
              <group name="���������007_10" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������008_8" position={[-0.358, 0, 0.894]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.material} />
              </group>
              <group name="���������009_9" position={[-4.304, -0.118, 0.056]}>
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.material} position={[-4.101, 1.001, 0.056]} />
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.logos} />
              </group>
              <group name="���������010_14" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.material} position={[-0.174, 0.462, -3.623]} />
              </group>
              <group name="���������011_12" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.material} position={[5.82, 0.922, -5.516]} />
              </group>
              <group name="���������012_11" position={[0.869, 0.001, 0.851]} scale={[0.057, 0.103, 0.057]}>
                <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.material} />
              </group>
              <group name="���������013_15" position={[1.046, 0.011, -1.09]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.material} position={[1.826, 0.02, -3.841]} />
              </group>
              <group name="���������014_16" position={[-0.419, -0.001, 1.439]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.material} position={[-0.565, -0.116, -0.999]} />
                <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.logos} />
              </group>
              <group name="���������015_17" position={[-0.008, 0, 0.926]} rotation={[0, Math.PI / 2, 0]} scale={0.112} />
              <group name="���������016_18" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.material} position={[-16.417, 0.03, 16.774]} />
              </group>
              <group name="���������017_75" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials.material} position={[645.446, 0.114, 0]} />
              </group>
              <group name="���������018_19" position={[-1.038, -0.128, 0.883]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.material} position={[1.823, 1.029, -2.327]} />
                <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.red_light} position={[0, -0.001, 0.707]} />
                <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.logos} />
              </group>
              <group name="���������019_20" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.material} position={[-0.829, 0.009, -0.811]} />
              </group>
              <group name="���������020_71" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.material} position={[-2.185, -0.238, -2.011]} />
              </group>
              <group name="���������021_72" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials.material} position={[0.788, 0.286, 0.775]} />
              </group>
              <group name="���������022_73" position={[1.046, 0.011, -1.091]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.material} position={[-3.64, 0.009, 5.577]} />
                <mesh name="Object_169" geometry={nodes.Object_169.geometry} material={materials.logos} position={[-3.64, 0.009, 5.577]} />
                <mesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials.red_light} position={[-3.64, 0.009, 5.577]} />
              </group>
              <group name="���������023_74" position={[0.503, 0.011, 1.453]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.material} position={[0.81, 0.007, 5.274]} />
                <mesh name="Object_173" geometry={nodes.Object_173.geometry} material={materials.red_light} />
              </group>
              <group name="���������024_77" position={[1.913, -0.001, -2.438]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.material} />
                <mesh name="Object_181" geometry={nodes.Object_181.geometry} material={materials.logos} />
              </group>
              <group name="���������025_78" position={[0.5, 0.011, 1.462]} rotation={[0, Math.PI / 2, 0]} scale={[0.639, 0.611, 0.639]}>
                <mesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.material} />
              </group>
              <group name="���������027_134" position={[-4.304, -0.118, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289" geometry={nodes.Object_289.geometry} material={materials['1.001']} position={[3.258, 1.373, 7.869]} />
              </group>
              <group name="���������_0" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} position={[1.167, 0.013, -1.526]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" position={[0, 0, -4.078]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73001" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168001" geometry={nodes.Object_168001.geometry} material={materials['material.001']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model002" position={[0, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root002">
            <group name="GLTF_SceneRootNode002" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24001" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68001" geometry={nodes.Object_68001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������002_25001" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70001" geometry={nodes.Object_70001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������003_26001" position={[-0.123, 0.003, 0.105]} scale={[1, 1, 0.409]}>
                <mesh name="Object_72001" geometry={nodes.Object_72001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������004_27001" position={[-0.533, 0.003, 0.174]} scale={[1, 1, 0.93]}>
                <mesh name="Object_74001" geometry={nodes.Object_74001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������005_28001" position={[-0.868, 0.003, 2.075]} scale={[1, 1, 0.749]}>
                <mesh name="Object_76001" geometry={nodes.Object_76001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������006_29001" position={[-1.415, 0.003, 1.3]} scale={[1, 1, 1.449]}>
                <mesh name="Object_78001" geometry={nodes.Object_78001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������007_30001" position={[-1.962, 0.003, 1.875]} scale={[1, 1, 0.636]}>
                <mesh name="Object_80001" geometry={nodes.Object_80001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������013_36001" position={[-0.212, 0.003, -0.32]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.183]}>
                <mesh name="Object_92001" geometry={nodes.Object_92001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������014_37001" position={[-0.157, 0.003, 0.205]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.272]}>
                <mesh name="Object_94001" geometry={nodes.Object_94001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������015_38001" position={[1.182, 0.003, 0.638]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.303]}>
                <mesh name="Object_96001" geometry={nodes.Object_96001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������016_39001" position={[-0.354, 0.003, 1.038]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.251]}>
                <mesh name="Object_98001" geometry={nodes.Object_98001.geometry} material={materials['material_3.001']} position={[0, 0, -3.975]} />
              </group>
              <group name="������017_40001" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100001" geometry={nodes.Object_100001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������018_41001" position={[0.126, 0.003, 1.758]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.147]}>
                <mesh name="Object_102001" geometry={nodes.Object_102001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������019_42001" position={[1.173, 0.003, 2.222]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.235]}>
                <mesh name="Object_104001" geometry={nodes.Object_104001.geometry} material={materials['material_3.001']} position={[0.016, 0, 1.434]} />
              </group>
              <group name="������021_44001" position={[1.265, 0.003, -2.173]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.473]}>
                <mesh name="Object_108001" geometry={nodes.Object_108001.geometry} material={materials['material_3.001']} position={[0, 0, 6.681]} />
              </group>
              <group name="������022_45001" position={[0.185, 0.003, -1.743]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.045]}>
                <mesh name="Object_110001" geometry={nodes.Object_110001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������023_46001" position={[0.144, 0.003, -1.487]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.067]}>
                <mesh name="Object_112001" geometry={nodes.Object_112001.geometry} material={materials['material_3.001']} />
              </group>
              <group name="������024_47001" position={[0.244, 0.003, -0.937]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.111]}>
                <mesh name="Object_114001" geometry={nodes.Object_114001.geometry} material={materials['material_3.001']} position={[0.405, -0.261, 0.118]} />
              </group>
              <group name="������_13001" position={[0.617, -0.002, 0.388]} rotation={[0, -Math.PI / 2, 0]} scale={0.936}>
                <mesh name="Object_45001" geometry={nodes.Object_45001.geometry} material={materials['material.002']} />
                <mesh name="Object_46001" geometry={nodes.Object_46001.geometry} material={materials['logos.001']} />
              </group>
              <group name="���������001_1001" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8001" geometry={nodes.Object_8001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������002_3001" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16001" geometry={nodes.Object_16001.geometry} material={materials['material.002']} position={[0.101, -0.201, -0.312]} />
                <mesh name="Object_17001" geometry={nodes.Object_17001.geometry} material={materials['red_light.001']} />
              </group>
              <group name="���������003_2001" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12001" geometry={nodes.Object_12001.geometry} material={materials['material.002']} />
                <mesh name="Object_13001" geometry={nodes.Object_13001.geometry} material={materials['red_light.001']} />
                <mesh name="Object_14001" geometry={nodes.Object_14001.geometry} material={materials['logos.001']} />
              </group>
              <group name="���������004_5001" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20001" geometry={nodes.Object_20001.geometry} material={materials['material.002']} />
                <mesh name="Object_21001" geometry={nodes.Object_21001.geometry} material={materials['red_light.001']} />
                <mesh name="Object_22001" geometry={nodes.Object_22001.geometry} material={materials['logos.001']} />
              </group>
              <group name="���������005_6001" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24001" geometry={nodes.Object_24001.geometry} material={materials['material.002']} />
                <mesh name="Object_25001" geometry={nodes.Object_25001.geometry} material={materials['red_light.001']} />
              </group>
              <group name="���������006_7001" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27001" geometry={nodes.Object_27001.geometry} material={materials['material.002']} />
                <mesh name="Object_28001" geometry={nodes.Object_28001.geometry} material={materials['red_light.001']} />
              </group>
              <group name="���������007_10001" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������008_8001" position={[-0.358, 0, 0.894]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_30001" geometry={nodes.Object_30001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������009_9001" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32001" geometry={nodes.Object_32001.geometry} material={materials['material.002']} />
                <mesh name="Object_33001" geometry={nodes.Object_33001.geometry} material={materials['red_light.001']} />
                <mesh name="Object_34001" geometry={nodes.Object_34001.geometry} material={materials['logos.001']} />
              </group>
              <group name="���������010_14001" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48001" geometry={nodes.Object_48001.geometry} material={materials['material.002']} />
                <mesh name="Object_50001" geometry={nodes.Object_50001.geometry} material={materials['logos.001']} />
              </group>
              <group name="���������011_12001" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41001" geometry={nodes.Object_41001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������012_11001" position={[0.869, 0.001, 0.851]} scale={[0.057, 0.103, 0.057]}>
                <mesh name="Object_39001" geometry={nodes.Object_39001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������013_15001" position={[1.567, 0, 0.296]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52001" geometry={nodes.Object_52001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������014_16001" position={[-0.419, -0.001, 1.439]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_54001" geometry={nodes.Object_54001.geometry} material={materials['material.002']} />
                <mesh name="Object_55001" geometry={nodes.Object_55001.geometry} material={materials['logos.001']} />
              </group>
              <group name="���������015_17001" position={[-0.008, 0, 0.926]} rotation={[0, Math.PI / 2, 0]} scale={0.112}>
                <mesh name="Object_57001" geometry={nodes.Object_57001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������016_18001" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59001" geometry={nodes.Object_59001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������017_75001" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176001" geometry={nodes.Object_176001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������018_19001" position={[-1.038, -0.128, 0.883]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_61001" geometry={nodes.Object_61001.geometry} material={materials['material.002']} />
                <mesh name="Object_62001" geometry={nodes.Object_62001.geometry} material={materials['red_light.001']} />
                <mesh name="Object_63001" geometry={nodes.Object_63001.geometry} material={materials['logos.001']} />
              </group>
              <group name="���������019_20001" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65001" geometry={nodes.Object_65001.geometry} material={materials['material.002']} />
              </group>
              <group name="���������020_71001" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162001" geometry={nodes.Object_162001.geometry} material={materials['material.002']} />
                <mesh name="Object_163001" geometry={nodes.Object_163001.geometry} material={materials['logos.001']} />
              </group>
              <group name="���������021_72001" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165001" geometry={nodes.Object_165001.geometry} material={materials['material.002']} />
                <mesh name="Object_166001" geometry={nodes.Object_166001.geometry} material={materials['red_light.001']} />
              </group>
              <group name="���������022_73002" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168002" geometry={nodes.Object_168002.geometry} material={materials['material.002']} />
                <mesh name="Object_169001" geometry={nodes.Object_169001.geometry} material={materials['logos.001']} />
                <mesh name="Object_170001" geometry={nodes.Object_170001.geometry} material={materials['red_light.001']} />
              </group>
              <group name="���������027_134001" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289001" geometry={nodes.Object_289001.geometry} material={materials['1.002']} position={[0, 0, -17.914]} />
              </group>
              <group name="���������_0001" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4001" geometry={nodes.Object_4001.geometry} material={materials['material.002']} />
                <mesh name="Object_5001" geometry={nodes.Object_5001.geometry} material={materials['red_light.001']} />
                <mesh name="Object_6001" geometry={nodes.Object_6001.geometry} material={materials['logos.001']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model004" position={[8.039, 1.034, -6.812]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root004">
            <group name="GLTF_SceneRootNode004" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24002" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68002" geometry={nodes.Object_68002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������002_25002" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70002" geometry={nodes.Object_70002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������003_26002" position={[-0.123, 0.003, 0.105]} scale={[1, 1, 0.409]}>
                <mesh name="Object_72002" geometry={nodes.Object_72002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������004_27002" position={[-0.533, 0.003, 0.174]} scale={[1, 1, 0.93]}>
                <mesh name="Object_74002" geometry={nodes.Object_74002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������005_28002" position={[-0.868, 0.003, 2.075]} scale={[1, 1, 0.749]}>
                <mesh name="Object_76002" geometry={nodes.Object_76002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������006_29002" position={[-1.415, 0.003, 1.3]} scale={[1, 1, 1.449]}>
                <mesh name="Object_78002" geometry={nodes.Object_78002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������013_36002" position={[-0.212, 0.003, -0.32]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.183]}>
                <mesh name="Object_92002" geometry={nodes.Object_92002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������014_37002" position={[-0.157, 0.003, 0.205]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.272]}>
                <mesh name="Object_94002" geometry={nodes.Object_94002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������015_38002" position={[1.182, 0.003, 0.638]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.303]}>
                <mesh name="Object_96003" geometry={nodes.Object_96003.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������023_46002" position={[0.144, 0.003, -1.487]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.067]}>
                <mesh name="Object_112002" geometry={nodes.Object_112002.geometry} material={materials['material_3.003']} />
              </group>
              <group name="������024_47002" position={[0.244, 0.003, -0.937]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.111]}>
                <mesh name="Object_114003" geometry={nodes.Object_114003.geometry} material={materials['material_3.003']} position={[0.405, -0.261, 0.118]} />
              </group>
              <group name="������_13002" position={[0.617, -0.002, 0.388]} rotation={[0, -Math.PI / 2, 0]} scale={0.936}>
                <mesh name="Object_45002" geometry={nodes.Object_45002.geometry} material={materials['material.003']} />
                <mesh name="Object_46002" geometry={nodes.Object_46002.geometry} material={materials['logos.002']} />
              </group>
              <group name="���������001_1002" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8002" geometry={nodes.Object_8002.geometry} material={materials['material.003']} />
              </group>
              <group name="���������002_3002" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16002" geometry={nodes.Object_16002.geometry} material={materials['material.003']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2002" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12002" geometry={nodes.Object_12002.geometry} material={materials['material.003']} />
              </group>
              <group name="���������004_5002" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20002" geometry={nodes.Object_20002.geometry} material={materials['material.003']} />
                <mesh name="Object_21002" geometry={nodes.Object_21002.geometry} material={materials['red_light.002']} />
                <mesh name="Object_22002" geometry={nodes.Object_22002.geometry} material={materials['logos.002']} />
              </group>
              <group name="���������005_6002" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24002" geometry={nodes.Object_24002.geometry} material={materials['material.003']} position={[0, -0.086, 0]} />
                <mesh name="Object_25002" geometry={nodes.Object_25002.geometry} material={materials['red_light.002']} />
              </group>
              <group name="���������006_7002" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27002" geometry={nodes.Object_27002.geometry} material={materials['material.003']} />
              </group>
              <group name="���������009_9002" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32002" geometry={nodes.Object_32002.geometry} material={materials['material.003']} />
                <mesh name="Object_33002" geometry={nodes.Object_33002.geometry} material={materials['red_light.002']} />
                <mesh name="Object_34002" geometry={nodes.Object_34002.geometry} material={materials['logos.002']} />
              </group>
              <group name="���������010_14002" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48002" geometry={nodes.Object_48002.geometry} material={materials['material.003']} />
                <mesh name="Object_50002" geometry={nodes.Object_50002.geometry} material={materials['logos.002']} />
              </group>
              <group name="���������011_12002" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41002" geometry={nodes.Object_41002.geometry} material={materials['material.003']} position={[0, -0.113, 0]} />
              </group>
              <group name="���������013_15002" position={[1.567, 0, 0.296]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52002" geometry={nodes.Object_52002.geometry} material={materials['material.003']} />
              </group>
              <group name="���������016_18002" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59002" geometry={nodes.Object_59002.geometry} material={materials['material.003']} />
              </group>
              <group name="���������019_20002" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65002" geometry={nodes.Object_65002.geometry} material={materials['material.003']} />
              </group>
              <group name="���������020_71002" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162003" geometry={nodes.Object_162003.geometry} material={materials['material.003']} />
                <mesh name="Object_163002" geometry={nodes.Object_163002.geometry} material={materials['logos.002']} />
              </group>
              <group name="���������022_73003" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168004" geometry={nodes.Object_168004.geometry} material={materials['material.003']} />
              </group>
              <group name="���������027_134002" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]} />
              <group name="���������_0002" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4002" geometry={nodes.Object_4002.geometry} material={materials['material.003']} />
                <mesh name="Object_5002" geometry={nodes.Object_5002.geometry} material={materials['red_light.002']} />
                <mesh name="Object_6002" geometry={nodes.Object_6002.geometry} material={materials['logos.002']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model003" position={[2.675, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root003">
            <group name="GLTF_SceneRootNode003" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������007_10002" position={[0.747, 0.287, -1.218]} scale={1.463} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model005" position={[8.039, 1.034, -2.468]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root005">
            <group name="GLTF_SceneRootNode005" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1003" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8003" geometry={nodes.Object_8003.geometry} material={materials['material.005']} position={[0, -0.212, 0]} />
              </group>
              <group name="���������002_3003" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16003" geometry={nodes.Object_16003.geometry} material={materials['material.005']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������010_14003" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_50003" geometry={nodes.Object_50003.geometry} material={materials['logos.003']} />
              </group>
              <group name="���������011_12003" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41003" geometry={nodes.Object_41003.geometry} material={materials['material.005']} position={[0.811, -0.113, -0.389]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model006" position={[2.726, 1.118, 7.727]} rotation={[-Math.PI / 2, 0, -1.426]}>
          <group name="root006">
            <group name="GLTF_SceneRootNode006" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76003" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="������_13003" position={[0.617, -0.002, 0.388]} rotation={[0, -1.571, 0]} scale={0.936}>
                <mesh name="Object_45003" geometry={nodes.Object_45003.geometry} material={materials['material.006']} />
                <mesh name="Object_46003" geometry={nodes.Object_46003.geometry} material={materials['logos.005']} />
              </group>
              <group name="���������001_1004" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8004" geometry={nodes.Object_8004.geometry} material={materials['material.006']} />
              </group>
              <group name="���������002_3004" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16004" geometry={nodes.Object_16004.geometry} material={materials['material.006']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2003" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12003" geometry={nodes.Object_12003.geometry} material={materials['material.006']} />
                <mesh name="Object_13002" geometry={nodes.Object_13002.geometry} material={materials['red_light.003']} />
                <mesh name="Object_14002" geometry={nodes.Object_14002.geometry} material={materials['logos.005']} />
              </group>
              <group name="���������004_5003" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20003" geometry={nodes.Object_20003.geometry} material={materials['material.006']} />
                <mesh name="Object_21003" geometry={nodes.Object_21003.geometry} material={materials['red_light.003']} />
                <mesh name="Object_22003" geometry={nodes.Object_22003.geometry} material={materials['logos.005']} />
              </group>
              <group name="���������005_6003" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24003" geometry={nodes.Object_24003.geometry} material={materials['material.006']} />
                <mesh name="Object_25003" geometry={nodes.Object_25003.geometry} material={materials['red_light.003']} />
              </group>
              <group name="���������006_7003" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27003" geometry={nodes.Object_27003.geometry} material={materials['material.006']} />
                <mesh name="Object_28002" geometry={nodes.Object_28002.geometry} material={materials['red_light.003']} />
              </group>
              <group name="���������007_10003" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������008_8002" position={[-0.358, 0, 0.894]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_30002" geometry={nodes.Object_30002.geometry} material={materials['material.006']} />
              </group>
              <group name="���������009_9003" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32003" geometry={nodes.Object_32003.geometry} material={materials['material.006']} />
                <mesh name="Object_33003" geometry={nodes.Object_33003.geometry} material={materials['red_light.003']} />
                <mesh name="Object_34003" geometry={nodes.Object_34003.geometry} material={materials['logos.005']} />
              </group>
              <group name="���������010_14004" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48004" geometry={nodes.Object_48004.geometry} material={materials['material.006']} />
                <mesh name="Object_50004" geometry={nodes.Object_50004.geometry} material={materials['logos.005']} />
              </group>
              <group name="���������011_12004" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41004" geometry={nodes.Object_41004.geometry} material={materials['material.006']} />
              </group>
              <group name="���������013_15003" position={[1.567, 0, 0.296]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52003" geometry={nodes.Object_52003.geometry} material={materials['material.006']} />
              </group>
              <group name="���������014_16002" position={[-0.419, -0.001, 1.439]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_54002" geometry={nodes.Object_54002.geometry} material={materials['material.006']} />
                <mesh name="Object_55002" geometry={nodes.Object_55002.geometry} material={materials['logos.005']} />
              </group>
              <group name="���������015_17002" position={[-0.008, 0, 0.926]} rotation={[0, 1.571, 0]} scale={0.112}>
                <mesh name="Object_57002" geometry={nodes.Object_57002.geometry} material={materials['material.006']} />
              </group>
              <group name="���������016_18003" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59003" geometry={nodes.Object_59003.geometry} material={materials['material.006']} />
              </group>
              <group name="���������017_75002" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176002" geometry={nodes.Object_176002.geometry} material={materials['material.006']} />
              </group>
              <group name="���������018_19002" position={[-1.038, -0.128, 0.883]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_61002" geometry={nodes.Object_61002.geometry} material={materials['material.006']} />
                <mesh name="Object_62002" geometry={nodes.Object_62002.geometry} material={materials['red_light.003']} />
                <mesh name="Object_63002" geometry={nodes.Object_63002.geometry} material={materials['logos.005']} />
              </group>
              <group name="���������019_20003" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65003" geometry={nodes.Object_65003.geometry} material={materials['material.006']} />
              </group>
              <group name="���������020_71003" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162002" geometry={nodes.Object_162002.geometry} material={materials['material.006']} />
                <mesh name="Object_163003" geometry={nodes.Object_163003.geometry} material={materials['logos.005']} />
              </group>
              <group name="���������021_72002" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165002" geometry={nodes.Object_165002.geometry} material={materials['material.006']} />
                <mesh name="Object_166002" geometry={nodes.Object_166002.geometry} material={materials['red_light.003']} />
              </group>
              <group name="���������022_73004" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168003" geometry={nodes.Object_168003.geometry} material={materials['material.006']} />
                <mesh name="Object_169002" geometry={nodes.Object_169002.geometry} material={materials['logos.005']} />
                <mesh name="Object_170002" geometry={nodes.Object_170002.geometry} material={materials['red_light.003']} />
              </group>
              <group name="���������027_134003" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289002" geometry={nodes.Object_289002.geometry} material={materials['1.003']} position={[0, 0, -17.914]} />
              </group>
              <group name="���������_0003" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4003" geometry={nodes.Object_4003.geometry} material={materials['material.006']} />
                <mesh name="Object_5003" geometry={nodes.Object_5003.geometry} material={materials['red_light.003']} />
                <mesh name="Object_6003" geometry={nodes.Object_6003.geometry} material={materials['logos.005']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model007" position={[0.654, 0, 8.029]} rotation={[-Math.PI / 2, 0, -1.426]}>
          <group name="root007">
            <group name="GLTF_SceneRootNode007" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73005" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168005" geometry={nodes.Object_168005.geometry} material={materials['material.008']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model008" position={[-3.381, -0.06, 8.618]} rotation={[-Math.PI / 2, 0, -1.426]}>
          <group name="root008">
            <group name="GLTF_SceneRootNode008" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76004" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1005" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8005" geometry={nodes.Object_8005.geometry} material={materials['material.007']} position={[0.163, 0.009, -0.858]} />
              </group>
              <group name="���������002_3005" position={[-0.107, 0.002, -1.108]} scale={1.298} />
              <group name="���������007_10004" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36001" geometry={nodes.Object_36001.geometry} material={materials['material.007']} position={[0.076, 0.582, -1.585]} />
              </group>
              <group name="���������010_14005" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48005" geometry={nodes.Object_48005.geometry} material={materials['material.007']} position={[-0.174, 0.462, -3.623]} />
              </group>
              <group name="���������011_12005" position={[-1.234, -0.002, 0.425]} />
              <group name="���������021_72003" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165003" geometry={nodes.Object_165003.geometry} material={materials['material.007']} position={[0.788, 0.911, 0.775]} />
              </group>
              <group name="���������026_133001" position={[1.417, 0.001, -13.448]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model009" position={[-4.428, 1.118, -6.081]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root009">
            <group name="GLTF_SceneRootNode009" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76005" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="������_13004" position={[0.617, -0.002, 0.388]} rotation={[0, -Math.PI / 2, 0]} scale={0.936}>
                <mesh name="Object_45004" geometry={nodes.Object_45004.geometry} material={materials['material.009']} />
                <mesh name="Object_46004" geometry={nodes.Object_46004.geometry} material={materials['logos.007']} />
              </group>
              <group name="���������001_1006" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8006" geometry={nodes.Object_8006.geometry} material={materials['material.009']} />
              </group>
              <group name="���������002_3006" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16005" geometry={nodes.Object_16005.geometry} material={materials['material.009']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2004" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12004" geometry={nodes.Object_12004.geometry} material={materials['material.009']} />
                <mesh name="Object_13003" geometry={nodes.Object_13003.geometry} material={materials['red_light.005']} />
                <mesh name="Object_14003" geometry={nodes.Object_14003.geometry} material={materials['logos.007']} />
              </group>
              <group name="���������004_5004" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20004" geometry={nodes.Object_20004.geometry} material={materials['material.009']} />
                <mesh name="Object_21004" geometry={nodes.Object_21004.geometry} material={materials['red_light.005']} />
                <mesh name="Object_22004" geometry={nodes.Object_22004.geometry} material={materials['logos.007']} />
              </group>
              <group name="���������005_6004" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24004" geometry={nodes.Object_24004.geometry} material={materials['material.009']} />
                <mesh name="Object_25004" geometry={nodes.Object_25004.geometry} material={materials['red_light.005']} />
              </group>
              <group name="���������006_7004" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27004" geometry={nodes.Object_27004.geometry} material={materials['material.009']} />
                <mesh name="Object_28003" geometry={nodes.Object_28003.geometry} material={materials['red_light.005']} />
              </group>
              <group name="���������007_10005" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������008_8003" position={[-0.358, 0, 0.894]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_30003" geometry={nodes.Object_30003.geometry} material={materials['material.009']} />
              </group>
              <group name="���������009_9004" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32004" geometry={nodes.Object_32004.geometry} material={materials['material.009']} />
                <mesh name="Object_33004" geometry={nodes.Object_33004.geometry} material={materials['red_light.005']} />
                <mesh name="Object_34004" geometry={nodes.Object_34004.geometry} material={materials['logos.007']} />
              </group>
              <group name="���������010_14006" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48006" geometry={nodes.Object_48006.geometry} material={materials['material.009']} />
                <mesh name="Object_50005" geometry={nodes.Object_50005.geometry} material={materials['logos.007']} />
              </group>
              <group name="���������011_12006" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41005" geometry={nodes.Object_41005.geometry} material={materials['material.009']} />
              </group>
              <group name="���������013_15004" position={[1.567, 0, 0.296]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52004" geometry={nodes.Object_52004.geometry} material={materials['material.009']} />
              </group>
              <group name="���������014_16003" position={[-0.419, -0.001, 1.439]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_54003" geometry={nodes.Object_54003.geometry} material={materials['material.009']} />
                <mesh name="Object_55003" geometry={nodes.Object_55003.geometry} material={materials['logos.007']} />
              </group>
              <group name="���������015_17003" position={[-0.008, 0, 0.926]} rotation={[0, Math.PI / 2, 0]} scale={0.112}>
                <mesh name="Object_57003" geometry={nodes.Object_57003.geometry} material={materials['material.009']} />
              </group>
              <group name="���������016_18004" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59004" geometry={nodes.Object_59004.geometry} material={materials['material.009']} />
              </group>
              <group name="���������017_75003" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176003" geometry={nodes.Object_176003.geometry} material={materials['material.009']} />
              </group>
              <group name="���������018_19003" position={[-1.038, -0.128, 0.883]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_61003" geometry={nodes.Object_61003.geometry} material={materials['material.009']} />
                <mesh name="Object_62003" geometry={nodes.Object_62003.geometry} material={materials['red_light.005']} />
                <mesh name="Object_63003" geometry={nodes.Object_63003.geometry} material={materials['logos.007']} />
              </group>
              <group name="���������019_20004" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65004" geometry={nodes.Object_65004.geometry} material={materials['material.009']} />
              </group>
              <group name="���������020_71004" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162004" geometry={nodes.Object_162004.geometry} material={materials['material.009']} />
                <mesh name="Object_163004" geometry={nodes.Object_163004.geometry} material={materials['logos.007']} />
              </group>
              <group name="���������021_72004" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165004" geometry={nodes.Object_165004.geometry} material={materials['material.009']} />
                <mesh name="Object_166003" geometry={nodes.Object_166003.geometry} material={materials['red_light.005']} />
              </group>
              <group name="���������022_73006" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168006" geometry={nodes.Object_168006.geometry} material={materials['material.009']} />
                <mesh name="Object_169003" geometry={nodes.Object_169003.geometry} material={materials['logos.007']} />
                <mesh name="Object_170003" geometry={nodes.Object_170003.geometry} material={materials['red_light.005']} />
              </group>
              <group name="���������027_134004" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289003" geometry={nodes.Object_289003.geometry} material={materials['1.004']} position={[0, 0, -17.914]} />
              </group>
              <group name="���������_0004" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4004" geometry={nodes.Object_4004.geometry} material={materials['material.009']} />
                <mesh name="Object_5004" geometry={nodes.Object_5004.geometry} material={materials['red_light.005']} />
                <mesh name="Object_6004" geometry={nodes.Object_6004.geometry} material={materials['logos.007']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model010" position={[-4.428, 0, -3.987]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root010">
            <group name="GLTF_SceneRootNode010" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73007" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168007" geometry={nodes.Object_168007.geometry} material={materials['material.011']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model011" position={[-4.428, -0.06, 0.091]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root011">
            <group name="GLTF_SceneRootNode011" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76006" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1007" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_10002" geometry={nodes.Object_10002.geometry} material={materials['red_light.006']} />
                <mesh name="Object_8007" geometry={nodes.Object_8007.geometry} material={materials['material.010']} position={[0.163, 0.009, -0.858]} />
                <mesh name="Object_9002" geometry={nodes.Object_9002.geometry} material={materials['logos.006']} />
              </group>
              <group name="���������002_3007" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_18002" geometry={nodes.Object_18002.geometry} material={materials['logos.006']} />
              </group>
              <group name="���������007_10006" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36002" geometry={nodes.Object_36002.geometry} material={materials['material.010']} position={[0.076, 0.582, -1.585]} />
              </group>
              <group name="���������010_14007" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48007" geometry={nodes.Object_48007.geometry} material={materials['material.010']} position={[-0.174, 0.462, -3.623]} />
              </group>
              <group name="���������011_12007" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_43002" geometry={nodes.Object_43002.geometry} material={materials['logos.006']} position={[1.05, 0.011, -1.086]} />
              </group>
              <group name="���������021_72005" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165005" geometry={nodes.Object_165005.geometry} material={materials['material.010']} position={[0.788, 0.911, 0.775]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model012" position={[13.445, 1.118, -4.717]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root012">
            <group name="GLTF_SceneRootNode012" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76007" position={[0.071, 0.001, -0.68]} scale={20} />
              <group name="������_13005" position={[0.617, -0.002, 0.388]} rotation={[0, -Math.PI / 2, 0]} scale={0.936}>
                <mesh name="Object_45005" geometry={nodes.Object_45005.geometry} material={materials['material.012']} />
                <mesh name="Object_46005" geometry={nodes.Object_46005.geometry} material={materials['logos.009']} />
              </group>
              <group name="���������001_1008" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8008" geometry={nodes.Object_8008.geometry} material={materials['material.012']} />
              </group>
              <group name="���������002_3008" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16006" geometry={nodes.Object_16006.geometry} material={materials['material.012']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2005" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12005" geometry={nodes.Object_12005.geometry} material={materials['material.012']} />
                <mesh name="Object_13004" geometry={nodes.Object_13004.geometry} material={materials['red_light.007']} />
                <mesh name="Object_14004" geometry={nodes.Object_14004.geometry} material={materials['logos.009']} />
              </group>
              <group name="���������004_5005" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20005" geometry={nodes.Object_20005.geometry} material={materials['material.012']} />
                <mesh name="Object_21005" geometry={nodes.Object_21005.geometry} material={materials['red_light.007']} />
                <mesh name="Object_22005" geometry={nodes.Object_22005.geometry} material={materials['logos.009']} />
              </group>
              <group name="���������005_6005" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24005" geometry={nodes.Object_24005.geometry} material={materials['material.012']} />
                <mesh name="Object_25005" geometry={nodes.Object_25005.geometry} material={materials['red_light.007']} />
              </group>
              <group name="���������006_7005" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27005" geometry={nodes.Object_27005.geometry} material={materials['material.012']} />
                <mesh name="Object_28004" geometry={nodes.Object_28004.geometry} material={materials['red_light.007']} />
              </group>
              <group name="���������007_10007" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������008_8004" position={[-0.358, 0, 0.894]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_30004" geometry={nodes.Object_30004.geometry} material={materials['material.012']} />
              </group>
              <group name="���������009_9005" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32005" geometry={nodes.Object_32005.geometry} material={materials['material.012']} />
                <mesh name="Object_33005" geometry={nodes.Object_33005.geometry} material={materials['red_light.007']} />
                <mesh name="Object_34005" geometry={nodes.Object_34005.geometry} material={materials['logos.009']} />
              </group>
              <group name="���������010_14008" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48008" geometry={nodes.Object_48008.geometry} material={materials['material.012']} />
                <mesh name="Object_50006" geometry={nodes.Object_50006.geometry} material={materials['logos.009']} />
              </group>
              <group name="���������011_12008" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41006" geometry={nodes.Object_41006.geometry} material={materials['material.012']} />
              </group>
              <group name="���������013_15005" position={[1.567, 0, 0.296]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52005" geometry={nodes.Object_52005.geometry} material={materials['material.012']} />
              </group>
              <group name="���������014_16004" position={[-0.419, -0.001, 1.439]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_54004" geometry={nodes.Object_54004.geometry} material={materials['material.012']} />
                <mesh name="Object_55004" geometry={nodes.Object_55004.geometry} material={materials['logos.009']} />
              </group>
              <group name="���������015_17004" position={[-0.008, 0, 0.926]} rotation={[0, Math.PI / 2, 0]} scale={0.112}>
                <mesh name="Object_57004" geometry={nodes.Object_57004.geometry} material={materials['material.012']} />
              </group>
              <group name="���������016_18005" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59005" geometry={nodes.Object_59005.geometry} material={materials['material.012']} />
              </group>
              <group name="���������017_75004" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176004" geometry={nodes.Object_176004.geometry} material={materials['material.012']} />
              </group>
              <group name="���������018_19004" position={[-1.038, -0.128, 0.883]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_61004" geometry={nodes.Object_61004.geometry} material={materials['material.012']} />
                <mesh name="Object_62004" geometry={nodes.Object_62004.geometry} material={materials['red_light.007']} />
                <mesh name="Object_63004" geometry={nodes.Object_63004.geometry} material={materials['logos.009']} />
              </group>
              <group name="���������019_20005" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65005" geometry={nodes.Object_65005.geometry} material={materials['material.012']} />
              </group>
              <group name="���������020_71005" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162005" geometry={nodes.Object_162005.geometry} material={materials['material.012']} />
                <mesh name="Object_163005" geometry={nodes.Object_163005.geometry} material={materials['logos.009']} />
              </group>
              <group name="���������021_72006" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165006" geometry={nodes.Object_165006.geometry} material={materials['material.012']} />
                <mesh name="Object_166004" geometry={nodes.Object_166004.geometry} material={materials['red_light.007']} />
              </group>
              <group name="���������022_73008" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168008" geometry={nodes.Object_168008.geometry} material={materials['material.012']} />
                <mesh name="Object_169004" geometry={nodes.Object_169004.geometry} material={materials['logos.009']} />
                <mesh name="Object_170004" geometry={nodes.Object_170004.geometry} material={materials['red_light.007']} />
              </group>
              <group name="���������027_134005" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289004" geometry={nodes.Object_289004.geometry} material={materials['1.005']} position={[0, 0, -17.914]} />
              </group>
              <group name="���������_0005" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4005" geometry={nodes.Object_4005.geometry} material={materials['material.012']} />
                <mesh name="Object_5005" geometry={nodes.Object_5005.geometry} material={materials['red_light.007']} />
                <mesh name="Object_6005" geometry={nodes.Object_6005.geometry} material={materials['logos.009']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model013" position={[13.445, 0, -2.623]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root013">
            <group name="GLTF_SceneRootNode013" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73009" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168009" geometry={nodes.Object_168009.geometry} material={materials['material.014']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model014" position={[13.445, -0.06, 1.455]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root014">
            <group name="GLTF_SceneRootNode014" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76008" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1009" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8009" geometry={nodes.Object_8009.geometry} material={materials['material.013']} position={[0.163, 0.009, -0.858]} />
              </group>
              <group name="���������002_3009" position={[-0.107, 0.002, -1.108]} scale={1.298} />
              <group name="���������007_10008" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36003" geometry={nodes.Object_36003.geometry} material={materials['material.013']} position={[0.076, 0.582, -1.585]} />
              </group>
              <group name="���������010_14009" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48009" geometry={nodes.Object_48009.geometry} material={materials['material.013']} position={[-0.174, 0.462, -3.623]} />
              </group>
              <group name="���������011_12009" position={[-1.234, -0.002, 0.425]} />
              <group name="���������021_72007" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165007" geometry={nodes.Object_165007.geometry} material={materials['material.013']} position={[0.788, 0.911, 0.775]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model015" position={[4.025, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root015">
            <group name="GLTF_SceneRootNode015" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������_13006" position={[0.617, -0.002, 0.388]} rotation={[0, -Math.PI / 2, 0]} scale={0.936}>
                <mesh name="Object_45006" geometry={nodes.Object_45006.geometry} material={materials['material.015']} />
                <mesh name="Object_46006" geometry={nodes.Object_46006.geometry} material={materials['logos.011']} />
              </group>
              <group name="���������001_1010" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8010" geometry={nodes.Object_8010.geometry} material={materials['material.015']} />
              </group>
              <group name="���������002_3010" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16007" geometry={nodes.Object_16007.geometry} material={materials['material.015']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2006" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12006" geometry={nodes.Object_12006.geometry} material={materials['material.015']} />
                <mesh name="Object_13005" geometry={nodes.Object_13005.geometry} material={materials['red_light.009']} />
                <mesh name="Object_14005" geometry={nodes.Object_14005.geometry} material={materials['logos.011']} />
              </group>
              <group name="���������004_5006" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20006" geometry={nodes.Object_20006.geometry} material={materials['material.015']} />
                <mesh name="Object_21006" geometry={nodes.Object_21006.geometry} material={materials['red_light.009']} />
                <mesh name="Object_22006" geometry={nodes.Object_22006.geometry} material={materials['logos.011']} />
              </group>
              <group name="���������005_6006" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24006" geometry={nodes.Object_24006.geometry} material={materials['material.015']} />
                <mesh name="Object_25006" geometry={nodes.Object_25006.geometry} material={materials['red_light.009']} />
              </group>
              <group name="���������006_7006" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27006" geometry={nodes.Object_27006.geometry} material={materials['material.015']} />
                <mesh name="Object_28005" geometry={nodes.Object_28005.geometry} material={materials['red_light.009']} />
              </group>
              <group name="���������007_10009" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������008_8005" position={[-0.358, 0, 0.894]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_30005" geometry={nodes.Object_30005.geometry} material={materials['material.015']} />
              </group>
              <group name="���������009_9006" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32006" geometry={nodes.Object_32006.geometry} material={materials['material.015']} />
                <mesh name="Object_33006" geometry={nodes.Object_33006.geometry} material={materials['red_light.009']} />
                <mesh name="Object_34006" geometry={nodes.Object_34006.geometry} material={materials['logos.011']} />
              </group>
              <group name="���������010_14010" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48010" geometry={nodes.Object_48010.geometry} material={materials['material.015']} />
                <mesh name="Object_50007" geometry={nodes.Object_50007.geometry} material={materials['logos.011']} />
              </group>
              <group name="���������011_12010" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41007" geometry={nodes.Object_41007.geometry} material={materials['material.015']} />
              </group>
              <group name="���������013_15006" position={[1.567, 0, 0.296]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52006" geometry={nodes.Object_52006.geometry} material={materials['material.015']} />
              </group>
              <group name="���������014_16005" position={[-0.419, -0.001, 1.439]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_54005" geometry={nodes.Object_54005.geometry} material={materials['material.015']} />
                <mesh name="Object_55005" geometry={nodes.Object_55005.geometry} material={materials['logos.011']} />
              </group>
              <group name="���������015_17005" position={[-0.008, 0, 0.926]} rotation={[0, Math.PI / 2, 0]} scale={0.112}>
                <mesh name="Object_57005" geometry={nodes.Object_57005.geometry} material={materials['material.015']} />
              </group>
              <group name="���������016_18006" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59006" geometry={nodes.Object_59006.geometry} material={materials['material.015']} />
              </group>
              <group name="���������017_75005" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176005" geometry={nodes.Object_176005.geometry} material={materials['material.015']} />
              </group>
              <group name="���������018_19005" position={[-1.038, -0.128, 0.883]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_61005" geometry={nodes.Object_61005.geometry} material={materials['material.015']} />
                <mesh name="Object_62005" geometry={nodes.Object_62005.geometry} material={materials['red_light.009']} />
                <mesh name="Object_63005" geometry={nodes.Object_63005.geometry} material={materials['logos.011']} />
              </group>
              <group name="���������019_20006" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65006" geometry={nodes.Object_65006.geometry} material={materials['material.015']} />
              </group>
              <group name="���������020_71006" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162006" geometry={nodes.Object_162006.geometry} material={materials['material.015']} />
                <mesh name="Object_163006" geometry={nodes.Object_163006.geometry} material={materials['logos.011']} />
              </group>
              <group name="���������021_72008" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165008" geometry={nodes.Object_165008.geometry} material={materials['material.015']} />
                <mesh name="Object_166005" geometry={nodes.Object_166005.geometry} material={materials['red_light.009']} />
              </group>
              <group name="���������022_73010" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168010" geometry={nodes.Object_168010.geometry} material={materials['material.015']} />
                <mesh name="Object_169005" geometry={nodes.Object_169005.geometry} material={materials['logos.011']} />
                <mesh name="Object_170005" geometry={nodes.Object_170005.geometry} material={materials['red_light.009']} />
              </group>
              <group name="���������027_134006" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289005" geometry={nodes.Object_289005.geometry} material={materials['1.006']} position={[0, 0, -17.914]} />
              </group>
              <group name="���������_0006" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4006" geometry={nodes.Object_4006.geometry} material={materials['material.015']} />
                <mesh name="Object_5006" geometry={nodes.Object_5006.geometry} material={materials['red_light.009']} />
                <mesh name="Object_6006" geometry={nodes.Object_6006.geometry} material={materials['logos.011']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model016" position={[4.025, 0, -4.078]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root016">
            <group name="GLTF_SceneRootNode016" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73011" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168011" geometry={nodes.Object_168011.geometry} material={materials['material.017']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model017" position={[4.025, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root017">
            <group name="GLTF_SceneRootNode017" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1011" position={[-0.863, 0.002, -0.542]} scale={1.27} />
              <group name="���������002_3011" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_17005" geometry={nodes.Object_17005.geometry} material={materials['red_light.010']} />
              </group>
              <group name="���������007_10010" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_37004" geometry={nodes.Object_37004.geometry} material={materials['red_light.010']} />
              </group>
              <group name="���������010_14011" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48011" geometry={nodes.Object_48011.geometry} material={materials['material.016']} position={[-0.174, 0.462, -3.623]} />
              </group>
              <group name="���������011_12011" position={[-1.234, -0.002, 0.425]} />
              <group name="���������021_72009" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165009" geometry={nodes.Object_165009.geometry} material={materials['material.016']} position={[0.788, 0.292, 0.775]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model018" position={[-5.829, 1.118, 5.106]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root018">
            <group name="GLTF_SceneRootNode018" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76011" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="������_13007" position={[0.617, -0.002, 0.388]} rotation={[0, -Math.PI / 2, 0]} scale={0.936}>
                <mesh name="Object_45007" geometry={nodes.Object_45007.geometry} material={materials['material.018']} />
                <mesh name="Object_46007" geometry={nodes.Object_46007.geometry} material={materials['logos.013']} />
              </group>
              <group name="���������001_1012" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8012" geometry={nodes.Object_8012.geometry} material={materials['material.018']} />
              </group>
              <group name="���������002_3012" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16008" geometry={nodes.Object_16008.geometry} material={materials['material.018']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2007" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12007" geometry={nodes.Object_12007.geometry} material={materials['material.018']} />
                <mesh name="Object_13006" geometry={nodes.Object_13006.geometry} material={materials['red_light.011']} />
                <mesh name="Object_14006" geometry={nodes.Object_14006.geometry} material={materials['logos.013']} />
              </group>
              <group name="���������004_5007" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20007" geometry={nodes.Object_20007.geometry} material={materials['material.018']} />
                <mesh name="Object_21007" geometry={nodes.Object_21007.geometry} material={materials['red_light.011']} />
                <mesh name="Object_22007" geometry={nodes.Object_22007.geometry} material={materials['logos.013']} />
              </group>
              <group name="���������005_6007" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24007" geometry={nodes.Object_24007.geometry} material={materials['material.018']} />
                <mesh name="Object_25007" geometry={nodes.Object_25007.geometry} material={materials['red_light.011']} />
              </group>
              <group name="���������006_7007" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27007" geometry={nodes.Object_27007.geometry} material={materials['material.018']} />
                <mesh name="Object_28006" geometry={nodes.Object_28006.geometry} material={materials['red_light.011']} />
              </group>
              <group name="���������007_10011" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������008_8006" position={[-0.358, 0, 0.894]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_30006" geometry={nodes.Object_30006.geometry} material={materials['material.018']} />
              </group>
              <group name="���������009_9007" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32007" geometry={nodes.Object_32007.geometry} material={materials['material.018']} />
                <mesh name="Object_33007" geometry={nodes.Object_33007.geometry} material={materials['red_light.011']} />
                <mesh name="Object_34007" geometry={nodes.Object_34007.geometry} material={materials['logos.013']} />
              </group>
              <group name="���������010_14012" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48012" geometry={nodes.Object_48012.geometry} material={materials['material.018']} />
                <mesh name="Object_50008" geometry={nodes.Object_50008.geometry} material={materials['logos.013']} />
              </group>
              <group name="���������011_12012" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41008" geometry={nodes.Object_41008.geometry} material={materials['material.018']} />
              </group>
              <group name="���������013_15007" position={[1.567, 0, 0.296]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52007" geometry={nodes.Object_52007.geometry} material={materials['material.018']} />
              </group>
              <group name="���������014_16006" position={[-0.419, -0.001, 1.439]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_54006" geometry={nodes.Object_54006.geometry} material={materials['material.018']} />
                <mesh name="Object_55006" geometry={nodes.Object_55006.geometry} material={materials['logos.013']} />
              </group>
              <group name="���������015_17006" position={[-0.008, 0, 0.926]} rotation={[0, Math.PI / 2, 0]} scale={0.112}>
                <mesh name="Object_57006" geometry={nodes.Object_57006.geometry} material={materials['material.018']} />
              </group>
              <group name="���������016_18007" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59007" geometry={nodes.Object_59007.geometry} material={materials['material.018']} />
              </group>
              <group name="���������017_75006" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176006" geometry={nodes.Object_176006.geometry} material={materials['material.018']} />
              </group>
              <group name="���������018_19006" position={[-1.038, -0.128, 0.883]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_61006" geometry={nodes.Object_61006.geometry} material={materials['material.018']} />
                <mesh name="Object_62006" geometry={nodes.Object_62006.geometry} material={materials['red_light.011']} />
                <mesh name="Object_63006" geometry={nodes.Object_63006.geometry} material={materials['logos.013']} />
              </group>
              <group name="���������019_20007" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65007" geometry={nodes.Object_65007.geometry} material={materials['material.018']} />
              </group>
              <group name="���������020_71007" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162007" geometry={nodes.Object_162007.geometry} material={materials['material.018']} />
                <mesh name="Object_163007" geometry={nodes.Object_163007.geometry} material={materials['logos.013']} />
              </group>
              <group name="���������021_72010" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165010" geometry={nodes.Object_165010.geometry} material={materials['material.018']} />
              </group>
              <group name="���������022_73012" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168012" geometry={nodes.Object_168012.geometry} material={materials['material.018']} />
                <mesh name="Object_169006" geometry={nodes.Object_169006.geometry} material={materials['logos.013']} />
                <mesh name="Object_170006" geometry={nodes.Object_170006.geometry} material={materials['red_light.011']} />
              </group>
              <group name="���������027_134007" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289006" geometry={nodes.Object_289006.geometry} material={materials['1.007']} position={[0, 0, -17.914]} />
              </group>
              <group name="���������_0007" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4007" geometry={nodes.Object_4007.geometry} material={materials['material.018']} />
                <mesh name="Object_5007" geometry={nodes.Object_5007.geometry} material={materials['red_light.011']} />
                <mesh name="Object_6007" geometry={nodes.Object_6007.geometry} material={materials['logos.013']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model019" position={[-5.829, 0, 7.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root019">
            <group name="GLTF_SceneRootNode019" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73013" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168013" geometry={nodes.Object_168013.geometry} material={materials['material.020']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model020" position={[-5.829, -0.06, 11.277]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root020">
            <group name="GLTF_SceneRootNode020" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1013" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_10005" geometry={nodes.Object_10005.geometry} material={materials['red_light.012']} />
                <mesh name="Object_8013" geometry={nodes.Object_8013.geometry} material={materials['material.019']} position={[0.163, 0.009, -0.858]} />
                <mesh name="Object_9005" geometry={nodes.Object_9005.geometry} material={materials['logos.012']} />
              </group>
              <group name="���������002_3013" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_17006" geometry={nodes.Object_17006.geometry} material={materials['red_light.012']} />
                <mesh name="Object_18005" geometry={nodes.Object_18005.geometry} material={materials['logos.012']} />
              </group>
              <group name="���������007_10012" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36005" geometry={nodes.Object_36005.geometry} material={materials['material.019']} position={[0.076, 0.582, -1.585]} />
                <mesh name="Object_37005" geometry={nodes.Object_37005.geometry} material={materials['red_light.012']} />
              </group>
              <group name="���������010_14013" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48013" geometry={nodes.Object_48013.geometry} material={materials['material.019']} position={[-0.174, 0.462, 7.401]} />
              </group>
              <group name="���������011_12013" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_43005" geometry={nodes.Object_43005.geometry} material={materials['logos.012']} position={[1.05, 0.011, -1.086]} />
              </group>
              <group name="���������021_72011" position={[-2.312, -0.003, 1.434]} scale={2.346} />
              <group name="���������026_133005" position={[1.417, 0.001, -13.448]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model021" position={[0, 1.118, 4.906]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root021">
            <group name="GLTF_SceneRootNode021" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76013" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="������_13008" position={[0.617, -0.002, 0.388]} rotation={[0, -Math.PI / 2, 0]} scale={0.936}>
                <mesh name="Object_45008" geometry={nodes.Object_45008.geometry} material={materials['material.021']} />
                <mesh name="Object_46008" geometry={nodes.Object_46008.geometry} material={materials['logos.015']} />
              </group>
              <group name="���������001_1014" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8014" geometry={nodes.Object_8014.geometry} material={materials['material.021']} />
              </group>
              <group name="���������002_3014" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16009" geometry={nodes.Object_16009.geometry} material={materials['material.021']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2008" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12008" geometry={nodes.Object_12008.geometry} material={materials['material.021']} />
                <mesh name="Object_13007" geometry={nodes.Object_13007.geometry} material={materials['red_light.013']} />
                <mesh name="Object_14007" geometry={nodes.Object_14007.geometry} material={materials['logos.015']} />
              </group>
              <group name="���������004_5008" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20008" geometry={nodes.Object_20008.geometry} material={materials['material.021']} />
                <mesh name="Object_21008" geometry={nodes.Object_21008.geometry} material={materials['red_light.013']} />
                <mesh name="Object_22008" geometry={nodes.Object_22008.geometry} material={materials['logos.015']} />
              </group>
              <group name="���������005_6008" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24008" geometry={nodes.Object_24008.geometry} material={materials['material.021']} />
                <mesh name="Object_25008" geometry={nodes.Object_25008.geometry} material={materials['red_light.013']} />
              </group>
              <group name="���������006_7008" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27008" geometry={nodes.Object_27008.geometry} material={materials['material.021']} />
                <mesh name="Object_28007" geometry={nodes.Object_28007.geometry} material={materials['red_light.013']} />
              </group>
              <group name="���������007_10013" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������008_8007" position={[-0.358, 0, 0.894]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_30007" geometry={nodes.Object_30007.geometry} material={materials['material.021']} />
              </group>
              <group name="���������009_9008" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32008" geometry={nodes.Object_32008.geometry} material={materials['material.021']} />
                <mesh name="Object_33008" geometry={nodes.Object_33008.geometry} material={materials['red_light.013']} />
                <mesh name="Object_34008" geometry={nodes.Object_34008.geometry} material={materials['logos.015']} />
              </group>
              <group name="���������010_14014" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48014" geometry={nodes.Object_48014.geometry} material={materials['material.021']} />
                <mesh name="Object_50009" geometry={nodes.Object_50009.geometry} material={materials['logos.015']} />
              </group>
              <group name="���������011_12014" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41009" geometry={nodes.Object_41009.geometry} material={materials['material.021']} />
              </group>
              <group name="���������013_15008" position={[1.567, 0, 0.296]} scale={[0.575, 0.55, 0.575]}>
                <mesh name="Object_52008" geometry={nodes.Object_52008.geometry} material={materials['material.021']} />
              </group>
              <group name="���������014_16007" position={[-0.419, -0.001, 1.439]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_54007" geometry={nodes.Object_54007.geometry} material={materials['material.021']} />
                <mesh name="Object_55007" geometry={nodes.Object_55007.geometry} material={materials['logos.015']} />
              </group>
              <group name="���������015_17007" position={[-0.008, 0, 0.926]} rotation={[0, Math.PI / 2, 0]} scale={0.112}>
                <mesh name="Object_57007" geometry={nodes.Object_57007.geometry} material={materials['material.021']} />
              </group>
              <group name="���������016_18008" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59008" geometry={nodes.Object_59008.geometry} material={materials['material.021']} />
              </group>
              <group name="���������017_75007" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176007" geometry={nodes.Object_176007.geometry} material={materials['material.021']} />
              </group>
              <group name="���������018_19007" position={[-1.038, -0.128, 0.883]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_61007" geometry={nodes.Object_61007.geometry} material={materials['material.021']} />
                <mesh name="Object_62007" geometry={nodes.Object_62007.geometry} material={materials['red_light.013']} />
                <mesh name="Object_63007" geometry={nodes.Object_63007.geometry} material={materials['logos.015']} />
              </group>
              <group name="���������019_20008" position={[1.202, -0.001, 0.826]} rotation={[Math.PI, 0, Math.PI]} scale={1.263}>
                <mesh name="Object_65008" geometry={nodes.Object_65008.geometry} material={materials['material.021']} />
              </group>
              <group name="���������020_71008" position={[-0.318, -0.001, 0.426]} rotation={[0, 1.571, 0]} scale={1.263}>
                <mesh name="Object_162008" geometry={nodes.Object_162008.geometry} material={materials['material.021']} />
                <mesh name="Object_163008" geometry={nodes.Object_163008.geometry} material={materials['logos.015']} />
              </group>
              <group name="���������021_72012" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165012" geometry={nodes.Object_165012.geometry} material={materials['material.021']} />
                <mesh name="Object_166007" geometry={nodes.Object_166007.geometry} material={materials['red_light.013']} />
              </group>
              <group name="���������022_73014" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168014" geometry={nodes.Object_168014.geometry} material={materials['material.021']} />
                <mesh name="Object_169007" geometry={nodes.Object_169007.geometry} material={materials['logos.015']} />
                <mesh name="Object_170007" geometry={nodes.Object_170007.geometry} material={materials['red_light.013']} />
              </group>
              <group name="���������027_134008" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289007" geometry={nodes.Object_289007.geometry} material={materials['1.008']} position={[0, 0, -16.205]} />
              </group>
              <group name="���������_0008" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4008" geometry={nodes.Object_4008.geometry} material={materials['material.021']} />
                <mesh name="Object_5008" geometry={nodes.Object_5008.geometry} material={materials['red_light.013']} />
                <mesh name="Object_6008" geometry={nodes.Object_6008.geometry} material={materials['logos.015']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model022" position={[0, 0, 7]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root022">
            <group name="GLTF_SceneRootNode022" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73015" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168015" geometry={nodes.Object_168015.geometry} material={materials['material.023']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model023" position={[0, -0.06, 11.078]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root023">
            <group name="GLTF_SceneRootNode023" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1015" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_10006" geometry={nodes.Object_10006.geometry} material={materials['red_light.014']} />
                <mesh name="Object_8015" geometry={nodes.Object_8015.geometry} material={materials['material.022']} position={[0.163, 0.009, -0.858]} />
              </group>
              <group name="���������002_3015" position={[-0.107, 0.002, -1.108]} scale={1.298} />
              <group name="���������007_10014" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials['material.022']} position={[0.076, 0.582, -1.585]} />
              </group>
              <group name="���������011_12015" position={[-1.234, -0.002, 0.425]} />
              <group name="���������021_72013" position={[-2.312, -0.003, 1.434]} scale={2.346} />
              <group name="���������026_133006" position={[1.417, 0.001, -13.448]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model024" position={[5.277, 1.118, -0.467]} rotation={[-Math.PI / 2, 0, -3.034]}>
          <group name="root024">
            <group name="GLTF_SceneRootNode024" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134009" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289008" geometry={nodes.Object_289008.geometry} material={materials['1.009']} position={[0, 0, -16.205]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model025" position={[0, 1.118, -0.683]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root025">
            <group name="GLTF_SceneRootNode025" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134010" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289009" geometry={nodes.Object_289009.geometry} material={materials['1.010']} position={[0, 0, -16.205]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model026" position={[3.517, 1.118, -0.448]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root026">
            <group name="GLTF_SceneRootNode026" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134011" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289010" geometry={nodes.Object_289010.geometry} material={materials['1.011']} position={[0, 0, -16.205]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model027" position={[10.341, 1.118, -6.724]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root027">
            <group name="GLTF_SceneRootNode027" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134012" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289011" geometry={nodes.Object_289011.geometry} material={materials['1.012']} position={[0, 0, -16.134]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model028" position={[11.251, 1.118, 14.879]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root028">
            <group name="GLTF_SceneRootNode028" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134013" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289012" geometry={nodes.Object_289012.geometry} material={materials['1.013']} position={[-29.995, 0, 3.004]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model029" position={[-6.158, -0.06, 3.889]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root029">
            <group name="GLTF_SceneRootNode029" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76015" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������007_10015" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36006" geometry={nodes.Object_36006.geometry} material={materials['material.031']} position={[0.076, 0.582, -1.585]} />
              </group>
              <group name="���������026_133007" position={[1.417, 0.001, -13.448]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model030" position={[0.009, 1.118, 4.116]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root030">
            <group name="GLTF_SceneRootNode030" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76016" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������002_3016" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16010" geometry={nodes.Object_16010.geometry} material={materials['material.036']} position={[0.101, -0.201, -0.312]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model031" position={[-6.143, -0.06, -1.944]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root031">
            <group name="GLTF_SceneRootNode031" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76017" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������021_72014" position={[-2.312, -0.003, 1.434]} scale={2.346} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model032" position={[0.025, 1.118, -1.716]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root032">
            <group name="GLTF_SceneRootNode032" rotation={[Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="Sketchfab_model033" position={[4.764, -0.06, 8.319]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root033">
            <group name="GLTF_SceneRootNode033" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76019" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������007_10016" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_37007" geometry={nodes.Object_37007.geometry} material={materials['red_light.016']} />
              </group>
              <group name="���������026_133008" position={[1.417, 0.001, -13.448]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model034" position={[8.839, 0, 8.469]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root034">
            <group name="GLTF_SceneRootNode034" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73016" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168016" geometry={nodes.Object_168016.geometry} material={materials['material.032']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model035" position={[10.931, 1.118, 8.547]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root035">
            <group name="GLTF_SceneRootNode035" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76020" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1016" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8016" geometry={nodes.Object_8016.geometry} material={materials['material.024']} />
              </group>
              <group name="���������002_3017" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16011" geometry={nodes.Object_16011.geometry} material={materials['material.024']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2009" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12009" geometry={nodes.Object_12009.geometry} material={materials['material.024']} />
                <mesh name="Object_13008" geometry={nodes.Object_13008.geometry} material={materials['red_light.019']} />
                <mesh name="Object_14008" geometry={nodes.Object_14008.geometry} material={materials['logos.017']} />
              </group>
              <group name="���������004_5009" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20009" geometry={nodes.Object_20009.geometry} material={materials['material.024']} />
                <mesh name="Object_21009" geometry={nodes.Object_21009.geometry} material={materials['red_light.019']} />
                <mesh name="Object_22009" geometry={nodes.Object_22009.geometry} material={materials['logos.017']} />
              </group>
              <group name="���������005_6009" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24009" geometry={nodes.Object_24009.geometry} material={materials['material.024']} />
                <mesh name="Object_25009" geometry={nodes.Object_25009.geometry} material={materials['red_light.019']} />
              </group>
              <group name="���������006_7009" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27009" geometry={nodes.Object_27009.geometry} material={materials['material.024']} />
                <mesh name="Object_28008" geometry={nodes.Object_28008.geometry} material={materials['red_light.019']} />
              </group>
              <group name="���������007_10017" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������009_9009" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32009" geometry={nodes.Object_32009.geometry} material={materials['material.024']} />
                <mesh name="Object_33009" geometry={nodes.Object_33009.geometry} material={materials['red_light.019']} />
                <mesh name="Object_34009" geometry={nodes.Object_34009.geometry} material={materials['logos.017']} />
              </group>
              <group name="���������010_14016" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48016" geometry={nodes.Object_48016.geometry} material={materials['material.024']} />
                <mesh name="Object_50010" geometry={nodes.Object_50010.geometry} material={materials['logos.017']} />
              </group>
              <group name="���������011_12016" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41010" geometry={nodes.Object_41010.geometry} material={materials['material.024']} />
              </group>
              <group name="���������017_75008" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176008" geometry={nodes.Object_176008.geometry} material={materials['material.024']} />
              </group>
              <group name="���������021_72015" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165015" geometry={nodes.Object_165015.geometry} material={materials['material.024']} />
                <mesh name="Object_166008" geometry={nodes.Object_166008.geometry} material={materials['red_light.019']} />
              </group>
              <group name="���������022_73017" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168017" geometry={nodes.Object_168017.geometry} material={materials['material.024']} />
                <mesh name="Object_169008" geometry={nodes.Object_169008.geometry} material={materials['logos.017']} />
                <mesh name="Object_170008" geometry={nodes.Object_170008.geometry} material={materials['red_light.019']} />
              </group>
              <group name="���������027_134014" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289013" geometry={nodes.Object_289013.geometry} material={materials['1.014']} position={[0, 0, -17.914]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model036" position={[4.985, -0.06, -0.131]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root036">
            <group name="GLTF_SceneRootNode036" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76021" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������007_10018" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36004" geometry={nodes.Object_36004.geometry} material={materials['material.030']} position={[0.076, 0.582, -1.585]} />
                <mesh name="Object_37008" geometry={nodes.Object_37008.geometry} material={materials['red_light.017']} />
              </group>
              <group name="���������026_133009" position={[1.417, 0.001, -13.448]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model037" position={[9.06, 0, 0.019]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root037">
            <group name="GLTF_SceneRootNode037" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73018" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168018" geometry={nodes.Object_168018.geometry} material={materials['material.033']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model038" position={[11.152, 1.118, 0.096]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root038">
            <group name="GLTF_SceneRootNode038" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76022" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1017" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8017" geometry={nodes.Object_8017.geometry} material={materials['material.025']} />
              </group>
              <group name="���������002_3018" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16012" geometry={nodes.Object_16012.geometry} material={materials['material.025']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2010" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12010" geometry={nodes.Object_12010.geometry} material={materials['material.025']} />
                <mesh name="Object_13009" geometry={nodes.Object_13009.geometry} material={materials['red_light.021']} />
                <mesh name="Object_14009" geometry={nodes.Object_14009.geometry} material={materials['logos.018']} />
              </group>
              <group name="���������004_5010" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20010" geometry={nodes.Object_20010.geometry} material={materials['material.025']} />
              </group>
              <group name="���������006_7010" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27010" geometry={nodes.Object_27010.geometry} material={materials['material.025']} />
                <mesh name="Object_28009" geometry={nodes.Object_28009.geometry} material={materials['red_light.021']} />
              </group>
              <group name="���������007_10019" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������010_14017" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48017" geometry={nodes.Object_48017.geometry} material={materials['material.025']} />
                <mesh name="Object_50011" geometry={nodes.Object_50011.geometry} material={materials['logos.018']} />
              </group>
              <group name="���������011_12017" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41011" geometry={nodes.Object_41011.geometry} material={materials['material.025']} />
              </group>
              <group name="���������022_73019" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168019" geometry={nodes.Object_168019.geometry} material={materials['material.025']} />
                <mesh name="Object_169009" geometry={nodes.Object_169009.geometry} material={materials['logos.018']} />
                <mesh name="Object_170009" geometry={nodes.Object_170009.geometry} material={materials['red_light.021']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model039" position={[-3.575, -0.06, 0.601]} rotation={[-Math.PI / 2, 0, -3.034]}>
          <group name="root039">
            <group name="GLTF_SceneRootNode039" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76023" position={[0.071, 0.001, -0.697]} scale={20} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model040" position={[7.082, 1.034, 12.421]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root040">
            <group name="GLTF_SceneRootNode040" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1018" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8018" geometry={nodes.Object_8018.geometry} material={materials['material.026']} position={[-6.104, 0, 3.624]} />
              </group>
              <group name="���������002_3019" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16013" geometry={nodes.Object_16013.geometry} material={materials['material.026']} position={[-5.874, -0.201, 3.236]} />
              </group>
              <group name="���������010_14018" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48018" geometry={nodes.Object_48018.geometry} material={materials['material.026']} position={[5.27, 0, -3.129]} />
                <mesh name="Object_50012" geometry={nodes.Object_50012.geometry} material={materials['logos.019']} position={[5.27, 0, -3.129]} />
              </group>
              <group name="���������011_12018" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41012" geometry={nodes.Object_41012.geometry} material={materials['material.026']} position={[-7.754, -0.113, 4.604]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model041" position={[11.423, 1.034, 12.582]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root041">
            <group name="GLTF_SceneRootNode041" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1019" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8019" geometry={nodes.Object_8019.geometry} material={materials['material.027']} position={[-6.104, 0, 3.624]} />
              </group>
              <group name="���������002_3020" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16014" geometry={nodes.Object_16014.geometry} material={materials['material.027']} position={[-5.874, -0.201, 3.236]} />
              </group>
              <group name="���������003_2011" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12011" geometry={nodes.Object_12011.geometry} material={materials['material.027']} position={[7.754, 0, -4.604]} />
              </group>
              <group name="���������004_5011" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20011" geometry={nodes.Object_20011.geometry} material={materials['material.027']} position={[-3.077, 0, -5.183]} />
                <mesh name="Object_21010" geometry={nodes.Object_21010.geometry} material={materials['red_light.015']} position={[-3.077, 0, -5.183]} />
                <mesh name="Object_22010" geometry={nodes.Object_22010.geometry} material={materials['logos.016']} />
              </group>
              <group name="���������005_6010" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24010" geometry={nodes.Object_24010.geometry} material={materials['material.027']} position={[-10.678, -0.086, 6.34]} />
                <mesh name="Object_25010" geometry={nodes.Object_25010.geometry} material={materials['red_light.015']} position={[-10.678, 0, 6.34]} />
              </group>
              <group name="���������006_7011" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27011" geometry={nodes.Object_27011.geometry} material={materials['material.027']} position={[-3.305, 0, 1.963]} />
              </group>
              <group name="���������009_9010" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32010" geometry={nodes.Object_32010.geometry} material={materials['material.027']} position={[-7.754, 0, 4.604]} />
                <mesh name="Object_33010" geometry={nodes.Object_33010.geometry} material={materials['red_light.015']} position={[-7.754, 0, 4.604]} />
              </group>
              <group name="���������010_14019" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48019" geometry={nodes.Object_48019.geometry} material={materials['material.027']} position={[5.27, 0, -3.129]} />
                <mesh name="Object_50013" geometry={nodes.Object_50013.geometry} material={materials['logos.016']} />
              </group>
              <group name="���������011_12019" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41013" geometry={nodes.Object_41013.geometry} material={materials['material.027']} position={[-7.754, -0.113, 4.604]} />
              </group>
              <group name="���������016_18009" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59009" geometry={nodes.Object_59009.geometry} material={materials['material.027']} position={[-47.952, 0, -80.757]} />
              </group>
              <group name="���������022_73020" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168020" geometry={nodes.Object_168020.geometry} material={materials['material.027']} position={[3.712, 0, 6.251]} />
              </group>
              <group name="���������_0009" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4009" geometry={nodes.Object_4009.geometry} material={materials['material.027']} position={[-8.614, 0, 5.115]} />
                <mesh name="Object_5009" geometry={nodes.Object_5009.geometry} material={materials['red_light.015']} position={[-8.614, 0, 5.115]} />
                <mesh name="Object_6009" geometry={nodes.Object_6009.geometry} material={materials['logos.016']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model042" position={[11.08, 1.118, 4.525]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root042">
            <group name="GLTF_SceneRootNode042" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76025" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1020" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8020" geometry={nodes.Object_8020.geometry} material={materials['material.028']} />
              </group>
              <group name="���������002_3021" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16015" geometry={nodes.Object_16015.geometry} material={materials['material.028']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2012" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12012" geometry={nodes.Object_12012.geometry} material={materials['material.028']} />
                <mesh name="Object_13010" geometry={nodes.Object_13010.geometry} material={materials['red_light.020']} />
                <mesh name="Object_14010" geometry={nodes.Object_14010.geometry} material={materials['logos.020']} />
              </group>
              <group name="���������004_5012" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20012" geometry={nodes.Object_20012.geometry} material={materials['material.028']} />
                <mesh name="Object_21011" geometry={nodes.Object_21011.geometry} material={materials['red_light.020']} />
                <mesh name="Object_22011" geometry={nodes.Object_22011.geometry} material={materials['logos.020']} />
              </group>
              <group name="���������005_6011" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24011" geometry={nodes.Object_24011.geometry} material={materials['material.028']} />
                <mesh name="Object_25011" geometry={nodes.Object_25011.geometry} material={materials['red_light.020']} />
              </group>
              <group name="���������006_7012" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27012" geometry={nodes.Object_27012.geometry} material={materials['material.028']} />
                <mesh name="Object_28010" geometry={nodes.Object_28010.geometry} material={materials['red_light.020']} />
              </group>
              <group name="���������007_10020" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������009_9011" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32011" geometry={nodes.Object_32011.geometry} material={materials['material.028']} />
                <mesh name="Object_33011" geometry={nodes.Object_33011.geometry} material={materials['red_light.020']} />
              </group>
              <group name="���������010_14020" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48020" geometry={nodes.Object_48020.geometry} material={materials['material.028']} />
                <mesh name="Object_50014" geometry={nodes.Object_50014.geometry} material={materials['logos.020']} />
              </group>
              <group name="���������011_12020" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41014" geometry={nodes.Object_41014.geometry} material={materials['material.028']} />
              </group>
              <group name="���������017_75009" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176009" geometry={nodes.Object_176009.geometry} material={materials['material.028']} />
              </group>
              <group name="���������022_73021" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168021" geometry={nodes.Object_168021.geometry} material={materials['material.028']} />
                <mesh name="Object_169010" geometry={nodes.Object_169010.geometry} material={materials['logos.020']} />
                <mesh name="Object_170010" geometry={nodes.Object_170010.geometry} material={materials['red_light.020']} />
              </group>
              <group name="���������027_134015" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289014" geometry={nodes.Object_289014.geometry} material={materials['1.015']} position={[0, 0, -17.914]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model043" position={[8.987, 0, 4.447]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root043">
            <group name="GLTF_SceneRootNode043" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73022" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168022" geometry={nodes.Object_168022.geometry} material={materials['material.034']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model044" position={[4.912, -0.06, 4.297]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root044">
            <group name="GLTF_SceneRootNode044" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76026" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������007_10021" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_37009" geometry={nodes.Object_37009.geometry} material={materials['red_light.018']} />
              </group>
              <group name="���������011_12021" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41015" geometry={nodes.Object_41015.geometry} material={materials['material.029']} position={[5.82, 0.922, -5.516]} />
              </group>
              <group name="���������021_72016" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165016" geometry={nodes.Object_165016.geometry} material={materials['material.029']} position={[0.788, 0.911, 0.775]} />
              </group>
              <group name="���������026_133010" position={[1.417, 0.001, -13.448]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model045" position={[-8.267, 1.118, -5.35]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root045">
            <group name="GLTF_SceneRootNode045" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134016" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289015" geometry={nodes.Object_289015.geometry} material={materials['1.016']} position={[0, 0, -16.205]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model046" position={[10.437, -0.06, 3.251]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root046">
            <group name="GLTF_SceneRootNode046" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76027" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������007_10022" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36008" geometry={nodes.Object_36008.geometry} material={materials['material.044']} position={[0.076, 0.582, -1.585]} />
              </group>
              <group name="���������026_133011" position={[1.417, 0.001, -13.448]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model047" position={[4.293, 1.118, 3.838]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root047">
            <group name="GLTF_SceneRootNode047" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76028" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������002_3022" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16016" geometry={nodes.Object_16016.geometry} material={materials['material.049']} position={[0.101, -0.201, -0.312]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model048" position={[11.19, -0.06, 9.035]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root048">
            <group name="GLTF_SceneRootNode048" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������021_72017" position={[-2.312, -0.003, 1.434]} scale={2.346} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model049" position={[5.046, 1.118, 9.622]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root049">
            <group name="GLTF_SceneRootNode049" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76030" position={[0.071, 0.001, -0.697]} scale={20} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model050" position={[-0.973, -0.06, 0.298]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root050">
            <group name="GLTF_SceneRootNode050" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76031" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������007_10023" position={[0.747, 0.287, -1.218]} scale={1.463} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model051" position={[-5.033, 0, 0.686]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root051">
            <group name="GLTF_SceneRootNode051" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73023" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168023" geometry={nodes.Object_168023.geometry} material={materials['material.045']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model052" position={[-7.117, 1.118, 0.885]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root052">
            <group name="GLTF_SceneRootNode052" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1021" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8021" geometry={nodes.Object_8021.geometry} material={materials['material.037']} />
              </group>
              <group name="���������002_3023" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16017" geometry={nodes.Object_16017.geometry} material={materials['material.037']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2013" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12013" geometry={nodes.Object_12013.geometry} material={materials['material.037']} />
                <mesh name="Object_13011" geometry={nodes.Object_13011.geometry} material={materials['red_light.026']} />
                <mesh name="Object_14011" geometry={nodes.Object_14011.geometry} material={materials['logos.022']} />
              </group>
              <group name="���������004_5013" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20013" geometry={nodes.Object_20013.geometry} material={materials['material.037']} />
                <mesh name="Object_21012" geometry={nodes.Object_21012.geometry} material={materials['red_light.026']} />
                <mesh name="Object_22012" geometry={nodes.Object_22012.geometry} material={materials['logos.022']} />
              </group>
              <group name="���������005_6012" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24012" geometry={nodes.Object_24012.geometry} material={materials['material.037']} />
                <mesh name="Object_25012" geometry={nodes.Object_25012.geometry} material={materials['red_light.026']} />
              </group>
              <group name="���������006_7013" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27013" geometry={nodes.Object_27013.geometry} material={materials['material.037']} />
                <mesh name="Object_28011" geometry={nodes.Object_28011.geometry} material={materials['red_light.026']} />
              </group>
              <group name="���������007_10024" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������009_9012" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32012" geometry={nodes.Object_32012.geometry} material={materials['material.037']} />
                <mesh name="Object_33012" geometry={nodes.Object_33012.geometry} material={materials['red_light.026']} />
                <mesh name="Object_34011" geometry={nodes.Object_34011.geometry} material={materials['logos.022']} />
              </group>
              <group name="���������010_14021" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48021" geometry={nodes.Object_48021.geometry} material={materials['material.037']} />
                <mesh name="Object_50015" geometry={nodes.Object_50015.geometry} material={materials['logos.022']} />
              </group>
              <group name="���������011_12022" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41016" geometry={nodes.Object_41016.geometry} material={materials['material.037']} />
              </group>
              <group name="���������017_75010" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176010" geometry={nodes.Object_176010.geometry} material={materials['material.037']} />
              </group>
              <group name="���������021_72018" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165014" geometry={nodes.Object_165014.geometry} material={materials['material.037']} />
                <mesh name="Object_166009" geometry={nodes.Object_166009.geometry} material={materials['red_light.026']} />
              </group>
              <group name="���������022_73024" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168024" geometry={nodes.Object_168024.geometry} material={materials['material.037']} />
                <mesh name="Object_169011" geometry={nodes.Object_169011.geometry} material={materials['logos.022']} />
                <mesh name="Object_170011" geometry={nodes.Object_170011.geometry} material={materials['red_light.026']} />
              </group>
              <group name="���������027_134017" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289016" geometry={nodes.Object_289016.geometry} material={materials['1.017']} position={[0, 0, -17.914]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model053" position={[-0.08, -0.06, 8.704]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root053">
            <group name="GLTF_SceneRootNode053" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76033" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������007_10025" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_36007" geometry={nodes.Object_36007.geometry} material={materials['material.043']} position={[0.076, 0.582, -1.585]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model054" position={[-4.139, 0, 9.091]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root054">
            <group name="GLTF_SceneRootNode054" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73025" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168025" geometry={nodes.Object_168025.geometry} material={materials['material.046']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model055" position={[-6.223, 1.118, 9.291]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root055">
            <group name="GLTF_SceneRootNode055" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76034" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1022" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8022" geometry={nodes.Object_8022.geometry} material={materials['material.038']} />
              </group>
              <group name="���������002_3024" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16018" geometry={nodes.Object_16018.geometry} material={materials['material.038']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2014" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12014" geometry={nodes.Object_12014.geometry} material={materials['material.038']} />
                <mesh name="Object_13012" geometry={nodes.Object_13012.geometry} material={materials['red_light.028']} />
                <mesh name="Object_14012" geometry={nodes.Object_14012.geometry} material={materials['logos.023']} />
              </group>
              <group name="���������004_5014" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20014" geometry={nodes.Object_20014.geometry} material={materials['material.038']} />
              </group>
              <group name="���������006_7014" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27014" geometry={nodes.Object_27014.geometry} material={materials['material.038']} />
                <mesh name="Object_28012" geometry={nodes.Object_28012.geometry} material={materials['red_light.028']} />
              </group>
              <group name="���������007_10026" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������010_14022" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48022" geometry={nodes.Object_48022.geometry} material={materials['material.038']} />
                <mesh name="Object_50016" geometry={nodes.Object_50016.geometry} material={materials['logos.023']} />
              </group>
              <group name="���������011_12023" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41017" geometry={nodes.Object_41017.geometry} material={materials['material.038']} />
              </group>
              <group name="���������022_73026" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168026" geometry={nodes.Object_168026.geometry} material={materials['material.038']} />
                <mesh name="Object_169012" geometry={nodes.Object_169012.geometry} material={materials['logos.023']} />
                <mesh name="Object_170012" geometry={nodes.Object_170012.geometry} material={materials['red_light.028']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model056" position={[8.309, -0.06, 6.85]} rotation={[-Math.PI / 2, 0, 0.24]}>
          <group name="root056">
            <group name="GLTF_SceneRootNode056" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76035" position={[0.071, 0.001, -0.697]} scale={20} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model057" position={[-3.812, 1.034, -3.463]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root057">
            <group name="GLTF_SceneRootNode057" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1023" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8023" geometry={nodes.Object_8023.geometry} material={materials['material.039']} />
              </group>
              <group name="���������002_3025" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16019" geometry={nodes.Object_16019.geometry} material={materials['material.039']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������010_14023" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48023" geometry={nodes.Object_48023.geometry} material={materials['material.039']} />
                <mesh name="Object_50017" geometry={nodes.Object_50017.geometry} material={materials['logos.024']} />
              </group>
              <group name="���������011_12024" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41018" geometry={nodes.Object_41018.geometry} material={materials['material.039']} position={[0.233, -0.113, -0.264]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model058" position={[-8.136, 1.034, -3.05]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root058">
            <group name="GLTF_SceneRootNode058" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76036" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1024" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8024" geometry={nodes.Object_8024.geometry} material={materials['material.040']} />
              </group>
              <group name="���������002_3026" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16020" geometry={nodes.Object_16020.geometry} material={materials['material.040']} position={[0.101, -0.201, -0.312]} />
              </group>
              <group name="���������003_2015" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12015" geometry={nodes.Object_12015.geometry} material={materials['material.040']} />
              </group>
              <group name="���������004_5015" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20015" geometry={nodes.Object_20015.geometry} material={materials['material.040']} />
                <mesh name="Object_21013" geometry={nodes.Object_21013.geometry} material={materials['red_light.022']} />
                <mesh name="Object_22013" geometry={nodes.Object_22013.geometry} material={materials['logos.021']} />
              </group>
              <group name="���������005_6013" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24013" geometry={nodes.Object_24013.geometry} material={materials['material.040']} position={[0, -0.086, 0]} />
                <mesh name="Object_25013" geometry={nodes.Object_25013.geometry} material={materials['red_light.022']} />
              </group>
              <group name="���������006_7015" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27015" geometry={nodes.Object_27015.geometry} material={materials['material.040']} />
              </group>
              <group name="���������009_9013" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32013" geometry={nodes.Object_32013.geometry} material={materials['material.040']} />
                <mesh name="Object_33013" geometry={nodes.Object_33013.geometry} material={materials['red_light.022']} />
                <mesh name="Object_34012" geometry={nodes.Object_34012.geometry} material={materials['logos.021']} />
              </group>
              <group name="���������010_14024" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48024" geometry={nodes.Object_48024.geometry} material={materials['material.040']} />
                <mesh name="Object_50018" geometry={nodes.Object_50018.geometry} material={materials['logos.021']} />
              </group>
              <group name="���������011_12025" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41019" geometry={nodes.Object_41019.geometry} material={materials['material.040']} position={[0, -0.113, 0]} />
              </group>
              <group name="���������016_18010" position={[0.285, 0, 0.854]} rotation={[0, 1.571, 0]} scale={0.096}>
                <mesh name="Object_59010" geometry={nodes.Object_59010.geometry} material={materials['material.040']} />
              </group>
              <group name="���������022_73027" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168027" geometry={nodes.Object_168027.geometry} material={materials['material.040']} />
              </group>
              <group name="���������_0010" position={[0.595, 0, 0.031]} scale={[0.9, 0.834, 0.9]}>
                <mesh name="Object_4010" geometry={nodes.Object_4010.geometry} material={materials['material.040']} />
                <mesh name="Object_5010" geometry={nodes.Object_5010.geometry} material={materials['red_light.022']} />
                <mesh name="Object_6010" geometry={nodes.Object_6010.geometry} material={materials['logos.021']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model059" position={[-6.734, 1.118, 4.891]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root059">
            <group name="GLTF_SceneRootNode059" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76037" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������001_1025" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8025" geometry={nodes.Object_8025.geometry} material={materials['material.041']} />
              </group>
              <group name="���������002_3027" position={[-0.107, 0.002, -1.108]} scale={1.298}>
                <mesh name="Object_16021" geometry={nodes.Object_16021.geometry} material={materials['material.041']} position={[0.101, -0.201, -0.312]} />
                <mesh name="Object_17009" geometry={nodes.Object_17009.geometry} material={materials['red_light.027']} />
              </group>
              <group name="���������003_2016" position={[0.14, 0.001, -0.487]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Object_12016" geometry={nodes.Object_12016.geometry} material={materials['material.041']} />
                <mesh name="Object_13013" geometry={nodes.Object_13013.geometry} material={materials['red_light.027']} />
                <mesh name="Object_14013" geometry={nodes.Object_14013.geometry} material={materials['logos.025']} />
              </group>
              <group name="���������004_5016" position={[-0.699, 0.341, 0.456]} rotation={[0, 1.571, 0]} scale={1.496}>
                <mesh name="Object_20016" geometry={nodes.Object_20016.geometry} material={materials['material.041']} />
                <mesh name="Object_21014" geometry={nodes.Object_21014.geometry} material={materials['red_light.027']} />
                <mesh name="Object_22014" geometry={nodes.Object_22014.geometry} material={materials['logos.025']} />
              </group>
              <group name="���������005_6014" position={[0.179, 0.003, 0.043]} scale={0.726}>
                <mesh name="Object_24014" geometry={nodes.Object_24014.geometry} material={materials['material.041']} />
                <mesh name="Object_25014" geometry={nodes.Object_25014.geometry} material={materials['red_light.027']} />
              </group>
              <group name="���������006_7016" position={[1.059, -0.003, -0.792]} scale={2.346}>
                <mesh name="Object_27016" geometry={nodes.Object_27016.geometry} material={materials['material.041']} />
                <mesh name="Object_28013" geometry={nodes.Object_28013.geometry} material={materials['red_light.027']} />
              </group>
              <group name="���������007_10027" position={[0.747, 0.287, -1.218]} scale={1.463} />
              <group name="���������009_9014" position={[1.034, 0, -0.161]}>
                <mesh name="Object_32014" geometry={nodes.Object_32014.geometry} material={materials['material.041']} />
                <mesh name="Object_33014" geometry={nodes.Object_33014.geometry} material={materials['red_light.027']} />
              </group>
              <group name="���������010_14025" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48025" geometry={nodes.Object_48025.geometry} material={materials['material.041']} />
                <mesh name="Object_50019" geometry={nodes.Object_50019.geometry} material={materials['logos.025']} />
              </group>
              <group name="���������011_12026" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41020" geometry={nodes.Object_41020.geometry} material={materials['material.041']} />
              </group>
              <group name="���������017_75011" position={[-0.277, 0, -1.903]} scale={0.096}>
                <mesh name="Object_176011" geometry={nodes.Object_176011.geometry} material={materials['material.041']} />
              </group>
              <group name="���������022_73028" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168028" geometry={nodes.Object_168028.geometry} material={materials['material.041']} />
                <mesh name="Object_169013" geometry={nodes.Object_169013.geometry} material={materials['logos.025']} />
                <mesh name="Object_170013" geometry={nodes.Object_170013.geometry} material={materials['red_light.027']} />
              </group>
              <group name="���������027_134018" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289017" geometry={nodes.Object_289017.geometry} material={materials['1.018']} position={[0, 0, -17.914]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model060" position={[-4.65, 0, 4.692]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root060">
            <group name="GLTF_SceneRootNode060" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73029" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24}>
                <mesh name="Object_168029" geometry={nodes.Object_168029.geometry} material={materials['material.047']} position={[0, 1.137, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model061" position={[-0.591, -0.06, 4.304]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root061">
            <group name="GLTF_SceneRootNode061" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76038" position={[0.071, 0.001, -0.697]} scale={20} />
              <group name="���������007_10028" position={[0.747, 0.287, -1.218]} scale={1.463}>
                <mesh name="Object_37012" geometry={nodes.Object_37012.geometry} material={materials['red_light.025']} />
              </group>
              <group name="���������011_12027" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41021" geometry={nodes.Object_41021.geometry} material={materials['material.042']} position={[5.82, 0.922, -5.516]} />
              </group>
              <group name="���������021_72019" position={[-2.312, -0.003, 1.434]} scale={2.346}>
                <mesh name="Object_165017" geometry={nodes.Object_165017.geometry} material={materials['material.042']} position={[0.788, 0.911, 0.775]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model062" position={[14.211, 1.118, -6.724]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root062">
            <group name="GLTF_SceneRootNode062" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134019" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model063" position={[-8.883, 1.118, -6.724]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root063">
            <group name="GLTF_SceneRootNode063" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134020" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model064" position={[6.794, 1.118, -4.002]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root064">
            <group name="GLTF_SceneRootNode064" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134021" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model065" position={[-6.432, 1.118, -0.215]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root065">
            <group name="GLTF_SceneRootNode065" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134022" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model066" position={[-4.057, 0, 0.686]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root066">
            <group name="GLTF_SceneRootNode066" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������022_73030" position={[1.652, -0.508, -0.627]} rotation={[0, -1.571, 0]} scale={1.24} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model067" position={[8.039, 1.034, -4.003]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root067">
            <group name="GLTF_SceneRootNode067" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1026" position={[-0.863, 0.002, -0.542]} scale={1.27} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model068" position={[8.039, 1.034, 3.286]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root068">
            <group name="GLTF_SceneRootNode068" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������002_3028" position={[-0.107, 0.002, -1.108]} scale={1.298} />
            </group>
          </group>
        </group>
        <group name="root069">
          <group name="GLTF_SceneRootNode069" rotation={[Math.PI / 2, 0, 0]}>
            <group name="���������027_134023" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]} />
          </group>
        </group>
        <group name="Object_2" position={[0, 1.875, -0.108]}>
          <group name="RootNode">
            <group name="GAS_69" position={[1451.358, 64.079, -0.472]} rotation={[-0.016, -0.006, -0.09]} scale={100}>
              <group name="nozzle_back_L001" position={[-1.014, -0.565, -0.7]} rotation={[0.125, 0.02, -0.43]}>
                <group name="nozzle_back_L_fire001" position={[-0.029, -0.099, 0.038]} scale={[1, 0.504, 1]}>
                  <mesh name="nozzle_back_L_fire001_fire_0" geometry={nodes.nozzle_back_L_fire001_fire_0.geometry} material={materials.fire} />
                </group>
                <mesh name="nozzle_back_L001_car_metal_0" geometry={nodes.nozzle_back_L001_car_metal_0.geometry} material={materials.car_metal} />
              </group>
              <group name="nozzle_back_R000" position={[-1.014, -0.565, 0.63]} rotation={[-0.157, -0.012, -0.427]}>
                <group name="nozzle_back_R_fire000" position={[-0.029, -0.099, 0.023]} scale={[1, 0.841, 1]}>
                  <mesh name="nozzle_back_R_fire000_fire_0" geometry={nodes.nozzle_back_R_fire000_fire_0.geometry} material={materials.fire} />
                </group>
                <mesh name="nozzle_back_R000_car_metal_0" geometry={nodes.nozzle_back_R000_car_metal_0.geometry} material={materials.car_metal} />
              </group>
              <group name="nozzle_front_L" position={[0.996, -0.563, -0.7]} rotation={[0.073, 0.031, -0.4]}>
                <group name="nozzle_front_L_fire" position={[-0.028, -0.103, 0.038]} scale={[1, 0.774, 1]}>
                  <mesh name="nozzle_front_L_fire_fire_0" geometry={nodes.nozzle_front_L_fire_fire_0.geometry} material={materials.fire} />
                </group>
                <mesh name="nozzle_front_L_car_metal_0" geometry={nodes.nozzle_front_L_car_metal_0.geometry} material={materials.car_metal} />
              </group>
              <group name="nozzle_front_R000" position={[0.976, -0.563, 0.65]} rotation={[-0.197, -0.01, -0.28]}>
                <group name="nozzle_front_R_fire001" position={[-0.008, -0.101, 0.003]} scale={[1, 1.122, 1]}>
                  <mesh name="nozzle_front_R_fire001_fire_0" geometry={nodes.nozzle_front_R_fire001_fire_0.geometry} material={materials.fire} />
                </group>
                <mesh name="nozzle_front_R000_car_metal_0" geometry={nodes.nozzle_front_R000_car_metal_0.geometry} material={materials.car_metal} />
              </group>
              <group name="wire" position={[-0.073, -0.721, -0.099]} rotation={[-0.052, 0.001, 0.031]}>
                <mesh name="wire_wires001_0" geometry={nodes.wire_wires001_0.geometry} material={materials['wires.001']} />
              </group>
              <group name="wire2" position={[-0.087, -0.732, -0.032]} rotation={[-0.053, 0.003, -0.003]}>
                <mesh name="wire2_wires001_0" geometry={nodes.wire2_wires001_0.geometry} material={materials['wires.001']} />
              </group>
              <group name="wire3" position={[-0.085, -0.732, 0.102]} rotation={[-0.053, 0.003, -0.003]}>
                <mesh name="wire3_wires001_0" geometry={nodes.wire3_wires001_0.geometry} material={materials['wires.001']} />
              </group>
              <group name="wire4" position={[-0.304, -0.635, 0.341]} rotation={[-0.053, 0.011, -0.076]}>
                <mesh name="wire4_wires001_0" geometry={nodes.wire4_wires001_0.geometry} material={materials['wires.001']} />
              </group>
              <mesh name="GAS_69_Car_main_color000_0" geometry={nodes.GAS_69_Car_main_color000_0.geometry} material={materials['Car_main_color.000']} />
              <mesh name="GAS_69_car_metal_0" geometry={nodes.GAS_69_car_metal_0.geometry} material={materials.car_metal} />
              <mesh name="GAS_69_light_0" geometry={nodes.GAS_69_light_0.geometry} material={materials.light} />
              <mesh name="GAS_69_mirror_0" geometry={nodes.GAS_69_mirror_0.geometry} material={materials.mirror} />
              <mesh name="GAS_69_windows_0" geometry={nodes.GAS_69_windows_0.geometry} material={materials.windows} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model070" position={[10.341, 1.118, -6.724]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root070">
            <group name="GLTF_SceneRootNode070" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������027_134024" position={[1.199, 0.001, 0.076]} scale={[0.259, 0.443, 0.24]}>
                <mesh name="Object_289018" geometry={nodes.Object_289018.geometry} material={materials['1.024']} position={[0, 0, -16.134]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model071" position={[-3.812, 1.034, -1.149]} rotation={[-Math.PI / 2, 0, 1.666]}>
          <group name="root071">
            <group name="GLTF_SceneRootNode071" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1027" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8026" geometry={nodes.Object_8026.geometry} material={materials['material.004']} position={[0, -0.216, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model072" position={[5.857, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root072">
            <group name="GLTF_SceneRootNode072" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24003" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68003" geometry={nodes.Object_68003.geometry} material={materials['material_3.002']} position={[6.788, 0, 4.236]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model073" position={[4.045, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root073">
            <group name="GLTF_SceneRootNode073" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24004" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68004" geometry={nodes.Object_68004.geometry} material={materials['material_3.004']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model074" position={[4.7, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root074">
            <group name="GLTF_SceneRootNode074" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24005" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68005" geometry={nodes.Object_68005.geometry} material={materials['material_3.005']} position={[0.107, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model075" position={[1.314, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root075">
            <group name="GLTF_SceneRootNode075" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24006" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68006" geometry={nodes.Object_68006.geometry} material={materials['material_3.006']} position={[0, 0, 0.762]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model076" position={[0.969, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root076">
            <group name="GLTF_SceneRootNode076" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25003" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70003" geometry={nodes.Object_70003.geometry} material={materials['material_3.007']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model077" position={[3.489, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root077">
            <group name="GLTF_SceneRootNode077" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25004" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70004" geometry={nodes.Object_70004.geometry} material={materials['material_3.008']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model078" position={[2.74, 1.118, -4.838]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root078">
            <group name="GLTF_SceneRootNode078" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25005" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70005" geometry={nodes.Object_70005.geometry} material={materials['material_3.009']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model079" position={[5.49, 1.118, -5.729]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root079">
            <group name="GLTF_SceneRootNode079" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40002" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100002" geometry={nodes.Object_100002.geometry} material={materials['material_3.010']} position={[0.648, 0, 3.074]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model080" position={[0, 1.118, -4.312]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root080">
            <group name="GLTF_SceneRootNode080" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������019_42002" position={[1.173, 0.003, 2.222]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.235]}>
                <mesh name="Object_104002" geometry={nodes.Object_104002.geometry} material={materials['material_3.011']} position={[0.016, 0, 1.434]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model081" position={[0.001, 1.118, -5.559]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root081">
            <group name="GLTF_SceneRootNode081" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������019_42003" position={[1.173, 0.003, 2.222]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.235]}>
                <mesh name="Object_104003" geometry={nodes.Object_104003.geometry} material={materials['material_3.012']} position={[0.016, 0, 1.434]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model082" position={[0, 1.118, -0.932]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root082">
            <group name="GLTF_SceneRootNode082" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������022_45002" position={[0.185, 0.003, -1.743]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.045]}>
                <mesh name="Object_110002" geometry={nodes.Object_110002.geometry} material={materials['material_3.013']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model083" position={[4.025, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root083">
            <group name="GLTF_SceneRootNode083" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1028" position={[-0.863, 0.002, -0.542]} scale={1.27} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model084" position={[4.229, -0.06, -2.65]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root084">
            <group name="GLTF_SceneRootNode084" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1029" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8028" geometry={nodes.Object_8028.geometry} material={materials['material.053']} position={[0.163, 0.009, -0.858]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model085" position={[-1.525, 1.118, 2.515]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root085">
            <group name="GLTF_SceneRootNode085" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24007" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68007" geometry={nodes.Object_68007.geometry} material={materials['material_3.014']} position={[0, 0, 0.762]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model086" position={[6.413, 1.118, 2.153]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root086">
            <group name="GLTF_SceneRootNode086" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24008" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68008" geometry={nodes.Object_68008.geometry} material={materials['material_3.015']} position={[0, 0, 0.762]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model087" position={[2.448, 1.118, 4.234]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root087">
            <group name="GLTF_SceneRootNode087" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25006" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70006" geometry={nodes.Object_70006.geometry} material={materials['material_3.016']} position={[0.975, 0, 0.799]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model088" position={[2.448, 1.118, 4.234]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root088">
            <group name="GLTF_SceneRootNode088" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25007" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70007" geometry={nodes.Object_70007.geometry} material={materials['material_3.017']} position={[-2.209, 0, 0.924]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model089" position={[5.1, 1.118, 4.234]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root089">
            <group name="GLTF_SceneRootNode089" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25008" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70008" geometry={nodes.Object_70008.geometry} material={materials['material_3.018']} position={[-0.77, 0, 0.53]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model090" position={[0.577, 1.118, 0.511]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root090">
            <group name="GLTF_SceneRootNode090" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40003" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100003" geometry={nodes.Object_100003.geometry} material={materials['material_3.019']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model091" position={[4.132, 1.118, 4.52]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root091">
            <group name="GLTF_SceneRootNode091" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40004" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100004" geometry={nodes.Object_100004.geometry} material={materials['material_3.020']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model092" position={[2.648, 1.118, 1.838]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root092">
            <group name="GLTF_SceneRootNode092" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40005" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100005" geometry={nodes.Object_100005.geometry} material={materials['material_3.021']} position={[0.022, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model093" position={[2.648, 1.118, 2.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root093">
            <group name="GLTF_SceneRootNode093" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40006" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100006" geometry={nodes.Object_100006.geometry} material={materials['material_3.022']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model094" position={[6.244, 1.118, -0.043]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root094">
            <group name="GLTF_SceneRootNode094" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40007" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100007" geometry={nodes.Object_100007.geometry} material={materials['material_3.023']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model095" position={[2.648, 1.118, 2.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root095">
            <group name="GLTF_SceneRootNode095" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40008" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100008" geometry={nodes.Object_100008.geometry} material={materials['material_3.024']} position={[-1.063, 0, -1.325]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model096" position={[7.221, 1.118, 2.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root096">
            <group name="GLTF_SceneRootNode096" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40009" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100009" geometry={nodes.Object_100009.geometry} material={materials['material_3.025']} position={[-2.504, 0, -8.108]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model097" position={[2.448, 1.118, 4.234]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root097">
            <group name="GLTF_SceneRootNode097" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25009" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70009" geometry={nodes.Object_70009.geometry} material={materials['material_3.026']} position={[-3.288, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model098" position={[2.448, 1.118, 4.234]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root098">
            <group name="GLTF_SceneRootNode098" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25010" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70010" geometry={nodes.Object_70010.geometry} material={materials['material_3.027']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model099" position={[5.654, 1.118, 4.234]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root099">
            <group name="GLTF_SceneRootNode099" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25011" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70011" geometry={nodes.Object_70011.geometry} material={materials['material_3.028']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model100" position={[2.648, 1.118, 2.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root100">
            <group name="GLTF_SceneRootNode100" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40010" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100010" geometry={nodes.Object_100010.geometry} material={materials['material_3.029']} position={[2.219, 0, 2.275]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model101" position={[2.648, 1.118, 2.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root101">
            <group name="GLTF_SceneRootNode101" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40011" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100011" geometry={nodes.Object_100011.geometry} material={materials['material_3.030']} position={[-1.138, 0, 4.404]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model102" position={[7.086, 1.118, 2.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root102">
            <group name="GLTF_SceneRootNode102" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40012" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100012" geometry={nodes.Object_100012.geometry} material={materials['material_3.031']} position={[1.549, 0, 2.296]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model103" position={[7.748, 1.034, 12.582]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root103">
            <group name="GLTF_SceneRootNode103" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1030" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8029" geometry={nodes.Object_8029.geometry} material={materials['material.054']} position={[-4.324, 0, 3.394]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model104" position={[11.423, 1.034, 15.137]} rotation={[-Math.PI / 2, 0, -1.608]}>
          <group name="root104">
            <group name="GLTF_SceneRootNode104" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������010_14015" position={[-1.731, 0.005, 0.877]} rotation={[Math.PI, 0, Math.PI]} scale={[1.471, 1.849, 1.471]}>
                <mesh name="Object_48015" geometry={nodes.Object_48015.geometry} material={materials['material.055']} position={[5.27, 0, -3.129]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model105" position={[3.801, 1.118, 4.906]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root105">
            <group name="GLTF_SceneRootNode105" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������011_12028" position={[-1.234, -0.002, 0.425]}>
                <mesh name="Object_41022" geometry={nodes.Object_41022.geometry} material={materials['material.056']} position={[0, 0, 0.154]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model106" position={[4.983, 1.118, 5.641]} rotation={[-Math.PI / 2, 0, -1.426]}>
          <group name="root106">
            <group name="GLTF_SceneRootNode106" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1031" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8030" geometry={nodes.Object_8030.geometry} material={materials['material.057']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model107" position={[1.743, 1.118, 4.234]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root107">
            <group name="GLTF_SceneRootNode107" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25012" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70012" geometry={nodes.Object_70012.geometry} material={materials['material_3.032']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model108" position={[3.877, 1.118, 4.234]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root108">
            <group name="GLTF_SceneRootNode108" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������002_25013" position={[0.422, 0.003, -0.673]} scale={[1, 1, 1.17]}>
                <mesh name="Object_70013" geometry={nodes.Object_70013.geometry} material={materials['material_3.033']} position={[0.975, 0, 0.799]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model109" position={[2.648, 1.118, 1.506]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root109">
            <group name="GLTF_SceneRootNode109" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40013" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100013" geometry={nodes.Object_100013.geometry} material={materials['material_3.034']} position={[-4.601, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model110" position={[2.648, 1.118, 2.184]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root110">
            <group name="GLTF_SceneRootNode110" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40014" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100014" geometry={nodes.Object_100014.geometry} material={materials['material_3.035']} position={[-1.063, 0, -5.03]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model111" position={[7.086, 1.118, 2.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root111">
            <group name="GLTF_SceneRootNode111" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40015" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100015" geometry={nodes.Object_100015.geometry} material={materials['material_3.036']} position={[4.334, 0, 3.682]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model112" position={[-9.949, 1.118, 2.698]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root112">
            <group name="GLTF_SceneRootNode112" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40016" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100016" geometry={nodes.Object_100016.geometry} material={materials['material_3.037']} position={[5.368, 0, 2.296]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model113" position={[-9.949, 1.118, 4.531]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root113">
            <group name="GLTF_SceneRootNode113" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40017" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100017" geometry={nodes.Object_100017.geometry} material={materials['material_3.038']} position={[5.368, 0, 4.352]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model114" position={[8.039, 1.034, -6.812]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root114">
            <group name="GLTF_SceneRootNode114" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������006_29003" position={[-1.415, 0.003, 1.3]} scale={[1, 1, 1.449]}>
                <mesh name="Object_78003" geometry={nodes.Object_78003.geometry} material={materials['material_3.039']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model115" position={[13.981, 1.034, -1.271]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root115">
            <group name="GLTF_SceneRootNode115" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������006_29004" position={[-1.415, 0.003, 1.3]} scale={[1, 1, 1.449]}>
                <mesh name="Object_78004" geometry={nodes.Object_78004.geometry} material={materials['material_3.040']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model116" position={[0.753, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root116">
            <group name="GLTF_SceneRootNode116" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24009" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68009" geometry={nodes.Object_68009.geometry} material={materials['material_3.041']} position={[6.788, 0, 4.236]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model117" position={[0.753, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root117">
            <group name="GLTF_SceneRootNode117" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24010" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68010" geometry={nodes.Object_68010.geometry} material={materials['material_3.042']} position={[-9.318, 0, 4.236]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model118" position={[5.857, 1.118, -0.217]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root118">
            <group name="GLTF_SceneRootNode118" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24011" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68011" geometry={nodes.Object_68011.geometry} material={materials['material_3.043']} position={[4.019, 0, 4.236]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model119" position={[-1.943, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root119">
            <group name="GLTF_SceneRootNode119" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24012" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68012" geometry={nodes.Object_68012.geometry} material={materials['material_3.044']} position={[-6.94, 0, 9.06]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model120" position={[5.857, 1.118, -10.656]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root120">
            <group name="GLTF_SceneRootNode120" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24013" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68013" geometry={nodes.Object_68013.geometry} material={materials['material_3.045']} position={[4.106, 0, 4.236]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model121" position={[-9.949, 1.118, 7.853]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root121">
            <group name="GLTF_SceneRootNode121" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������017_40018" position={[-0.466, 0.003, 1.287]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.201]}>
                <mesh name="Object_100018" geometry={nodes.Object_100018.geometry} material={materials['material_3.046']} position={[5.368, 0, 4.352]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model122" position={[-6.874, 1.118, -3.437]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root122">
            <group name="GLTF_SceneRootNode122" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������041_76001" position={[0.071, 0.001, -0.697]} scale={20} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model123" position={[3.097, 1.118, -6.172]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root123">
            <group name="GLTF_SceneRootNode123" rotation={[Math.PI / 2, 0, 0]}>
              <group name="������001_24014" position={[0.748, 0.003, 0.708]} scale={[1, 1, 1.425]}>
                <mesh name="Object_68014" geometry={nodes.Object_68014.geometry} material={materials['material_3.047']} position={[-6.94, 0, 5.81]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model124" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="car_gas_69fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2001">
              <group name="RootNode001">
                <group name="GAS_69001" position={[1451.358, 64.079, -0.472]} rotation={[-0.016, -0.006, -0.09]} scale={100}>
                  <group name="nozzle_back_L002" position={[-1.014, -0.565, -0.7]} rotation={[0.125, 0.02, -0.43]}>
                    <group name="nozzle_back_L_fire002" position={[-0.029, -0.099, 0.038]} scale={[1, 0.504, 1]}>
                      <mesh name="nozzle_back_L_fire001_fire_0001" geometry={nodes.nozzle_back_L_fire001_fire_0001.geometry} material={materials['fire.001']} />
                    </group>
                    <mesh name="nozzle_back_L001_car_metal_0001" geometry={nodes.nozzle_back_L001_car_metal_0001.geometry} material={materials['car_metal.001']} />
                  </group>
                  <group name="nozzle_back_R001" position={[-1.014, -0.565, 0.63]} rotation={[-0.157, -0.012, -0.427]}>
                    <group name="nozzle_back_R_fire001" position={[-0.029, -0.099, 0.023]} scale={[1, 0.841, 1]}>
                      <mesh name="nozzle_back_R_fire000_fire_0001" geometry={nodes.nozzle_back_R_fire000_fire_0001.geometry} material={materials['fire.001']} />
                    </group>
                    <mesh name="nozzle_back_R000_car_metal_0001" geometry={nodes.nozzle_back_R000_car_metal_0001.geometry} material={materials['car_metal.001']} />
                  </group>
                  <group name="nozzle_front_L001" position={[0.996, -0.563, -0.7]} rotation={[0.073, 0.031, -0.4]}>
                    <group name="nozzle_front_L_fire001" position={[-0.028, -0.103, 0.038]} scale={[1, 0.774, 1]}>
                      <mesh name="nozzle_front_L_fire_fire_0001" geometry={nodes.nozzle_front_L_fire_fire_0001.geometry} material={materials['fire.001']} />
                    </group>
                    <mesh name="nozzle_front_L_car_metal_0001" geometry={nodes.nozzle_front_L_car_metal_0001.geometry} material={materials['car_metal.001']} />
                  </group>
                  <group name="nozzle_front_R001" position={[0.976, -0.563, 0.65]} rotation={[-0.197, -0.01, -0.28]}>
                    <group name="nozzle_front_R_fire002" position={[-0.008, -0.101, 0.003]} scale={[1, 1.122, 1]}>
                      <mesh name="nozzle_front_R_fire001_fire_0001" geometry={nodes.nozzle_front_R_fire001_fire_0001.geometry} material={materials['fire.001']} />
                    </group>
                    <mesh name="nozzle_front_R000_car_metal_0001" geometry={nodes.nozzle_front_R000_car_metal_0001.geometry} material={materials['car_metal.001']} />
                  </group>
                  <group name="wire001" position={[-0.073, -0.721, -0.099]} rotation={[-0.052, 0.001, 0.031]}>
                    <mesh name="wire_wires001_0001" geometry={nodes.wire_wires001_0001.geometry} material={materials['wires.002']} />
                  </group>
                  <group name="wire2001" position={[-0.087, -0.732, -0.032]} rotation={[-0.053, 0.003, -0.003]}>
                    <mesh name="wire2_wires001_0001" geometry={nodes.wire2_wires001_0001.geometry} material={materials['wires.002']} />
                  </group>
                  <group name="wire3001" position={[-0.085, -0.732, 0.102]} rotation={[-0.053, 0.003, -0.003]}>
                    <mesh name="wire3_wires001_0001" geometry={nodes.wire3_wires001_0001.geometry} material={materials['wires.002']} />
                  </group>
                  <group name="wire4001" position={[-0.304, -0.635, 0.341]} rotation={[-0.053, 0.011, -0.076]}>
                    <mesh name="wire4_wires001_0001" geometry={nodes.wire4_wires001_0001.geometry} material={materials['wires.002']} />
                  </group>
                  <mesh name="GAS_69_Car_main_color000_0001" geometry={nodes.GAS_69_Car_main_color000_0001.geometry} material={materials['Car_main_color.001']} />
                  <mesh name="GAS_69_car_metal_0001" geometry={nodes.GAS_69_car_metal_0001.geometry} material={materials['car_metal.001']} />
                  <mesh name="GAS_69_light_0001" geometry={nodes.GAS_69_light_0001.geometry} material={materials['light.001']} />
                  <mesh name="GAS_69_mirror_0001" geometry={nodes.GAS_69_mirror_0001.geometry} material={materials['mirror.001']} />
                  <mesh name="GAS_69_windows_0001" geometry={nodes.GAS_69_windows_0001.geometry} material={materials['windows.001']} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model069" position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root124">
            <group name="GLTF_SceneRootNode124" rotation={[Math.PI / 2, 0, 0]}>
              <group name="���������001_1032" position={[-0.863, 0.002, -0.542]} scale={1.27}>
                <mesh name="Object_8011" geometry={nodes.Object_8011.geometry} material={materials['material.048']} position={[0.163, 0.009, -0.858]} />
              </group>
            </group>
          </group>
        </group>
        <mesh name="Curve3911" geometry={nodes.Curve3911.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3912" geometry={nodes.Curve3912.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3913" geometry={nodes.Curve3913.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3920" geometry={nodes.Curve3920.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3921" geometry={nodes.Curve3921.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3923" geometry={nodes.Curve3923.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3926" geometry={nodes.Curve3926.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3927" geometry={nodes.Curve3927.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3928" geometry={nodes.Curve3928.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3929" geometry={nodes.Curve3929.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3930" geometry={nodes.Curve3930.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3931" geometry={nodes.Curve3931.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3932" geometry={nodes.Curve3932.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3935" geometry={nodes.Curve3935.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3937" geometry={nodes.Curve3937.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3938" geometry={nodes.Curve3938.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3939" geometry={nodes.Curve3939.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3940" geometry={nodes.Curve3940.geometry} material={materials['SVGMat.002']} position={[19.949, 0.402, 1.163]} rotation={[-0.042, 0.04, 0.001]} scale={18.43} />
        <mesh name="Curve3941" geometry={nodes.Curve3941.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3943" geometry={nodes.Curve3943.geometry} material={materials['SVGMat.002']} position={[19.951, 0.15, 0.554]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3944" geometry={nodes.Curve3944.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3945" geometry={nodes.Curve3945.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3946" geometry={nodes.Curve3946.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3952" geometry={nodes.Curve3952.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3955" geometry={nodes.Curve3955.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3956" geometry={nodes.Curve3956.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3957" geometry={nodes.Curve3957.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3958" geometry={nodes.Curve3958.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3959" geometry={nodes.Curve3959.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3960" geometry={nodes.Curve3960.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3961" geometry={nodes.Curve3961.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3962" geometry={nodes.Curve3962.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3963" geometry={nodes.Curve3963.geometry} material={materials['SVGMat.002']} position={[19.949, 0.402, 1.163]} rotation={[-0.042, 0.04, 0.001]} scale={18.43} />
        <mesh name="Curve3964" geometry={nodes.Curve3964.geometry} material={materials['SVGMat.002']} position={[-2.436, -2.664, -5.058]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3966" geometry={nodes.Curve3966.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3967" geometry={nodes.Curve3967.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3968" geometry={nodes.Curve3968.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3969" geometry={nodes.Curve3969.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3970" geometry={nodes.Curve3970.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3971" geometry={nodes.Curve3971.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3972" geometry={nodes.Curve3972.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3973" geometry={nodes.Curve3973.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3974" geometry={nodes.Curve3974.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3975" geometry={nodes.Curve3975.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3976" geometry={nodes.Curve3976.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3977" geometry={nodes.Curve3977.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3978" geometry={nodes.Curve3978.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3979" geometry={nodes.Curve3979.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3980" geometry={nodes.Curve3980.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3981" geometry={nodes.Curve3981.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3982" geometry={nodes.Curve3982.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3983" geometry={nodes.Curve3983.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3984" geometry={nodes.Curve3984.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3985" geometry={nodes.Curve3985.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3986" geometry={nodes.Curve3986.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3987" geometry={nodes.Curve3987.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3988" geometry={nodes.Curve3988.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3989" geometry={nodes.Curve3989.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3990" geometry={nodes.Curve3990.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3991" geometry={nodes.Curve3991.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3992" geometry={nodes.Curve3992.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3993" geometry={nodes.Curve3993.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3994" geometry={nodes.Curve3994.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3995" geometry={nodes.Curve3995.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3996" geometry={nodes.Curve3996.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3997" geometry={nodes.Curve3997.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3998" geometry={nodes.Curve3998.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve3999" geometry={nodes.Curve3999.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4000" geometry={nodes.Curve4000.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4001" geometry={nodes.Curve4001.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4002" geometry={nodes.Curve4002.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4003" geometry={nodes.Curve4003.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4004" geometry={nodes.Curve4004.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4005" geometry={nodes.Curve4005.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4006" geometry={nodes.Curve4006.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4007" geometry={nodes.Curve4007.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4008" geometry={nodes.Curve4008.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4009" geometry={nodes.Curve4009.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4010" geometry={nodes.Curve4010.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4011" geometry={nodes.Curve4011.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4012" geometry={nodes.Curve4012.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4013" geometry={nodes.Curve4013.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4017" geometry={nodes.Curve4017.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4014" geometry={nodes.Curve4014.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4015" geometry={nodes.Curve4015.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4016" geometry={nodes.Curve4016.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4018" geometry={nodes.Curve4018.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4019" geometry={nodes.Curve4019.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4020" geometry={nodes.Curve4020.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4021" geometry={nodes.Curve4021.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4022" geometry={nodes.Curve4022.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4023" geometry={nodes.Curve4023.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4024" geometry={nodes.Curve4024.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4025" geometry={nodes.Curve4025.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4026" geometry={nodes.Curve4026.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4027" geometry={nodes.Curve4027.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4028" geometry={nodes.Curve4028.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
        <mesh name="Curve4029" geometry={nodes.Curve4029.geometry} material={materials['SVGMat.002']} position={[-2.464, 1.143, 1.727]} rotation={[-0.042, 0.04, 0.001]} scale={7.025} />
      </group>
    </group>
  )
}

const LandingPage: React.FC = () => {
  //const ref=useRef()
  return <div><Preloadpage/>
 <div id="canvas-container"><Canvas>
{/*<mesh ref={ref}>
  <boxGeometry attach='geometry' args={[2,2,2]}/>
</mesh>*/}

<Suspense fallback={null}><ambientLight/>
<Model position={[0, -10, 5]} rotation={[0, 0, 0]}  />
</Suspense>
  </Canvas></div>
  </div>;
};

export default LandingPage;
