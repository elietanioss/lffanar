"use client";

import { useRef, useState, useMemo } from "react";
import { Group, LineSegments, Vector3, BufferGeometry, Float32BufferAttribute } from "three";
import { useFrame } from "@react-three/fiber";

const connectionPoints = Array.from({ length: 42 }, (_, i) => {
  const phi = Math.acos(1 - 2 * ((i + 0.5) / 42));
  const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
  const r = 3.2;
  return new Vector3(
    r * Math.cos(theta) * Math.sin(phi),
    r * Math.sin(theta) * Math.sin(phi),
    r * Math.cos(phi)
  );
});

import { useMobile } from "../../../hooks/useMobile";

export function ContactConnectionSphere() {
  const groupRef = useRef<Group>(null!);
  const linesRef = useRef<LineSegments>(null!);
  const [hovered, setHovered] = useState(false);
  const isMobile = useMobile();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.25;
    }

    if (linesRef.current) {
      const a = 0.6 + (hovered ? 0.3 : 0);
      const mat = linesRef.current.material;
      if (!Array.isArray(mat)) {
        mat.opacity = a;
      }
    }
  });

  const positions: number[] = [];
  const center = new Vector3(0, 0, 0);

  // Slice connection points for mobile optimization
  const pointsToUse = isMobile ? connectionPoints.slice(0, 20) : connectionPoints;

  pointsToUse.forEach((p) => {
    positions.push(center.x, center.y, center.z, p.x, p.y, p.z);
  });

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <>
      {/* Star‑field cyan background for Contact / Join */}
      <color attach="background" args={["#010915"]} />
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh>
          <sphereGeometry args={[1.6, isMobile ? 24 : 48, isMobile ? 24 : 48]} />
          <meshStandardMaterial
            color={"#00ff00"}
            emissive={"#00ff00"}
            emissiveIntensity={1.8}
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
        <lineSegments ref={linesRef} geometry={geometry}>
          <lineBasicMaterial
            color={"#ff0000"}
            transparent
            opacity={0.6}
            linewidth={1}
          />
        </lineSegments>
        {/* Faint outer orbit to suggest a network shell */}
        <mesh>
          <sphereGeometry args={[3.6, 32, 32]} />
          <meshBasicMaterial
            color={"#00ff00"}
            transparent
            opacity={0.08}
            wireframe
          />
        </mesh>
      </group>
    </>
  );
}



