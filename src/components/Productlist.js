import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const mainProductList = [
  {
    names: 'Thato and Haley',
    blend: '3A',
    weight: '8lbs'
  },
  {
    names: 'Sleater and Kinney',
    blend: '4B',
    weight: '8lbs'
  },
  {
    names: 'Imani & Jacob',
    blend: '9F',
    weight: '8lbs'
  }
];


function ProductList(){
  return (
    <React.Fragment>
      <hr/>
      {props.productList.map ((product, index) =>
        <Product
        blend = {product.blend}
        name = {product.name}
        weight = {product.weight}
        key={index}/> 
        )}
    </React.Fragment>
      );
}

ProductList.PropTypes = {
  productList: PropTypes.array
}

export default ProductList;