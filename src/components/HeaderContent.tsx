import { Box, Typography } from "@mui/material";
import { Text } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { css } from "styled-components";

import { Bg, Rig } from "../App";
import Noodles from "./Noodles";

const blinkcaret = css` {
    from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

const typewriter = {
  display: "inline-block",
  borderRight: "5px solid orange",
  fontSize: "5rem",
  animation: `${blinkcaret} 0.75s step-end infinite`,
  height: "1em",
  marginTop: "0",
};

export const HeaderContent = () => {
  return (
    <>
      <Bg />
      <Suspense fallback={null}>
        <Noodles />
        <Rig />
      </Suspense>
      <Typewriter
        words={["Frontend Developer", "UX Designer", "Graphic Designer"]}
      />
    </>
  );
};

function Typewriter(props: { words: string | any[] }) {
  const { width } = useThree((state) => state.viewport);

  const [wordIndex, setWordIndex] = React.useState(0);
  const [word, setWord] = React.useState(props.words[wordIndex]);
  const [visibleCharacters, setVisibleCharacters] = React.useState("");
  const [charLength, setCharLength] = React.useState(0);
  const [isIncreasing, setIsIncreasing] = React.useState(true);
  const [delay, setDelay] = React.useState(0);

  const nextWord = () => {
    let nextIndex = wordIndex + 1;
    if (nextIndex >= props.words.length) {
      nextIndex = 0;
    }
    setWordIndex(nextIndex);
    setWord(props.words[nextIndex]);
  };

  const checkLength = () => {
    if (isIncreasing && visibleCharacters.length >= word.length) {
      setDelay(15);
      setIsIncreasing(false);
    } else if (!isIncreasing && visibleCharacters.length === 0) {
      setIsIncreasing(true);
      nextWord();
      setDelay(5);
    }
  };

  const updateLength = () => {
    if (isIncreasing) {
      return setCharLength(charLength + 1);
    }

    setCharLength(charLength - 1);
  };

  const updateCharacters = () => {
    if (delay > 0) {
      setDelay(delay - 1);
    } else {
      checkLength();
      updateLength();
      setVisibleCharacters(word.substring(0, charLength));
    }
  };

  useEffect(() => {
    const typingInterval = setInterval(updateCharacters, 100);

    return function () {
      clearInterval(typingInterval);
    };
  });

  return (
    <>
      <Text
        position={[0, 0, -8]}
        lineHeight={0.8}
        material-toneMapped={false}
        font="/Ki-Medium.ttf"
        fontSize={width / 5}
        textAlign="center"
        anchorX="center"
        anchorY="bottom"
      >
        {visibleCharacters}
      </Text>
    </>
  );
}
