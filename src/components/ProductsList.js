import React, { useEffect, useState } from "react";
import Product from "./Product";
import "../css/productList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";

  const getProducts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${apiUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  function handleClick(catName) {
    console.log(catName);
    fetch(`${apiUrl}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  return (
    <>
      {products.length == 0 ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-center mt-3 p-3">Our Products</h2>
          <ul className="filter">
            <li onClick={getProducts}>all</li>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => {
                  handleClick(cat);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
          <div className="container">
            <div className="row">
              {products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="col-sm-12 col-md-6 col-lg-3 mb-5 h-25"
                  >
                    <Product product={product} showBtn={true} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductsList;
