import { Link } from "react-router-dom";
import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const AppStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  margin-top: 60px;
  background: #fff;
  min-height: calc(100vh - 87px);
`;

export const HeaderStyle = styled.header`
  height: 50px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
`;

export const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const ItemNav = styled(Link)`
  color: black;
  margin: 5px;
  text-decoration: none;
`;

export const Nav = styled.nav`
  text-align: end;
`;

export const Card = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
`;

export const ImgCard = styled.div`
  background-image: ${(props) => props.img};
  display: block;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  height: 140px;
  padding: 20px;
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const CardActions = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  color: #fff;
  background-color: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  cursor: pointer;
`;

export const CirculeButton = styled(Button)`
  border-radius: 50%;
  min-width: unset;
`;

export const GalleryLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
