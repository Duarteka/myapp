import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { navLinks } from "../helpers/navLinks";
import * as S from "./styles";

type Props = {
  open: boolean;
};

function RightNav(props: Props) {
  return (
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl>KAREN DUARTE</S.LogoUl>
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
