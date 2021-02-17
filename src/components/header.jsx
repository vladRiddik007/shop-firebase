import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Routes } from "../RouteConfig";
import {
  Container,
  DFlex,
  HeaderStyle,
  ItemNav,
  Nav,
} from "./styled.components";

export const Header = () => {
  const {
    basketReducer: { totalPrice },
  } = useSelector((state) => state);
  let location = useLocation();
  return (
    <HeaderStyle>
      <Container>
        <DFlex>
          <div style={{ width: 30 }}>
            <img src="pngaaa.com-2507896.png" alt="logo" width="100%" />
          </div>
          <p>
            {location.pathname === "/"
              ? totalPrice === 0
                ? ""
                : `You have ${totalPrice}$ in you basket`
              : ""}
          </p>

          <Nav>
            <ItemNav to={Routes.gallery}>Gallery</ItemNav>
            <ItemNav to={Routes.basket}>Basket</ItemNav>
          </Nav>
        </DFlex>
      </Container>
    </HeaderStyle>
  );
};
