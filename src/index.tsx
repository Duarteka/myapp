import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Burger from "./components/Burger";
import Overlay from "./components/Overlay";
import * as S from "./components/styles";
import { navLinks } from "./helpers/navLinks";

type Props = {
  open: boolean;
  children?: ChildNode;
};
const Navbar = (props: Props) => {
  console.log(navLinks);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <S.Nav></S.Nav>
      <Burger />
      {props.children}
      <Overlay />
    </div>
  );
};

ReactDOM.render(
  <>
    <App />

    <Navbar open={false} />
  </>,

  document.getElementById("root")
);
