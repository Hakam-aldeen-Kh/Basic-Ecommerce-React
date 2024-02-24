import React from "react";
import { Link } from "react-router-dom";
import "../css/product.css";
function Product(props) {
  // console.log(props);
  return (
    <>
      <div className="card mx-auto h-100" style={{ width: "18rem" }}>
        <img
          src={props.product.image}
          className="card-img-top mh-25 mx-auto"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title border-top border-3">
            {props.product.title}
          </h5>
          <p className="card-text overflow-hidden flex-grow-1">
            {props.product.description}
          </p>
          <p className="price mt-auto">{props.product.price}$</p>
          {props.showBtn && (
            <Link
              className="btn btn-primary"
              to={`/product/${props.product.id}`}
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
