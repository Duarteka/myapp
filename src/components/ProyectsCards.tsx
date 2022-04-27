import "../styles.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";

import GridProjects from "./GridProjects";
import Hello from "./Hello";

const ProyectsCards = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Hello />
      <GridProjects />
    </div>
  );
};

export const Proyects = () => {
  const ref = useRef();

  return (
    <>
      <Parallax
        config={{ frequency: 1 }}
        ref={ref}
        pages={3}
        style={{ top: "0", left: "0" }}
      >
        <ParallaxLayer
          offset={1}
          speed={0.9}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            maxWidth: "100%",
            height: "200%",
            display: "flex",
            backgroundColor: "#1F1C3A",

            justifyContent: "center",
          }}
        />

        <ParallaxLayer
          offset={2}
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
