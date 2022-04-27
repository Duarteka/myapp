import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import App from "./App";

const navLinks: any = {
  margin: "0.2rem",
  textDecoration: "none",
  fontWeight: 400,
  fontFamily: "Lato",
  display: "flex",
  flexDirection: "row",
  color: "#F7F7F7",
};
const Navcontainer: any = {
  display: "flex",
  flexDirection: "row",
};
const SpanStyle: any = {
  height: "6rem",
  border: " 0.7px solid #F7F7F7",
};
export const socialMidia: ListSocialMidia[] = [
  {
    text: "linkedin",
    path: "/home",
  },
  {
    text: "intagram",
    path: "/about",
  },
  {
    text: "github",
    path: "/contact",
  },
  {
    text: "medium",
    path: "/contact",
  },
];
export interface ListSocialMidia {
  text: string;
  path: string;
  children?: ChildNode;
}

function Overlay() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          width: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div style={SpanStyle}>
          <span></span>
        </div>
        <div style={Navcontainer}>
          <Router>
            {socialMidia.map((item, index) => (
              <NavLink style={navLinks} key={index} to={item.path}>
                {item.text}
              </NavLink>
            ))}
          </Router>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(
  <>
    <App />
    <Overlay />
  </>,

  document.getElementById("root")
);
