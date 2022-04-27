import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Depth, LayerMaterial, Noise } from "lamina";
import React from "react";
import * as THREE from "three";
import { Vector3 } from "three";

import Burger from "./components/Burger";
import { HeaderContent } from "./components/HeaderContent";
import { Proyects } from "./components/ProyectsCards";
import * as S from "./components/styles";
import { ToggleColorMode } from "./helpers/ToggleColorMode";

export default function App() {
  return (
    <>
      <StyledEngineProvider>
        <ToggleColorMode>
          <CssBaseline />
          <Navbar open={false} />
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 22], fov: 20 }}>
            <ScrollControls pages={10} distance={1.5} damping={4}>
              <Scroll>
                <HeaderContent />
              </Scroll>
            </ScrollControls>
          </Canvas>

          <Proyects />
        </ToggleColorMode>
      </StyledEngineProvider>
    </>
  );
}

type navbarProps = {
  open: boolean;
  children?: ChildNode;
};
const Navbar = (props: navbarProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <S.Nav></S.Nav>
      <Burger />
      {props.children}
    </div>
  );
};

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
          colorB="yellow"
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
          colorA="black"
          colorB="white"
          mode="subtract"
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
}
