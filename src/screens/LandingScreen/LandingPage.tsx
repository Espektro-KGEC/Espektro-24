import React, { useState, useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas } from "react-three-fiber";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Preloadpage from "./Preloadanim";
import Hero from "./Hero";
import About from "./About";
import EventGo from "./EventGo";
import Scene from "./Scene";
import Robot1 from "./Robo1";
import ArtistSection from "@/components/artist-v5";
import SponsorSection from "@/components/sponsorship-v.2.0.0";
import ClubComponent from "@/components/clubs";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC = () => {
  const aboutRef = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    gsap.to('.blur-effect', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 50%", // adjust this value according to your layout
        toggleActions: "play none none reverse",
      },
      blur: 10, // adjust blur amount as needed
      duration: 1, // duration of the blur effect
    });

    // Enable scrolling after 9 seconds
    const timeout = setTimeout(() => {
      setScrollEnabled(true);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Disable scrolling for 6 seconds
    if (!scrollEnabled) {
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling and make screen absolute
      document.body.style.overflow = 'auto';
      document.body.style.position = 'relative';
    }
  }, [scrollEnabled]);

  return (
    <div>
      <div className="relative">
        {/* <div className="fixed top-0 left-0 w-full h-full">
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
        </div> */}
        <div className="relative z-10">
          <Hero />
          <div className="z-30" ref={aboutRef}>
            <About />
            <div className="">
              <ArtistSection/>
              <div>
                <SponsorSection/>
                <div>
                  <ClubComponent/>
                </div>
              </div>
            </div>
          </div>
          <EventGo />
        </div>
      </div>
      <motion.div initial={{x:"-100%"}}
      animate={{x:"0%"}}
      transition={{duration:3}} className="fixed inset-0 z-40 pointer-events-none">
        <Canvas camera={{ fov: 75, position: [0, 0, 0] }}>
          <ambientLight intensity={2} />
          <pointLight position={[40, 40, 40]} />
          <directionalLight position={[40, 40, 40]} />
          <Suspense fallback={null}>
            <Robot1 scale={4} />
          </Suspense>
        </Canvas>
      </motion.div>
      <div className="z-50">
      <Preloadpage /></div>
    </div>
  );
};

export default LandingPage;
