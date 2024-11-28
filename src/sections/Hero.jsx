import React, { Suspense,useState,useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { AmbientLight } from "three";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/RIngs";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
export default function Hero() {
  // const x = useControls("HackerRoom", {
  //   x: { value: 0, min: -10, max: 10 },
  //   y: { value: 0, min: -10, max: 10 },
  //   z: { value: 0, min: -10, max: 10 },
  //   s:{value:0,min:0,max:1}
  // });


  const isSmall = useMediaQuery({maxWidth:440})
  const isMobile = useMediaQuery({ maxWidth:768 });
  const isTab = useMediaQuery({minWidth:768,maxWidth:1024})

  const size= calculateSizes(isSmall, isMobile, isTab )
  var dScale=0;
  if(isMobile)
  {
    dScale=0.06;
  }
  else if(isTab)
  {
    dScale=0.07;
  }
  else
  {
    dScale=0.08
  }

  return (
    <section className="min-h-screen w-full flex flex-co relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Kailaash Rithu!
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">
          {" "}
          Building Products & Brand
        </p>
      </div>

      <div className="w-full h-full absolute insert-0 ">
        <Canvas   className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]}  />

      <HeroCamera isMobile={isMobile}>
            <HackerRoom
              scale={dScale}
              position={[0.3,-8.6,4]}
              rotation={[0, 40.2, 0]}
             
            />
            
            </HeroCamera>
            


            <group>
              <Target position={size.targetPosition}  />
              <ReactLogo position={size.reactLogoPosition} scale={size.reactLogoSize}/>
              <Cube position={ size.cubePosition}/>
              <Rings position={size.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
      <a href="#contact" className="w-fit">
          <Button name="Let's Work Together" isBeam containerCLass="sm:w-fit w-full sm:min-w-96"/>
      </a>
      </div>
    </section>
  );
}
