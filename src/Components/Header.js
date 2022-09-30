import React from "react";
import * as S from "../Styles/styledHeader";

const Header = () => {
  return (
    <S.containerHeader>
      <S.first>
        <S.headerTop>
          <S.logo>
            <S.texth1>RC</S.texth1>
          </S.logo>
          <S.navHeader>
            <S.ulHeader>
              <S.liHeader>ABOUT</S.liHeader>
              <S.liHeader>RECIPES</S.liHeader>
              <S.liHeader>SUBSCRIBE</S.liHeader>
            </S.ulHeader>
          </S.navHeader>
        </S.headerTop>
        <S.h2ContainerHeader>
          <S.texth2Header>RECIPES</S.texth2Header>
        </S.h2ContainerHeader>
      </S.first>
    </S.containerHeader>
  );
};

export default Header;