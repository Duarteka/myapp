import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";

import { Bg, Rig } from "../App";
import Noodles from "./Noodles";

export const HeaderContent = () => {
  return (
    <>
      <Bg />
      <Suspense fallback={null}>
        <Noodles />
        <Rig />
      </Suspense>
      <Text
        maxWidth={50}
        position={[0, 0.7, 3]}
        anchorX="left"
        anchorY="middle"
        color={"#f7f7f7"}
        material-toneMapped={false}
      >
        I&apos;M A
      </Text>
      <Typewriter
        words={[
          "FRONTEND\n\t\t\tDEVELOPER",
          "UX\n\t\t\tDESIGNER",
          "GRAPHIC\n\t\tDESIGNER",
        ]}
      />
      <Text
        color={"#FDF41B"}
        position={[0, -0.5, 2]}
        anchorX="center"
        anchorY="bottom-baseline"
        font="Lato"
        letterSpacing={-0.1}
        lineHeight={0.8}
        material-toneMapped={false}
      >
        BASED IN MADRID
      </Text>
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
      setDelay(10);
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
        position={[0, 0.5, -9]}
        lineHeight={0.8}
        material-toneMapped={false}
        font="Lato"
        fillOpacity={5}
        fontSize={width / 10}
        color={"#f7f7f7"}
        scale={[1, 1, 1]}
        textAlign="left"
        anchorX="center"
        anchorY="top-baseline"
        maxWidth={80}
        letterSpacing={-0.1}
      >
        {visibleCharacters}
      </Text>
    </>
  );
}
