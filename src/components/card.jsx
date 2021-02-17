import React from "react";
import PropTypes from "prop-types";
import {
  Card as CardStyle,
  Button,
  CardActions,
  CardContent,
  ImgCard,
} from "./styled.components";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../redux/Basket/actions";

export const Card = ({ product, basket = false }) => {
  const dispatch = useDispatch();
  const {
    basketReducer: { selectedProducts },
  } = useSelector((state) => state);
  const selected = !!selectedProducts.find((el) => el.id === product.id);
  return (
    <CardStyle>
      <ImgCard img={`url(${product.img})`} />
      <CardContent>
        <p>{product.title}</p>
        <p>{product.price}$</p>
        <p>{product.discription}</p>
      </CardContent>
      {!basket && (
        <CardActions>
          <Button
            color={selected ? "lightcoral" : "lightseagreen"}
            onClick={() =>
              selected
                ? dispatch(deleteProduct(product.id))
                : dispatch(addProduct(product))
            }
          >
            {selected ? "Remove from basket" : "Add to basket"}
          </Button>
        </CardActions>
      )}
    </CardStyle>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};
