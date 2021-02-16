import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../RouteConfig";

export function Header() {
  return (
    <header className="header">
      <nav>
        <Link to={Routes.gallery}>Gallery</Link>
        <Link to={Routes.basket}>Basket</Link>
      </nav>
    </header>
  );
}
