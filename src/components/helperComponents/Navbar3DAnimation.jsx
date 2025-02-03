import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const Box = ({ position, color }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Scene = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3); // Cycle through 3 steps
    }, 3000); // Change animation every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {animationStep === 0 && (
        <Box position={[0, 0, 0]} color="orange" />
      )}
      {animationStep === 1 && (
        <Text
          position={[0, 0, 0]}
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          NexWe3
        </Text>
      )}
      {animationStep === 2 && (
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      )}
      <OrbitControls enableZoom={false} />
    </>
  );
};

const Navbar3DAnimation = () => {
  return (
    <Canvas style={{ width: '100px', height: '100px' }}>
      <Scene />
    </Canvas>
  );
};

export default Navbar3DAnimation;