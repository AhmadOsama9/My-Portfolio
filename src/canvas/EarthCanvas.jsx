import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader/CanvasLoader";

const Earth = () => {
    const computer = useGLTF("../planet/scene.gltf");

    return(
        <mesh>
            <hemisphereLight intensity={0.15}
            groundColor="black" />
            <pointLight intensity={1} />
            <spotLight 
              position={[-20, 50, 100]} 
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024}
            />
            <primitive 
            object={computer.scene}
            scale={5}
            position={[0, 0, -1.5]}
            rotation={[-.01, -.2, -.1]}
            />
        </mesh>
    )
}


const EarthCanvas = () => {
  return (
    <Canvas 
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true}}
    >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI/ 2}/>
            <Earth />
        </Suspense>

        <Preload all />

    </Canvas>
  )
}

export default EarthCanvas