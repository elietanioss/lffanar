"use client";

import { useRef } from "react";
import { Group, InstancedMesh, Object3D } from "three";
import { useFrame } from "@react-three/fiber";

const temp = new Object3D();

export function EventsTimeline() {
  const meshRef = useRef<InstancedMesh>(null!);
  const groupRef = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.25;
    }

    const mesh = meshRef.current;
    if (!mesh) return;

    const count = mesh.count;
    for (let i = 0; i < count; i++) {
      const u = i / count;
      const angle = u * Math.PI * 2;
      const radius = 5 + Math.sin(u * Math.PI * 4 + t * 0.4);
      const y = (u - 0.5) * 10;

      temp.position.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius * 0.6
      );

      const scale = 0.15 + (1 - u) * 0.4;
      temp.scale.set(scale, scale * 2.2, scale);
      temp.rotation.y = angle + t * 0.5;

      temp.updateMatrix();
      mesh.setMatrixAt(i, temp.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  const count = 64;

  return (
    <>
      {/* Deep grid‑blue background for Academics / Events */}
      <color attach="background" args={["#020713"]} />
      <group ref={groupRef}>
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
          <boxGeometry args={[0.3, 1, 0.3]} />
          <meshStandardMaterial
            color={"#ff0000"}
            emissive={"#ff0000"}
            emissiveIntensity={1.4}
            roughness={0.3}
            metalness={0.6}
          />
        </instancedMesh>
        {/* Ground grid under the timeline */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5.5, 0]}>
          <planeGeometry args={[40, 40, 32, 32]} />
          <meshBasicMaterial
            color={"#ff0000"}
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      </group>
    </>
  );
}



