import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Html, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader/CanvasLoader";

const Earth = ({isMobile, isTablet}) => {
  const earth = useGLTF("./planet/scene2.glb");

  return(
    <primitive 
    object={earth.scene} 
    scale={isMobile ? 3 : isTablet ? 4 : 5}
     position-y={0} 
     rotation-y={0} 
     />
  )

}

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} isTablet={isTablet} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default EarthCanvas;



