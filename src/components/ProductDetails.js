import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import "../css/details.css";

function ProductDetails() {
  const api_Url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  let params = useParams();
  useEffect(() => {
    fetch(`${api_Url}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  // console.log(params);
  return (
    <>
      <Product product={product} showBtn={false} />
    </>
  );
}

export default ProductDetails;
