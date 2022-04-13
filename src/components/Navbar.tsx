import React from "react";

import Burger from "./Burger";
import * as S from "./styles";

type Props = {
  children?: ChildNode;
};

function Navbar(props: Props) {
  return (
    <>
      <S.Nav></S.Nav>
      <Burger />
      {props.children}
    </>
  );
}
//<S.Logo src={Logo} alt='Gustavo Scarpim' />
