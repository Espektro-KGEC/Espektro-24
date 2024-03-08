import React, { Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas } from "react-three-fiber";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// import "./styles.module.css"; // Import your Tailwind CSS styles

// Import other necessary components here
import Preloadpage from "./Preloadanim";
import Hero from "./Hero";
import About from "./About";
import EventGo from "./EventGo";
import Scene from "./Scene";
import Robot1 from "./Robo1";
import ArtistSection from "@/components/artist-v5";
import SponsorSection from "@/components/sponsorship-v.2.0.0";

gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.to('.blur-effect', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 50%", // adjust this value according to your layout
        toggleActions: "play none none reverse",
      },
      blur: 10, // adjust blur amount as needed
      duration: 1, // duration of the blur effect
    });
  }, []);

  return (
    <div>
      <Preloadpage />
      <div className="relative">
        <div className="fixed top-0 left-0 w-full h-full">
          <Canvas>
            <color attach="background" args={["#050505"]} />
            <ambientLight intensity={0.1} />
            <Suspense fallback={null}>
              <Scene scale={0.0001} className="blur-effect" />
              <EffectComposer enableNormalPass multisampling={8}>
                <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={1.0} intensity={1} />
              </EffectComposer>
            </Suspense>
          </Canvas>
        </div>
        <div className="relative z-10">
          <Hero />
          <div className="z-30" ref={aboutRef}>
            <About />
            <div>
              <ArtistSection/>
              <div>
                <SponsorSection/>
              </div>
            </div>
          </div>
          <EventGo />
        </div>
      </div>
      <div className="fixed inset-0 z-50 pointer-events-none">
        <Canvas camera={{ fov: 75, position: [0, 0, 0] }}>
          <ambientLight intensity={2} />
          <pointLight position={[40, 40, 40]} />
          <directionalLight position={[40, 40, 40]} />
          <Suspense fallback={null}>
            <Robot1 scale={4} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default LandingPage;
