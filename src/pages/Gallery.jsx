import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/card";
import { Container, GalleryLayout } from "../components/styled.components";
import { productsGet } from "../redux/Products/actions";

export default function Gallery() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const {
    productsReducer: { productsRedux, loading, error },
  } = useSelector((state) => state);

  useEffect(() => {
    setProducts(productsRedux);
  }, [productsRedux]);

  useEffect(() => {
    dispatch(productsGet());
  }, [dispatch]);

  if (loading) {
    return <p>Loading data</p>;
  }
  if (error) {
    return <p>Something wrong...</p>;
  }
  return (
    <Container>
      <GalleryLayout>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </GalleryLayout>
    </Container>
  );
}
