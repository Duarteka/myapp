import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Depth, LayerMaterial, Noise } from "lamina";
import React, { Suspense } from "react";
import * as THREE from "three";
import { Vector3 } from "three";

import { HeaderContent } from "./HeaderContent";
import { Navigation } from "./Navigation";
import Noodles from "./Noodles";
import { ToggleColorMode } from "./ToggleColorMode";

export default function App() {
  return (
    <>
      <StyledEngineProvider>
        <ToggleColorMode>
          <CssBaseline />
          <Navigation />
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
            <HeaderContent />
          </Canvas>
        </ToggleColorMode>
      </StyledEngineProvider>
    </>
  );
}

export function Rig({ v = new THREE.Vector3() }) {
  return useFrame(
    (state: {
      camera: {
        position: { lerp: (arg0: THREE.Vector3, arg1: number) => void };
      };
      mouse: { x: number; y: number };
    }) => {
      state.camera.position.lerp(
        v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
        0.05
      );
    }
  );
}

export function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="red"
          colorA="skyblue"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={new Vector3(100, 100, -100)}
        />
        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
}
