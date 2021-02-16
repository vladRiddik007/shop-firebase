import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Root, AppStyle, Main } from "./App.style";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Routes } from "./RouteConfig";

const Gallery = lazy(() => import("./pages/Gallery"));
const Basket = lazy(() => import("./pages/Basket"));

export default function App() {
  return (
    <Root>
      <AppStyle>
        <Header />
        <Main>
          <Router>
            <Suspense fallback={<p>Loading ...</p>}>
              <Switch>
                <Route exact path={Routes.gallery} component={Gallery} />
                <Route exact path={Routes.basket} component={Basket} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </Router>
        </Main>
        <Footer />
      </AppStyle>
    </Root>
  );
}
