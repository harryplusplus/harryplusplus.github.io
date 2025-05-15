"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

export default function DandelionSeeds({ count = 200 }) {
  // @ts-expect-error no type
  const mesh = useRef();
  const texture = useLoader(TextureLoader, "/dandelion-seed.png");

  // 파티클 위치와 속도 초기화
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // 랜덤한 위치 (x, y, z)
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 20, // x: -10 ~ 10
        (Math.random() - 0.5) * 20, // y: -10 ~ 10
        (Math.random() - 0.5) * 20 // z: -10 ~ 10
      );
      // 랜덤한 속도
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        Math.random() * 0.05, // 위로 떠오르는 경향
        (Math.random() - 0.5) * 0.02
      );
      temp.push({ position, velocity });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      particle.position.add(particle.velocity);
      // 흔들림 효과
      const time = Date.now() * 0.001;
      particle.position.x += Math.sin(time + i) * 0.01;
      particle.position.z += Math.cos(time + i) * 0.01;
      // 경계 처리
      if (particle.position.y > 10) {
        particle.position.y = -10;
        particle.position.x = (Math.random() - 0.5) * 20;
        particle.position.z = (Math.random() - 0.5) * 20;
      }
      // @ts-expect-error no type
      mesh.current.geometry.attributes.position.array[i * 3] =
        particle.position.x;
      // @ts-expect-error no type
      mesh.current.geometry.attributes.position.array[i * 3 + 1] =
        particle.position.y;
      // @ts-expect-error no type
      mesh.current.geometry.attributes.position.array[i * 3 + 2] =
        particle.position.z;
    });
    // @ts-expect-error no type
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  // 파티클 위치를 위한 버퍼 지오메트리
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((particle, i) => {
      pos[i * 3] = particle.position.x;
      pos[i * 3 + 1] = particle.position.y;
      pos[i * 3 + 2] = particle.position.z;
    });
    return pos;
  }, [particles]);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        map={texture}
        transparent
        opacity={0.8}
        sizeAttenuation
        alphaTest={0.5} // 투명 부분 렌더링 최적화
      />
    </points>
  );
}
