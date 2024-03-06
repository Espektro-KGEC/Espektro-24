
import Preloadpage from "./Preloadanim";
import "./styles.module.scss"
import React, { Suspense } from "react";

import { Canvas, useLoader, useFrame } from "react-three-fiber";
import Robot from "./Robo2";
import Hero from "./Hero";
import About from "./About";
import EventGo from "./EventGo";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Robot2 from "./Untitled";
import Robot3 from "./Robo3";
import Scene from "./Scene";

gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC = () => {
  //const ref=useRef()
  return <div><Preloadpage/>
  <div className="">
 <div className="w-screen h-screen  fixed ">


 <Canvas>
       
 <color attach="background" args={['#050505']} />
  <ambientLight intensity={1} />

      {/* <directionalLight /> */}
    
        {/* <pointLight position={[40, 40, 40]} /> */}
        <group position={[0, 0, 0]}>
        <Suspense fallback={null}>
    {/* <Robot scale={4}/> */}
    <Scene scale={0.0001} classname="h-screen w-screen "/>
        {/* <Robot3 scale={4}/> */}
        </Suspense></group>0.2
      </Canvas>
</div>
<Hero/>
<About/>
<EventGo/>
</div>
  </div>;
};

export default LandingPage;
