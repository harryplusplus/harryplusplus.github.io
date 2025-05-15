"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import DandelionSeeds from "./DandelionSeeds";

function CameraAnimation() {
  useFrame(({ camera }) => {
    camera.position.x = Math.sin(Date.now() * 0.0005) * 5;
    camera.position.z = 15 + Math.cos(Date.now() * 0.0005) * 5;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function MyCanvas() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        gl={{ alpha: true }}
        camera={{ position: [0, 0, 15], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <DandelionSeeds count={200} />
        <CameraAnimation />
      </Canvas>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "black",
          textAlign: "center",
          paddingTop: "20%",
        }}
      >
        <h1>환영합니다!</h1>
        <p>민들레 씨앗이 떠다니는 나의 홈페이지</p>
      </div>
    </div>
  );
}
