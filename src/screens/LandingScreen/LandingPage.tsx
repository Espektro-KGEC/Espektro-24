import React, { useState, useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas } from "react-three-fiber";
import { useMediaQuery } from 'react-responsive';
import Preloadpage from "./Preloadanim";
import Hero from "./Hero";
import About from "./About";
import EventGo from "./EventGo";
import Robot1 from "./Robo1";
import Robot2 from "./Robo2";
import ArtistSection from "@/components/artist-v5";
import SponsorSection from "@/components/sponsorship-v.2.0.0";
import ClubComponent from "@/components/clubs";
import { motion } from "framer-motion";
import Scene2 from "./Scene2";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC = () => {
  const aboutRef = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.to('.blur-effect', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
      blur: 10,
      duration: 1,
    });

    const timeout = setTimeout(() => {
      setScrollEnabled(true);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!scrollEnabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'relative';
    }
  }, [scrollEnabled]);

  return (
    <div>
      <div className="relative">
        <div className="fixed top-0 left-0 w-full h-full">
          <Canvas camera={{ fov: 75, position: [0, 0, 0] }} framework="demand" performance={{ min: 0.5 }}>
            <color attach="background" args={["#050505"]} />
            <ambientLight intensity={0.1} />
            <Suspense fallback={null}>
              <Scene2 scale={4} className="blur-effect" />
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
            <div className="">
              <ArtistSection />
              <div>
                <SponsorSection />
                <div>
                  <ClubComponent />
                  <div>
                    {/* <HeroSection/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EventGo />
        </div>
      </div>
      <motion.div initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 3 }} className="fixed inset-0 z-40 pointer-events-none">
        <Canvas camera={{ fov: 75, position: [0, 0, 0] }} framework="demand" performance={{ min: 0.5 }}>
          <ambientLight intensity={2} />
          <pointLight position={[40, 40, 40]} />
          <directionalLight position={[40, 40, 40]} />
          <Suspense fallback={null}>
            {isMobile ? <Robot2 scale={2} /> : <Robot1 scale={4} />}
          </Suspense>
        </Canvas>
      </motion.div>
      <div className="z-50">
        <Preloadpage />
      </div>
    </div>
  );
};

export default LandingPage;
