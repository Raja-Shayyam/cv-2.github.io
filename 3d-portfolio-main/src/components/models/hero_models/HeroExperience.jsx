import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense, useState } from "react";
import React from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // const handleChairClick = () => {
  //   // alert("🪑 Chair clicked! Moving chair...");
  //   setChairPosition(prev =>
  //     prev[2] === 0 ? [0, 0, -0.5] : [0, 0, 0]
  //   );
  //   setTimeout(() => {setChairPosition(prev =>
  //     prev[2] === 0 ? [0, 0, -0.5] : [0, 0, 0])}, 900);
  // };

  // const handleComputerClick = () => {
  //   // setMessage("🖥️ Computer screen clicked! Adjusting screen size...");
  //   setScreenSize( [1.1,1,1.1] );
  //   setTimeout(() =>setScreenSize([1,1,1]), 900);
  // };

  // const onHandleCurtin = () => {
  //   // setMessage("🖥️ Computer screen clicked! Adjusting screen size...");
  //   setCurtinPosition( [1,1,-1] );
  //   setTimeout(() =>setCurtinPosition([1,1,1]), 900);
  // };

  return (
    <Canvas camera={{ position: [3, 1, 11], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={30} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 25} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 1.8} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
