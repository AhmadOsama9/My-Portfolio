import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ 
  id = "tsparticles", 
  className = "", 
  colors = ["#38A3A5", "#71C9CE", "#A6E3E9"], 
  particleCount = 30 // Reduced particle count
}) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log("Particles container loaded:", container);
  }, []);

  return (
    <div className={`absolute inset-0 h-full w-full ${className}`}>
      <Particles
        id={id}
        className="h-full w-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 30, // Lower FPS limit
          interactivity: {
            events: {
              onHover: {
                enable: false, // Disable hover interactions
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: colors,
            },
            links: {
              enable: false, // Disable links
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out", // Simpler out mode
              },
              random: false,
              speed: 1.5, // Reduced speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: particleCount,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 1,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;