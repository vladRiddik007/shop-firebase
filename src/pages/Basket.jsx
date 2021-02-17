import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/card";
import { Container, CirculeButton } from "../components/styled.components";
import { decreaseQuantity, increaseQuantity } from "../redux/Basket/actions";

export default function Basket() {
  const dispatch = useDispatch();
  const {
    basketReducer: { selectedProducts, totalPrice },
  } = useSelector((state) => state);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(selectedProducts);
  }, [selectedProducts]);

  if (selectedProducts.length === 0) {
    return <p>Basket is empty</p>;
  }

  return (
    <Container>
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ width: 300 }}>
              <Card product={product} basket={true} />
            </div>
            <CirculeButton
              color="red"
              onClick={() => dispatch(decreaseQuantity(product.id))}
            >
              -
            </CirculeButton>
            <p>{product.quantity}</p>
            <CirculeButton
              color="green"
              onClick={() => dispatch(increaseQuantity(product.id))}
            >
              +
            </CirculeButton>
          </div>
        ))}
      </div>
      <p>Total price: {totalPrice}$</p>
    </Container>
  );
}
