import styled from "styled-components";
import Banner from "../img/banner.png"


export const containerHeader = styled.section`
  height: 100vh;
  width: 100%;
  padding: 15px;
`;

export const first = styled.div`
  max-width: 100%;
  height: 100%;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px, 0px;
  opacity: 1;
`;

export const headerTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const logo = styled.div`
  margin-left: 62px;
`;

export const texth1 = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 48px;
  color: #373737;
`;

export const navHeader = styled.nav`
  width: 40%;
`;

export const ulHeader = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const liHeader = styled.li`
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  color: #373737;
  width: 40%;


  &:hover{
   cursor: pointer;
   font-size: 1.3rem;
  }
`;

export const h2ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const texth2Header = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-size: 150px;
  letter-spacing: 15.75px;
  color: #373737;
  opacity: 1;
`;