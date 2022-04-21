import "../styles.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { animated, useSpring } from "react-spring";

const calcXY = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.0,
];

const perspective = (x: any, y: any, s: any) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProyectsCards = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 0.5],
    config: { mass: 5, tension: 200, friction: 100 },
  }));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calcXY(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(perspective) }}
      />
    </div>
  );
};

export const Proyects = () => {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            backgroundColor: "#1F1C3A",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            maxWidth: "99%",
            display: "flex",
            marginLeft: "0.5%",
            justifyContent: "center",
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <ProyectsCards />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
