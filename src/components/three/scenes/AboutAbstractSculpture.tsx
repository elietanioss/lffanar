"use client";

import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export function AboutAbstractSculpture() {
  const groupRef = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.rotation.y = t * 0.25;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.4;
  });

  return (
    <>
      {/* Emerald glow background for About */}
      <color attach="background" args={["#02140f"]} />
      <group ref={groupRef} position={[0, 0, 0]}>
        <mesh>
          <torusKnotGeometry args={[2.2, 0.6, 220, 32]} />
          <meshStandardMaterial
            color={"#00ff00"}
            emissive={"#00ff00"}
            emissiveIntensity={1.6}
            roughness={0.35}
            metalness={0.5}
          />
        </mesh>
        {/* Soft orbiting halo */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.2, 3.8, 64]} />
          <meshBasicMaterial
            color={"#00ff00"}
            transparent
            opacity={0.22}
          />
        </mesh>
      </group>
    </>
  );
}



