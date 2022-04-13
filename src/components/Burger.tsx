import React, { useState } from "react";

import RightNav from "./RightNav";
import * as S from "./styles";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <S.Menus open={open} />
        <S.Menus open={open} />
        <S.Menus open={open} />
      </S.StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
