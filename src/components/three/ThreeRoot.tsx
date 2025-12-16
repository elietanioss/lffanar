"use client";

import { Suspense, useMemo, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { DirectionalLight } from "three";
import { HomeDataLattice } from "./scenes/HomeDataLattice";
import { AboutAbstractSculpture } from "./scenes/AboutAbstractSculpture";
import { EventsTimeline } from "./scenes/EventsTimeline";
import { ContactConnectionSphere } from "./scenes/ContactConnectionSphere";

function SceneRouter() {
  const pathname = usePathname();
  const primaryLight = useRef<DirectionalLight | null>(null);
  const secondaryLight = useRef<DirectionalLight | null>(null);

  const scene = useMemo(() => {
    if (pathname.startsWith("/academics")) {
      return <EventsTimeline />;
    }
    if (pathname.startsWith("/about")) {
      return <AboutAbstractSculpture />;
    }
    if (pathname.startsWith("/join") || pathname.startsWith("/contact")) {
      return <ContactConnectionSphere />;
    }
    return <HomeDataLattice />;
  }, [pathname]);

  // Animate global light colors smoothly cycling between red → green → white
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const phase = t % 3;

    const red: [number, number, number] = [1, 0, 0];
    const green: [number, number, number] = [0, 1, 0];
    const white: [number, number, number] = [1, 1, 1];

    let from = red;
    let to = green;
    let u = phase;

    if (phase < 1) {
      from = red;
      to = green;
      u = phase;
    } else if (phase < 2) {
      from = green;
      to = white;
      u = phase - 1;
    } else {
      from = white;
      to = red;
      u = phase - 2;
    }

    const r = from[0] + (to[0] - from[0]) * u;
    const g = from[1] + (to[1] - from[1]) * u;
    const b = from[2] + (to[2] - from[2]) * u;

    if (primaryLight.current) {
      primaryLight.current.color.setRGB(r, g, b);
    }
    if (secondaryLight.current) {
      secondaryLight.current.color.setRGB(r, g, b);
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        ref={primaryLight}
        position={[4, 6, 3]}
        intensity={1.2}
        color={"#ff0000"}
      />
      <directionalLight
        ref={secondaryLight}
        position={[-6, -4, -2]}
        intensity={0.9}
        color={"#00ff00"}
      />

      {scene}

      <EffectComposer>
        <Bloom
          intensity={1.25}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.6}
          radius={0.85}
          blendFunction={BlendFunction.SCREEN}
        />
      </EffectComposer>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.4}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}

function CameraTransitions() {
  const { camera } = useThree();
  const pathname = usePathname();

  useEffect(() => {
    let target = { x: 0, y: 0, z: 12 };

    if (pathname.startsWith("/about")) {
      target = { x: -2.5, y: 1.2, z: 11 };
    } else if (pathname.startsWith("/academics")) {
      target = { x: 1.5, y: 0.5, z: 16 };
    } else if (pathname.startsWith("/join") || pathname.startsWith("/contact")) {
      target = { x: 0, y: -0.5, z: 10 };
    }

    gsap.to(camera.position, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1.3,
      ease: "power3.inOut",
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
      },
    });
  }, [camera, pathname]);

  return null;
}

export function ThreeRoot() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[0.8, 2]}
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneRouter />
          <CameraTransitions />
        </Suspense>
      </Canvas>
    </div>
  );
}



