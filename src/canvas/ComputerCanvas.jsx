import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import CanvasLoader from "../Loader/CanvasLoader";

const Computer = ({isMobile, isTablet, gltf}) => {
  return(
      <mesh>
          <hemisphereLight intensity={0.15}
          groundColor="black" />
          <pointLight intensity={1} />
          <spotLight 
            position={[-20, 50, 100]} 
            angle={0.12}
            penumbra={1}
            intensity={3}
            castShadow
            shadow-mapSize={1024}
          />
          <primitive 
          object={gltf.scene}
          scale={isMobile ? 0.4 : isTablet ? 0.5: 0.75}
          position={isMobile ? [0, -2, -1] : isTablet ? [0, -3.25, -1.5] : [0, -3.25, -1.5]}
          rotation={[-.01, -.2, -.1]}
          />
      </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [gltf, setGltf] = useState(null);
  const [loading, setLoading] = useState(true); // Add state to track loading status
  const dracoLoader = new DRACOLoader();

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const mediaQuery2 = window.matchMedia("(min-width: 500px) and (max-width: 760px)");
  
    // Set the initial value of the `isMobile` and `isTablet` state variables
    setIsMobile(mediaQuery.matches);
    setIsTablet(mediaQuery2.matches);
  
    // Define a callback function to handle changes to the media queries
    const handleMediaQueryChange = () => {
      setIsMobile(mediaQuery.matches);
      setIsTablet(mediaQuery2.matches);
    };
  
    // Add the callback function as a listener for changes to the media queries
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    mediaQuery2.addEventListener("change", handleMediaQueryChange);
  
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      mediaQuery2.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  

  
  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.load('../desktop_pc/scene.gltf', (gltf) => {
      setGltf(gltf);
      setLoading(false); // Set loading state to false once the model has loaded
    });
  }, []);

  return (
    <Canvas 
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true}}>
        <Suspense fallback={<CanvasLoader />}>
            {loading ? <CanvasLoader /> : null} {/* Add CanvasLoader here with a conditional rendering */}
            <OrbitControls enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI/ 2}/>
            {gltf ? <Computer isMobile={isMobile} isTablet={isTablet} gltf={gltf} /> : null}
        </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas;








