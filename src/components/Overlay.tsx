import { flexbox } from "@mui/system";
import { Center } from "@react-three/drei";
import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const IamH2: any = {
  position: "fixed",
  display: "flex",
  minWidth: "100%",
  flexDirection: "column",

  alignItems: "center",
  color: "#1F1C3A",
};
const Container: any = {
  display: "flex",
  flexDirection: "column",

  alignContent: "flex-end",
  justifyContent: "space-between",

  alignItems: "center",

  width: "100%",
  minHeight: "16rem",
  marginTop: "30rem",
};
const Navcontainer: any = {
  display: "flex",
  flexDirection: "row",
};

const navLinks: any = {
  margin: "0.2rem",
  textDecoration: "none",
  fontWeight: 400,
  fontFamily: "Lato",
  display: "flex",
  flexDirection: "row",
  color: "#F7F7F7",
};
const SpanStyle: any = {
  height: "6rem",
  border: " 0.7px solid #F7F7F7",
};
const SpanStyleName: any = {
  color: "#FDF41B",
  fontSize: 27,
};

const Hello: any = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: 0,
  color: " #F7F7F7",
  // transform: "translate(50px,100px)",
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
const Overlay = () => {
  return (
    <>
      {/* <div style={Hello}>
        <p
          style={{
            lineHeight: "-20rem",
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: 20,
            letterSpacing: -1,
          }}
        >
          HELLO, {""} MY NAME IS <span style={SpanStyleName}>KAREN DUARTE</span>
        </p>
      </div> */}
      <h2 style={IamH2}>I&apos;m a</h2>
      <div style={Container}>
        <div style={{ color: " #F7F7F7 " }}>
          <p>BASED ON MADRID</p>
        </div>
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
};

export default Overlay;
