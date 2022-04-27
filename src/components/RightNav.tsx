import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { navLinks } from "../helpers/navLinks";
import * as S from "./styles";

type Props = {
  open: boolean;
};

function RightNav(props: Props) {
  const [navLogo, setNavLogo] = useState("KAREN DUARTE");

  const listenerScrollEvent = () => {
    window.scrollY > 10 ? setNavLogo("KD") : setNavLogo("KAREN DUARTE");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenerScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenerScrollEvent);
    };
  }, []);

  return (
    <Router>
      <S.Ul open={props.open}>
        <S.Logo>
          <S.LogoUl>{navLogo}</S.LogoUl>
        </S.Logo>

        {navLinks.map((item, index) => (
          <NavLink
            style={({ isActive }) => (isActive ? {} : {})}
            key={index}
            to={item.path}
          >
            <S.Li>
              <a>{item.text}</a>
            </S.Li>
          </NavLink>
        ))}
      </S.Ul>
    </Router>
  );
}

export default RightNav;
