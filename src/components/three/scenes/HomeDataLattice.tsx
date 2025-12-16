"use client";

import { useRef } from "react";
import { Group, InstancedMesh, Object3D } from "three";
import { useFrame } from "@react-three/fiber";

const tempObject = new Object3D();

export function HomeDataLattice() {
  const meshRef = useRef<InstancedMesh>(null!);
  const groupRef = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.3;
      groupRef.current.rotation.x = Math.cos(t * 0.12) * 0.18;
    }

    const mesh = meshRef.current;
    if (!mesh) return;

    let i = 0;
    const gridSize = 10;
    const spacing = 0.8;

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let y = -gridSize; y <= gridSize; y++) {
        const z = Math.sin((x * 0.6 + t) * 0.9) * Math.cos((y * 0.5 - t) * 1.1) * 2.4;
        tempObject.position.set(x * spacing, y * spacing, z);
        const scale = 0.12 + (Math.sin(t + x * 0.4 + y * 0.3) + 1) * 0.08;
        tempObject.scale.setScalar(scale);
        tempObject.updateMatrix();
        mesh.setMatrixAt(i++, tempObject.matrix);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  const count = (10 * 2 + 1) * (10 * 2 + 1);

  return (
    <>
      {/* Deep red data‑lattice background for Home */}
      <color attach="background" args={["#050009"]} />
      <group ref={groupRef} position={[0, 0, 0]}>
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
          <sphereGeometry args={[0.5, 12, 12]} />
          <meshStandardMaterial
            color={"#ff0000"}
            emissive={"#ff0000"}
            emissiveIntensity={2.2}
            roughness={0.25}
            metalness={0.7}
          />
        </instancedMesh>
        {/* Faint wireframe cube wrapping the lattice */}
        <mesh>
          <boxGeometry args={[20, 20, 6]} />
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



