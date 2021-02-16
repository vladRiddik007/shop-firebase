import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Gallery() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        // querySnapshot.forEach((doc) => {
        //   console.log(doc.id, " => ", doc.data());
        // });
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return (
    <div className="container">
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
