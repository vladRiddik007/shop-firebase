import React from "react";
import { useSelector } from "react-redux";

export default function App() {
  const {
    totalPriceReducer: { totalPrice },
  } = useSelector((state) => state);
  console.log(totalPrice);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}
