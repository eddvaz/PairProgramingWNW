import React from "react";
import * as S from "../Styles/styledFooter";
import instagramLogo from "../img/Instagram Ellipse.svg";
import facebookLogo from "../img/Facebook Ellipse.svg";
import twitterLogo from "../img/Twitter ellipse.svg";
import pinterestLogo from "../img/Pinterest Ellipse.svg";

const Footer = () => {
  return (
    <S.footerContainer>
      <S.teste>
        <S.logoSocialMediaContent>
          <img src={instagramLogo} alt="logo instagram" />
          <img src={twitterLogo} alt="logo twitter" />
          <img src={facebookLogo} alt="logo facebook" />
          <img src={pinterestLogo} alt="logo pinterest" />
        </S.logoSocialMediaContent>
        <S.linkNav>
          <ul>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
          </ul>
        </S.linkNav>
      </S.teste>

      <S.credidtsContent>
        <p>
          Layout produzido por Vai na Web para fins exclusivamente educacionais.
          Referência:
          https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </p>
      </S.credidtsContent>
    </S.footerContainer>
  );
};

export default Footer;