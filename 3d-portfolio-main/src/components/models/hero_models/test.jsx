import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useTexture, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function Room({ onComputerClick, onChairClick, roomScale, chairPosition, screenSize }) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const chairRef = useRef();
  const computerRef = useRef();
  
  // Load texture with error handling
  let matcapTexture;
  try {
    matcapTexture = useTexture("/images/textures/mat1.png");
  } catch (error) {
    matcapTexture = null;
  }

  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: '#8338ec',
  });

  const bodyMaterial = matcapTexture 
    ? new THREE.MeshPhongMaterial({ map: matcapTexture })
    : new THREE.MeshPhongMaterial({ color: '#666' });

  const tableMaterial = new THREE.MeshPhongMaterial({
    color: '#c2a88d'
  });

  const radiatorMaterial = new THREE.MeshPhongMaterial({
    color: "#fff",
  });

  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#fff",
  });

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#8338ec",
  });

  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#000",
  });

  // Handle clicks on interactive objects
  const handleComputerClick = (e) => {
    e.stopPropagation();
    onComputerClick();
  };

  const handleChairClick = (e) => {
    e.stopPropagation();
    onChairClick();
  };

  return (
    <group scale={roomScale} dispose={null}>
      {/* Curtain */}
      <mesh geometry={nodes._________6_blinn1_0?.geometry} material={curtainMaterial} />
      
      {/* Body */}
      <mesh geometry={nodes.body1_blinn1_0?.geometry} material={bodyMaterial} />
      
      {/* Cabinet/Table */}
      <mesh geometry={nodes.cabin_blinn1_0?.geometry} material={tableMaterial} />
      
      {/* Chair - Interactive */}
      <mesh 
        ref={chairRef}
        geometry={nodes.chair_body_blinn1_0?.geometry} 
        material={chairMaterial}
        position={chairPosition}
        onClick={handleChairClick}
        onPointerOver={(e) => { document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { document.body.style.cursor = 'default'; }}
      />
      
      {/* Computer - Interactive */}
      <mesh 
        ref={computerRef}
        geometry={nodes.comp_blinn1_0?.geometry} 
        material={compMaterial}
        scale={screenSize}
        onClick={handleComputerClick}
        onPointerOver={(e) => { document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { document.body.style.cursor = 'default'; }}
      />
      
      {/* Screen with bloom effect */}
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0?.geometry}
        material={materials.lambert1}
      />
      
      {/* Other mesh components */}
      <mesh geometry={nodes.handls_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.keyboard_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.kovrik_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.lamp_bl_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.lamp_white_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.miuse_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.monitor2_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.monitor3_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.pCylinder5_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.pillows_blinn1_0?.geometry} material={pillowMaterial} />
      <mesh geometry={nodes.polySurface53_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.radiator_blinn1_0?.geometry} material={radiatorMaterial} />
      <mesh geometry={nodes.radiator_blinn1_0001?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.railing_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.red_bttns_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.red_vac_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.stylus_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.table_blinn1_0?.geometry} material={tableMaterial} />
      <mesh geometry={nodes.tablet_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.triangle_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vac_black_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vacuum1_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vacuumgrey_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vires_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.window_blinn1_0?.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.window4_phong1_0?.geometry} material={materials.phong1} />
    </group>
  );
}

export default function App() {
  const [roomScale, setRoomScale] = useState(1);
  const [screenSize, setScreenSize] = useState(1);
  const [chairPosition, setChairPosition] = useState([0, 0, 0]);
  const [message, setMessage] = useState("");

  const handleComputerClick = () => {
    setMessage("🖥️ Computer screen clicked! Adjusting screen size...");
    setScreenSize(prev => prev === 1 ? 1.3 : 1);
    setTimeout(() => setMessage(""), 2000);
  };

  const handleChairClick = () => {
    setMessage("🪑 Chair clicked! Moving chair...");
    setChairPosition(prev => 
      prev[2] === 0 ? [0, 0, -0.5] : [0, 0, 0]
    );
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div style={{ width: '100%', height: '100vh', background: '#1a1a2e' }}>
      {/* Controls Panel */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 10,
        background: 'rgba(0,0,0,0.8)',
        padding: '20px',
        borderRadius: '10px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        minWidth: '250px'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#8338ec' }}>Room Controls</h3>
        
        {/* Room Scale Control */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
            Room Size: {roomScale.toFixed(1)}x
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={roomScale}
            onChange={(e) => setRoomScale(parseFloat(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        {/* Screen Size Control */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
            Screen Size: {screenSize.toFixed(1)}x
          </label>
          <input
            type="range"
            min="0.8"
            max="1.5"
            step="0.1"
            value={screenSize}
            onChange={(e) => setScreenSize(parseFloat(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        {/* Instructions */}
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          background: 'rgba(131,56,236,0.2)',
          borderRadius: '5px',
          fontSize: '12px'
        }}>
          <strong>Interactive Elements:</strong>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li>Click computer to toggle size</li>
            <li>Click chair to move it</li>
            <li>Use sliders to adjust sizes</li>
            <li>Drag to rotate view</li>
            <li>Scroll to zoom</li>
          </ul>
        </div>

        {/* Message Display */}
        {message && (
          <div style={{
            marginTop: '15px',
            padding: '10px',
            background: '#8338ec',
            borderRadius: '5px',
            fontSize: '13px',
            textAlign: 'center'
          }}>
            {message}
          </div>
        )}
      </div>

      {/* 3D Canvas */}
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={15}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-3, 3, -3]} intensity={0.5} />
        
        {/* Room Model */}
        <Room 
          onComputerClick={handleComputerClick}
          onChairClick={handleChairClick}
          roomScale={roomScale}
          chairPosition={chairPosition}
          screenSize={screenSize}
        />
        
        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom 
            intensity={0.5}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload("/models/optimized-room.glb");