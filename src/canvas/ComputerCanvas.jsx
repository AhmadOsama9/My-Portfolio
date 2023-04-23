import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Preload } from '@react-three/drei';

import CanvasLoader from "../Loader/CanvasLoader";

const Computer = ({isMobile, isTablet}) => {

  const computer = useGLTF("./desktop_pc/scene2.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : isTablet ? 0.5: 0.75}
        position={isMobile ? [0, -2, -1] : isTablet ? [0, -3.25, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

const ComputerCanvas = () => {
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
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;








