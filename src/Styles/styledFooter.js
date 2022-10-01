import styled from "styled-components";

export const footerContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const teste = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #f2f4f1;
`;

export const logoSocialMediaContent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 98px;
`;

export const linkNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 140px;
  width: 50%;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 94px;
  }

  li {
    font-size: 24px;
    color: #373737;
  }
`;

export const credidtsContent = styled.div`
  height: 65px;
  background-color: #446061;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #ffff;
    font-size: 16px;
  }
`;
