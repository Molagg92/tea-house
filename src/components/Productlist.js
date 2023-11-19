import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(){
  return (
    <React.Fragment>
      <hr/>
      {props.productList.map ((product) =>
    <Product
    blend = {product.blend}
    name = {product.name}
    weight = {product.weight}/> 
    )}
 </React.Fragment>
  );
}

ProductList.PropTypes = {
  productList: PropTypes.array
}

export default ProductList;